import React, { useRef, useState, useCallback, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { UpdateA } from "../GlobalActions";

import AdjustIcon from '@material-ui/icons/Adjust';


function AudioEditorx({
  AudioUrl,
  setAudioUrl,
  setAudioname,
  setShowAudio,
  ShowAudio,
  setinteractContentAudio,
  setinteractContentAudiotype,
  setaudioEnd,
  setaudioStart,
}: any): JSX.Element {
  // Reference to the audio element


  interface HTMLaudioElementWithCapture extends HTMLAudioElement {
    captureStream(): MediaStream;
  }

  const audioPlayerRef = useRef<HTMLaudioElementWithCapture>(null);


  const dispatch = useDispatch();

  // States
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  // Redux state for dark mode
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const recordingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startRecording = () => {
    const audio = audioPlayerRef.current;
    if (audio) {
      const stream = audio.captureStream();
      const options = { mimeType: "audio/webm" };

      audio.play();

      recorderRef.current = new MediaRecorder(stream, options);

      const chunks: any = [];
      recorderRef.current.ondataavailable = (e) => chunks.push(e.data);
      recorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: options.mimeType });
        const url: any = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
        setProcessing(false);
      };

      recorderRef.current.start();
      setRecording(true);

      // Set a timer to stop recording after 15 seconds
      recordingTimerRef.current = setTimeout(() => {
        stopRecording();
      }, 17000); // 15 seconds
    }
  };



  const stopRecording = () => {
    // Clear the timer if it's set
    if (recordingTimerRef.current) {
      clearTimeout(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }

    if (audioPlayerRef.current) setaudioEnd(audioPlayerRef.current.currentTime);

    if (recorderRef.current && recorderRef.current.state === "recording") {
      recorderRef.current.stop();
      setRecording(false);
      const audio = audioPlayerRef.current;
      if (audio) { audio.pause() };
    }
  };

  const [p, setp] = useState(false);

  const saveRecording = useCallback(async () => {
    if (recordedAudioUrl) {
      const response = await fetch(recordedAudioUrl);
      ///const responsex = await fetch(AudioUrl);
      const blob = await response.blob();
      ////const blob = await responsex.blob();
      setinteractContentAudio(blob);
      setinteractContentAudiotype(1);


      dispatch(UpdateA(blob, 1));
      /// setShowAudio(false);
      ///setp(true);
    }
  }, [
    AudioUrl,
    recordedAudioUrl,
    setinteractContentAudio,
    setinteractContentAudiotype,
    setShowAudio,
  ]);

  const closeEditor = () => {
    setShowAudio(false);
  };

  function readFileAsDataUrl(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      // Read the file and get the Data URL directly
      reader.readAsDataURL(file);
    });
  }


  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      imageThumb: string;
      id: number;
      username: string;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }
  const { username, image, imageThumb, id, memeberPageid, MemberProfileData } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));

  const [imageReducer, setimageReducer] = useState("");

  const [imageReducerThumb, setimageReducerThumb] = useState("");




  return (
    <>
      <Grid
        xs={12}
        style={{
          display: "block",
          position: "fixed",
          top: "0vh",
          height: "100vh",
          backgroundImage: darkmodeReducer ? PaperStyleDark : PaperStyleLight,
          width: "100%",
          margin: "auto",
          textAlign: "center",
          zIndex: '2000'
        }}
      >

        <img
          src={`${REACT_APP_CLOUNDFRONT}${imageThumb}`}

          style={{
            width: "20%",
            height: "auto",
            position: 'absolute',
            zIndex: 1
          }}
        />

        <img
          src={`${REACT_APP_CLOUNDFRONT}${image}`}
          style={{
            width: "20%",
            height: "auto",
            position: 'relative',
            zIndex: 2
          }}
        />
        {

          p ? recordedAudioUrl ?
            <audio
              ref={audioPlayerRef}
              src={recordedAudioUrl}
              controls
              style={{ width: "50%", margin: "auto", textAlign: "center" }}
            ></audio> : null :

            AudioUrl ?
              <audio
                ref={audioPlayerRef}
                src={AudioUrl}
                controls
                style={{ width: "50%", margin: "auto", textAlign: "center" }}
              ></audio> : null}




        {p ? <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={1}
            onClick={() => {
              setp(false)
            }}
            style={{
              border: darkmodeReducer ? '2px solid white' : '2px solid black',
              cursor: 'pointer',
              height: '15vh', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            EDIT
          </Grid>


          <Grid item onClick={() => {
            saveRecording();

            const audio = audioPlayerRef.current;
            if (audio) {
              audio.pause();
            }

            setShowAudio(false)

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

            onClick={
              () => {

                if (audioPlayerRef.current) { setaudioStart(audioPlayerRef.current.currentTime); }
                startRecording();

              }}
            style={{
              cursor: recording ? 'default' : 'pointer',
              opacity: recording ? 0.25 : 1,
              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black',

              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            START
          </Grid>


          {recording ? <Grid className="blinking" item xs={2} style={{
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
                /// onClick={saveRecording}
                setp(true)
              }} style={{
                cursor: 'pointer',
                height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                visibility: recordedAudioUrl ? 'visible' : 'hidden'
              }}>
              PREVIEW
            </Grid>}
          <Grid item
            onClick={
              () => {
                if (audioPlayerRef.current) { setaudioEnd(audioPlayerRef.current.currentTime); }
                stopRecording();
              }}

            xs={2} style={{
              cursor: recording ? 'pointer' : 'default',
              opacity: recording ? 1 : 0.25,

              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
            }}>
            END
          </Grid>
        </Grid>}

        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: darkmodeReducer ? "#ffffff" : '#000000',
          }}
        >



        </Grid>

        <Grid
          item
          xs={12}
          style={{
            margin: "auto",
            textAlign: "right",
            left: "5px",
            height: "20px",
            position: "fixed",
            top: "3vh",
            right: "3vw",
            display: "block",
          }}
        >
          <DeleteOutlineIcon
            onClick={() => {

              const audio = audioPlayerRef.current;
              if (audio) {
                audio.pause();
              }

              setShowAudio(false)
              setAudioUrl(null);
              setAudioname('');

              setinteractContentAudio(null);
              setinteractContentAudiotype(0);

              dispatch(UpdateA(null, 0));
              ///closeEditor
            }}
            className={
              darkmode
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{ margin: "auto", color: darkmodeReducer ? "#ffffff" : '#000000', fontSize: "2.5vw" }}
          />
        </Grid>
      </Grid>


    </>
  );
}

export const AudioEditor = React.memo(AudioEditorx);
