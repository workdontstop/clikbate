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
import { Loader } from "./Loader";
import { UpdateInteract } from ".././GlobalActions";

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
  checkifClicked,
  postDivRef,
  paperPostScrollRef,
}: any): JSX.Element {
  const [sliderDuration] = useState(1500);

  const aRef: any = useRef(null);

  const dispatch = useDispatch();

  var allow4dev = "";
  const { REACT_APP_APPX_STATE } = process.env;

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

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
  const callAutoPlayAgainTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [showSpin, setshowSpin] = useState(false);

  const SlideimageRef = useRef<HTMLImageElement>(null);

  const SlideimageRefthumb = useRef<HTMLImageElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const [ZoomOutBigger, setZoomOutBigger] = useState<boolean>(false);

  const [miniH, setminiH] = useState<number>(50);

  const [InteractedDark, setInteractedDark] = useState(false);

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

  const [interactContent, setinteractContent] = useState("");

  const [interact, setinteract] = useState(false);

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      historyscroll: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const {
    screenHeight,
    darkmode,
    snapStart,
    activateLoader,
    historyscroll,
  } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;
  const activateLoaderReducer = activateLoader;
  const historyscrollReducer = historyscroll;

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

  const [startInteractivity, setstartInteractivity] = useState(true);

  const containsURL = (str: any) => {
    // Regular expression pattern to match URLs (simplified, not covering all cases)
    const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;

    // Test if the string contains a URL using the regular expression
    return urlPattern.test(str);
  };

  useEffect(() => {
    //console.log(postDatainnerInteraction1[0])

    postDatainnerInteraction1.map((str: any, index: any) => {
      if (containsURL(str)) {
        setHasInteractivity(true);
        ///alert('kk')
      }
    });

    postDatainnerInteraction2.map((str: any, index: any) => {
      if (containsURL(str)) {
        setHasInteractivity(true);
      }
    });
  }, [postDatainnerInteraction1, postDatainnerInteraction2, itemCLICKED]);

  const [data, setdata] = useState(null);
  const [canvasInteractWidth, setcanvasInteractWidth] = useState(0);
  const [canvasInteractheight, setcanvasInteractheight] = useState(0);
  const [imageWidthcss, setimageWidthcss] = useState(0);
  const [imageHeightcss, setimageHeightcss] = useState(0);

  const handleTouchStartIn = useCallback(
    (event: any, type: any) => {
      if (data) {
        drawInteraction(0, event, 1);
      }
    },
    [data]
  );

  const pic: any = useRef(null);
  const canvasRefIn: any = useRef(null);

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

    previewFileReadimage.src = slides[sliderIndex];

    previewFileReadimage.onload = () => {
      const ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;
      const width = interactHeightResolution / ratio;
      const ratiox =
        previewFileReadimage.naturalWidth / previewFileReadimage.naturalHeight;
      const hei = window.innerHeight / ratiox;
      setcanvasInteractWidth(width);
      setcanvasInteractheight(hei);
      setimageWidthcss(postDivRef.current[pey].clientWidth);
      setimageHeightcss(postDivRef.current[pey].clientHeight);

      if (data !== previewFileReadimage) {
        setdata(previewFileReadimage);
      }
    };
  }, [slides, sliderIndex, postItemsRef, postDivRef, interactHeightResolution]);

  const acttii = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [InteractClicked, setInteractClicked] = useState(false);

  useLayoutEffect(() => {
    if (data) {
      drawInteraction(0, 0, 0);
    }
  }, [data]);

  const [Tutorial, setTutorial] = useState(false);

  useLayoutEffect(() => {
    if (itemCLICKED[pey]) {

      ///stop interaction first 
      setinteract(false);
      setinteractContent("");
      setfadeout(false);
      ///stop interaction first 

      ////alert('kk');

      if (HasInteractivity) {





        if (showIntImage) {
        } else {
          ////load interact image
          setshowIntImage(true);
        }

        setTimeout(() => {
          setInteractClicked(true);
          callInteract();
        }, 1500);
      }
      ////check for interaction and display canvas image flip
    } else {
      setinteract(false);
      setinteractContent("");
      setfadeout(false);
      ///setTutorial(false);
    }
  }, [itemCLICKED[pey], HasInteractivity, showIntImage, postDivRef]);

  const tti = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interacttime = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacttime2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bh = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fadeout, setfadeout] = useState(false);

  const [pause, setpause] = useState(false);

  const IntClose = useCallback(() => {
    if (interact) {
      setpause(false);

      setHideCann(true);

      if (interacttime.current) {
        clearTimeout(interacttime.current);
      }
      if (interacttime2.current) {
        clearTimeout(interacttime2.current);
      }

      interacttime.current = setTimeout(() => {
        setfadeout(true);

        if (interacttime2.current) {
          clearTimeout(interacttime2.current);
        }

        interacttime2.current = setTimeout(() => {
          ///  dispatch(UpdateInteract('', false));
          setinteract(false);
          setinteractContent("");
          setfadeout(false);
        }, 1800);
      }, 10000);
    } else {
      setHideCann(false);
    }
  }, [interact]);

  useEffect(() => {
    IntClose();
  }, [interact]);

  const [HideCann, setHideCann] = useState(false);

  const sc = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spin = () => {
    setshowSpin(true);

    if (sc.current) {
      clearTimeout(sc.current);
    }
    sc.current = setTimeout(() => {
      setshowSpin(false);
    }, 10000);
  };


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
          var r = 45;



          if (matchMobile) {
            if (itemcroptype[pey] === 3) {
              r = 150;

            } else {

              r = 80;
            }
          } else {
            if (itemcroptype[pey] === 3) {
              r = 78;
            }
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

            if (post.interact1a) {
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2, y2, r, 0, Math.PI * 2);

                clikarc1 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0.3)"
                  : "rgba(250, 250,250,0.3)";
                context.closePath();
                context.fill();
                context.lineWidth = matchMobile ? 9.6 : itemcroptype[pey] === 3 ? 9 : 6;
                context.strokeStyle = darkmodeReducer ? "#ffffff" : "#333333";
                context.stroke();
              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2, y2, r, 0, Math.PI * 2);
                clikarc1 = context.isPointInPath(xnew, ynew);

                context.fillStyle = `rgba(250, 250,250,0.0)`;
                context.closePath();
                context.fill();
              }
            }

            if (post.interact1b) {
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2b, y2b, r, 0, Math.PI * 2);

                clikarc2 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0.3)"
                  : "rgba(250, 250,250,0.3)";
                context.closePath();
                context.fill();
                context.lineWidth = matchMobile ? 9.6 : itemcroptype[pey] === 3 ? 9 : 6;
                context.strokeStyle = darkmodeReducer ? "#ffffff" : "#333333";
                context.stroke();
              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2b, y2b, r, 0, Math.PI * 2);
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
              }, 1000);
            }
            if (canvasRefIn.current) {
              canvasRefIn.current.style.width = `${imageWidthcss}px`;
              canvasRefIn.current.style.height = `${imageHeightcss}px`;
            }

            if (post.interact1b || post.interact1a) {
              if (clicked === 1 && clikarc2) {
                /// alert(`xx: ${xx}, xnew: ${xnew}`);

                /// dispatch(UpdateInteract(post.interact1b, true));
                ///stop interaction first 
                setInteractedDark(false);
                setinteract(false);
                setinteractContent("");
                setfadeout(false);
                ///stop interaction first 
                spin();
                setinteract(true);
                setinteractContent(post.interact1b);
              } else if (clicked === 1 && clikarc1) {
                /// alert(`xx: ${xx}, xnew: ${xnew}`);

                ///stop interaction first 
                setInteractedDark(false);
                setinteract(false);
                setinteractContent("");
                setfadeout(false);
                ///stop interaction first 
                spin();
                setinteract(true);
                setinteractContent(post.interact1a);
              } else if (clicked === 1) {


                switch (event.detail) {
                  case 1:
                    setinteract(false);
                    setinteractContent("");
                    setfadeout(false);

                    context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.width);

                    if (tiim.current) {
                      clearTimeout(tiim.current);
                    }
                    setHasInteractivity(false);
                    clickslider(event);
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
    [data, imageWidthcss, imageHeightcss, interact]
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
        {Tutorial ? (
          <Grid
            item
            onClick={() => {
              setTutorial(false);
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
        <Loader
          post={post}
          autoSlideDisplay={autoSlideDisplay}
          sliderLoader={sliderLoader}
        />
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
        </div>{" "}
        {showSpin ? (
          <Grid
            item
            xs={12}
            style={{ position: "absolute", zIndex: 100, padding: "3vh" }}
          >
            <div
              className="spinner zuperxyinfo"
              style={{
                borderTop: `8px solid ${post.color1}`,
                boxShadow: `0 0 8.5px, ${post.color1}`,
              }}
            ></div>
          </Grid>
        ) : null}
        {slides.length > 0 ? (
          interactContent ? null : (
            <SliderNumber
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
              src={slidesThumb[i]}
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

            <animated.img
              ref={pic}
              onMouseDown={clickslider}
              className={
                darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
              }
              src={slides[i]}
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
                  opacity: HideCann ? 0 : 1,
                  visibility: itemCLICKED[pey] ? 'visible' : 'hidden',
                }}
              />
            ) : null}

            {interact && HasInteractivity && ActiveCanvas === pey ? (
              <img
                className={fadeout ? "fadeboyinOut" : "fadeboyinInt"}
                src={interactContent}
                onClick={() => {



                  if (InteractedDark) {
                    ////////
                    if (InteractTimerxx.current) {
                      clearTimeout(InteractTimerxx.current);
                    }
                    dispatch(UpdateInteract(interactContent, true));
                    setInteractedDark(false);
                    setinteract(false);
                    setinteractContent("");
                    setfadeout(false);
                    if (sc.current) {
                      clearTimeout(sc.current);
                    }
                    setshowSpin(false);
                    /////////////////
                  } else {
                    setInteractedDark(true);
                    if (InteractTimerxx.current) {
                      clearTimeout(InteractTimerxx.current);
                    }
                    InteractTimerxx.current = setTimeout(() => {
                      setInteractedDark(false);
                      setinteract(false);
                      setinteractContent("");
                      setfadeout(false);
                      if (sc.current) {
                        clearTimeout(sc.current);
                      }
                      setshowSpin(false);
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
                  backgroundColor: darkmodeReducer
                    ? "rgb(20,20,20,0.82)"
                    : "rgb(210,210,210,0.77)",
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
