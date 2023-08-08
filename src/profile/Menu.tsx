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
import { UpdateOptionsTop } from ".././GlobalActions";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

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
  setselectedImage

}: any) {
  ///
  ///
  ///
  /// USE DISPATCH
  const dispatch = useDispatch();

  const [shownav, setShownav] = useState<boolean>(true);

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

  ///
  ///
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

  //
  //
  //
  //USE SLIDE DOWN ANIMATION FROM REACT SPRING
  const animationmenu = useSpring({
    config: {
      duration: 80,
    },
    opacity: shownav ? 1 : 0,
    transform: shownav ? `translateY(-108%)` : `translateY(100%)`,
    height: "0px",
  });

  const jayme = useCallback(() => {


    var datascroll: number = matchPc
      ? paperPostScrollRef.current.scrollTop
      : paperPostScrollRef.current.scrollTop;

    setstartPostScroll(datascroll);


    if (menuTimer5.current) {
      clearTimeout(menuTimer5.current);
    }


    if (menuTimer2.current) {
      clearTimeout(menuTimer2.current);
    }

    menuTimer5.current = setTimeout(function () {
      setShownav(true);
      menuTimer2.current = setTimeout(function () {
        setShownav(false);
      }, 2800);
    }, 1250);







  }, [
    miniLayoutPost,
    window.scrollY,
    shownav,
    paperPostScrollRef,
    endPostScroll,
    callstartonce,
    startPostScroll,
    shownavTop,
    haltedTop,
    HidePostDataOnScroll,
  ]);

  useEffect(() => {
    matchPc
      ? paperPostScrollRef.current.addEventListener("scroll", jayme)
      : paperPostScrollRef.current.addEventListener("scroll", jayme);

    return () => {
      matchPc
        ? paperPostScrollRef.current.removeEventListener("scroll", jayme)
        : paperPostScrollRef.current.removeEventListener("scroll", jayme);
    };
  }, [jayme]);






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
                <Grid xs={12} item style={{ padding: "0px" }}>
                  <Grid
                    item
                    component={Box}
                    display={{ xs: "none", md: "block" }}
                    md={2}
                  ></Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                      padding: "0px",
                      paddingRight: matchPc ? "0.8vw" : "0px",
                    }}
                  >
                    <OptionsSlider
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
              <Grid
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
                    marginTop: matchPc ? "-90vh" : "-60Vh",
                  }}
                >
                  <animated.div style={animationmenu}>
                    <span
                      onClick={(e: any) => {
                        ////dispatch(UpdateOptionsTop(true));
                      }}
                      className={
                        darkmodeReducer
                          ? `menutopdark ${superFont} turdark zupermenudark  zuperkingIconPostLight `
                          : `menutoplight ${superFont} turlight zupermenulight   zuperkingIconPostLightx`
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
                      </span>
                    </span>
                  </animated.div>
                </Grid>{" "}
              </Grid>
            </>
          )}
        </>
      ) : null}
    </>
  );
}

export const Menu = React.memo(Menux);
