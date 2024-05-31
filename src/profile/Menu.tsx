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
import BlurCircularIcon from '@material-ui/icons/BlurCircular';

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
  showModalForm,
  WebsiteMode

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

  const [HideClickOnce, setHideClickOnce] = useState(true);


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

      menuTimer3.current = setTimeout(() => { setshownav2(false); }, 1700)
    }
  }, [shownav])


  const animationmenu = useSpring({
    config: {
      duration: 500,
    },
    opacity: shownav ? 1 : 0,
    marginTop: shownav2 ? `0vh` : `15vh`,

  });


  const [allow, setallow] = useState(true);


  const jayme = useCallback((e: any) => {


    if (shownav) {


      if (allow) {

      } else {


        menuTimer2.current = setTimeout(function () {
          setShownav(false);


        }, 3000);
      }


    } else {
      if (allow) {
        setShownav(true);
        setallow(false);
      } else {

      }


    }


    if (menuTimer5.current) {

      clearTimeout(menuTimer5.current);
    }



    menuTimer5.current = setTimeout(function () {

      if (ShowBigPlay) { } else {
        ///dispatch(UpdateMenuNav(true));
        setShownav(false);
        setallow(true);
        /// dispatch(SnapToggleAction(false))
      }

    }, 2000);







  }, [ShowBigPlay, shownav, allow]);



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

          <>
            {showModalFormMenu ? null :
              ShowBigPlay ? null : <Grid
                container
                style={{
                  bottom: "44vh",
                  position: "fixed",
                  width: "100%",
                  height: "0px",
                  zIndex: 10,
                  opacity: "1",
                }}
              >
                {" "}



                <Grid
                  item
                  xs={8}
                  md={8}
                  style={{
                    height: "0px",
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "left",
                    textAlign: "left",



                  }}
                >
                  <animated.div style={{ ...animationmenu, height: '0px', marginLeft: matchMobile ? '11vw' : '2.6vw' }}>
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

                      }}
                    >




                      <BlurCircularIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                            : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "
                        }

                        style={{
                          color: darkmodeReducer
                            ? "#ffffff"
                            : "#000000",
                          transform: matchMobile ? 'scale(3.4)' : 'scale(4)',
                          transition: "transform 0.1s",
                          zIndex: 30,
                          backgroundColor: darkmodeReducer
                            ? "rgba(41,41,41,0.86)"
                            : "rgba(205,205,205,0.9) ",
                          cursor: "pointer",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bolder",
                          opacity: 1,
                          padding: "4px",

                        }}
                      />

                    </span>
                  </animated.div>

                </Grid>{" "}
              </Grid>
            }

          </>

        </>
      ) : null
      }
    </>
  );
}

export const Menu = React.memo(Menux);
