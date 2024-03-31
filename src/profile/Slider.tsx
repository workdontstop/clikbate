import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Arrow } from "./Arrow";
import { Dots } from "./Dots";
import { SliderNumber } from "./SliderNumber";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

import { UpdateInteract, MuteAction, MuteIndexAudio } from ".././GlobalActions";
import { Tutorial } from "../Tutorial";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useInView } from "react-intersection-observer";

function Sliderx({
  slides,
  slidesThumb,
  pey,
  addPostItemsRef,
  itemheight,
  onPostsItemClicked,
  onPostsItemload,
  post,
  itemFinalPostHeight,
  itemOriginalPostHeight,
  itemcroptype,
  itemCLICKED,
  setActiveAutoPlay,
  AUTOSlideLongImages,
  clickslider,
  stopSlider,
  SliderAutoPlay,
  showSliderLoader,
  setshowSliderLoader,
  autoPlayTimer,
  sliderIndex,
  setSliderIndex,
  sliderIndexSlow,
  setSliderIndexSlow,
  length,
  startSlider,
  ActiveAutoPlay,
  type,
  setminiProfile,
  miniProfile,
  setzoomClickedIndex,
  setsliderIndexMini,
  postDatainnerInteraction1,
  postDatainnerInteraction2,
  postItemsRef,
  ActiveCanvas,
  setActiveCanvas,
  checkifClicked,
  postDivRef,
  paperPostScrollRef,
  AllowAllHdImagesShow,
  audioPlayerRef,
  ActiveAutoPost,
  setActiveAutoPost,
  InitializingAutoPlayIndex,
  setshowSliderLoaderxx,
  currentClicked,
  setmuteaudioState,
  setinteractContent,
  interactContent,
  dateint,
  setShowPad,
  setStopShowPad,
  setShowAudioIcon,
  setShowEmoIcon,
  setlatestInview,



}: any): JSX.Element {
  const [sliderDuration] = useState(1500);

  const aRef: any = useRef(null);

  const dispatch = useDispatch();

  var allow4dev = "";


  const [showSpinx, setshowSpinx] = useState(false);




  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      muteaudio: boolean,
      ActiveAudioIndex: number
    };
  }



  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, snapStart, muteaudio, ActiveAudioIndex } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;

  const muteaudioReducer = muteaudio;

  const ActiveAudioIndexReducer = ActiveAudioIndex;

  const videoPlayerReff = useRef<HTMLVideoElementWithCapture>(null);






  const [interacttypeAll, setinteracttypeAll] = useState(0);

  const [interact, setinteract] = useState(false);


  const [showSpin, setshowSpin] = useState(false);

  const [Interactionloaded, setInteractionloaded] = useState(false);

  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT } = process.env;





  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: matchMobile ? 0.95 : 0.55,


  });

  const [AutoPostLoader, setAutoPostLoader] = useState(false);

  const showcaptionwaitTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );


  const sTimercc = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sTimerccxx = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sTimerccxxhh = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SlideimageRef = useRef<HTMLImageElement>(null);

  const SlideimageRefthumb = useRef<HTMLImageElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const [ZoomOutBigger, setZoomOutBigger] = useState<boolean>(false);

  const [miniH, setminiH] = useState<number>(50);

  const [InteractedDark, setInteractedDark] = useState(false);

  const [HaltAudio, setHaltAudio] = useState(false);

  const [isPaused, setIsPaused] = useState(false);




  //////REDUCE AUDIO VOLUME
  useEffect(() => {
    if (HaltAudio) {

      setTimeout(() => {
        if (audioPlayerRef.current) {
          // Set volume to desired level (between 0 and 1)
          audioPlayerRef.current.pause();// Example: setting volume to 50%
          setIsPaused(true);
        }
      }, 20)

    } else {

      setTimeout(() => {
        if (audioPlayerRef.current && audioPlayerRef.current.paused) {
          // Set volume to desired level (between 0 and 1)
          audioPlayerRef.current.play(); // Example: setting volume to 50%
          setIsPaused(false);
        }
      }, 20)
    }
  }, [HaltAudio, isPaused])



  //////REDUCE AUDIO VOLUME
  ///audioPlayerRef


  useEffect(() => {
    if (itemCLICKED[pey]) {

      if (currentClicked === pey) {


      } else {


        onPostsItemClicked(pey, 1);

      }
    }

  }, [currentClicked, itemCLICKED])


  const startinview = useCallback(() => {




    if (inView) {

      setlatestInview(pey);

      setShowPad(true);


      setShowAudioIcon(true);
      setShowEmoIcon(true);
      if (sTimerccxxhh.current) {
        clearTimeout(sTimerccxxhh.current);
      }
      sTimerccxxhh.current = setTimeout(() => {
        setShowAudioIcon(false);
        setShowEmoIcon(false);
      }, 5000)


      if (interactContent && interact && ActiveCanvas === pey) {

      } else {


        if (sTimerccxx.current) {
          clearTimeout(sTimerccxx.current);
        }

        if (sTimercc.current) {
          clearTimeout(sTimercc.current);
        }
        ///calls active post key without clicking on post
        setActiveCanvas(pey);
        InitializingAutoPlayIndex(pey);
        ///calls active post key without clicking on post


        startInteraction();

      }




    } else {

      if (sTimerccxx.current) {
        clearTimeout(sTimerccxx.current);
      }

      sTimerccxx.current = setTimeout(() => {

        setShowAudioIcon(true);
        setShowPad(false);

        dispatch(MuteIndexAudio(1000));

        setActiveCanvas(-1);
        stopInteraction();


      }, 40)




    }
  }, [inView, ActiveAutoPost, ActiveCanvas, pey, itemCLICKED, showSpin, matchMobile, matchPc, itemcroptype, interactContent, interact]);







  useEffect(() => {



    if (sTimerccxx.current) {
      clearTimeout(sTimerccxx.current);
    }

    if (showcaptionwaitTimer.current) {
      clearTimeout(showcaptionwaitTimer.current);
    }
    showcaptionwaitTimer.current = setTimeout(function () {


      startinview();

    }, 2000)
  }, [inView]);
  /// const getWidth = () => window.innerWidth;
  ///var newGetWidth = getWidth() * slides.length;

  const InteractTimerxx = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const waitChangeIndexTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleTouchMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const tt = useRef<ReturnType<typeof setInterval> | null>(
    null
  );


  const callAutoPlayAgainTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  interface HTMLVideoElementWithCapture extends HTMLVideoElement {
    captureStream(): MediaStream;
  }










  ///
  ///
  ///
  ///
  interface RootStateActiveAutoPlayReducer {
    ActiveAutoPlayReducer: {
      ActiveId: number;
    };
  }
  const { ActiveId } = useSelector((state: RootStateActiveAutoPlayReducer) => ({
    ...state.ActiveAutoPlayReducer,
  }));

  const ActiveIdReducer = ActiveId;

  ///


  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE





  ///
  ///
  /// GET COLOR FROM REDUX STORE
  interface RootStateReducerColor {
    GlobalReducerColor: {
      color: string;
      colordark: string;
      colortype: number;
    };
  }
  const { color, colordark, colortype } = useSelector(
    (state: RootStateReducerColor) => ({
      ...state.GlobalReducerColor,
    })
  );
  const colorReducer = color;
  const colorReducerdark = colordark;
  const colortypeReducer = colortype;

  var colorx =
    colortypeReducer === 0
      ? darkmodeReducer
        ? colorReducerdark
        : colorReducer
      : colorReducer;

  useEffect(() => {
    if (ActiveAutoPlay[pey]) {
      setTimeout(function () {
        stopSlider(0);
      }, 1500);
    }
  }, [ActiveAutoPlay[pey]]);

  var autoSlideDisplay = "none";
  var sliderLoader = "";

  if (showSliderLoader) {
    autoSlideDisplay = "none";
    sliderLoader = "";
  } else {
    autoSlideDisplay = "block";
    sliderLoader = "superloaderAutoSlider";
  }






  const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);










  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX
  const transitions = useTransition(sliderIndex, {
    key: sliderIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: sliderDuration - 50 },
  });

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM IMAGE
  const sliderFirstImageOnLoad = (item: number) => {
    if (item === 0) {
      if (SlideimageRef.current && SlideimageRef.current.clientHeight) {
        setImageHeight(SlideimageRef.current.clientHeight);
      }
    }
  };

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM THUMBS IF IMAGE DOES NOT LOAD
  const sliderFirstImageOnLoadthumb = (item: number) => {
    if (item === 0 && imageHeight === 0) {
      if (
        SlideimageRefthumb.current &&
        SlideimageRefthumb.current.clientHeight
      ) {
        setImageHeight(SlideimageRefthumb.current.clientHeight);
      }
    }
  };

  const tiim = useRef<ReturnType<typeof setTimeout> | null>(null);
  const TouchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const TouchTimer22 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [Touched, setTouched] = useState(0);

  const [cropInitialIn, setcropInitialIn] = useState([
    { x: post.interact1ax, y: post.interact1ay },
    { x: post.interact2ax, y: post.interact2ay },
    { x: post.interact3ax, y: post.interact3ay },
  ]);


  const [cropInitialIn2, setcropInitialIn2] = useState([
    { x: post.interact1bx, y: post.interact1by },
    { x: post.interact2bx, y: post.interact2by },
    { x: post.interact3bx, y: post.interact3by },
  ]);

  const [showIntImage, setshowIntImage] = useState(false);

  const [HasInteractivity, setHasInteractivity] = useState(false);


  const [isLoaded, setIsLoaded] = useState(false);

  const [audioplaying, setaudioplaying] = useState(false);







  /////////////////////////////////////////////////////////////////////////////////////////////////







  ///////////////////////////////////////////////////////////

  const [startInteractivity, setstartInteractivity] = useState(true);

  const containsURL = (str: any) => {
    // Regular expression pattern to match URLs (simplified, not covering all cases)
    const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;

    // Test if the string contains a URL using the regular expression
    return urlPattern.test(str);
  };


  useEffect(() => {


    if (post.interact1a) {
      setHasInteractivity(true);
      ///alert(post.interact1a);
    } else {
      //setHasInteractivity(false);
    }


    if (post.interact2a) {
      setHasInteractivity(true);
    } else {
      //setHasInteractivity(false);
    }


  }, [postDatainnerInteraction1, postDatainnerInteraction2, post]);


  const [data, setdata] = useState(null);
  const [canvasInteractWidth, setcanvasInteractWidth] = useState(0);
  const [canvasInteractheight, setcanvasInteractheight] = useState(0);
  const [imageWidthcss, setimageWidthcss] = useState(0);
  const [imageHeightcss, setimageHeightcss] = useState(0);

  const handleTouchStartIn = useCallback(
    (event: any, type: any) => {

      if (itemCLICKED[pey]) {
        if (data) {
          drawInteraction(0, event, 1);
        }
      } else {

        clickslider(event);
      }

    },
    [data, itemCLICKED[pey]]
  );

  const pic: any = useRef(null);
  const picanonymous: any = useRef(null);
  const canvasRefIn: any = useRef(null);
  const DummyCanvas4ToDataURL: any = useRef(null);

  const ScaleCoOrdinates = useCallback(
    (event, type) => {
      if (canvasRefIn.current) {
        const rect = canvasRefIn.current.getBoundingClientRect();
        const scaleX = canvasRefIn.current.width / rect.width;
        const scaleY = canvasRefIn.current.height / rect.height;

        let x, y;

        if (matchMobile) {
          // Handle touch events
          if (event && event.touches && event.touches.length > 0) {


            x = (event.touches[0].clientX - rect.left) * scaleX;
            y = (event.touches[0].clientY - rect.top) * scaleY;

            // Now you can use x and y in your code
          }
        } else {
          // Handle mouse events
          x = (event.clientX - rect.left) * scaleX;
          y = (event.clientY - rect.top) * scaleY;
        }

        return { x, y };
      } else {
        return {
          x: 0,
          y: 0,
        };
      }
    },
    [matchMobile]
  );



  const [interactHeightResolution, setinteractHeightResolution] = useState(window.innerHeight * 1.2);

  useEffect(() => {
    setinteractHeightResolution(window.innerHeight * 1.6);
  }, [matchPc])


  useEffect(() => {

    if (matchMobile) {
      setinteractHeightResolution(window.innerHeight * 2);
    }

  }, [matchMobile])


  const callInteract = useCallback(() => {

    if (!canvasRefIn.current) return;

    const context = canvasRefIn.current.getContext("2d");
    context.clearRect(
      0,
      0,
      canvasRefIn.current.width,
      canvasRefIn.current.height
    );

    const previewFileReadimage: any = new Image();
    previewFileReadimage.crossOrigin = "anonymous";

    previewFileReadimage.src = pic.current.src;


    previewFileReadimage.onload = () => {
      setshowSpinx(false);
      const ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;
      const width = interactHeightResolution / ratio;
      const ratiox =
        previewFileReadimage.naturalWidth / previewFileReadimage.naturalHeight;
      const hei = window.innerHeight / ratiox;
      setcanvasInteractWidth(width);
      setcanvasInteractheight(hei);

      if (pic.current) {
        const newHeight = (previewFileReadimage.naturalHeight * pic.current.clientWidth) / previewFileReadimage.naturalWidth;


        setimageWidthcss(pic.current.clientWidth);
        setimageHeightcss(newHeight);
      }
      if (data !== previewFileReadimage) {
        setdata(previewFileReadimage);


      }
    };
  }, [slides, sliderIndex, postItemsRef, postDivRef, pic, interactHeightResolution]);

  const acttii = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [InteractClicked, setInteractClicked] = useState(false);

  const [AllowCallCanvas, setAllowCallCanvas] = useState(false);




  useLayoutEffect(() => {
    if (data) {
      drawInteraction(0, 0, 0);
    }
  }, [data]);

  const [Tutorialx, setTutorialx] = useState(false);


  const stopInteraction = () => {




    if (tiim.current) {
      clearTimeout(tiim.current);
    }


    setHaltAudio(true);

    const newArrlll = [...ActiveAutoPost];
    newArrlll[pey] = 0;
    setActiveAutoPost(newArrlll);

    setAutoPostLoader(false);

    setAllowCallCanvas(false);
    setshowSpinx(false);
    setinteract(false);
    setinteractContent("");
    setStopShowPad(false);
    setinteracttypeAll(0);
    setfadeout(false);

  }

  const startInteraction = useCallback(() => {



    if (sTimercc.current) {
      clearTimeout(sTimercc.current);
    }

    stopInteraction();

    setHaltAudio(false);

    const newArrlll = [...ActiveAutoPost];
    newArrlll[pey] = pey + 1;
    setActiveAutoPost(newArrlll);

    setAutoPostLoader(true);


    ////alert('kk');
    if (HasInteractivity) {
      setshowSliderLoaderxx(true);
      setshowSliderLoader(false);


      if (showIntImage) {
      } else {
        ////load interact image
        setshowIntImage(true);
      }
      setshowSpinx(true);
      setTimeout(() => {
        setInteractClicked(true);

        if (AllowAllHdImagesShow) {
          setAllowCallCanvas(true);
        }
      }, 500);
    }
    ////check for interaction and display canvas image flip
  }, [itemCLICKED[pey], HasInteractivity, showIntImage, postDivRef, AllowAllHdImagesShow])


  const ClickAudio = useCallback(() => {



    dispatch(MuteIndexAudio(pey));




    if (audioPlayerRef.current) {
      if (audioPlayerRef.current.volume > 0 || audioPlayerRef.current.volume < 1) {
        audioPlayerRef.current.volume = 1;
      } else {
        if (audioPlayerRef.current.volume === 0) {
          audioPlayerRef.current.volume = 1;

        } else {
          audioPlayerRef.current.volume = 0;
        }
      }
    }






  }, [audioPlayerRef])





  useLayoutEffect(() => {
    if (sTimercc.current) {
      clearTimeout(sTimercc.current);
    }

    if (itemCLICKED[pey]) {





      startInteraction();

      setmuteaudioState(true);

      setTimeout(() => {
        setmuteaudioState(false);
      }, 6200);

    } else {


      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      setmuteaudioState(false);

      setInteractionloaded(false);


      if (sTimercc.current) {
        clearTimeout(sTimercc.current);
      }

      stopInteraction();
      ///setTutorial(false);
    }
  }, [itemCLICKED[pey], HasInteractivity, showIntImage, postDivRef, AllowAllHdImagesShow]);




  const [bigPixel1, setbigPixel1] = useState(false);

  const [bigPixel2, setbigPixel2] = useState(false);








  useEffect(() => {
    if (AllowCallCanvas) {
      callInteract();
    }

  }, [AllowCallCanvas]);






  const tti = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacttime = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interacttimex = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interacttime2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bh = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fadeout, setfadeout] = useState(false);

  const [pause, setpause] = useState(false);


  // State to store the video duration
  const [ImageDuration, setImageDuration] = useState(10000);





  useEffect(() => {

    ///setImageDuration(10000);
    if (ActiveCanvas === pey) {

    } else { setshowSpinx(false) }


  }, [ActiveCanvas])



  const closeItemClick = useCallback(() => {

    /////alert('kkhhh');



  }, [itemCLICKED[pey], matchMobile])


  const IntClose = useCallback(() => {


    if (interacttime.current) {
      clearTimeout(interacttime.current);
    }


    if (interact) {

      setpause(false);

      ///setHideCann(true);

      var d = ImageDuration;


      //video duration
      if (interacttypeAll === 1) {

        d = 18000;
      } else { }
      //video duration


      if (interacttime.current) {
        clearTimeout(interacttime.current);
      }
      if (interacttime2.current) {
        clearTimeout(interacttime2.current);
      }


      interacttime.current = setTimeout(() => {
        setfadeout(true);
        /// closeItemClick();


        if (interacttime2.current) {
          clearTimeout(interacttime2.current);
        }
        //alert('kk');



        interacttime2.current = setTimeout(() => {

          if (interacttypeAll === 1) {


            if (post.backgroudaudio === 1) {
              setHaltAudio(false);
            }
          }

          ///alert('jj');
          ///  dispatch(UpdateInteract('', false));
          setshowSpin(false);

          setHideCann(false);
          setshowSpinx(false);
          if (sc.current) {
            clearTimeout(sc.current);
          }
          setinteract(false);
          setinteractContent("");
          setStopShowPad(false);
          setinteracttypeAll(0);
          setfadeout(false);


        }, 1800);
      }, d);
    } else {

      setTimeout(() => {
        setHideCann(false);
        setInteractionloaded(false);
        setshowSpin(false);
        setshowSpinx(false);
      }, 2000);

    }
  }, [interact, videoPlayerReff, ImageDuration, interacttypeAll]);

  useEffect(() => {

    if (interact) {



      //alert(d);

      IntClose();

    }



  }, [interact, interacttypeAll]);

  const [HideCann, setHideCann] = useState(false);

  const sc = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spin = useCallback((d: any) => {
    setshowSpin(true);

    setInteractionloaded(true);

    if (sc.current) {
      clearTimeout(sc.current);
    }
    sc.current = setTimeout(() => {
      setInteractionloaded(false);
      setshowSpin(false);
      setshowSpinx(false);
      setHideCann(false);
    }, d);
  }, [interact, videoPlayerReff, ImageDuration]);


  // Bilinear interpolation function
  function interpolate(imageData: any, x: any, y: any) {
    var x_floor = Math.floor(x);
    var y_floor = Math.floor(y);

    // Ensure bounds are within the source image
    x_floor = Math.max(0, Math.min(imageData.width - 2, x_floor));
    y_floor = Math.max(0, Math.min(imageData.height - 2, y_floor));

    var x_frac = x - x_floor;
    var y_frac = y - y_floor;

    var p1 = getPixel(imageData, x_floor, y_floor);
    var p2 = getPixel(imageData, x_floor + 1, y_floor);
    var p3 = getPixel(imageData, x_floor, y_floor + 1);
    var p4 = getPixel(imageData, x_floor + 1, y_floor + 1);

    var topInterpolation = interpolatePixelValues(p1, p2, x_frac);
    var bottomInterpolation = interpolatePixelValues(p3, p4, x_frac);

    return interpolatePixelValues(topInterpolation, bottomInterpolation, y_frac);
  }



  // Helper function to get a pixel from image data
  function getPixel(imageData: any, x: any, y: any) {
    var index = (y * imageData.width + x) * 4;
    return [
      imageData.data[index],
      imageData.data[index + 1],
      imageData.data[index + 2],
      imageData.data[index + 3]
    ];
  }

  // Helper function to interpolate between pixel values
  function interpolatePixelValues(p1: any, p2: any, t: any) {
    return [
      (1 - t) * p1[0] + t * p2[0],
      (1 - t) * p1[1] + t * p2[1],
      (1 - t) * p1[2] + t * p2[2],
      (1 - t) * p1[3] + t * p2[3]
    ];
  }


  const [calledInteraction, setcalledInteraction] = useState(false);






  const CallInteractStart2 = useCallback(() => {




    if (itemCLICKED[pey]) {

      dispatch(MuteIndexAudio(pey));
      if (audioPlayerRef.current) { audioPlayerRef.current.volume = 1; }


      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      if (post.backgroudaudio === 1 && post.interacttype2 === 1) {
        setHaltAudio(true);
      } else {

        if (post.interacttype2 === 1 && isAppleDevice) {
          setHaltAudio(true);
          setTimeout(() => {
            setHaltAudio(false);
          }, 1800)
        }
      }



      /// alert(`xx: ${xx}, xnew: ${xnew}`);

      /// dispatch(UpdateInteract(post.interact1b, true));
      ///stop interaction first 
      setInteractedDark(false);
      setinteract(false);
      setinteractContent("");

      setinteracttypeAll(0);
      setfadeout(false);
      ///stop interaction first 
      spin(10000000000000);
      setinteract(true);

      if (post.interacttype2 === 1 && isAppleDevice) {

        setinteractContent(post.interact1b);
        setStopShowPad(true);
      } else {
        setinteractContent(post.interact1b);
        setStopShowPad(true);
      }

      setinteracttypeAll(post.interacttype2);



    }
  }, [itemCLICKED[pey], post, isAppleDevice])




  const CallInteractStart1 = useCallback(() => {



    if (itemCLICKED[pey]) {

      dispatch(MuteIndexAudio(pey));
      if (audioPlayerRef.current) { audioPlayerRef.current.volume = 1; }
      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      if (post.backgroudaudio === 1 && post.interacttype1 === 1) {
        setHaltAudio(true);
      } else {

        if (post.interacttype1 === 1 && isAppleDevice) {
          setHaltAudio(true);
          setTimeout(() => {
            setHaltAudio(false);
          }, 1800)
        }
      }



      /// alert(`xx: ${xx}, xnew: ${xnew}`);

      ///stop interaction first 
      setInteractedDark(false);
      setinteract(false);
      setinteractContent("");
      setinteracttypeAll(0);
      setfadeout(false);
      ///stop interaction first 
      spin(10000000000000);
      setinteract(true);

      if (post.interacttype1 === 1 && isAppleDevice) {

        setinteractContent(post.interact1a);
        setStopShowPad(true);
      } else {
        setinteractContent(post.interact1a);
        setStopShowPad(true);
      }
      setinteracttypeAll(post.interacttype1);
    }

  }, [post, isAppleDevice, itemCLICKED[pey]])


  const drawInteraction = useCallback(
    (typex: any, event: any, clicked: number) => {
      const adjustedPos = ScaleCoOrdinates(event, 0);
      const xnew = adjustedPos.x;
      const ynew = adjustedPos.y;

      if (canvasRefIn.current) {
        const context = canvasRefIn.current.getContext("2d");

        canvasRefIn.current.height = interactHeightResolution;
        canvasRefIn.current.width = canvasInteractWidth;

        requestAnimationFrame(() => {
          context.drawImage(
            data,
            0,
            0,
            canvasInteractWidth,
            interactHeightResolution
          );




          var offsety = 0;

          const isEdge = /Edg/i.test(navigator.userAgent);
          const isFirefox = /Firefox/i.test(navigator.userAgent);

          if (isEdge) {
            offsety = -20;
          } else if (isFirefox) {
            offsety = -10;
          } else {
            offsety = 0;
          }

          // Access the total width of the element, including margins and borders

          var screenWidth = 0;

          if (isEdge) {
            screenWidth = window.innerWidth * 1.01;
          } else if (isFirefox) {
            screenWidth = window.innerWidth * 0.98;
          } else {
            screenWidth = window.innerWidth * 0.98;
          }

          var pictureWidth = canvasInteractWidth;
          var offsetX = (screenWidth - pictureWidth) / 2;


          var xx = cropInitialIn[0].x;
          var yy = cropInitialIn[0].y;
          const xxw = cropInitialIn2[0].x;
          const yyw = cropInitialIn2[0].y;




          if (post.rad1 === null) {
            var r1 = 120;
          }
          else {
            // Given values
            const percentageCoverage = post.rad1; // Replace with your actual percentageCoverage
            const canvasWidth = canvasInteractWidth/* your canvas width */;
            // Calculate the radius
            var r1 = (percentageCoverage * canvasWidth) / 200;

          }

          if (post.rad2 === null) {
            var r2 = 120;
          } else {
            const percentageCoveragex = post.rad2; // Replace with your actual percentageCoverage
            const canvasWidthx = canvasInteractWidth/* your canvas width */;
            // Calculate the radius
            var r2 = (percentageCoveragex * canvasWidthx) / 200;
          }








          // Calculate the X-coordinate
          const xCoordinate = (xx / 100) * canvasInteractWidth;
          var x2 = xCoordinate;

          const yCoordinate = (yy / 100) * interactHeightResolution;
          var y2 = yCoordinate;


          const xCoordinatex = (xxw / 100) * canvasInteractWidth;
          var x2b = xCoordinatex;

          const yCoordinatex = (yyw / 100) * interactHeightResolution;
          var y2b = yCoordinatex;






          context.beginPath();
          context.arc(xnew, ynew, 5, 0, Math.PI * 2);
          context.fillStyle = "rgba(250, 250,250,0)";
          context.fill();
          context.closePath();

          var clikarc1 = context.isPointInPath(0, 0);
          var clikarc2 = context.isPointInPath(0, 0);

          if (post.interact1a || post.interact1b) {
            //alert('jj');

            var scaleFactor1 = matchMobile ? bigPixel1 ? 1.1 : 1.023 : bigPixel1 ? 1.1 : 1.018; // You can adjust this value to control the zoom level


            var scaleFactor2 = matchMobile ? bigPixel2 ? 1.1 : 1.023 : bigPixel2 ? 1.1 : 1.018; // You can adjust this value to control the zoom level

            if (post.interact1a) {
              if (typex === 0 || typex === 3) {
                var imageData = context.getImageData(
                  x2 - 1 - r1,
                  y2 - 0.5 - r1,
                  2.1 * r1,
                  2.1 * r1
                ); // (x, y, width, height)

                // Create a larger image data for the zoom effect
                var zoomedImageData = context.createImageData(
                  imageData.width * scaleFactor1,
                  imageData.height * scaleFactor1
                );

                // Copy pixels from the original image data to the larger image data with bilinear interpolation
                for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                    var sourceX = xbb / scaleFactor1;
                    var sourceY = ybb / scaleFactor1;

                    // Get the interpolated pixel value
                    var interpolatedPixel = interpolate(imageData, sourceX, sourceY);

                    // Set the pixel values in the zoomed image data
                    var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                    zoomedImageData.data[destIndex] = interpolatedPixel[0];
                    zoomedImageData.data[destIndex + 1] = interpolatedPixel[1];
                    zoomedImageData.data[destIndex + 2] = interpolatedPixel[2];
                    zoomedImageData.data[destIndex + 3] = interpolatedPixel[3];
                  }
                }

                // Apply a light white border at the borders
                var borderWidth = 0; // Adjust the width of the border
                for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                    if (
                      xbb < borderWidth ||
                      xbb >= zoomedImageData.width - borderWidth ||
                      ybb < borderWidth ||
                      ybb >= zoomedImageData.height - borderWidth
                    ) {
                      // Apply a light white color to the border
                      var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                      zoomedImageData.data[destIndex] = 230; // Red channel
                      zoomedImageData.data[destIndex + 1] = 20; // Green channel
                      zoomedImageData.data[destIndex + 2] = 2; // Blue channel
                      zoomedImageData.data[destIndex + 3] = 0.8; // Alpha channel
                    }
                  }
                }

                // Put the modified pixel data back onto the canvas
                context.putImageData(
                  zoomedImageData,
                  x2 - r1 * scaleFactor1,
                  y2 - r1 * scaleFactor1
                );
              }
              //////////////////////////////////////////////////////////////////////////////////////////////////
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2, y2, r1, 0, Math.PI * 2);

                clikarc1 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0)"
                  : "rgba(250, 250,250,0.0)";
                context.closePath();
                context.fill();

              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2, y2, r1, 0, Math.PI * 2);
                clikarc1 = context.isPointInPath(xnew, ynew);
                context.fillStyle = `rgba(250, 250,250,0.0)`;
                context.closePath();
                context.fill();
              }


            }

            if (post.interact1b) {
              if (typex === 0 || typex === 3) {
                var imageData2 = context.getImageData(
                  x2b - 1 - r2,
                  y2b - 0.5 - r2,
                  2.1 * r2,
                  2.1 * r2
                ); // (x, y, width, height)


                // Create a larger image data for the zoom effect
                var zoomedImageData2 = context.createImageData(
                  imageData2.width * scaleFactor2,
                  imageData2.height * scaleFactor2
                );

                // Copy pixels from the original image data to the larger image data with bilinear interpolation
                for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                    var sourceX = xbb / scaleFactor2;
                    var sourceY = ybb / scaleFactor2;

                    // Get the interpolated pixel value
                    var interpolatedPixel = interpolate(imageData2, sourceX, sourceY);

                    // Set the pixel values in the zoomed image data
                    var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                    zoomedImageData2.data[destIndex] = interpolatedPixel[0];
                    zoomedImageData2.data[destIndex + 1] = interpolatedPixel[1];
                    zoomedImageData2.data[destIndex + 2] = interpolatedPixel[2];
                    zoomedImageData2.data[destIndex + 3] = interpolatedPixel[3];
                  }
                }

                // Apply a light white border at the borders
                var borderWidth = 0; // Adjust the width of the border
                for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                    if (
                      xbb < borderWidth ||
                      xbb >= zoomedImageData2.width - borderWidth ||
                      ybb < borderWidth ||
                      ybb >= zoomedImageData2.height - borderWidth
                    ) {
                      // Apply a light white color to the border
                      var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                      zoomedImageData2.data[destIndex] = 230; // Red channel
                      zoomedImageData2.data[destIndex + 1] = 20; // Green channel
                      zoomedImageData2.data[destIndex + 2] = 2; // Blue channel
                      zoomedImageData2.data[destIndex + 3] = 0.8; // Alpha channel
                    }
                  }
                }

                // Put the modified pixel data back onto the canvas
                context.putImageData(
                  zoomedImageData2,
                  x2b - r2 * scaleFactor2,
                  y2b - r2 * scaleFactor2
                );
              }
              ///////////////////////////////////////////////////////////////////////////////////////////////
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2b, y2b, r2, 0, Math.PI * 2);
                clikarc2 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0)"
                  : "rgba(250, 250,250,0.0)";
                context.closePath();
                context.fill();
                ///context.lineWidth = matchMobile ? 9.6 : itemcroptype[pey] === 3 ? 9 : 6;
                ///context.strokeStyle = darkmodeReducer ? "#ffffff" : "#333333";
                ///context.stroke();
              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2b, y2b, r2, 0, Math.PI * 2);
                clikarc2 = context.isPointInPath(xnew, ynew);
                context.fillStyle = `rgba(250, 250,250,0.0)`;
                context.closePath();
                context.fill();
              }
            }

            if (typex === 3) {
            } else {
              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              tiim.current = setTimeout(() => {
                if (typex === 0 || typex === 3) {
                  drawInteraction(1, event, 0);
                } else {
                  drawInteraction(0, event, 0);
                }
              }, bigPixel1 || bigPixel2 ? 120 : 50);
            }
            if (canvasRefIn.current) {
              canvasRefIn.current.style.width = `${imageWidthcss}px`;
              canvasRefIn.current.style.height = `${imageHeightcss}px`;
            }






            if (post.interact1b || post.interact1a) {

              if (clicked === 1 && clikarc2) {

                ///clears stop interaction timer for long imagess (PC)
                /*  if (sTimercc.current) {
                    clearTimeout(sTimercc.current);
                  }
  */

                CallInteractStart2();

                ///  closeItemClick();

              } else if (clicked === 1 && clikarc1) {


                CallInteractStart1();






              } else if (clicked === 1) {




                switch (event.detail) {
                  case 1:
                    setinteract(false);
                    setinteractContent("");
                    setStopShowPad(false);
                    setinteracttypeAll(0);
                    setfadeout(false);


                    ClickAudio();



                    ////THIS STOPS INTERACTION
                    ///if (tiim.current) {
                    //// clearTimeout(tiim.current);
                    ////  } 
                    /////THIS STOPS INTERACTION


                    ///context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.width);
                    ///setHasInteractivity(false);
                    ////clickslider(event);
                    break;

                }


                /// alert('jj');
              } else {

              }
            } else {
            }

            //alert(imageHeightcss);
          }
        });
      }
    },
    [data, imageWidthcss, imageHeightcss, interact, ImageDuration, isAppleDevice, bigPixel1, bigPixel2]
  );



  ///
  ///
  ///
  /// HANDLE TOUCH START EVENT
  const In = (e: any) => {
    if (itemCLICKED[pey]) {
      ////onMouseDown onMouseMove
      ////touchDown = e.clientX
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    }
  };

  ///
  ///
  ///
  /// HANDLE TOUCH MOVE EVENT
  const handleTouchMove = (e: any) => {
    if (itemCLICKED[pey]) {
      if (handleTouchMoveTimer.current) {
        clearTimeout(handleTouchMoveTimer.current);
      }
      handleTouchMoveTimer.current = setTimeout(function () {
        const touchDown = touchPosition;

        if (touchDown === null) {
          return;
        }
        ////currentTouch = e.clientX
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 40) {
          nextSlide();
        } else if (diff < -40) {
          prevSlide();
        } else {
        }

        setTouchPosition(null);
        return false;
      }, 200);

      return false;
    }
  };

  ///
  ///
  ///
  /// WAITS FOR SOME SECS BEFORE CHANGING SLIDE IDENTIFIER(DOTS,ACTIVESLIDES)
  const waitChangeIndex = (data: number, state: any) => {
    if (waitChangeIndexTimer.current) {
      clearTimeout(waitChangeIndexTimer.current);
    }
    waitChangeIndexTimer.current = setTimeout(function () {
      setSliderIndexSlow((state: any) => data);
    }, 500);
  };

  ///
  ///
  ///
  /// NEXT SLIDE
  const nextSlide = () => {
    AUTOSlideLongImages(pey);

    if (ActiveAutoPlay[pey]) {
    } else {
      setshowSliderLoader(true);
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    }

    ///set((state) => (state + 1) % slides.length);
    if (sliderIndex === slides.length - 1) {
      setSliderIndex((sliderIndex: any) => 0);
      waitChangeIndex(0, sliderIndex);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex + 1);
      waitChangeIndex(sliderIndex + 1, sliderIndex);
    }

    if (ActiveAutoPlay[pey]) {
    } else {
      if (callAutoPlayAgainTimer.current) {
        clearTimeout(callAutoPlayAgainTimer.current);
      }
      callAutoPlayAgainTimer.current = setTimeout(function () {
        SliderAutoPlay(1);
      }, sliderDuration);
    }
  };

  ///
  ///
  ///
  /// PREV SLIDE
  const prevSlide = () => {
    AUTOSlideLongImages(pey);
    if (ActiveAutoPlay[pey]) {
    } else {
      setshowSliderLoader(true);
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    }

    if (sliderIndex === 0) {
      setSliderIndex((sliderIndex: any) => slides.length - 1);
      waitChangeIndex(slides.length - 1, sliderIndex);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex - 1);
      waitChangeIndex(sliderIndex - 1, sliderIndex);
    }
    if (ActiveAutoPlay[pey]) {
    } else {
      if (callAutoPlayAgainTimer.current) {
        clearTimeout(callAutoPlayAgainTimer.current);
      }
      callAutoPlayAgainTimer.current = setTimeout(function () {
        SliderAutoPlay(1);
      }, sliderDuration);
    }
  };

  ///
  ///
  ///
  /// CHANGE SLIDER CONTENT USING  DOTS
  const GotoDots = (clickedDot: number) => {
    setSliderIndex((sliderIndex: any) => clickedDot);
    waitChangeIndex(clickedDot, sliderIndex);
  };




  ///setshowSpin(false);

  const handleVideoLoad = () => {
    if (videoPlayerReff.current) {
      // Define the handler for when the video ends
      ///alert('kk');
      console.log(interactContent)
      // Add the 'ended' event listener to the video element
      ////////videoPlayerReff.current.addEventListener('ended', handleVideoEnd);

      // Start playing the video
      videoPlayerReff.current.play();
    }
  };



  ////setactiveAudio(pey);






  return (
    <>
      <Grid
        item
        xs={12}
        style={{
          position: "fixed",
          top: "3vh",
          padding: "0px",
          zIndex: "200",
        }}
      >
        {Tutorialx ? (
          <Grid
            item
            onClick={() => {
              setTutorialx(false);
            }}
            xs={6}
            style={{
              padding: "10px",
              backgroundColor: "#00ccff",
              borderRadius: "8%",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Mobile Interaction Still In Development, Coming Soon 😊
          </Grid>
        ) : null}
      </Grid>



      <Grid
        ref={ref}
        item
        onTouchStart={In}
        onTouchMove={handleTouchMove}
        xs={12}
        style={{
          position: "relative",
          height: itemCLICKED[pey]
            ? `${itemOriginalPostHeight[pey]}px`
            : type === 1
              ? `${itemOriginalPostHeight[pey]}px`
              : `${itemFinalPostHeight[pey]}px`,
          padding: "0px",
        }}
      >





        <Tutorial type={1} index={pey} post={post} />

        <Tutorial type={2} index={pey} post={post} />

        <Tutorial type={3} index={pey} post={post} />

        <Tutorial type={4} index={pey} post={post} />


        <div
          onMouseOver={() => {
            setZoomOutBigger(true);
          }}
          onMouseOut={() => {
            setZoomOutBigger(false);
          }}
          style={{
            position: "absolute",
            zIndex: 30,
            left: slides.length > 1 ? 165 : 25,
            cursor: "pointer",
            top: slides.length > 1 ? "2.4vh" : "2.4vh",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bolder",
            opacity: "0.7",
            height: "0px",
            padding: "0px",
          }}
        >
          <span
            onClick={() => {
              setsliderIndexMini(sliderIndex);
              setzoomClickedIndex(pey + 1);
              type === 1 ? setminiProfile(false) : setminiProfile(true);
            }}
            className={darkmodeReducer ? "turlight" : "turdark"}
            style={{
              padding: "1px",
              color: "#ffffff",
            }}
          >
            <ZoomOutIcon
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
              }
              style={{
                fontSize: "2.2vw",
                display: "none",
              }}
            />
          </span>
        </div>



        {" "}
        {" "}
        {" "}
        {" "}
        {" "}
        {showSpin ? (
          <Grid
            item
            xs={12}

            style={{
              backgroundColor: post ? post.color1 : colorReducer,
              height: "0.9vh",
              position: "absolute",
              display: autoSlideDisplay,
              zIndex: 100000,
              top: "0em",
              width: '100%',
              visibility: 'hidden'
            }}
          ></Grid>
        ) : null}
        {" "}
        {" "}
        {" "}
        {" "}
        {" "}
        {" "}


        {slides.length > 0 ? (
          interactContent ? null : (
            <SliderNumber
              autoSlideDisplay={autoSlideDisplay}
              sliderLoader={sliderLoader}


              showSpin={showSpinx}
              setshowSpin={setshowSpinx}
              ActiveCanvas={ActiveCanvas}
              post={post}
              HasInteractivity={HasInteractivity}
              postDatainnerInteraction1={postDatainnerInteraction1}
              postDatainnerInteraction2={postDatainnerInteraction2}
              startSlider={startSlider}
              ActiveAutoPlay={ActiveAutoPlay}
              stopSlider={stopSlider}
              activeSlide={sliderIndexSlow}
              total={slides.length}
              itemCLICKED={itemCLICKED}
              pey={pey}
            />
          )
        ) : null}
        <Arrow
          itemCLICKED={itemCLICKED}
          pey={pey}
          total={slides.length}
          direction="left"
          clickSlideprev={prevSlide}
          clickSlidenext={nextSlide}
          itemOriginalPostHeight={itemOriginalPostHeight}
        />
        {transitions((style, i) => (
          <div key={i}>
            <animated.img
              onLoad={(e: any) => {
                onPostsItemload(e, pey, i);
              }}
              onMouseDown={clickslider}
              ref={addPostItemsRef}
              className={
                darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
              }
              src={`${REACT_APP_CLOUNDFRONT}${slidesThumb[i]}`}
              alt="a superstarz post "
              style={{
                ...style,
                cursor: "pointer",
                width: "100%",
                height: type === 1 ? `auto` : itemheight[pey],
                position: "absolute",
                padding: "0px",
                objectFit: "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                zIndex: 0,


              }}
            />

            {AllowAllHdImagesShow ? <>

              <img
                onMouseDown={() => {

                  ClickAudio();
                }}
                className={
                  darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
                }

                src={`${REACT_APP_CLOUNDFRONT}${post.item2}`}
                alt="a clikbate post "
                style={{

                  cursor: "pointer",
                  width: "100%",
                  height: type === 1 ? `auto` : itemheight[pey],
                  position: "absolute",
                  padding: "0px",
                  objectFit: "cover",
                  objectPosition:
                    itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                      ? "50% top"
                      : "50% 50",
                  zIndex: 1,

                }}

              />



              {i === 0 && HasInteractivity && ActiveCanvas === pey ? (
                <canvas
                  onMouseUp={(e: any) => {
                    handleTouchStartIn(e, 0);
                  }}

                  onTouchStart={(e: any) => {
                    handleTouchStartIn(e, 1);
                  }}
                  ref={canvasRefIn}
                  style={{
                    cursor: "pointer",
                    padding: "0px",
                    position: "absolute",
                    zIndex: 11,
                    height: '0px',
                    width: '0px',
                    top: "0vh",
                    margin: "auto",
                    filter: interactContent && interact && HasInteractivity && ActiveCanvas === pey ? 'blur(11px)' : 'blur(0px)',
                    backgroundColor: ''

                  }}
                />
              ) : null}


              <img
                ref={pic}
                className={
                  darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
                }
                onLoad={() => {
                  setshowSpinx(false);
                  ///alert('jj');
                }}

                src={`${slides[0]}?v=${dateint}`}

                alt="a clikbate post "
                style={{

                  cursor: "pointer",
                  width: "100%",
                  height: '100%',
                  position: "absolute",
                  padding: "0px",
                  zIndex: 0,

                }}
                crossOrigin="anonymous"
              /></> : null}



            {post.audioData && itemCLICKED[pey] && ActiveAudioIndexReducer === pey ?
              <audio
                ref={audioPlayerRef}
                src={`${REACT_APP_CLOUNDFRONT}audio/${post.audioData}`}
                autoPlay  // This attribute enables autoplay
                loop  // This attribute enables looping
                style={{
                  cursor: "pointer",
                  height: "10px",
                  objectFit: "contain",
                  zIndex: 0,
                  position: "absolute",
                  margin: "auto",
                  textAlign: "center",
                  top: "-200vh",
                  width: "10px",
                }}
              ></audio> : null}


            {interact && HasInteractivity && ActiveCanvas === pey ? (


              interacttypeAll === 1 ?

                isAppleDevice ? <>



                  <video

                    onClick={() => {
                      if (InteractedDark) {
                        ////////

                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }

                        dispatch(UpdateInteract(interactContent, 2));
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                        /////////////////
                      } else {

                        if (post.backgroudaudio === 1) {
                          setHaltAudio(false);
                        }

                        //// alert('jj');

                        setInteractedDark(true);
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        InteractTimerxx.current = setTimeout(() => {
                          ///closeItemClick();
                          setInteractedDark(false);
                          setinteract(false);
                          setinteractContent("");
                          setStopShowPad(false);
                          setinteracttypeAll(0);
                          setfadeout(false);
                          if (sc.current) {
                            clearTimeout(sc.current);
                          }
                          setshowSpin(false);
                          setshowSpinx(false);
                        }, 1100)

                      }
                    }}
                    autoPlay
                    playsInline
                    ///controls
                    ref={videoPlayerReff}

                    src={`${REACT_APP_CLOUNDFRONT}videos/${interactContent}`}
                    style={{
                      filter: InteractedDark ? 'brightness(40%)' : '',
                      cursor: "pointer",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 50,
                      position: "absolute",
                      margin: "auto",
                      textAlign: "center",
                      top: "0vh",
                      width: "100%",


                    }}>

                  </video>
                </> :
                  <video

                    onClick={() => {

                      if (InteractedDark) {
                        ////////
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        dispatch(UpdateInteract(interactContent, 2));
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                        /////////////////
                      } else {


                        if (post.backgroudaudio === 1) {
                          setHaltAudio(false);
                        }
                        /// alert('jj');

                        setInteractedDark(true);
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        InteractTimerxx.current = setTimeout(() => {
                          ///closeItemClick();
                          setInteractedDark(false);
                          setinteract(false);
                          setinteractContent("");
                          setStopShowPad(false);
                          setinteracttypeAll(0);
                          setfadeout(false);
                          if (sc.current) {
                            clearTimeout(sc.current);
                          }
                          setshowSpin(false);
                          setshowSpinx(false);
                        }, 1100)

                      }


                    }}
                    onLoadedData={handleVideoLoad}
                    ref={videoPlayerReff}

                    src={`${REACT_APP_CLOUNDFRONT}videos/${interactContent}`}
                    style={{
                      filter: InteractedDark ? 'brightness(40%)' : '',
                      cursor: "pointer",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 50,
                      position: "absolute",
                      margin: "auto",
                      textAlign: "center",
                      top: "0vh",
                      width: "100%",
                      scrollSnapAlign: matchPc ? snapStartReducer ? "start" : 'none' : 'none'


                    }}>

                  </video> :
                <img


                  src={`${REACT_APP_CLOUNDFRONT}${interactContent}`}
                  onClick={() => {
                    if (InteractedDark) {
                      /// closeItemClick();
                      ////////
                      if (InteractTimerxx.current) {
                        clearTimeout(InteractTimerxx.current);
                      }
                      dispatch(UpdateInteract(interactContent, 1));
                      setInteractedDark(false);
                      setinteract(false);
                      setinteractContent("");
                      setStopShowPad(false);
                      setinteracttypeAll(0);
                      setfadeout(false);
                      if (sc.current) {
                        clearTimeout(sc.current);
                      }
                      setshowSpin(false);
                      setshowSpinx(false);
                      /////////////////
                    } else {


                      ///alert('jj');

                      setInteractedDark(true);
                      if (InteractTimerxx.current) {
                        clearTimeout(InteractTimerxx.current);
                      }
                      InteractTimerxx.current = setTimeout(() => {
                        ///closeItemClick();
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                      }, 1100)

                    }


                  }}
                  style={{
                    filter: InteractedDark ? 'brightness(40%)' : '',
                    cursor: "pointer",
                    height: "100%",
                    objectFit: "contain",
                    zIndex: 50,
                    position: "absolute",
                    margin: "auto",
                    textAlign: "center",
                    top: "0vh",
                    width: "100%",

                  }}
                />
            ) : null}
          </div>
        ))}{" "}
        <Dots
          total={slides.length}
          itemCLICKED={itemCLICKED}
          pey={pey}
          GotoDots={GotoDots}
          slides={slides}
          activeSlide={sliderIndexSlow}
        />
        {post.interact1a && HasInteractivity && ActiveCanvas === pey ? (
          <img
            src={post.interact1a}
            style={{
              height: "100%",
              objectFit: "contain",
              zIndex: 50,
              position: "absolute",
              margin: "auto",
              textAlign: "center",
              top: "-200000vh",
              width: "100%",
            }}
          />
        ) : null}
        {post.interact1b && HasInteractivity && ActiveCanvas === pey ? (
          <img
            src={post.interact1b}
            style={{
              cursor: "pointer",
              height: "100%",
              objectFit: "contain",
              zIndex: 50,
              position: "absolute",
              margin: "auto",
              textAlign: "center",
              top: "-200000vh",
              width: "100%",
            }}
          />
        ) : null}

      </Grid>
    </>
  );
}

export const Slider = React.memo(Sliderx);
