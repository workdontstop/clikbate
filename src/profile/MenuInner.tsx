import React, { useState, useEffect, useRef } from "react";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import {
  UpdateLoader,
} from ".././GlobalActions";
import Axios from "axios";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
import { UpdateUploadData, Updatepagenum } from "../GlobalActions";

import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SubjectIcon from '@material-ui/icons/Subject';
import { UpdateNavFilterReducer, UpdateSign } from "../GlobalActions";


function MenuInnerx({
  optionsShow,
  optinstopshowingReducer,
  typeTop,
  closeoptionsslide,
  animationop,
  optionsCollectImageRef,
  handleTouchStartOptions,
  handleTouchMoveOptions,
  modalanimation,
  nextSlidePc,
  optionsImages,
  ActiveSlide,
  optionsNameData,
  clickOptions,
  optionsClickType,
  getSliderWidthNew,
  OpenUploadModal,
  setselectedImage,
  setcropimage,
  postData
}: any): JSX.Element {
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




  const darkmodeReducer = darkmode;

  const MenuDataReducer = MenuData;

  const pagenumReducer = pagenum;

  const GuestReducer = Guest;

  const dispatch = useDispatch();

  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;


  const [FeedsThumb, setFeedsThumb] = useState('');

  const [ProfileThumb, setProfileThumb] = useState('');



  const [allowIcon, setallowIcon] = useState(false);
  const [allowIcon2, setallowIcon2] = useState(false);

  const ShowImage = () => {

    if (FeedsThumb === '') {
      setallowIcon(true);
    } else {
      setallowIcon(false);
    }

    if (ProfileThumb === '') {
      setallowIcon2(true);
    } else {
      setallowIcon2(false);
    }


  }



  var circleIdentify = typeTop ? 0 : 4;
  var circleIdentify2 = typeTop ? 1 : 5;

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


  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const [imageReducerThumb, setimageReducerThumb] = useState("");
  const [ColorMemberReducer, setColorMemberReducer] = useState("");


  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");

  useEffect(() => {

    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/OptionsPic`, {
      values: idReducer,
    })
      .then((response) => {

        setimage1(response.data.payload[0].thumb1);
        setimage2(response.data.payload[1].thumb1);


      })
      .catch(function (error) {
        console.log("mennu inner ");
      });

  }, [idReducer, REACT_APP_SUPERSTARZ_URL])

  const circleColor = () => {
    if (memeberPageid === 0) {
      setColorMemberReducer(colorReducer);
    } else {
      setColorMemberReducer(MemberProfileData.usercolor1);
    }
  };

  useEffect(() => {

    circleColor();
  }, [MemberProfileData, colorReducer, imageThumb, image, memeberPageid]);


  const imageHandleChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {

      const FileArray = Array.from(e.target.files).map((file: any, index: any) =>
        URL.createObjectURL(file)
      );

      const ray: any[] = [];

      var lim = FileArray.length
      if (lim > 1) {
        lim = 0
      } else { lim = lim - 1 }



      for (let i = 0; i <= lim; i++) {
        ray[i] = FileArray[i];
      }

      dispatch(UpdateUploadData(ray, FileArray[0]));
      console.log(FileArray);

      OpenUploadModal(1);
      ///window.history.pushState(null, "", "Crop");
      /// dispatch(UpdateNavCropReducer(true));


      e.target.value = null;
    }
  };





  const GoToMember = () => {

    dispatch(Updatepagenum(0));

    if (memeberPageidReducer === idReducer) {
      ///
      dispatch(UserInfoUpdateMEMBER(0));

    } else {


      dispatch(UserInfoUpdateMEMBER(idReducer));
    }
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
      pagenumReducer: pagenumReducer,
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: idReducer,
      innerid: 0,
      pagenumReducer: pagenumReducer,
    };





    window.history.pushState(dd, "", modalName);

  };

  const GoToMemberLoaderUp = () => {

    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (memeberPageidReducer === idReducer) {
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMember();
    }, 1000);
  };









  return (
    <>
      <>
        {optinstopshowingReducer ? (
          typeTop ? null : (
            <>
              {" "}
              <Grid
                container
                style={{
                  width: matchPc ? "10%" : matchTablet ? "30%" : "10%",
                  margin: "auto",
                }}
              >
                <span>
                  <MoreHorizIcon
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-dark dontallowhighlighting  "
                        : "make-small-icons-clickable-light  dontallowhighlighting  "
                    }
                    onClick={closeoptionsslide}
                    style={{
                      fontSize: matchPc ? "2.55vw" : "4.7vh",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      zIndex: 2,
                      marginTop: matchPc ? "9vh" : "6.5vh",
                      position: "absolute",
                    }}
                  />
                </span>{" "}
              </Grid>
            </>
          )
        ) : null}

        <animated.div style={animationop}>
          <Grid
            container
            className={
              typeTop
                ? darkmodeReducer
                  ? `optionsTop-background-dark `
                  : `optionsTop-background-light `
                : ""
            }
            onTouchStart={handleTouchStartOptions}
            onTouchMove={handleTouchMoveOptions}
            style={{
              zIndex: 1,
              padding: "0px",
              top: matchPc ? '-1.7vh' : "-2vh",
              position: "relative",
              margin: "0 auto",
              overflow: "hidden",
              left: "0px",
              height: typeTop ? (matchPc ? "24.4vh" : "20.5vh") : "auto",
              paddingBottom: "1.4vh",
            }}
          >
            <animated.div ref={optionsCollectImageRef} style={modalanimation}>
              <Grid
                item
                style={{
                  margin: "auto",
                  textAlign: "center",
                  position: "relative",
                  bottom: typeTop ? "-2.6vh" : "0.2em",
                  left: typeTop ? "-3px" : matchPc ? "-2px" : "0px",
                }}

              >
                <CircleIcon
                  onClick={() => {
                    nextSlidePc();

                  }}
                  className="buttonshake"
                  style={{
                    fontSize: typeTop ? "1.7vw" : "1.3vw",
                    cursor: "pointer",
                    color: darkmodeReducer
                      ? typeTop
                        ? "rgba(200, 200, 200, 0.5)"
                        : "rgba(200, 200, 200, 0.1)"
                      : typeTop
                        ? "rgba(005, 005, 005, 0.4)"
                        : "rgba(005, 005, 005, 0.2)",
                    display: matchPc ? "block" : "none",
                  }}
                />
              </Grid>
              {optionsImages.map((im: any, i: any) => (
                <Grid key={i} item xs={12}>
                  {typeTop ? (
                    <Grid
                      item
                      xs={12}
                      style={{
                        margin: "auto",
                        textAlign: "center",
                        position: "relative",
                        top: "2.2vh",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          paddingBottom: "10px",
                          fontSize: matchPc
                            ? "1.1vw"
                            : matchTablet
                              ? "2.08vh"
                              : "2vh",
                          fontWeight: "bolder",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          visibility: ActiveSlide === i ? "visible" : "hidden",
                          filter: darkmodeReducer
                            ? "drop-shadow(1.2px 0.1px 1.92px rgba(255, 255, 255, 0.4))"
                            : "drop-shadow(1.2px 0.1px 1.92px rgba(41, 53, 70, 8.35))",
                          color: darkmodeReducer ? "#dddddd" : "#0b111b",
                        }}
                      >
                        {" "}
                        {optionsNameData[i]}
                      </Grid>
                    </Grid>
                  ) : null}
                  {i === circleIdentify || i === circleIdentify2 ? (
                    <>
                      {i === circleIdentify ? (
                        <>
                          {" "}
                          <div
                            onClick={() => {
                              clickOptions(i, optionsClickType, "upload");

                            }}
                            style={{
                              cursor: ActiveSlide === i ? "pointer" : "copy",
                              width: `${getSliderWidthNew}px`,
                              height: `${getSliderWidthNew}px`,
                              backgroundColor: darkmodeReducer
                                ? "rgba(010,010,010, 0.68)"
                                : "rgba(210,210,210, 0.3)",
                              borderRadius: "50%",
                              marginTop: "2.15vh",
                              textAlign: "center",
                              alignItems: "center",
                              display: "grid",
                              justifyContent: "center",
                              boxShadow: darkmodeReducer
                                ? ActiveSlide === i
                                  ? `0 0 3.4px ${ColorMemberReducer}`
                                  : typeTop
                                    ? "0 0 5.5px#aaaaaa"
                                    : ""
                                : ActiveSlide === i
                                  ? `0 0 3.4px ${ColorMemberReducer}`
                                  : typeTop
                                    ? "0 0 5.45px#222222"
                                    : ``,
                            }}
                          >
                            {" "}
                            <SettingsIcon
                              style={{
                                fontSize: matchPc ? "2vw" : "5vh",
                                opacity: ActiveSlide === i ? 0.5 : 1,
                                color: darkmodeReducer ? "#eeeeee" : "#222222",
                              }}
                              className="zuperkinginfo"
                            />
                          </div>
                        </>
                      ) : (


                        memeberPageidReducer === idReducer || memeberPageidReducer === 0 ?

                          <>
                            {" "}



                            <input
                              onChange={imageHandleChange}
                              type="file"
                              name="superImages"
                              accept="image/*"
                              multiple
                              id="fileoo"
                              style={{ visibility: "hidden", display: 'none' }}
                            />

                            {matchMobile ?
                              <div
                                onClick={() => {


                                  matchMobile ? alert('Coming Soon To Mobile 😊') :
                                    clickOptions(i, optionsClickType, "upload");

                                }}
                                style={{
                                  cursor: ActiveSlide === i ? "pointer" : "copy",
                                  width: `${getSliderWidthNew}px`,
                                  height: `${getSliderWidthNew}px`,
                                  backgroundColor: darkmodeReducer
                                    ? "rgba(010,010,010, 0.68)"
                                    : "rgba(210,210,210, 0.3)",
                                  borderRadius: "50%",
                                  marginTop: "2.15vh",
                                  textAlign: "center",
                                  alignItems: "center",
                                  display: "grid",
                                  justifyContent: "center",
                                  boxShadow: darkmodeReducer
                                    ? ActiveSlide === i
                                      ? `0 0 3.4px ${ColorMemberReducer}`
                                      : typeTop
                                        ? "0 0 5.5px#aaaaaa"
                                        : ""
                                    : ActiveSlide === i
                                      ? `0 0 3.4px ${ColorMemberReducer}`
                                      : typeTop
                                        ? "0 0 5.45px#222222"
                                        : ``,
                                }}
                              >
                                {" "}
                                <CircleIcon
                                  style={{
                                    fontSize: matchPc ? "1.65vw" : "4.5vh",
                                    opacity: ActiveSlide === i ? 0.5 : 1,
                                    color: darkmodeReducer
                                      ? ActiveSlide === i
                                        ? "red"
                                        : "#eeeeee"
                                      : ActiveSlide === i
                                        ? "red"
                                        : "#222222",
                                  }}
                                  className="zuperkinginfo"
                                />

                              </div>
                              :

                              idReducer === GuestReducer ? <div
                                onClick={() => {

                                  dispatch(UpdateSign(true));

                                }}
                                style={{
                                  cursor: ActiveSlide === i ? "pointer" : "copy",
                                  width: `${getSliderWidthNew}px`,
                                  height: `${getSliderWidthNew}px`,
                                  backgroundColor: darkmodeReducer
                                    ? "rgba(010,010,010, 0.68)"
                                    : "rgba(210,210,210, 0.3)",
                                  borderRadius: "50%",
                                  marginTop: "2.15vh",
                                  textAlign: "center",
                                  alignItems: "center",
                                  display: "grid",
                                  justifyContent: "center",
                                  boxShadow: darkmodeReducer
                                    ? ActiveSlide === i
                                      ? `0 0 3.4px ${ColorMemberReducer}`
                                      : typeTop
                                        ? "0 0 5.5px#aaaaaa"
                                        : ""
                                    : ActiveSlide === i
                                      ? `0 0 3.4px ${ColorMemberReducer}`
                                      : typeTop
                                        ? "0 0 5.45px#222222"
                                        : ``,
                                }}
                              >
                                {" "}
                                <CircleIcon
                                  style={{
                                    fontSize: matchPc ? "1.65vw" : "4.5vh",
                                    opacity: ActiveSlide === i ? 0.5 : 1,
                                    color: darkmodeReducer
                                      ? ActiveSlide === i
                                        ? "red"
                                        : "#eeeeee"
                                      : ActiveSlide === i
                                        ? "red"
                                        : "#222222",
                                  }}
                                  className="zuperkinginfo"
                                />

                              </div> :
                                <>
                                  <label htmlFor="fileoo">
                                    <div
                                      onClick={() => {


                                        clickOptions(i, optionsClickType, "upload");

                                      }}
                                      style={{
                                        cursor: ActiveSlide === i ? "pointer" : "copy",
                                        width: `${getSliderWidthNew}px`,
                                        height: `${getSliderWidthNew}px`,
                                        backgroundColor: darkmodeReducer
                                          ? "rgba(010,010,010, 0.68)"
                                          : "rgba(210,210,210, 0.3)",
                                        borderRadius: "50%",
                                        marginTop: "2.15vh",
                                        textAlign: "center",
                                        alignItems: "center",
                                        display: "grid",
                                        justifyContent: "center",
                                        boxShadow: darkmodeReducer
                                          ? ActiveSlide === i
                                            ? `0 0 3.4px ${ColorMemberReducer}`
                                            : typeTop
                                              ? "0 0 5.5px#aaaaaa"
                                              : ""
                                          : ActiveSlide === i
                                            ? `0 0 3.4px ${ColorMemberReducer}`
                                            : typeTop
                                              ? "0 0 5.45px#222222"
                                              : ``,
                                      }}
                                    >
                                      {" "}
                                      <CircleIcon
                                        style={{
                                          fontSize: matchPc ? "1.65vw" : "4.5vh",
                                          opacity: ActiveSlide === i ? 0.5 : 1,
                                          color: darkmodeReducer
                                            ? ActiveSlide === i
                                              ? "red"
                                              : "#eeeeee"
                                            : ActiveSlide === i
                                              ? "red"
                                              : "#222222",
                                        }}
                                        className="zuperkinginfo"
                                      />

                                    </div>
                                  </label></>}
                          </>
                          :



                          <img
                            title={memeberPageidReducer === idReducer || memeberPageidReducer === 0 ? memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i] : i === 5 ?
                              'PROFILE' : memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i]}
                            alt={` ${optionsNameData[i]}  option`}
                            onClick={() => {
                              clickOptions(i, optionsClickType, " ");
                              if (ActiveSlide === i) {
                                //alert('kk');
                                GoToMemberLoaderUp();

                              }
                            }}
                            style={{
                              cursor: ActiveSlide === i ? "pointer" : "copy",
                              width: `${getSliderWidthNew}px`,
                              height: `${getSliderWidthNew}px`,
                              borderRadius: "50%",
                              padding: "0px",
                              objectFit: "cover",
                              marginLeft: "2px",
                              marginTop: "14px",
                              boxShadow: darkmodeReducer
                                ? ActiveSlide === i
                                  ? `0 0 3.4px ${ColorMemberReducer}`
                                  : typeTop
                                    ? "0 0 12.5px#aaaaaa"
                                    : ""
                                : ActiveSlide === i
                                  ? `0 0 3.4px ${ColorMemberReducer}`
                                  : typeTop
                                    ? `0 0 14.45px#222222`
                                    : "",

                              marginBottom: "2.2px",

                            }}

                            src={`${REACT_APP_CLOUNDFRONT}${imageReducer}`}
                          />
                      )}
                    </>
                  ) : (
                    i === 0 ?
                      image2 ? <img
                        title={memeberPageidReducer === idReducer || memeberPageidReducer === 0 ? memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i] : i === 5 ?
                          'PROFILE' : memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i]}
                        alt={` ${optionsNameData[i]}  option`}
                        onClick={() => {
                          clickOptions(i, optionsClickType, " ");
                          if (ActiveSlide === i && i === 0) {
                            ///alert('kk');
                            if (memeberPageidReducer === idReducer || memeberPageidReducer === 0) {
                              GoToMemberLoaderUp();
                            }
                          }
                        }}
                        style={{

                          cursor: ActiveSlide === i ? "pointer" : "copy",
                          width: `${getSliderWidthNew}px`,
                          height: `${getSliderWidthNew}px`,
                          borderRadius: "50%",
                          padding: "0px",
                          objectFit: "cover",
                          marginLeft: "2px",
                          marginTop: "14px",
                          boxShadow: darkmodeReducer
                            ? ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? "0 0 12.5px#aaaaaa"
                                : ""
                            : ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? `0 0 14.45px#222222`
                                : "",

                          marginBottom: "2.2px",
                        }}

                        src={memeberPageidReducer === 0 && i === 0 ?
                          `${REACT_APP_CLOUNDFRONT}${image1}` : `${REACT_APP_CLOUNDFRONT}${image2}`}
                      /> : <div
                        onClick={() => {
                          clickOptions(i, optionsClickType, " ");
                          if (ActiveSlide === i && i === 0) {
                            ///alert('kk');
                            if (memeberPageidReducer === idReducer || memeberPageidReducer === 0) {
                              GoToMemberLoaderUp();

                            }
                          }
                        }}
                        style={{
                          cursor: ActiveSlide === i ? "pointer" : "copy",
                          width: `${getSliderWidthNew}px`,
                          height: `${getSliderWidthNew}px`,
                          backgroundColor: darkmodeReducer
                            ? "rgba(010,010,010, 0.68)"
                            : "rgba(210,210,210, 0.3)",
                          borderRadius: "50%",
                          marginTop: "2.15vh",
                          textAlign: "center",
                          alignItems: "center",
                          display: "grid",
                          justifyContent: "center",
                          boxShadow: darkmodeReducer
                            ? ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? "0 0 5.5px#aaaaaa"
                                : ""
                            : ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? "0 0 5.45px#222222"
                                : ``,
                        }}
                      >
                        {" "}

                        {memeberPageidReducer === 0 && i === 0 ?


                          <FaceIcon
                            style={{
                              fontSize: matchPc ? "2.8vw" : "5vh",
                              opacity: ActiveSlide === i ? 0.5 : 1,
                              color: darkmodeReducer ? "#eeeeee" : "#222222",
                            }}
                            className="zuperkinginfo"
                          />


                          :


                          <SubjectIcon
                            style={{
                              fontSize: matchPc ? "2.5vw" : "5vh",
                              opacity: ActiveSlide === i ? 0.5 : 1,
                              color: darkmodeReducer ? "#eeeeee" : "#222222",
                            }}
                            className="zuperkinginfo"
                          />


                        }


                      </div> : <img
                        title={memeberPageidReducer === idReducer || memeberPageidReducer === 0 ? memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i] : i === 5 ?
                          'PROFILE' : memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i]}
                        alt={` ${optionsNameData[i]}  option`}
                        onClick={() => {
                          clickOptions(i, optionsClickType, " ");

                        }}
                        style={{

                          cursor: ActiveSlide === i ? "pointer" : "copy",
                          width: `${getSliderWidthNew}px`,
                          height: `${getSliderWidthNew}px`,
                          borderRadius: "50%",
                          padding: "0px",
                          objectFit: "cover",
                          marginLeft: "2px",
                          marginTop: "14px",
                          boxShadow: darkmodeReducer
                            ? ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? "0 0 12.5px#aaaaaa"
                                : ""
                            : ActiveSlide === i
                              ? `0 0 3.4px ${ColorMemberReducer}`
                              : typeTop
                                ? `0 0 14.45px#222222`
                                : "",

                          marginBottom: "2.2px",
                        }}
                        src={`./images/options/${im}`}
                      />
                  )}

                  {typeTop ? null : (
                    <Grid
                      item
                      xs={12}
                      style={{
                        margin: "auto",
                        textAlign: "center",
                        position: "relative",
                        bottom:
                          i === circleIdentify || i === circleIdentify2
                            ? matchPc
                              ? "-0.5em"
                              : "-0.3em"
                            : "0.2em",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          marginTop: i === 0 ? '1.3vh' : '0px',
                          fontSize: matchPc
                            ? "0.95vw"
                            : matchTablet
                              ? "2vh"
                              : "1.8vh",
                          fontWeight: "bolder",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          visibility: ActiveSlide === i ? "visible" : "hidden",
                          opacity: memeberPageidReducer !== idReducer && memeberPageidReducer !== 0 && i === 0 ? 0.1 :
                            i === 1 ? 0.1 : i === 2 ? 0.1 : i === 3 ? 0.1 : 0.5,
                          color: darkmodeReducer ? "#dddddd" : "#0b111b",
                        }}
                      >

                        {memeberPageidReducer === idReducer || memeberPageidReducer === 0 ? memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i] : i === 5 ?
                          'PROFILE' : memeberPageidReducer === 0 && i === 0 ? 'PROFILE' : optionsNameData[i]}

                      </Grid>
                    </Grid>
                  )}
                </Grid>
              ))}
            </animated.div>
          </Grid>
        </animated.div >
      </>
    </>
  );
}

export const MenuInner = React.memo(MenuInnerx);


