import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";

import { Grid } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import Cropper from "react-easy-crop";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PhotoIcon from "@mui/icons-material/Photo";
import CloseIcon from "@mui/icons-material/Close";
import GifIcon from "@mui/icons-material/Gif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "@mui/material/Slider";
import { AnySoaRecord } from "dns";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import AdjustIcon from '@material-ui/icons/Adjust';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

interface HTMLVideoElementWithCapture extends HTMLVideoElement {
  captureStream(): MediaStream;
}





function VideoEditorx({ VideoUrl, VideoUrl2, ShowVideo2, ShowVideo, setShowVideo2, setShowVideo,
  setinteractContentvideo2,
  setinteractContentvideo,
  setinteractContenttype,
  setinteractContenttype2, callDelInteract, setadjustinteract1, setadjustinteract2,
  setvidBackUpURL,
  vidBackUpURL,
  vidBackUpURL2,
  setvidBackUpURL2, }: any): JSX.Element {

  ///

  const videoPlayerRef = useRef<HTMLVideoElementWithCapture>(null);

  const videoPlayerRefx = useRef<HTMLVideoElementWithCapture>(null);

  const canvasRef: any = useRef(null);



  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wait = 2000;

  ///
  ///DARKMODE FROM REDUX
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const [currentTimestamp, setCurrentTimestamp] = useState(0);

  const updateCurrentTimestamp = () => {
    sethideend(false);
    if (videoPlayerRef.current) {

      var x = videoPlayerRef.current.currentTime;
      setCurrentTimestamp(x);

      setprocessing(true);

      startRecording(VideoUrl, x - 1, 17);
    }
  };

  // New state for recorded video URL
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [RecordedBlob, setRecordedBlob] = useState(null);


  const [rec, setRec] = useState(false);

  const [processing, setprocessing] = useState(false);

  const recorderRef: any = useRef(null);

  const [hideend, sethideend] = useState(false);

  const [Preview, setPreview] = useState(false);


  const stopRecording = () => {
    if (recorderRef.current && recorderRef.current.state === "recording") {
      recorderRef.current.stop();
      if (videoPlayerRef.current) {
        videoPlayerRef.current.pause();
      }

      if (Timer2.current) {
        clearTimeout(Timer2.current);
      }

      if (Timer1.current) {
        clearTimeout(Timer1.current);
      }
      if (Timer3.current) {
        clearTimeout(Timer3.current);
      }
      sethideend(true);
      Timer3.current = setTimeout(() => {
        setprocessing(false);
      }, wait);
    }
  };


  const startRecording = (sourceVideoUrl: any, startTime: any, duration: any) => {

    const video = videoPlayerRef.current;

    if (video) {
      video.src = sourceVideoUrl;
      video.currentTime = startTime;

      video.onloadedmetadata = () => {
        video.currentTime = startTime;
      };

      video.onseeked = () => {
        video.play();
        const stream = video.captureStream();

        // Specify MIME type and quality parameters
        const options = {
          mimeType: 'video/webm; codecs=vp9', // or 'video/mp4' based on browser support
          videoBitsPerSecond: 500000 // Adjust bitrate as needed
        };

        if (MediaRecorder.isTypeSupported(options.mimeType)) {
          recorderRef.current = new MediaRecorder(stream, options);
        } else {
          recorderRef.current = new MediaRecorder(stream); // Fallback to default settings
        }

        const chunks: any = [];
        recorderRef.current.ondataavailable = (e: any) => chunks.push(e.data);
        recorderRef.current.onstop = () => {
          const blob: any = new Blob(chunks, { type: options.mimeType });
          setRecordedBlob(blob);
          const url: any = URL.createObjectURL(blob);
          setRecordedVideoUrl(url);
          video.pause();

          if (Timer1.current) {
            clearTimeout(Timer1.current);
          }
          if (Timer2.current) {
            clearTimeout(Timer2.current);
          }

          Timer1.current = setTimeout(() => {
            setRec(true);
            setprocessing(false);
          }, wait);
        };

        recorderRef.current.start();
        if (Timer2.current) {
          clearTimeout(Timer2.current);
        }

        if (Timer1.current) {
          clearTimeout(Timer1.current);
        }
        Timer2.current = setTimeout(() => {
          recorderRef.current && recorderRef.current.stop();
        }, duration * 1000);
      };

      video.load();
    }
  };  // Call this function when you want to start recording
  // For example: startRecording(VideoUrl, 0, 10) for a 10-second clip from the start


  const close = (save: boolean) => {

    const video = videoPlayerRef.current;
    if (video) { video.pause(); }


    if (save) { } else {
      if (ShowVideo2) { callDelInteract(false); } else { callDelInteract(true); }
    }

    setShowVideo(false);
    setPreview(false);
    setRec(false);
    setShowVideo2(false);

  }

  const Save = useCallback(() => {
    if (ShowVideo2) {

      setinteractContentvideo2(RecordedBlob);
      setinteractContenttype2(1);
      setadjustinteract2(true);
      close(true);

    } else {

      setinteractContentvideo(RecordedBlob);
      setinteractContenttype(1);
      setadjustinteract1(true);
      close(true);

    }
  }, [RecordedBlob, ShowVideo2])




  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );



  const videoRef = useRef(null);







  useEffect(() => {
    if (recordedVideoUrl && ShowVideo) {
      const video: any = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const captureImage = () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob: any) => { // Convert canvas to Blob
          const blobx = blob; // Create an object URL for the Blob
          if (ShowVideo2) {
            setvidBackUpURL2(blobx); // Set the state
          } else {
            setvidBackUpURL(blobx); // Set the state
          }
        }, 'image/png');





      };

      video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      });

      video.addEventListener('seeked', captureImage);

      video.src = recordedVideoUrl;
      video.load();
      video.currentTime = currentTimestamp + 2; // Change this to seek to a different time

      return () => {
        video.removeEventListener('seeked', captureImage);
      };
    }
  }, [recordedVideoUrl, currentTimestamp, ShowVideo2, ShowVideo]);




  ////**     < VideoFFmpeg VideoUrl={RecordedBlob} />*////
  return (
    <>

      <div>
        <video ref={videoRef} style={{ display: 'none' }} />
        <canvas ref={canvasRef} style={{ position: 'fixed', top: '-400000000vh', zIndex: 0, }} />
        {vidBackUpURL && <img src={vidBackUpURL} style={{ width: '30%', height: 'auto', position: 'fixed', top: '0vh', zIndex: 0, display: 'none' }} alt="Captured frame" />} {/* Display the captured image */}
      </div>
      <Grid xs={12} style={{
        display: ShowVideo ? 'block' : 'none', position: 'fixed', top: '0vh', height: '100vh',
        backgroundImage: darkmodeReducer ? PaperStyleDark : PaperStyleLight,
        width: '100%', margin: 'auto', textAlign: 'center'
      }} >



        <video ref={videoPlayerRef} src={VideoUrl} controls style={{
          width: '50%', margin: 'auto', textAlign: 'center', display: Preview ? 'none' : 'block'

        }}></video>

        {recordedVideoUrl && rec ? <video ref={videoPlayerRefx} src={recordedVideoUrl} controls style={{
          width: '50%', margin: 'auto', textAlign: 'center', display: Preview ? 'block' : 'none'

        }}></video> : null}






        {Preview ? <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={1}
            onClick={() => {
              ////setRec(false);
              /////setRecordedVideoUrl(null);
              if (videoPlayerRefx.current) {
                videoPlayerRefx.current.pause();
              }
              setPreview(false);
            }}
            style={{
              border: darkmodeReducer ? '2px solid white' : '2px solid black',
              cursor: 'pointer',
              height: '15vh', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            EDIT
          </Grid>


          <Grid item onClick={() => {
            if (videoPlayerRefx.current) {
              videoPlayerRefx.current.pause();
            }
            Save();
          }} xs={3} style={{
            cursor: 'pointer',
            height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
          }}>
            SAVE
          </Grid>
        </Grid> : <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif',
          color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={2}

            onClick={() => {
              if (processing) { } else {
                updateCurrentTimestamp();
              }

            }}
            style={{
              cursor: processing ? 'default' : 'pointer',
              opacity: processing ? 0.25 : 1,
              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black',

              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            START
          </Grid>


          {processing ? <Grid className="blinking" item xs={2} style={{
            height: '15vh', border: '0px solid white', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', visibility: 'visible'
          }}>

            <AdjustIcon
              className={
                darkmodeReducer
                  ? "dontallowhighlighting zuperkingIcon "
                  : "dontallowhighlighting zuperkingIcon  "
              }
              style={{
                margin: "auto",
                fontSize: matchMobile
                  ? `3vh`
                  : `2.5vw`,
                color: 'red'

              }}
            />
          </Grid> :
            <Grid item xs={2}
              onClick={() => {
                if (videoPlayerRef.current) {
                  videoPlayerRef.current.pause();
                }
                setPreview(true);
              }} style={{
                cursor: 'pointer',
                height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                visibility: recordedVideoUrl && rec ? 'visible' : 'hidden'
              }}>
              PREVIEW
            </Grid>}
          <Grid item onClick={() => {
            if (hideend) { } else { stopRecording(); }
          }} xs={2} style={{
            cursor: processing ? hideend ? 'default' : 'pointer' : 'default',
            opacity: processing ? hideend ? 0.25 : 1 : 0.25,
            height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
          }}>
            END
          </Grid>
        </Grid>}
      </Grid >










      <Grid
        item
        xs={12}
        style={{
          margin: "auto",
          textAlign: "right",
          left: '5px',
          height: "20px",
          position: 'fixed',
          top: '3vh',
          right: '3vw',
          display: ShowVideo ? 'block' : 'none',
        }}
      >
        <CloseIcon
          onClick={() => {
            if (videoPlayerRefx.current) {
              videoPlayerRefx.current.pause();
            }
            close(false);
          }}
          className={
            darkmodeReducer
              ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
              : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
          }
          style={{
            margin: "auto",
            color: "#ffffff",
            fontSize: matchMobile
              ? `3vh`
              : `2.5vw`,

          }}
        />
      </Grid>






    </>
  );
}

export const VideoEditor = React.memo(VideoEditorx)