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
import { useSpring } from "react-spring";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import SubjectIcon from '@material-ui/icons/Subject';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TheatersIcon from '@material-ui/icons/Theaters';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import SettingsIcon from '@material-ui/icons/Settings';
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";
import {
  UpdateLoader,
  Updatepagenum
} from ".././GlobalActions";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { UpdateSign } from ".././GlobalActions";





function ActualMenux({ showModalFormMenu, setshowModalFormMenu, postData, setsuperSettings, scrollToRef }: any): JSX.Element {



  useEffect(() => {

    setMovePlay(false);
  }, [showModalFormMenu])

  ////
  ////
  ////
  const styles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: showModalFormMenu ? "translateX(0%)" : "translateX(-100%)" },
    config: { tension: 280, friction: 60 }, // You can adjust these for smoother or stiffer animations
  });


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;



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



  var MenuOptions = ["Search", "My Profile", "My Feeds", "Notification", "Showroom", "Playlist", "Gallery", "Setting"];



  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  var menufont = matchMobile ? '3.5vh' : '1.35vw';

  var colr = darkmodeReducer ? "#ffffff" : '#111111';

  var pushh = '1vw';




  const GoToMemberF = () => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));
    dispatch(UserInfoUpdateMEMBER(0));



  };


  const GoToMemberP = () => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));

    dispatch(UserInfoUpdateMEMBER(idReducer));

    //


  };


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
        }, 6000);

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


  return (
    <>



      <animated.div
        onClick={() => {

          setshowModalFormMenu(false);

        }}
        style={{
          ...styles,
          width: '100%',
          height: '100vh',
          backgroundColor: darkmodeReducer ? 'rgb(20, 20, 20, 0.6)' : 'rgb(170, 170, 170, 0.53)',
          position: 'fixed',
          cursor: 'pointer',
          top: 0,
          left: 0
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
              top: '22vh',
              marginLeft: '15.6vw',
              height: 'auto'
            }}
          >

            <img
              onClick={() => {
                setMovePlay(true);

                setTimeout(() => {
                  setshowModalFormMenu(false);
                  scrollToRef();

                }, 1500)

              }}
              className={icon}
              src={logoimage}
              alt="SuperstarZ logo"
              style={{
                textAlign: "center", opacity: matchMobile ? darkmodeReducer ? 0.7 : 0.9 : darkmodeReducer ? 0.3 : 0.5,
                width: '25%', height: '20%'
              }}
            />

          </animated.div >}







          {matchMobile ?

            <animated.div
              style={{
                ...stylesxx,
                position: 'fixed',
                bottom: '22vh',
                marginLeft: '42vw',
                height: 'auto'
              }}
            >
              <img
                onClick={() => {
                  setMovePlay(true);

                  setTimeout(() => {
                    setshowModalFormMenu(false);
                    scrollToRef();

                  }, 1500)

                }}
                className={icon}
                src={logoimage}
                alt="SuperstarZ logo"
                style={{
                  textAlign: "center", opacity: matchMobile ? darkmodeReducer ? 0.4 : 0.7 : darkmodeReducer ? 0.3 : 0.5,
                  width: '30%', height: '20%'
                }}
              />


            </animated.div > : null}











          <Grid
            xs={12} style={{ position: 'fixed', top: matchMobile ? '17.5vh' : '39vh', zIndex: 20, right: '0px', width: '100%' }}>

            <Grid
              xs={12} style={{ width: '100%', alignContent: 'center', display: 'grid', opacity: '0.59' }}>


              {
                MenuOptions.map((Title: string, i: number) => (

                  <span onClick={() => {
                    if (i === 1) {

                      GoToMemberLoaderUpP();

                    }

                    if (i === 2) {

                      GoToMemberLoaderUpF();

                    }


                    if (i === 7) {
                      setsuperSettings(true);
                      setshowModalFormMenu(false);

                    }

                  }} key={i}
                    className={i === 6 || i === 5 || i === 4 || i === 3 || i === 0 ? "dontallowhighlighting " : "click-effect dontallowhighlighting "}
                    style={{
                      padding: '0.8vh',
                      cursor: i === 6 || i === 5 || i === 4 || i === 3 || i === 0 ? 'default' : 'pointer'
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



                    {i === 2 ?
                      <span>
                        <SubjectIcon
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




                    {i === 3 ? <span>
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



                    {i === 4 ? <span>
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



                    {i === 5 ? <span>
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




                    {i === 6 ? <span>
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



                    {i === 7 ? <span>
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
                        fontSize: matchMobile ? '2.42vh' : "1.2vw",

                        marginLeft: matchMobile ? '13vw' : '5vw',
                        opacity: i === 1 || i === 2 || i === 7 ? '1' : '0.3'
                      }}>
                      {Title}
                    </span>
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
