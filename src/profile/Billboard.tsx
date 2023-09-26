import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Box } from "@material-ui/core";

import { DarkmodeToggleAction } from ".././GlobalActions";
import { matchPc, matchTablet } from "../DetectDevice";
import { SliderBillboard } from "./SliderBillboard";
import AddIcon from "@mui/icons-material/Add";
import { usePalette } from "react-palette";
import { UpdateColorAction } from ".././GlobalActions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType,
} from ".././GlobalActions";

function Billboardx({
  OpenModalForm,
  click,
  billboardx,
  billboardserverswitch,
  billdefaultbill,
  setDiscussionImage,
  setCommentPostid,
  setconnectTemplateGo,
  x,
  postData,
}: any): JSX.Element {
  ///
  ///
  ///
  /// USE DISPATCH
  const dispatch = useDispatch();

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      id: number;
      image: string;
      username: string;
      quote: string;
      billboard1: string;
      billboard2: string;
      billboardthumb1: string;
      billboardthumb2: string;
      fans: number;
      favorites: number;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }
  const {
    id,
    image,
    username,
    quote,
    billboard1,
    billboard2,
    billboardthumb1,
    billboardthumb2,
    fans,
    favorites,
    memeberPageid,
    MemberProfileData,
  } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));

  const [usernameReducer, setusernameReducer] = useState("");

  const [quoteReducer, setquoteReducer] = useState("");
  const [favoritesReducer, setfavoritesReducer] = useState(0);
  const [hidefanReducer, sethidefanReducer] = useState(false);

  const [imageReducerThumb, setimageReducerThumb] = useState("");

  const billboardImagesxx = [billboard1, billboard2];
  const billboardImagesxxT = [billboardthumb1, billboardthumb2];

  const billboardImageszz = [
    MemberProfileData.userbillboard1,
    MemberProfileData.userbillboard2,
  ];
  const billboardImageszzT = [
    MemberProfileData.userbillboardthumb1,
    MemberProfileData.userbillboardthumb2,
  ];

  const billboardImagesnn = ["", ""];

  const [billboardImages, setbillboardImages] = useState(billboardImagesnn);

  const [billboardthumbImages, setbillboardthumbImages] =
    useState(billboardImagesnn);

  const ChangeProfile = () => {
    if (memeberPageid === 0) {
      setbillboardthumbImages(billboardImagesxxT);
      setbillboardImages(billboardImagesxx);
      setusernameReducer(username);
      setquoteReducer(quote);
      setfavoritesReducer(favorites);
    } else {
      setbillboardthumbImages(billboardImageszzT);
      setbillboardImages(billboardImageszz);
      setusernameReducer(MemberProfileData.username);
      setquoteReducer(MemberProfileData.userquote);
      setfavoritesReducer(MemberProfileData.favorites);
    }
  };

  useEffect(() => {
    ChangeProfile();
    console.log(MemberProfileData);
  }, [MemberProfileData]);

  useEffect(() => {
    ChangeProfile();
  }, [image]);

  var idReducer = id;
  useEffect(() => {
    if (memeberPageid === 0 || memeberPageid === idReducer) {
      sethidefanReducer(false);
    } else {
      sethidefanReducer(true);
    }
  }, [memeberPageid, MemberProfileData, idReducer]);

  const imageReducer = image;

  const billboard1Reducer = billboard1;
  const billboard2Reducer = billboard2;
  const billboardthumb1Reducer = billboardthumb1;
  const billboardthumb2Reducer = billboardthumb2;
  const fansReducer = fans;

  const [ShowBillboard, setShowBillboard] = useState<boolean>(false);

  const [billstate, setbillstate] = useState<number>(1);

  const [Btop2, setBtop2] = useState<number>(0);
  const [Btop, setBtop] = useState<number>(0);
  const [Bleft, setBleft] = useState<number>(0);
  const [showbill, setshowbill] = useState<boolean>(true);
  const [showbillone, setshowbillone] = useState<boolean>(false);
  const [showbilltwo, setshowbilltwo] = useState<boolean>(false);

  ///
  ///
  ///
  ///CONTROL BILLBOARD UPLOAD PIC POSITION FOR MULTIPLE UPLOADS THINGY
  useEffect(() => {
    setBleft(30);

    if (billboard1Reducer === billdefaultbill) {
      setBtop(-65);
      setshowbill(true);
      setshowbillone(false);
      setshowbilltwo(false);
    } else {
      if (billboard2Reducer === "" || billboard2Reducer === null) {
        setshowbill(true);
        setshowbillone(true);
        setshowbilltwo(false);
        setBtop(-50);
      } else {
        setshowbill(false);
        setshowbillone(true);
        setshowbilltwo(true);
        setBtop2(-50);
      }
    }
  }, [billboard1Reducer, billboard2Reducer, billdefaultbill]);

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

  //////////////////////////////////BILLBOARD VARIABLES FOR DEVICE TYPES
  var widthh = matchPc ? "65vw" : "98.5vw";
  var topp = matchPc ? "55.9vh" : matchTablet ? "5.5vh" : "24.5vh";
  var usernameClass = matchPc
    ? "usernamePc"
    : matchTablet
      ? "usernameTablet"
      : "usernameMobile";

  var widthName = matchPc ? "65vw" : "98.5vw";
  var topName = matchPc ? "63vh" : matchTablet ? "12.5vh" : "30vh";
  var name = matchPc ? "namePc" : matchTablet ? "nameTablet" : "nameMobile";

  var widthConnect = matchPc ? "65vw" : "98.5vw";
  var bottomConnect = matchPc ? "7vh" : matchTablet ? "34vh" : "3vh";
  var favclass = matchPc ? "favPc" : matchTablet ? "favTablet" : "favMobile";
  var fanclass = matchPc ? "fanPc" : matchTablet ? "fanTablet" : "fanMobile";

  var fontConnectText = matchPc ? "1.03vw" : matchTablet ? "2.5vw" : "1.72vh";
  var fontConnectnum = matchPc ? "1.75vw" : matchTablet ? "3.9vw" : "2.3vh";

  var billboardDynamicHeight = matchPc ? "70vh" : matchTablet ? "57vw" : "34vh";

  //////////////////////////////////BILLBOARD VARIABLES FOR DEVICE TYPES

  ///
  ///
  ///
  /// TOGGLEDARKMODE ON USERNAME CLICK
  var toggleDarkMode = false;

  const switchThemes = () => {
    if (darkmodeReducer) {
      toggleDarkMode = false;
    } else {
      toggleDarkMode = true;
    }
    dispatch(DarkmodeToggleAction());
    ////ACESSING LOCALSTORAGE
    localStorage.setItem("darkmode", toggleDarkMode.toString());
  };

  ///
  ///
  ///
  /// CLICK BILLBOARD OPEN ON DOUBLE CLICK
  const ClickBillboard = (e: any) => {
    switch (e.detail) {
      case 2:
        setShowBillboard(true);
        break;
      case 3:
        setShowBillboard(true);
        break;
      case 4:
        setShowBillboard(true);
        break;
    }
  };

  ///
  ///
  ///
  /// CLICK BILLBOARD CLOSE
  const ClickBillboardClose = (e: any) => {
    setShowBillboard(false);
  };

  var fontOptions1 = "";

  if (matchPc) {
    fontOptions1 = "4.7vw";
  } else if (matchTablet) {
    fontOptions1 = "5.2rem";
  } else {
    fontOptions1 = "2.1rem";
  }

  var fontOptions = "";

  if (matchPc) {
    fontOptions = "5.6vw";
  } else if (matchTablet) {
    fontOptions = "5.2rem";
  } else {
    fontOptions = "2.1rem";
  }

  ///hoverOverImageRef.current.style.background = "red";

  return (
    <>
      <>
        <Grid container className="dontallowhighlighting" style={{}}>
          {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD LIGHTINING/DARKEN*/}
          <Grid
            container
            style={{
              position: "relative",
              top: "0em",
              width: "100%",
              scrollSnapAlign: x ? "start" : "",
            }}
          >
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CURSOR ALIAS LAYOUT*/}
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={1}
            ></Grid>
            <Grid
              item
              xs={12}
              md={12}
              onClick={ClickBillboard}
              style={{
                visibility: ShowBillboard ? "hidden" : "visible",
                cursor: "copy",
                zIndex: 2,
                position: "relative",
                height: billboardDynamicHeight,
                backgroundColor: darkmodeReducer
                  ? "rgba(005, 005, 005, 0.26)"
                  : "rgba(250, 250, 250, 0.23)",
                borderRadius: "0px",
                borderBottomLeftRadius: ShowBillboard
                  ? "0px"
                  : matchPc
                    ? "7px"
                    : "0px",
                borderBottomRightRadius: ShowBillboard
                  ? "0px"
                  : matchPc
                    ? "7px"
                    : "0px",

              }}
            ></Grid>
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={2}
            ></Grid>
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CURSOR ALIAS LAYOUT*/}

            <Grid item md={12} style={{ height: '0px', }}></Grid>

            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CONTROL DISPLAY ON DOUBLE CLICK*/}

            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={2}
            ></Grid>
            <Grid
              item
              xs={12}
              md={8}
              onClick={ClickBillboard}
              style={{
                visibility: ShowBillboard ? "hidden" : "visible",
              }}
            >
              {/*///////////////////////////////////////////////////////////////////////////FAVS*/}
              <Grid
                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthConnect,
                  height: "0px",
                  top: bottomConnect,
                  display: "flex",
                  justifyContent: "flex-end",
                  zIndex: 4,
                }}
              >
                <Grid item style={{ textAlign: "center", height: "0px" }}>
                  {" "}
                  <span
                    onClick={() => {
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(UpdateReactType(2));
                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      OpenModalForm(4);
                      setconnectTemplateGo(2);
                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectText,
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0.29)"
                        : "rgba(255, 255, 255, 0.35)",
                      padding: "1px  ",
                      opacity: "0.75",
                      display: hidefanReducer ? "none" : "inline",
                    }}
                    className={
                      darkmodeReducer
                        ? `fontfamilyArial zuperxyinfotext turdarkfavfan ${fanclass}  `
                        : `fontfamilyArial  text-connect-light zuperxyinfotext turlight ${fanclass}  `
                    }
                  >
                    FANS
                  </span>
                  <Grid xs={12} item style={{ height: "10px" }}></Grid>
                  <span
                    onClick={() => {
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(UpdateReactType(2));
                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      OpenModalForm(4);
                      setconnectTemplateGo(2);
                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectnum,
                      marginRight: matchPc ? "0.45vw" : "0.5vw",
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0.2)"
                        : "rgba(255, 255, 255, 0.03)",
                      display: hidefanReducer ? "none" : "inline",
                    }}
                    className={`fontfamilyArial zuperxyinfo ${fanclass}  `}
                  >
                    {fansReducer === 0 ? "." : fansReducer}
                  </span>{" "}
                </Grid>
                <Grid item style={{ textAlign: "center", height: "0px" }}>
                  {" "}
                  <span
                    onClick={() => {
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(UpdateReactType(1));
                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      OpenModalForm(4);
                      setconnectTemplateGo(1);
                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectText,
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0.29)"
                        : "rgba(255, 255, 255, 0.35)",

                      padding: "1px  ",
                      opacity: "0.75",
                    }}
                    className={
                      darkmodeReducer
                        ? `fontfamilyArial zuperxyinfotext turdarkfavfan ${favclass}  `
                        : `fontfamilyArial  text-connect-light zuperxyinfotext turlight ${favclass}  `
                    }
                  >
                    FAVORITES
                  </span>
                  <Grid xs={12} item style={{ height: "10px" }}></Grid>
                  <span
                    onClick={() => {
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(UpdateReactType(1));

                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      OpenModalForm(4);
                      setconnectTemplateGo(1);
                    }}
                    style={{
                      cursor: "pointer",
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0.2)"
                        : "rgba(255, 255, 255, 0.03)",
                      fontWeight: "bolder",
                      fontSize: fontConnectnum,

                      marginRight: matchPc ? "0.1vw" : "0.5vw",
                      marginTop: "9.2px",
                    }}
                    className={`fontfamilyArial zuperxyinfo  ${favclass}`}
                  >
                    {favoritesReducer === 0 ? "." : favoritesReducer}
                  </span>
                </Grid>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////FAVS*/}




              {/*///////////////////////////////////////////////////////////////////////////USERNAME*/}
              <Grid

                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthh,
                  top: topp,
                  textAlign: "right",
                  zIndex: 3,
                  height: "0px",

                }}
              >
                <span
                  className={
                    darkmodeReducer
                      ? `fontfamilyArial ${usernameClass} turdark`
                      : `fontfamilyArial ${usernameClass} turlight`
                  }
                  style={{
                    cursor: "pointer",
                    color: darkmodeReducer ? "#dddddd" : "#0b111b",
                    backgroundColor: darkmodeReducer
                      ? "rgba(005, 005, 005, 0.45)"
                      : "rgba(250, 250, 250, 0.7)",
                  }}
                >
                  {usernameReducer}
                </span>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////USERNAME*/}
              {/*///////////////////////////////////////////////////////////////////////////FULLNAME OR QUOTES*/}
              <Grid
                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthName,
                  top: topName,
                  textAlign: "right",
                  zIndex: 3,
                  height: "0px",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: darkmodeReducer ? "#dddddd" : "#0b111b",
                    backgroundColor: darkmodeReducer
                      ? "rgba(005, 005, 005, 0.45)"
                      : "rgba(250, 250, 250, 0.7)",
                  }}
                  className={
                    darkmodeReducer
                      ? `fontfamilyArial ${name} turdark`
                      : `fontfamilyArial ${name} turlight`
                  }
                >
                  {quoteReducer}
                </span>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////FULLNAME OR QUOTES*/}
            </Grid>
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CONTROL DISPLAY ON DOUBLE CLICK*/}
          </Grid>
          {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD LIGHTINING/DARKEN*/}
          <Grid
            style={{
              position: "relative",
              zIndex: 0,
            }}
            container
          >
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                position: "fixed",
                top: "3em",
                margin: "auto",
                textAlign: "center",
                zIndex: 0,
              }}
            >
              <>
                <input
                  onClick={click}
                  onInput={() => {
                    setShowBillboard(false);
                  }}
                  onChange={billboardx}
                  type="file"
                  name="superImages"
                  accept="image/*"
                  multiple
                  id="billboardxx"
                  style={{ visibility: "hidden" }}
                />
              </>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                height: "0px",
                position: "absolute",
                top: `-66vh`,
                left: `${Bleft}vw`,
                margin: "auto",
                textAlign: "center",
                zIndex: 200,
                display: showbillone ? "block" : "none",
              }}
            >
              {ShowBillboard ? (
                <>
                  <LooksOneIcon
                    style={{
                      fontSize: fontOptions1,
                      color: "#ffffff",
                      cursor: "pointer",
                      opacity: 0.5,
                    }}
                    className="zuperkinginfo"
                  />{" "}
                </>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                height: "0px",
                position: "absolute",
                top: `${Btop2}vh`,
                left: `${Bleft}vw`,
                margin: "auto",
                textAlign: "center",
                zIndex: 200,
                display: showbilltwo ? "block" : "none",
              }}
            >
              {ShowBillboard ? (
                <>
                  <LooksTwoIcon
                    style={{
                      fontSize: fontOptions1,
                      color: "#ffffff",
                      cursor: "pointer",
                      opacity: 0.5,
                    }}
                    className="zuperkinginfo"
                  />{" "}
                </>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                height: "0px",
                position: "absolute",
                top: `${Btop}vh`,
                left: `${Bleft}vw`,
                margin: "auto",
                textAlign: "center",
                zIndex: 20,
                display: showbill ? "block" : "none",
              }}
            >
              {" "}
              {ShowBillboard ? (
                <>
                  <label htmlFor="billboardxx">
                    <AddPhotoAlternateIcon
                      style={{
                        fontSize: fontOptions,
                        color: "#ffffff",
                        cursor: "pointer",
                        opacity: 0.5,
                      }}
                      className="zuperkinginfo"
                    />{" "}
                  </label>
                </>
              ) : null}
            </Grid>
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={1}
            ></Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ marginTop: `-${billboardDynamicHeight}` }}
            >
              {/*///////////////////////////////////////////////////////////////////////////BILLBOARD IMAGE*/}

              <SliderBillboard
                billboardserverswitch={billboardserverswitch}
                ClickBillboardClose={ClickBillboardClose}
                ShowBillboard={ShowBillboard}
                slides={billboardImages}
                slidesthumb={billboardthumbImages}
                billboardDynamicHeight={billboardDynamicHeight}
              />

              {/*///////////////////////////////////////////////////////////////////////////BILLBOARD IMAGE*/}
            </Grid>
          </Grid>
        </Grid>
      </>
    </>
  );
}

export const Billboard = React.memo(Billboardx);
