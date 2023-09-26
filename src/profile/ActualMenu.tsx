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
import SubjectIcon from '@material-ui/icons/Subject';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TheatersIcon from '@material-ui/icons/Theaters';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  UpdateLoader,

} from ".././GlobalActions";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";

function ActualMenux({ showModalFormMenu, setshowModalFormMenu, postData, setsuperSettings }: any): JSX.Element {
  const styles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: showModalFormMenu ? "translateX(0%)" : "translateX(-100%)" },
    config: { tension: 280, friction: 60 }, // You can adjust these for smoother or stiffer animations
  });


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



  var MenuOptions = ["Search", "Profile", "My Feeds", "Notification", "Showroom", "Playlist", "Gallery", "Setting"];



  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  var menufont = '1.35vw';

  var colr = darkmodeReducer ? "#ffffff" : '#111111';

  var pushh = '1vw';




  const GoToMemberF = () => {
    dispatch(UserInfoUpdateMEMBER(-1));
    dispatch(UserInfoUpdateMEMBER(0));

    var tt = 20;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: idReducer,
      innerid: 0,
    };





    window.history.pushState(dd, "", modalName);

  };


  const GoToMemberP = () => {

    dispatch(UserInfoUpdateMEMBER(-1));

    dispatch(UserInfoUpdateMEMBER(idReducer));

    //
    var tt = 20;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: idReducer,
      innerid: 0,
    };





    window.history.pushState(dd, "", modalName);

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
          backgroundColor: darkmodeReducer ? 'rgb(20, 20, 20, 0.32)' : 'rgb(255, 255, 255, 0.22)',
          position: 'fixed',
          cursor: 'pointer',
          top: 0,
          left: 0
        }}
      >
        {/* Menu content goes here */}
      </animated.div >


      <animated.div
        style={{
          ...styles,
          width: '20%',
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
              ? ` ${superFont}    dontallowhighlighting `
              : ` ${superFont}   dontallowhighlighting `
          }
          style={{
            height: '10vh',


          }}>





          <Grid
            xs={12} style={{ position: 'fixed', top: '2.8vh', zIndex: 1 }}>



            <span onClick={() => {

              GoToMemberLoaderUpF();



            }} style={{ paddingLeft: '2vw', cursor: 'pointer' }}>


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
          </Grid>
          <Grid
            xs={12} style={{ position: 'fixed', top: '1vh', zIndex: 2, right: '0px' }}>



            <div style={{ paddingRight: '1.2vw', }}>


              <img src={image} onClick={() => {

                GoToMemberLoaderUpP();


              }} style={{ cursor: 'pointer', width: '5vw', height: '5vw', borderRadius: '50%' }} />

            </div>
          </Grid>


          <Grid
            xs={12} style={{ position: 'fixed', top: '17vh', zIndex: 20, right: '0px', width: '100%' }}>

            <Grid
              xs={12} style={{ width: '100%', alignContent: 'center', display: 'grid', opacity: '0.9' }}>


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
                      padding: '1.6vh',
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
                          transform: 'scale(1.9)',
                        }}
                      />
                    </span> : null}



                    {i === 1 ? <span>
                      <PersonIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperking"
                        }
                        style={{
                          color: colr,
                          fontSize: menufont,
                          marginLeft: pushh,
                          transform: 'scale(1.9)'
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
                            transform: 'scale(1.9)'
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
                          transform: 'scale(1.9)',
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
                          transform: 'scale(1.9)',
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
                          transform: 'scale(1.9)',
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
                          transform: 'scale(1.9)',

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
                          transform: 'scale(1.9)'

                        }}
                      />
                    </span> : null}



                    <span



                      style={{
                        color: colr,
                        fontSize: "1.3vw",
                        marginLeft: '5vw',



                      }}>
                      {Title}
                    </span>
                  </span>
                ))
              }


            </Grid>



          </Grid>


        </Grid>




      </animated.div >
    </>
  );
}

export const ActualMenu = React.memo(ActualMenux);
