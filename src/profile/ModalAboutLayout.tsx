import React, { useState, useEffect, useRef } from "react";

import { animated } from "react-spring";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";

import { Scrollbars } from "react-custom-scrollbars-2";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { AboutColor } from "./AboutColor";

import { AboutFormHolder } from "./AboutFormHolder";
import { ServerError } from "../log/ServerError";

import { RootStateOrAny, useSelector } from "react-redux";
import "./../log/logCss.css";

import { DialogContent, Paper, Grid } from "@material-ui/core";

function ModalAboutLayoutx({
  slidingImageWidth,
  opacitySlidingModalImage,
  zIndexModalImageZoom,
  ModalBackgroundRef,
  onBackgroundFocus,
  modalanimation,
  modalanimationTwo,
  ModalSlidingImageRef,
  zoomlogmodal,
  onimageload,
  borderGrid,
  imageReal,
  GridHolderA,
  zIndexModalImageSmall,
  zoomedModal,
  opacityFixedModalImage,
  formtype,
  GridHolderB,
  WidthHolder,
  checkSignupPasswordACTIVATE,
  setcheckSignupPasswordACTIVATE,
  imagescrollRef,
  clickMobileZoom,
  mobileImageOnLoad,
  mobileLogmodalanimation,
  mobileZoom,
  slide,
  contentScrollRef,
  showimage,
  setMobileZoom,
  setZoomedModal,
  profilex,
  showModalForm,
  setcheckIfColorChanged,
}: any): JSX.Element {
  ///
  ///
  ///
  /// SENDING LOGIN  DATA TO SERVER SIDE
  const [serverErrorData, setServerErrorData] = useState<string | null>(null);
  const [serverErrorDisplay, setServerErrorDisplay] = useState<number>(4);
  const [serverEmojiplain, setserverEmojiplain] = useState<boolean>(true);

  const [sex, setsex] = useState<any>(null);

  ///
  ///
  ///FORCE ABOUT PAGE INITIAL ZOOME STATE BASED ON DEVICE TYPE
  useEffect(() => {
    setMobileZoom(true);
    setZoomedModal(false);
  }, []);

  ///
  ///
  ///CALL THIS ON MOBILE ZOOM CHANGE
  useEffect(() => {
    if (mobileZoom) {
      setshowlogo(false);
    } else {
      setshowlogo(false);
      setTimeout(function () {
        setshowlogo(true);
      }, 1000);
    }
  }, [mobileZoom]);

  ///
  ///
  ///FADE SLIDING IMAGE
  var fadeSlidingimage = "fadermodal-imageslider";
  if (opacitySlidingModalImage === "0") {
    fadeSlidingimage = "";
  } else {
    fadeSlidingimage = "fadermodal-imageslider-zoomload";
    setTimeout(function () {
      fadeSlidingimage = "fadermodal-imageslider";
    }, 1600);
  }

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
  /// GET DARKMODE FROM REDUX STORE
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

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      imageThumb: string;
      biography: string;
    };
  }
  const { image, imageThumb, biography } = useSelector(
    (state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    })
  );
  const imageReducer = image;
  const imageReducerThumb = imageThumb;
  const biographyReducer = biography;

  const [showlogo, setshowlogo] = useState<boolean>(true);

  const reft: any = useRef(null);

  ///
  ///
  ///
  /// MUI PAPER STYLES FROM REDUX
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );

  var PaperStyleReducer = " ";
  var textback = "";

  ///
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DARKMODE
  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
    textback = "caption-dark";
  } else {
    PaperStyleReducer = PaperStyleLight;
    textback = "caption-light";
  }

  //////////////   CONDITIONAL STATEMENT FOR DEVICE TYPES
  var formHolder = "";

  var EditIconTop = "";
  var EditIconRight = "";
  var EditIconLeft = "";
  var aboutInfoFont = "";

  if (matchTablet) {
    formHolder = "formholderTablet";

    EditIconTop = "4vh";
    EditIconLeft = "4vw";
    EditIconRight = "";
    aboutInfoFont = "3.5vh";
  } else {
    formHolder = "formholder";

    if (matchMobile) {
      EditIconTop = "8vh";
      EditIconRight = "4vw";
      EditIconLeft = "4vh";
      aboutInfoFont = "2.6vh";
    }
  }
  //////////////   CONDITIONAL STATEMENT FOR DEVICE TYPES

  const click = (event: any) => {
    event.target.value = null;
  };

  return (
    <>
      <input
        onClick={click}
        onChange={profilex}
        type="file"
        name="superImages"
        accept="image/*"
        multiple
        id="profilexx"
        style={{ visibility: "hidden" }}
      />
      {
        matchPc /*PC PC PC PC PC PC PC PC PPC PC PC PC PC PC PC PC PC PC PC PC
      PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC C */ ? (
          <DialogContent
            style={{
              position: "relative",
              paddingLeft: "0px",
              height: "100%",
              zIndex: 100,
            }}
          >
            <ServerError
              device="pc"
              serverEmojiplain={serverEmojiplain}
              setServerErrorData={setServerErrorData}
              serverErrorDisplay={serverErrorDisplay}
              serverErrorData={serverErrorData}
            />

            <DialogContent
              className={`${fadeSlidingimage} modalImageCustomSlider FormDialog-containerx dontallowhighlighting`}
              onClick={onBackgroundFocus}
              style={{
                overflow: "auto",
                cursor: "pointer",
                height: "101%",
                padding: "0px",
                width: slidingImageWidth,
                opacity: opacitySlidingModalImage,
                zIndex: zIndexModalImageZoom,
              }}
              ref={ModalBackgroundRef}
            >
              {" "}
              <Scrollbars>
                <animated.div style={modalanimationTwo}>
                  <img
                    ref={ModalSlidingImageRef}
                    onClick={zoomlogmodal}
                    onLoad={onimageload}
                    src={imageReducer}
                    className="modalImageStylex"
                    style={{
                      opacity: opacitySlidingModalImage,
                    }}
                    alt="Logzoom"
                  />
                </animated.div>
              </Scrollbars>
            </DialogContent>

            <DialogContent
              className={
                darkmodeReducer
                  ? "fadermodal FormDialog-container modal-containerDark dontallowhighlighting"
                  : "fadermodal FormDialog-container modal-containerLight dontallowhighlighting"
              }
              onClick={onBackgroundFocus}
              style={{ overflow: "hidden", cursor: "pointer", height: "101%" }}
              ref={ModalBackgroundRef}
            >
              <animated.div style={modalanimation}>
                <Paper
                  style={{
                    backgroundImage: PaperStyleReducer,
                    borderRadius: borderGrid,
                    cursor: "default",
                  }}
                >
                  <Grid
                    container
                    className="containerStyle"
                    style={{
                      width: imageReal,
                      borderRadius: borderGrid,
                    }}
                  >
                    <Grid
                      item
                      xs={GridHolderA}
                      style={{ zIndex: zIndexModalImageSmall }}
                    >
                      {" "}
                      <Grid
                        item
                        xs={4}
                        style={{
                          zIndex: zIndexModalImageSmall,
                          position: "fixed",
                          top: "47%",
                          left: "1.3vw",
                          fontSize: zoomedModal ? "1.7vw" : "1.5vw",
                          backgroundColor: "",
                          width: "100%",
                          height: "200px",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bold",
                          lineHeight: 1.48,
                          overflow: "hidden",
                          padding: "5px",
                        }}
                      >
                        {" "}
                        <span
                          style={{
                            color: darkmodeReducer ? "#eeeeee" : "#0b111b",
                          }}
                          className={textback}
                        >
                          <span style={{ opacity: 0.8 }}>
                            {" "}
                            Hi there , i love life and want to make it better.
                            Try to stay positive when you feel down. Smile
                          </span>
                        </span>
                      </Grid>
                      <Grid
                        item
                        className="turabt"
                        style={{
                          color: "#ffffff",
                          fontSize: "2.9vw",
                          position: "fixed",
                          width: "20%",
                          top: "0vh",
                          left: zoomedModal ? "15%" : "20%",
                          height: "0.4vh",
                          backgroundColor: colorReducer,
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                      >
                        {" "}
                      </Grid>
                      <label htmlFor="profilexx">
                        <AddPhotoAlternateIcon
                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                              : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                          }
                          style={{
                            color: "#ffffff",
                            fontSize: "2.9vw",
                            position: "fixed",
                            opacity: zoomedModal ? 0.3 : 0.4,
                            top: "4vh",
                            left: zoomedModal ? "1.8vw" : "8.8vw",
                          }}
                        />{" "}
                      </label>
                      <EditTwoToneIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                          color: "#ffffff",
                          fontSize: "2.9vw",
                          position: "fixed",
                          opacity: zoomedModal ? 0.3 : 0.4,
                          top: zoomedModal ? "3vh" : "4vh",
                          right: zoomedModal ? "1.5vw" : "",
                          left: zoomedModal ? "" : "1.8vw",
                        }}
                      />{" "}
                      <img
                        ref={reft}
                        onClick={zoomlogmodal}
                        src={imageReducer}
                        className="modalImageStyle"
                        style={{
                          opacity: opacityFixedModalImage,
                          borderTopLeftRadius: borderGrid,
                          borderBottomLeftRadius: borderGrid,
                        }}
                        alt="Logsmall"
                      />
                    </Grid>

                    <Grid item xs={GridHolderB} style={{}}>
                      <Grid
                        xs={12}
                        item
                        className="formholder"
                        style={{
                          padding: "0px",
                          marginTop: zoomedModal ? "5vh" : "0px",
                        }}
                      >
                        <AboutColor
                          setcheckIfColorChanged={setcheckIfColorChanged}
                          zoomed={zoomedModal}
                          showModalForm={showModalForm}
                        />
                      </Grid>

                      <Grid
                        xs={12}
                        item
                        className="formholder"
                        style={{ padding: zoomedModal ? "15vh" : "0px" }}
                      >
                        <Grid
                          item
                          xs={12}
                          className="center-content-vertically"
                          style={{
                            marginTop: "10px",
                            padding: "0px",
                            paddingTop: "10vh",
                          }}
                        >
                          <AboutFormHolder
                            zoomedModal={zoomedModal}
                            WidthHolder={WidthHolder}
                            loginForm={false}
                            setServerErrorData={setServerErrorData}
                            setServerErrorDisplay={setServerErrorDisplay}
                            setserverEmojiplain={setserverEmojiplain}
                            checkSignupPasswordACTIVATE={
                              checkSignupPasswordACTIVATE
                            }
                            setcheckSignupPasswordACTIVATE={
                              setcheckSignupPasswordACTIVATE
                            }
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </animated.div>
            </DialogContent>
          </DialogContent>
        ) : (
          /*PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC
      PC PC PC PC PC PC PC PC PC PC PC PC */ /*MOBILE MOBILE MOBILE MOBILE
      MOBILE MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE
      MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE
      MOBILE MOBILE MOBILE*/
          <DialogContent
            className="Hide-mobile-Scrollbar  fadermodal FormDialog-container-mobile dontallowhighlighting"
            ref={imagescrollRef}
            style={{
              overflow: "auto",
              cursor: "pointer",
              padding: "0px",
              zIndex: 100,
              backgroundImage: PaperStyleReducer,
            }}
          >
            <animated.div style={modalanimation}>
              <Paper
                style={{
                  cursor: "default",
                  backgroundColor: "rgba(0,0,0,0.0)",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    className="yyy"
                    style={{
                      marginTop: "0.5px",
                      height: "auto",
                    }}
                  >
                    <animated.img
                      onClick={clickMobileZoom}
                      onLoad={mobileImageOnLoad}
                      src={`${imageReducer}`}
                      className="modalMobileImageStyle slow-Div-Change"
                      alt="SuperstarZ"
                      style={mobileLogmodalanimation}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={mobileZoom ? "zoomMobile" : "smallMobile"}
                  >
                    {" "}
                    <Paper
                      className="Hide-mobile-Scrollbar "
                      onScroll={slide}
                      ref={contentScrollRef}
                      style={{
                        overflow: "auto",
                        backgroundColor: "rgba(0,0,0,0.0)",
                        cursor: "default",
                        height: "95vh",
                        borderRadius: "0px",
                        marginTop: "-1.9px",
                      }}
                    >
                      {" "}
                      <Grid
                        item
                        xs={7}
                        sm={6}
                        style={{
                          zIndex: zIndexModalImageSmall,
                          position: "fixed",
                          top: "20%",
                          left: "3.3vw",
                          fontSize: aboutInfoFont,
                          backgroundColor: "",
                          width: "100%",
                          height: "200px",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bold",
                          lineHeight: matchTablet ? 1.6 : 1.65,
                        }}
                      >
                        {" "}
                        <span
                          style={{
                            color: darkmodeReducer ? "#dddddd" : "#0b111b",
                          }}
                          className={textback}
                        >
                          Hi there , i love life and want to make it better. Try
                          to stay positive when you feel down. Smile
                        </span>
                      </Grid>
                      <EditTwoToneIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkinginfo "
                            : "make-small-icons-clickable-lightab  dontallowhighlightingzuperkinginfo  "
                        }
                        style={{
                          color: "#ffffff",
                          fontSize: matchTablet ? "5.8vh" : "  4.8vh",
                          position: "fixed",
                          display: mobileZoom ? "none" : "block",
                          opacity: showlogo ? "" : "0",
                          top: mobileZoom ? "0vh" : EditIconTop,
                          right: mobileZoom ? "0vw" : EditIconRight,
                          left: mobileZoom ? "0vw" : EditIconLeft,
                        }}
                      />{" "}
                      <Grid item xs={12} style={{ height: "6vh" }}></Grid>{" "}
                      <Grid xs={12} item className={formHolder}>
                        <Grid item xs={12}>
                          <AboutColor zoomed={mobileZoom} />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} style={{ height: "60vh" }}></Grid>{" "}
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </animated.div>
          </DialogContent>
        ) /*MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE
      MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE MOBILE
      MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE*/
      }
    </>
  );
}

export const ModalAboutLayout = React.memo(ModalAboutLayoutx);
