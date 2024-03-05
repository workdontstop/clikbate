import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSpring } from "react-spring";

import { matchTablet, matchPc, matchMobile } from "./DetectDevice";

import "./log/logCss.css";
import { ICommentTemplate, IGrid } from "./log/log-Interfaces";
import { useSelector } from "react-redux";
import { DiscussionFeedBack } from "./profile/DiscussionFeedBack";
import image1 from "./log/images/modalpic1.png";
import image2 from "./log/images/modalpic2.png";
import image3 from "./log/images/modalpic3.png";
import image4 from "./log/images/modalpic4.png";
import image5 from "./log/images/modalpic5.png";
import image6 from "./log/images/modalpic6.png";
import { ModalLogLayout } from "./log/ModalLogLayout";
import { ModalAboutLayout } from "./profile/ModalAboutLayout";
import { ModalCommentLayout } from "./profile/ModalCommentLayout";
import { Button, Grid } from "@material-ui/core";
import { animated } from "react-spring";
import { DialogContent } from "@material-ui/core";

function CommentTemplatex({
  formtype,
  CloseModalForm,
  showModalForm,
  aboutTemp,
  commentTemp,
  updateColor,
  profilex,
  checkIfColorChanged,
  setcheckIfColorChanged,
  DiscussionImage,
  CommentPostid,
  reactionTemplateGo,
  connectTemplateGo,
  typeEmo,
  scrollLocation,
  postData,
  commentHistoryScroll,
  CommentHistoryData,
  setcommentHistoryScroll,
  setCommentHistoryData,
  dontallowspring,
  keypost
}: any): JSX.Element {
  ///
  ///
  ///
  /// SHOW/HIDES REPEAT PASSWORD UI STATE FOR SIGN UP
  const [checkSignupPasswordACTIVATE, setcheckSignupPasswordACTIVATE] =
    useState<boolean>(false);

  const [Feedbackshow, setFeedbackshow] = useState<boolean>(false);
  const [FeedBackData, setFeedBackData] = useState<number>(0);

  const CommentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [containerHeight, setcontainerHeight] = useState<number>(0);


  const [showComAddBack, setshowComAddBack] = useState<boolean>(false);

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const screenHeightReducer = screenHeight;

  ///
  ///
  ///
  ///MODAL ZOOMED STATE PC LOCALSTORAGE
  const [zoomedModal, setZoomedModal] = useState<boolean>(false);
  const [mobileZoom, setMobileZoom] = useState<boolean>(false);
  useEffect(() => {
    if (aboutTemp) {
    } else {
      let localPcZoomData = JSON.parse(localStorage.getItem("PcZoom")!);
      if (localPcZoomData !== null) {
        setTimeout(() => {
          setZoomedModal(localPcZoomData);
        }, 400);
      }
    }
  }, [zoomedModal, aboutTemp]);

  ///
  ///
  ///
  ///HIDE LOGO Modal
  const [showlogo, setShowlogo] = useState<boolean>(true);
  const iconTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iconTimerxx = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideLogo = () => {
    setShowlogo(false);
    if (iconTimer.current) {
      clearTimeout(iconTimer.current);
    }
    if (iconTimerxx.current) {
      clearTimeout(iconTimerxx.current);
    }
    iconTimer.current = setTimeout(function () {
      setShowlogo(true);
    }, 2000);
    iconTimerxx.current = setTimeout(function () {
      setShowlogo(false);
    }, 4000);
  };

  ///
  ///
  ///
  ///CREATE A SLIDE UP ANIMATION WITH  REACT SPRING
  const modalanimation = useSpring({
    config: {
      duration: dontallowspring ? 5 : 500,
    },
    opacity: showModalForm ? 1 : 0.9,
    transform: showModalForm ? `translateY(0%)` : `translateY(100%)`,
  });

  const modalanimationTwo = useSpring({
    config: {
      duration: 450,
    },
    opacity: showModalForm ? 1 : 0.9,
    transform: showModalForm ? `translateY(0%)` : `translateY(100%)`,
  });

  ///
  ///
  ///
  ///ANIMATE MOBILE IMAGE ON ZOOM STATE CHANGE
  const mobileLogmodalanimation: any = useSpring({
    config: {
      duration: 20,
    },
    transition: "height 0.4s",
    opacity: mobileZoom ? 1 : 0.98,
    height: mobileZoom ? "100%" : matchTablet ? "23vh" : "15vh",
  });

  ///
  ///
  ///
  /// AUTO SCROLL WINDOWS AND CONTENT GRID
  const contentScrollRef = useRef<any>(null);
  const imagescrollRef = useRef<any>(null);

  const autoScrollWindowNImage: any = useCallback(
    (limiter: number) => {
      if (limiter === 1) {
        imagescrollRef.current.scrollTo(0, 0);
        if (formtype) {
          contentScrollRef.current.scrollTo(0, 45);
        } else {
          contentScrollRef.current.scrollTo(0, 20);
        }
      } else {
        setTimeout(function () {
          if (imagescrollRef.current && contentScrollRef.current) {
            imagescrollRef.current.scrollTo(0, 0);
            contentScrollRef.current.scrollTo(0, 30);
          }
        }, 970);
      }
    },
    [formtype]
  );





  ///
  ///
  ///
  /// SHOW A  ZOOMED/LOCKED MODAL VIEW PC
  const zoomlogmodal = () => {
    if (checkSignupPasswordACTIVATE) {
      setcheckSignupPasswordACTIVATE(false);
    } else {
      let toggleZoomedModal = !zoomedModal;
      setZoomedModal(!zoomedModal);
      hideLogo();
      //LOCALSTORAGE ZOOMED STATES  FOR PC
      localStorage.setItem("PcZoom", toggleZoomedModal.toString());
    }
  };





  ///
  ///
  ///
  /// SHOW A  ZOOMED/LOCKED  MODAL VIEW  MOBILE(CHANGE MOBILEZOOM WITH A CLICK)
  const clickMobileZoom = () => {

    if (showComAddBack) {


      setshowComAddBack(false);
    } else {
      if (idReducer === 0) {

        if (checkSignupPasswordACTIVATE) {
          setcheckSignupPasswordACTIVATE(false);
        } else {
          if (mobileZoom) {
            setCallMobileZoomLimiter(false);
            setMobileZoom(false);
            hideLogo();
          } else {
            setCallMobileZoomLimiter(true);
            setMobileZoom(true);
            hideLogo();
          }
          //setMobileZoom(!mobileZoom);
          if (contentScrollRef.current && contentScrollRef) {
            autoScrollWindowNImage(0);
          }
        }
      } else {

        if (mobileZoom) {

          setCallMobileZoomLimiter(false);
          setMobileZoom(false);
          hideLogo();
        } else {
          setCallMobileZoomLimiter(true);
          setMobileZoom(true);
          hideLogo();
        }
        //setMobileZoom(!mobileZoom);
        if (contentScrollRef.current && contentScrollRef) {
          autoScrollWindowNImage(0);
        }
      }
    }


  };

  ///
  ///
  ///
  ///CHANGE MOBILEZOOM WITH A SCROLL(SCROLL CHANGE LAYOUT)
  const [callMobileZoomLimiter, setCallMobileZoomLimiter] =
    useState<boolean>(false);
  const slideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slide = useCallback(
    (e) => {
      if (contentScrollRef.current.scrollTop <= 0) {
        if (!callMobileZoomLimiter) {
          if (slideTimer.current) {
            clearTimeout(slideTimer.current);
          }
          //slidertimmer makes zoom  wait for some seconds before running
          slideTimer.current = setTimeout(function () {
            setMobileZoom(true);
            hideLogo();
            setCallMobileZoomLimiter(true);
          }, 720);
        }
      } else if (contentScrollRef.current.scrollTop >= 2) {
        if (slideTimer.current) {
          clearTimeout(slideTimer.current);
        }
        if (callMobileZoomLimiter) {
          autoScrollWindowNImage(0);
          setMobileZoom(false);
          hideLogo();
          setCallMobileZoomLimiter(false);
        }
      } else {
      }
    },
    [callMobileZoomLimiter, contentScrollRef, autoScrollWindowNImage]
  );

  ///
  ///
  ///
  ///ACTIVATE MOBILE VIEW TOP SCROLL(ZOOMABLE) ON INITIAL LOAD
  const mobileImageOnLoad = () => {
    hideLogo();
    if (contentScrollRef.current && contentScrollRef) {
      autoScrollWindowNImage(1);
    }
  };

  ///
  ///
  ///
  /// USEREF TARGETS A DIV(BACKGROUND) AND CLOSES MODAL ON CLICK
  const ModalBackgroundRef = useRef<HTMLInputElement>(null);
  const onBackgroundFocus = (e: any): void => {
    if (ModalBackgroundRef.current === e.target) {
      if (aboutTemp) {
        CloseModalForm(0, 2);
        ///updateColor();
      } else {
        CloseModalForm(0, 2);
      }
    }
  };

  ///
  ///
  ///
  /// ESCAPE KEY CLOSE MODAL
  const escapePress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalForm) {
        if (aboutTemp) {
          CloseModalForm(0, 2);
          ////updateColor();
        } else {
          CloseModalForm(0, 2);
        }
      }
    },
    [showModalForm, CloseModalForm, updateColor]
  );
  useEffect(() => {
    document.addEventListener("keydown", escapePress);
    return () => document.removeEventListener("keydown", escapePress);
  }, [escapePress]);

  ///
  ///
  ///
  /// RANDOMISE IMAGE
  const [showimage, setShowimage] = useState<string>(" ");
  useEffect(() => {
    let imagecontrol: number[] = [1, 2, 3, 4, 5, 6];
    var result = null;
    var randomimage =
      imagecontrol[Math.floor(Math.random() * imagecontrol.length)];
    const img = new Image(); ///new image instance
    if (randomimage === 1) {
      result = image1;
    } else if (randomimage === 2) {
      result = image2;
    } else if (randomimage === 3) {
      result = image3;
    } else if (randomimage === 4) {
      result = image4;
    } else if (randomimage === 5) {
      result = image5;
    } else {
      result = image6;
    }
    img.src = result; //src forces a download
    setShowimage(result);
  }, [showimage]);

  ///
  ///
  ///
  /// GET IMAGE WIDTH ,HEIGHT AND SET WIDE IMAGE PC ONLY
  const ModalSlidingImageRef = useRef<HTMLImageElement>(null);
  const ModalImageRef = useRef<HTMLImageElement>(null);

  const [imageHeightoverflow, setImageHeightoverflow] =
    useState<boolean>(false);
  const [MiniLayoutOverFlow, setMiniLayoutOverFlow] = useState<boolean>(false);

  const [wideImage, setWideImage] = useState<boolean>(false);

  const onloadfunc = () => {
    hideLogo();
    if (ModalSlidingImageRef && ModalSlidingImageRef.current) {
      const imageHeight = ModalSlidingImageRef.current.clientHeight;
      const imageWidth = ModalSlidingImageRef.current.clientWidth;
      setcontainerHeight(imageHeight);
      if (imageHeight + (imageWidth / imageHeight) * 3 > screenHeightReducer) {
        setImageHeightoverflow(true);
      } else {
        setImageHeightoverflow(false);
      }

      if (imageWidth > imageHeight + (imageWidth / imageHeight) * 100) {
        setWideImage(true);
      } else {
        setWideImage(false);
      }
    }
  };

  const onimageload = useCallback(
    (e: any) => {
      onloadfunc();
    },
    [screenHeightReducer, DiscussionImage, ModalSlidingImageRef]
  );

  useEffect(() => {
    onloadfunc();
  }, [screenHeightReducer, DiscussionImage, ModalSlidingImageRef]);

  const onloadfuncx = () => {
    hideLogo();
    if (ModalImageRef && ModalImageRef.current) {
      const imageHeight = ModalImageRef.current.clientHeight;
      setcontainerHeight(imageHeight);
      var xx = 0;
      zoomedModal ? (xx = 205) : (xx = 10);
      if (imageHeight - xx > screenHeightReducer) {
        setMiniLayoutOverFlow(true);
      } else {
        setMiniLayoutOverFlow(false);
      }
    }
  };

  useEffect(() => {
    onloadfuncx();
  }, [screenHeightReducer, DiscussionImage, ModalImageRef]);

  const onimageloadx = useCallback(
    (e: any) => {
      onloadfuncx();
    },
    [screenHeightReducer, DiscussionImage, ModalImageRef]
  );

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      id: number;
    };
  }
  const { image, id } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));
  const imageReducer = image;
  const idReducer = id;



  /// DYNAMIC MODAL LAYOUT VARIABLES
  ///
  ///
  ///
  const wideImageControlTrue: string = "75vw";
  const wideImageControlfalse: string = "70vw";
  const zoomImageControl: string = "100vw";
  const GridMiniAwide: IGrid = 8;
  const GridMiniBwide: IGrid = 4;
  const GridMiniAlong: IGrid = 7;
  const GridMiniBlong: IGrid = 5;
  const GridZoomAwide: IGrid = 8;
  const GridZoomBwide: IGrid = 4;
  const GridZoomAlong: IGrid = 6;
  const GridZoomBlong: IGrid = 6;

  let GridHolderA: IGrid = 7;
  let GridHolderB: IGrid = 5;

  let GridxA: IGrid = 7;
  let GridxB: IGrid = 5;

  let GridyA: IGrid = 7;
  let GridyB: IGrid = 5;

  let wideImageControl: string = "70vw";
  let imageReal: string = "75vw";

  let borderGrid: string = "11px";
  var WidthHolder: string = "82%";

  var opacitySlidingModalImage = "0";
  var zIndexModalImageSmall = 10;
  var zIndexModalImageZoom = 0;
  var opacityFixedModalImage = "1";

  var slidingImageWidth = "50%";

  if (zoomedModal) {
    if (imageHeightoverflow) {
      opacitySlidingModalImage = "1";
      zIndexModalImageSmall = 0;
      zIndexModalImageZoom = 10;
      opacityFixedModalImage = "0";
    }

    borderGrid = "0px";

    if (wideImage) {
      slidingImageWidth = "66%";
      WidthHolder = "76%";
      wideImageControl = wideImageControlTrue;
      GridxA = GridZoomAwide;
      GridxB = GridZoomBwide;
    } else {
      slidingImageWidth = "50%";
      WidthHolder = "88%";
      wideImageControl = wideImageControlfalse;
      GridxA = GridZoomAlong;
      GridxB = GridZoomBlong;
    }
    imageReal = zoomImageControl;
    GridHolderA = GridxA;
    GridHolderB = GridxB;
  } else {
    WidthHolder = "82%";
    borderGrid = "11px";

    if (wideImage) {
      wideImageControl = wideImageControlTrue;
      GridyA = GridMiniAwide;
      GridyB = GridMiniBwide;
    } else {
      wideImageControl = wideImageControlfalse;
      GridyA = GridMiniAlong;
      GridyB = GridMiniBlong;
    }
    imageReal = wideImageControl;
    GridHolderA = GridyA;
    GridHolderB = GridyB;
  }
  ///
  ///
  ///
  /// DYNAMIC MODAL LAYOUT VARIABLES

  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />


      {aboutTemp ? (
        showModalForm ? (
          <ModalAboutLayout
            setcheckIfColorChanged={setcheckIfColorChanged}
            showModalForm={showModalForm}
            profilex={profilex}
            slidingImageWidth={slidingImageWidth}
            opacitySlidingModalImage={opacitySlidingModalImage}
            zIndexModalImageZoom={zIndexModalImageZoom}
            ModalBackgroundRef={ModalBackgroundRef}
            onBackgroundFocus={onBackgroundFocus}
            modalanimation={modalanimation}
            modalanimationTwo={modalanimationTwo}
            ModalSlidingImageRef={ModalSlidingImageRef}
            zoomlogmodal={zoomlogmodal}
            onimageload={onimageload}
            borderGrid={borderGrid}
            imageReal={imageReal}
            GridHolderA={GridHolderA}
            zIndexModalImageSmall={zIndexModalImageSmall}
            zoomedModal={zoomedModal}
            setZoomedModal={setZoomedModal}
            opacityFixedModalImage={opacityFixedModalImage}
            formtype={formtype}
            GridHolderB={GridHolderB}
            WidthHolder={WidthHolder}
            checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
            setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
            imagescrollRef={imagescrollRef}
            clickMobileZoom={clickMobileZoom}
            mobileImageOnLoad={mobileImageOnLoad}
            mobileLogmodalanimation={mobileLogmodalanimation}
            mobileZoom={mobileZoom}
            setMobileZoom={setMobileZoom}
            slide={slide}
            contentScrollRef={contentScrollRef}
            showimage={imageReducer}
          />
        ) : null
      ) : commentTemp ? (
        <>
          <Grid
            container
            style={{
              position: "absolute",
              top: "0em",
              transition: "opacity 1.5s",
              display: "flex",
              padding: "0px",
            }}
          >
            <DiscussionFeedBack
              Feedbackshow={Feedbackshow}
              setFeedbackshow={setFeedbackshow}
              FeedBackData={FeedBackData}
              CommentTimer={CommentTimer}
            />
          </Grid>
          (
          <ModalCommentLayout
            keypost={keypost}
            setshowComAddBack={setshowComAddBack}
            showComAddBack={showComAddBack}
            setcommentHistoryScroll={setcommentHistoryScroll}
            setCommentHistoryData={setCommentHistoryData}
            commentHistoryScroll={commentHistoryScroll}
            CommentHistoryData={CommentHistoryData}
            postData={postData}
            scrollLocation={scrollLocation}
            typeEmo={typeEmo}
            connectTemplateGo={connectTemplateGo}
            reactionTemplateGo={reactionTemplateGo}
            containerHeight={containerHeight}
            CommentPostid={CommentPostid}
            CommentTimer={CommentTimer}
            setFeedbackshow={setFeedbackshow}
            setFeedBackData={setFeedBackData}
            wideImage={wideImage}
            MiniLayoutOverFlow={MiniLayoutOverFlow}
            ModalImageRef={ModalImageRef}
            onimageloadx={onimageloadx}
            DiscussionImage={DiscussionImage}
            setcheckIfColorChanged={setcheckIfColorChanged}
            showModalForm={showModalForm}
            profilex={profilex}
            slidingImageWidth={slidingImageWidth}
            opacitySlidingModalImage={opacitySlidingModalImage}
            zIndexModalImageZoom={zIndexModalImageZoom}
            ModalBackgroundRef={ModalBackgroundRef}
            onBackgroundFocus={onBackgroundFocus}
            modalanimation={modalanimation}
            modalanimationTwo={modalanimationTwo}
            ModalSlidingImageRef={ModalSlidingImageRef}
            zoomlogmodal={zoomlogmodal}
            onimageload={onimageload}
            borderGrid={borderGrid}
            imageReal={imageReal}
            GridHolderA={GridHolderA}
            zIndexModalImageSmall={zIndexModalImageSmall}
            zoomedModal={zoomedModal}
            setZoomedModal={setZoomedModal}
            opacityFixedModalImage={opacityFixedModalImage}
            formtype={formtype}
            GridHolderB={GridHolderB}
            WidthHolder={WidthHolder}
            checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
            setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
            imagescrollRef={imagescrollRef}
            clickMobileZoom={clickMobileZoom}
            mobileImageOnLoad={mobileImageOnLoad}
            mobileLogmodalanimation={mobileLogmodalanimation}
            mobileZoom={mobileZoom}
            setMobileZoom={setMobileZoom}
            slide={slide}
            contentScrollRef={contentScrollRef}
            showimage={DiscussionImage[0]}
            imageHeightoverflow={imageHeightoverflow}
          />
          ){" "}
        </>
      ) : showModalForm ? (
        <ModalLogLayout
          slidingImageWidth={slidingImageWidth}
          opacitySlidingModalImage={opacitySlidingModalImage}
          zIndexModalImageZoom={zIndexModalImageZoom}
          ModalBackgroundRef={ModalBackgroundRef}
          onBackgroundFocus={onBackgroundFocus}
          modalanimation={modalanimation}
          modalanimationTwo={modalanimationTwo}
          ModalSlidingImageRef={ModalSlidingImageRef}
          zoomlogmodal={zoomlogmodal}
          onimageload={onimageload}
          borderGrid={borderGrid}
          imageReal={imageReal}
          GridHolderA={GridHolderA}
          zIndexModalImageSmall={zIndexModalImageSmall}
          zoomedModal={zoomedModal}
          showlogo={showlogo}
          opacityFixedModalImage={opacityFixedModalImage}
          formtype={formtype}
          GridHolderB={GridHolderB}
          WidthHolder={WidthHolder}
          checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
          setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
          imagescrollRef={imagescrollRef}
          clickMobileZoom={clickMobileZoom}
          mobileImageOnLoad={mobileImageOnLoad}
          mobileLogmodalanimation={mobileLogmodalanimation}
          mobileZoom={mobileZoom}
          slide={slide}
          contentScrollRef={contentScrollRef}
          showimage={showimage}
        />
      ) : null}
    </>
  );
}

export const CommentTemplate = React.memo(CommentTemplatex);
