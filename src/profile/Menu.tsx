import React, { useRef, useState, useEffect, useCallback } from "react";
import { Grid, Box } from "@material-ui/core";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AllOutIcon from "@mui/icons-material/AllOut";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CircleIcon from "@mui/icons-material/Circle";
import { OptionsSlider } from "./OptionsSlider";
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";
import { UpdateOptionsTop, SnapToggleAction } from ".././GlobalActions";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

import { UpdateMenuNav } from "../GlobalActions";

function Menux({
  paperPostScrollRef,
  getSliderWidth,
  OpenUploadModal,
  showModalUpload,
  HidePostDataOnScroll,
  setsuperSettings,
  setx,
  x,
  setminiLayoutPost,
  miniLayoutPost,
  setSliderIndexMini,
  setzoomClickedIndex,
  setminiProfile,
  miniProfile,
  selectedImage,
  setselectedImage,
  postData,
  callfeeds,
  setShowModalFormMenu,
  ShowBigPlay,
  showModalFormMenu,
  shownav,
  setShownav,
  showModalForm

}: any) {
  ///
  ///
  ///
  /// USE DISPATCH
  const dispatch = useDispatch();


  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;




  const [shownavTop, setShownavTop] = useState<boolean>(true);

  const [haltedTop, sethaltedTop] = useState<boolean>(false);


  const [startPostScroll, setstartPostScroll] = useState<number>(0);
  const [callstartonce, setcallstartonce] = useState<boolean>(false);
  const [callstartoncex, setcallstartoncex] = useState<boolean>(false);
  const [callendonce, setcallendonce] = useState<boolean>(false);
  const [endPostScroll, setendPostScroll] = useState<number>(0);
  const menuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer4 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer5 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);


  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      MenuData: String;
      Guest: number,

    };
  }
  const { darkmode, MenuData, Guest } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const MenuDataReducer = MenuData;

  const GuestReducer = Guest;



  ///
  ///
  ///
  ///DARKMODE FROM REDUX
  interface RootoptinstopshowingReducer {
    OptionsTopShowReducer: {
      optinstopshowing: boolean;
    };
  }
  const { optinstopshowing } = useSelector(
    (state: RootoptinstopshowingReducer) => ({
      ...state.OptionsTopShowReducer,
    })
  );
  const optinstopshowingReducer = optinstopshowing;
  ///
  ///
  ///
  ///


  const [isSafariaa, setisSafariaa] = useState(false);
  useEffect(() => {

    if (isSafari) { setisSafariaa(true) } else { setisSafariaa(false) }
  }, [isSafari])

  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);




  //
  //
  //isSafari
  //USE SLIDE DOWN ANIMATION FROM REACT SPRING


  const [shownav2, setshownav2] = useState(false);

  const [halt, sethalt] = useState(false);

  useEffect(() => {


    if (menuTimer3.current) {
      clearTimeout(menuTimer3.current);
    }

    if (shownav) {
      setshownav2(true);
    } else {



      menuTimer3.current = setTimeout(() => { setshownav2(false); }, 2000)

    }
  }, [shownav])


  const animationmenu = useSpring({
    config: {
      duration: 500,
    },
    opacity: shownav ? 1 : 0,
    marginTop: shownav2 ? `0vh` : `-60vh`,

  });





  const jayme = useCallback((e: any) => {

    if (menuTimer5.current) {
      clearTimeout(menuTimer5.current);
    }


    if (menuTimer2.current) {
      clearTimeout(menuTimer2.current);
    }

    menuTimer5.current = setTimeout(function () {

      if (ShowBigPlay) { } else {
        ///dispatch(UpdateMenuNav(true));
        setShownav(true);
        /// dispatch(SnapToggleAction(false))
      }
      menuTimer2.current = setTimeout(function () {
        setShownav(false);
        /// dispatch(SnapToggleAction(true));

      }, 2400);
    }, 1000);







  }, [ShowBigPlay]);



  ///



  useEffect(() => {
    const handleScroll = (e: any) => {
      jayme(e); // Call your jayme function here
    };

    const paperPostScrollRefCurrent = paperPostScrollRef.current;
    if (paperPostScrollRefCurrent) {
      paperPostScrollRefCurrent.addEventListener("scroll", handleScroll);

      return () => {
        paperPostScrollRefCurrent.removeEventListener("scroll", handleScroll);
      };
    }
  }, [paperPostScrollRef, jayme]);




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

  const idReducer = id;
  const [Signup, setSignup] = useState(false);

  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {


    if (idReducer === GuestReducer) {

      if (Timer.current) {
        clearTimeout(Timer.current);
      }

      Timer.current = setTimeout(() => {
        setSignup(true)
      }, 10000);

    } else {
      setSignup(false)
    }

  }, [MenuDataReducer, idReducer])



  var superFont = "";

  if (matchPc) {
    superFont = "super-starz-text-Pcx";

    ///
  } else if (matchTablet) {
    superFont = "super-starz-text-Tabletx";

    ///
  } else {
    superFont = "super-starz-text-Mobilex";
  }

  return (
    <>
      {shownavTop ? (
        <>
          {optinstopshowingReducer ? (
            <>
              {" "}
              <Grid
                container
                style={{
                  position: "fixed",
                  width: "100%",
                  height: "0px",
                  zIndex: 11,
                }}
              >
                <Grid xs={12} item style={{ padding: "0px", height: "0px", }}>
                  <Grid
                    item
                    component={Box}
                    display={{ xs: "none", md: "block" }}
                    md={2}
                    style={{ padding: "0px", height: "0px", }}
                  ></Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                      padding: "0px",
                      height: "0px",
                      paddingRight: matchPc ? "0.8vw" : "0px",
                    }}
                  >
                    <OptionsSlider
                      callfeeds={callfeeds}
                      postData={postData}
                      selectedImage={selectedImage}
                      setselectedImage={setselectedImage}
                      setsuperSettings={setsuperSettings}
                      typeUpload={0}
                      showModalUpload={showModalUpload}
                      OpenUploadModal={OpenUploadModal}
                      sethaltedTop={sethaltedTop}
                      typeTop={true}
                      getSliderWidth={getSliderWidth}
                    />
                  </Grid>
                </Grid>{" "}
              </Grid>
            </>
          ) : (
            <>
              {showModalFormMenu ? null :
                ShowBigPlay ? null : <Grid
                  container
                  style={{
                    bottom: "7.4vh",
                    position: "fixed",
                    width: "100%",
                    height: "0px",
                    zIndex: 10,
                    opacity: "1",
                  }}
                >
                  {" "}
                  <Grid item xs={1} md={2} style={{ height: "0px" }}></Grid>


                  <Grid
                    item
                    xs={8}
                    md={8}
                    style={{
                      height: "0px",
                      marginTop: matchPc ? "-90vh" : isSafariaa ? '-79vh' : "-76vh",

                    }}
                  >
                    {MenuDataReducer === '' ? <>

                      <animated.div style={{ ...animationmenu, height: '0px', }}>
                        <span
                          onClick={(e: any) => {
                            ////dispatch(UpdateOptionsTop(true));
                            setShowModalFormMenu(true);
                          }}
                          className={
                            darkmodeReducer
                              ? `menutopdark ${superFont} turdark zupermenudark  dontallowhighlighting zuperkingIconPostLight `
                              : `menutoplight ${superFont} turlight zupermenulight  dontallowhighlighting zuperkingIconPostLightx`
                          }
                          style={{
                            marginLeft: matchPc
                              ? "10px"
                              : matchTablet
                                ? "30px"
                                : "10px",
                            paddingTop: "11px",
                            paddingBottom: "13px",
                            paddingLeft: matchPc ? "1.5vw" : "5vw",
                            paddingRight: matchPc ? "1.5vw" : "5vw",
                            borderRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            cursor: "pointer",
                            height: "0px",
                          }}
                        >

                          <>     < span
                            className={
                              darkmodeReducer
                                ? "text-superstarz-dark   text-superstarz-dark-colorA  "
                                : "text-superstarz-light  text-superstarz-light-colorA  "
                            }
                            style={{
                              color: darkmodeReducer ? "#eeeeee" : "#444444",
                            }}
                          >
                            Clik
                          </span>
                            {' '}
                            <span
                              style={{
                                color: darkmodeReducer ? "#ffe680" : "#ffcc00",
                                opacity: darkmodeReducer ? "1" : "1",

                              }}
                              className={
                                darkmodeReducer
                                  ? "text-superstarz-dark     text-superstarz-dark-colorB  "
                                  : "text-superstarz-light   text-superstarz-light-colorB   "
                              }
                            >
                              Bate
                            </span></>


                        </span>
                      </animated.div>  </> :


                      MenuDataReducer ? <> <animated.div style={{ ...animationmenu, height: '0px' }}>
                        <span
                          onClick={(e: any) => {
                            ////dispatch(UpdateOptionsTop(true));
                            setShowModalFormMenu(true);
                          }}
                          className={
                            darkmodeReducer
                              ? `menutopdark ${superFont} turdark zupermenudark  dontallowhighlighting zuperkingIconPostLight `
                              : `menutoplight ${superFont} turlight zupermenulight   dontallowhighlighting  zuperkingIconPostLightx`
                          }
                          style={{
                            marginLeft: matchPc
                              ? "10px"
                              : matchTablet
                                ? "30px"
                                : "10px",
                            paddingTop: "11px",
                            paddingBottom: "13px",
                            paddingLeft: matchPc ? "1.5vw" : "5vw",
                            paddingRight: matchPc ? "1.5vw" : "5vw",
                            borderRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            cursor: "pointer",
                            height: "0px",
                          }}
                        >



                          <span
                            className={
                              darkmodeReducer
                                ? "text-superstarz-dark   text-superstarz-dark-colorA  "
                                : "text-superstarz-light  text-superstarz-light-colorA  "
                            }
                            style={{
                              color: darkmodeReducer ? "#eeeeee" : "#444444",
                            }}
                          >
                            {Signup ? 'Sign In' : MenuDataReducer}
                          </span>


                        </span>

                      </animated.div></> : null
                    }

                  </Grid>{" "}
                </Grid>
              }

            </>
          )}
        </>
      ) : null
      }
    </>
  );
}

export const Menu = React.memo(Menux);
