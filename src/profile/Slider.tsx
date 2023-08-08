import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { Arrow } from "./Arrow";
import { Dots } from "./Dots";
import { SliderNumber } from "./SliderNumber";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { RootStateOrAny, useSelector } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { Loader } from "./Loader";

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
  postItemsRef
}: any): JSX.Element {
  const [sliderDuration] = useState(1500);

  const aRef: any = useRef(null);

  var allow4dev = "";
  const { REACT_APP_APPX_STATE } = process.env;

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

  /// const getWidth = () => window.innerWidth;
  ///var newGetWidth = getWidth() * slides.length;

  const waitChangeIndexTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleTouchMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const callAutoPlayAgainTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const SlideimageRef = useRef<HTMLImageElement>(null);

  const SlideimageRefthumb = useRef<HTMLImageElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const [ZoomOutBigger, setZoomOutBigger] = useState<boolean>(false);

  const [miniH, setminiH] = useState<number>(50);

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
  /// GET DARKMODE FROM REDUX STORE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;

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


  const [showIntImage, setshowIntImage] = useState(false)

  const [HasInteractivity, setHasInteractivity] = useState(false);

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
        setHasInteractivity(true)
      }
    })

    postDatainnerInteraction2.map((str: any, index: any) => {
      if (containsURL(str)) {
        setHasInteractivity(true)
      }
    })



  }, [postDatainnerInteraction1, postDatainnerInteraction2])

  const [data, setdata] = useState(null);
  const [canvasInteractWidth, setcanvasInteractWidth] = useState(0);
  const [imageWidthcss, setimageWidthcss] = useState(0);
  const [imageHeightcss, setimageHeightcss] = useState(0);

  const canvasRefIn: any = useRef(null);

  const callInteract = useCallback(() => {

    var context = canvasRefIn.current.getContext("2d");
    context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
    const previewFileReadimage: any = new Image();


    previewFileReadimage.src = slides[sliderIndex];

    previewFileReadimage.onload = function () {
      /// alert(sliderIndex)
      if (data === previewFileReadimage) {
      } else {
        setdata(previewFileReadimage)
      }
      var ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;
      var width = window.innerHeight / ratio;
      setcanvasInteractWidth(width);
      setimageWidthcss(postItemsRef.current[pey].clientWidth)
      setimageHeightcss(postItemsRef.current[pey].clientHeight)
      ///use this
    };


  }, [slides, canvasRefIn, sliderIndex, postItemsRef]);



  useLayoutEffect(() => {
    if (data) {
      drawInteraction();
    }
  }, [data]);


  useLayoutEffect(() => {
    if (itemCLICKED[pey]) {


      if (HasInteractivity) {
        if (showIntImage) { } else {
          ////load interact image
          setshowIntImage(true);
        }
        callInteract();
      }
      ////check for interaction and display canvas image flip
    }
  }, [itemCLICKED[pey], HasInteractivity, showIntImage]);


  const drawInteraction = useCallback(() => {

    if (canvasRefIn.current) {
      var context = canvasRefIn.current.getContext("2d");



      canvasRefIn.current.height = window.innerHeight;
      canvasRefIn.current.width = canvasInteractWidth;


      requestAnimationFrame(() => {
        context.drawImage(data, 0, 0, canvasInteractWidth, window.innerHeight);




        canvasRefIn.current.style.width = `${imageWidthcss}px`;
        canvasRefIn.current.style.height = `${imageHeightcss}px`;
      });

    }

  }, [data, imageWidthcss, imageHeightcss]);



  ///
  ///
  ///
  /// HANDLE TOUCH START EVENT
  const handleTouchStart = (e: any) => {
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
        onTouchStart={handleTouchStart}
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
        {slides.length > 0 ? (
          <SliderNumber
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
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                zIndex: 0,
                float: "left",
                filter: "blur(0px)",
              }}
            />
            <animated.img
              onLoad={(e: any) => {
                onPostsItemload(e, pey, i);
              }}
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
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                zIndex: 1,
                float: "left",
              }}
            />

            {i === 0 && HasInteractivity ? <canvas
              ref={canvasRefIn}
              style={{
                padding: "0px",
                position: 'relative',
                zIndex: 11,
                top: '0vh',
                backgroundColor: 'red',
                margin: 'auto',
                display: itemCLICKED[pey] ? 'block' : 'none'

              }}
            /> : null}


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



        {showIntImage ? <>
          <img
            //src={addedImagex ? addedImagex : null}
            style={{
              width: "30%",
              height: "auto",
              cursor: "pointer",
              position: "fixed",
              top: "20000vh",
              backgroundColor: "#00ccff",
            }}
          />

        </> : null}
      </Grid>
    </>
  );
}

export const Slider = React.memo(Sliderx);
