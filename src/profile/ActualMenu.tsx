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
import { UpdateInteract } from "../GlobalActions";
import { useSpring, config } from "react-spring";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

import AdjustIcon from '@material-ui/icons/Adjust';

import FaceIcon from '@material-ui/icons/Face';
import SubjectIcon from '@material-ui/icons/Subject';

import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';


import NotificationsIcon from '@material-ui/icons/Notifications';

import TheatersIcon from '@material-ui/icons/Theaters';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';


import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import SettingsIcon from '@material-ui/icons/Settings';
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";


import CircleIcon from "@mui/icons-material/Circle";


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import {
  UpdateLoader,
  Updatepagenum
} from ".././GlobalActions";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { UpdateSign } from ".././GlobalActions";






function ActualMenux({ showModalFormMenu,
  RandomColor, setshowModalFormMenu, postData, setsuperSettings, scrollToRef,
  WebsiteMode, haltDownload, sethaltDownload,
  setDeferredPrompt,
  deferredPrompt,
  setShowInstallHelp,
  setuptype,
  ActualpostDataAll,
  paperPostScrollRef,
  setUploadGPT,
  profileDataHold
}: any): JSX.Element {


  const [popPlay, setpopPlay] = useState(false);

  useEffect(() => {
    setpopPlay(true);
    setTimeout(() => {
      setpopPlay(false);
    }, 5000)
    setMovePlay(false);
    setPadIndex(-1);
  }, [showModalFormMenu])



  ////
  ////
  ////
  const styles = useSpring({
    from: { transform: 'translateX(-5%)' },
    to: { transform: showModalFormMenu ? 'translateX(0%)' : 'translateX(-5%)' },
    config: config.default,
  });


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  const [PadIndex, setPadIndex] = useState(-1);

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

  const imageReducer = image;
  const idReducer = id;
  const usernameReducer = username;
  const memeberPageidReducer = memeberPageid;
  const MemberProfileDataReducer = MemberProfileData;


  ///
  ///
  ///
  ///DARKMODE FROM REDUX
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      MenuData: String;
      pagenum: number,
      Guest: number
    };
  }
  const { darkmode, MenuData, pagenum, Guest } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const pagenumReducer = pagenum;



  const darkmodeReducer = darkmode;

  const MenuDataReducer = MenuData;

  const GuestReducer = Guest;
  ///
  ///
  ///MUI PAPER STYLES FROM REDUX
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );


  const dispatch = useDispatch();

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



  var MenuOptions = ["Search", 'Upload', "My Profile", "My Feeds", "Notification", "Setting", "Playlist", "Gallery", "Showroom"];



  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  var menufont = matchMobile ? '3.5vh' : '1.35vw';

  var colr = darkmodeReducer ? "#ffffff" : '#111111';

  var pushh = '1vw';

  var pixmyprofile = matchMobile ? '6px' : '8.8px';




  const GoToMemberF = useCallback(() => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));


    var tt = paperPostScrollRef.current.scrollTop;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
      pagenumReducer: 0,
      dataPageNumberState: 0,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 1,
      PostLocal: 1
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: 0,
      innerid: 0,
      pagenumReducer: 0,

      data: postData,
      dataPageNumberState: 0,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 0,
      PostLocal: 0
    };





    window.history.pushState(dd, "", modalName);
    dispatch(UserInfoUpdateMEMBER(0));
    //


  }, [pagenumReducer, memeberPageidReducer, idReducer, MemberProfileDataReducer, usernameReducer, setuptype, ActualpostDataAll, profileDataHold,]);



  const GoToMemberP = useCallback(() => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));



    var tt = paperPostScrollRef.current.scrollTop;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
      pagenumReducer: pagenumReducer,
      dataPageNumberState: setuptype,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 1,
      PostLocal: 1
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: idReducer,
      innerid: 0,
      pagenumReducer: pagenumReducer,

      data: postData,

      dataPageNumberState: setuptype,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 0,
      PostLocal: 0
    };





    window.history.pushState(dd, "", modalName);
    dispatch(UserInfoUpdateMEMBER(idReducer));

    //


  }, [pagenumReducer, memeberPageidReducer, idReducer, MemberProfileDataReducer, usernameReducer, setuptype, ActualpostDataAll, profileDataHold]);


  const GoToMemberLoaderUpP = () => {
    setshowModalFormMenu(false);
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (memeberPageidReducer === idReducer) {
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMemberP();
    }, 1000);
  };


  const GoToMemberLoaderUpF = () => {
    setshowModalFormMenu(false);
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (memeberPageidReducer === idReducer) {
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMemberF();
    }, 1000);
  };


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

  const [MovePlay, setMovePlay] = useState(false);

  const stylesxx = useSpring({
    transform: matchMobile ?
      MovePlay ? "translateX(120%) scale(5)" : "translateX(0%) scale(5)" :
      MovePlay ? "translateX(150%) scale(5)" : "translateX(0%) scale(5)",
    config: { tension: 280, friction: 60 }
  });


  const AnimatedIcon = animated(SlowMotionVideoIcon);

  const [Signup, setSignup] = useState(false);

  const Timerjj = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (Timerjj.current) {
      clearTimeout(Timerjj.current);
    }

    if (showModalFormMenu) {
      if (idReducer === GuestReducer) {


        Timerjj.current = setTimeout(() => {
          setSignup(true)
        }, 1000);

      } else {
        setSignup(false)
      }
    } else {

      setSignup(false)
    }

  }, [showModalFormMenu, idReducer])




  var icon;
  var PaperStyleReducer = "";
  var containerApp = "containerappmobile";
  ///
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  if (matchPc) {
    containerApp = "containerapp";
    icon = "iconPc";

    ///
  } else if (matchTablet) {
    containerApp = "containerapptablet";
    icon = "iconTablet";

    ///
  } else {
    containerApp = "containerappmobile";
    icon = "iconMobile";
  }

  var logoimage;

  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
    logoimage = SuperstarzIconDark;
  } else {
    PaperStyleReducer = PaperStyleLight;
    logoimage = SuperstarzIconLight;
  }



  const media = window.matchMedia('(display-mode: standalone)').matches;
  const navigatorx = (navigator as any).standalone;
  const andref = document.referrer.includes('android-app://');

  const [showDownloadButton, setshowDownloadButton] = useState(false);




  const handleInstallClick = () => {

    setShowInstallHelp(true);
    //alert('kk');
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
      // Show the installation prompt
      (deferredPrompt as any).prompt();

      // Wait for the user to respond to the prompt
      (deferredPrompt as any).userChoice
        .then((choiceResult: { outcome: string }) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation prompt');
            /// setIsPWAInstalled(true);
            /// setWebsiteMode(false);
          } else {
            console.log('User dismissed the installation prompt');
          }
          // Reset the deferredPrompt variable
          setDeferredPrompt(null);
        });
    }
  };

  useEffect(() => {
    if (showModalFormMenu) {

      if ((navigator as any).standalone || window.matchMedia('(display-mode: standalone)').matches) {
        ///setIsPWAInstalled(true);
        /// setWebsiteMode(false); // Hide download button if PWA is already installed


      } else {

        if (haltDownload) { } else {
          setshowDownloadButton(true);

          sethaltDownload(true)
          setTimeout(() => {
            setshowDownloadButton(false);
          }, 6000)
        }
      }

    }

  }, [showModalFormMenu, media, navigatorx, andref, haltDownload]);



  return (
    <>



      <animated.div
        onClick={() => {

          setshowModalFormMenu(false);

        }}
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: darkmodeReducer ? 'rgb(20, 20, 20, 0.5)' : 'rgb(140, 140, 140, 0.43)',
          position: 'fixed',
          cursor: 'pointer',
          top: 0,
          left: 0,
          display: showModalFormMenu ? 'block' : 'none'
        }}
      >

      </animated.div >


      <animated.div
        style={{
          ...styles,
          width: matchMobile ? '54%' : '20%',
          height: '100vh',
          backgroundImage: darkmodeReducer ? PaperStyleDark : PaperStyleLight,
          position: 'fixed',
          top: 0,
          left: 0
        }}
      >

        <Grid
          xs={12}
          className={
            darkmodeReducer
              ? ` ${superFont}  dontallowhighlighting `
              : ` ${superFont}  dontallowhighlighting `
          }
          style={{
            height: '10vh',


          }}>





          <Grid
            xs={12} style={{ position: 'fixed', top: matchMobile ? '3vh' : '5.8vh', zIndex: 1 }}>



            <span
              className={Signup ? "blinken" : ''}

              onClick={() => {
                if (Signup) {
                  dispatch(UpdateSign(true));
                } else { GoToMemberLoaderUpF(); }




              }} style={{ paddingLeft: '2.4vw', cursor: 'pointer' }}>


              < span
                className={
                  darkmodeReducer
                    ? "text-superstarz-dark   text-superstarz-dark-colorA  "
                    : "text-superstarz-light  text-superstarz-light-colorA  "
                }
                style={{
                  color: darkmodeReducer ? "#eeeeee" : "#444444",
                }}
              >
                {Signup ? 'Sign' : 'Clik'}
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
                {Signup ? 'In' : 'Bate'}

              </span>
              <p><h6 style={{ transform: 'scale(0.8)', color: darkmodeReducer ? "#eeeeee" : "#444444", opacity: 0.7, marginLeft: '6vw' }}>Beta</h6></p>


            </span>
          </Grid>


          <Grid
            xs={12} style={{ position: 'fixed', top: matchMobile ? '1.2vh' : '4vh', zIndex: 2, right: '0px' }}>



            <div style={{ paddingRight: '1.2vw', }}>


              <img
                src={`${REACT_APP_CLOUNDFRONT}${image}`}
                title={usernameReducer} onClick={() => {

                  GoToMemberLoaderUpP();


                }} style={{ cursor: 'pointer', width: matchMobile ? '9vh' : '5vw', height: matchMobile ? '9vh' : '5vw', borderRadius: '50%' }} />

            </div>
          </Grid>



          {matchMobile ? null : <animated.div

            style={{
              ...stylesxx,
              position: 'fixed',
              top: '21vh',
              marginLeft: '15.6vw',
              height: 'auto',
              cursor: 'pointer'
            }}
          >

            {showDownloadButton ?
              <button onClick={() => {
                handleInstallClick();
              }} style={{
                borderRadius: '20px',
                marginLeft: '-2.35vw',
                top: '-0.45vw',
                position: 'relative',
                fontSize: '0.18rem',
                padding: '0.7vh', cursor: 'pointer', backgroundColor: darkmodeReducer ? '#333333' : '#0b1728',
                color: darkmodeReducer ? '#ffffff' : '#ffffff'
              }}>




                INSTALL WEB APP
              </button>
              :
              <QueueMusicIcon
                onClick={() => {
                  /// setMovePlay(true);
                  ///setshowModalFormMenu(false);
                  ///scrollToRef();

                  alert('Audio Player , Coming Soon');

                }}
                className={

                  darkmodeReducer
                    ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark"
                    : "  dontallowhighlighting   zuperkingIconPostLight"
                }

                style={{
                  fontSize: '0.7vw',

                  color: darkmodeReducer
                    ? '#ffffff' : '#000000',
                  marginLeft: '-1.47vw'



                }}
              />}
          </animated.div >}







          {matchMobile ?


            <div
              style={{

                position: 'fixed',
                bottom: '15.5%',
                marginLeft: '22vw',
                height: 'auto'
              }}
            >


              <QueueMusicIcon

                onClick={() => {
                  alert('Audio Player , Coming Soon');



                }}

                className={

                  darkmodeReducer
                    ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark"
                    : "  dontallowhighlighting  zuperkingIconPostLight"
                }

                style={{
                  fontSize: '6vh',

                  color: darkmodeReducer
                    ? '#ffffff' : '#000000',
                  position: 'relative',


                }}
              />




            </div >



            : null}











          <Grid
            xs={12} style={{
              position: 'fixed', top: matchMobile ? '13vh' : '36vh', zIndex: 20, right: '0px',
              width: '100%', height: matchMobile ? '58.2%' : '59%', overflow: 'auto',
            }}>

            <Grid
              xs={12} style={{ width: '100%', alignContent: 'center', display: 'grid', opacity: '0.59', padding: '5px' }}>


              {
                MenuOptions.map((Title: string, i: number) => (

                  <span onClick={() => {

                    setPadIndex(i);



                    if (i === 2) {

                      GoToMemberLoaderUpP();

                    }

                    if (i === 3) {

                      GoToMemberLoaderUpF();

                    }


                    if (i === 5) {
                      setsuperSettings(true);
                      setshowModalFormMenu(false);

                    }

                    if (i === 1) {

                      if (matchMobile) {

                        alert('coming soon to Mobile ');
                      } else {
                        setUploadGPT(true);
                        setshowModalFormMenu(false);
                      }
                    }

                  }} key={i}
                    className={i === 7 || i === 6 || i === 8 || i === 4 || i === 0 ? "dontallowhighlighting " : "click-effect dontallowhighlighting "}
                    style={{


                      borderRadius: '0%',
                      padding: '1vh',
                      cursor: i === 6 || i === 8 || i === 4 || i === 0 ? 'default' : 'pointer'
                    }}>





                    {i === 0 ? <span>
                      <SearchIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3',

                        }}
                      />
                    </span> : null}


                    {i === 1 ? <span>
                      <AdjustIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: 'red',
                          opacity: 1,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)',

                        }}
                      />
                    </span> : null}



                    {i === 2 ? <span>
                      <FaceIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3',

                        }}
                      />
                    </span> : null}



                    {i === 3 ?
                      <span>
                        <HorizontalSplitIcon
                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                              : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                          }
                          style={{
                            color: colr,
                            fontSize: menufont,
                            marginLeft: pushh,
                            paddingTop: matchMobile ? '11px' : '',
                            transform: 'scale(1.9)', opacity: '0.3',

                          }}
                        />
                      </span>
                      : null}




                    {i === 4 ? <span>
                      <NotificationsIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3'
                        }}
                      />
                    </span>

                      : null}



                    {i === 8 ? <span>
                      <TheatersIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3'
                        }}
                      />
                    </span> : null}



                    {i === 6 ? <span>
                      <QueueMusicIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3'
                        }}
                      />
                    </span> : null}




                    {i === 7 ? <span>
                      <PhotoAlbumIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: darkmodeReducer ? "#ffffff" : '#777777',
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3'

                        }}
                      />
                    </span> : null}



                    {i === 5 ? <span>
                      <SettingsIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          paddingTop: matchMobile ? '11px' : '',
                          transform: 'scale(1.9)', opacity: '0.3',





                        }}
                      />
                    </span> : null}



                    <span
                      style={{
                        color: colr,
                        fontSize: matchMobile ? '2vh' : "1vw",
                        marginLeft: matchMobile ? '13vw' : '5vw',
                        fontFamily: "Roboto, Arial, Helvetica, sans-serif",

                        opacity: i === 1 || i === 2 || i === 3 || i === 5 ? '1' : '0.3'
                      }}>
                      {Title}
                    </span>
                    <Grid item xs={12} style={{
                      height: '5px',

                      padding: '0px',
                      backgroundImage: PadIndex === i ? `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :
                        PadIndex !== -1 ? '' :
                          memeberPageidReducer === 0 && i === 3 ? darkmodeReducer ? `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :
                            `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :
                            memeberPageidReducer !== 0 && i === 2 && idReducer === memeberPageidReducer ? darkmodeReducer ? `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :
                              `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` : 'none',

                    }}></Grid>
                  </span>
                ))
              }


            </Grid>



          </Grid>


        </Grid >




      </animated.div >
    </>
  );
}

export const ActualMenu = React.memo(ActualMenux);
