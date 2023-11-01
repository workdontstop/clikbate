import React, { useState, useRef, useCallback, useEffect } from "react";
import { Menu } from "./Menu";
import { Billboard } from "./Billboard";
import { Post } from "./Post";
import { MiniPost } from "./MiniPost";
import { OptionsSlider } from "./OptionsSlider";
import $ from "jquery";

import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { ActualMenu } from "./ActualMenu";
import {
  Paper,
  Grid,
  Typography,
  createTheme,
  MuiThemeProvider,
  Box,
} from "@material-ui/core";
import ImagePhotoSizeSelectSmall from "material-ui/svg-icons/image/photo-size-select-small";
import Masonry from "@mui/lab/Masonry";
import AddIcon from "@mui/icons-material/Add";
import { Upload } from "../upload/Upload";
import { SnapToggleAction } from ".././GlobalActions";
import { UpdateLoader } from ".././GlobalActions";

function Profilex({
  OpenModalForm,
  getSliderWidthRef,
  getSliderWidth,
  postData,
  formtype,
  showModalForm,
  CloseModalForm,
  aboutTemplateGo,
  commentTemplateGo,
  postDatainner,
  postDatainnerThumb,
  showProfiileData,
  paperPostScrollRef,
  setx,
  x,
  setDiscussionImage,
  setCommentPostid,
  miniLayoutPost,
  setStopBodyScroll,
  setSliderIndexMini,
  zoomClickedIndex,
  setzoomClickedIndex,
  miniProfile,
  setminiProfile,
  sliderIndexMini,
  setconnectTemplateGo,
  settypeEmo,
  ScrollTo,
  setshowThisComponenet,
  showThisComponenet,
  setscrollLocation,
  setShowLoader2,
  ShowLoader2,
  StopMini,
  setStopMini,
  postDatainnerInteraction1,
  postDatainnerInteraction2,

  callPagination,
  setShowBigPlay,
  setsuperSettings,
  showModalFormMenu,
  setshowModalFormMenu
}: any) {
  const [countAutoplay, setcountAutoplay] = useState<number>(0);

  const dispatch = useDispatch();

  const postDivRef = useRef<any[]>([]);

  const postItemsRef = useRef<any>([]);




  const canvasRefIn: any = useRef(null);

  ///

  const [second, setsecond] = useState<any>(0);
  const [secondgo, setsecondgo] = useState<boolean>(false);

  const [itemheight, setitemheight] = useState<Array<string>>([]);
  const [itemheighthold, setitemheighthold] = useState<Array<string>>([]);
  const [itemcroptype, setitemcroptype] = useState<Array<number>>([]);
  const [itemFinalPostHeight, setitemFinalPostHeight] = useState<Array<number>>(
    []
  );

  const [itemInteractGo, setitemInteractGo] = useState<Array<boolean>>(
    []
  );

  const lastItemElement = useRef<any>();

  const [showMoreIndicator, setshowMoreIndicator] = useState(false);

  const [lastIndicatorPush, setlastIndicatorPush] = useState(false);

  const [lastIndicatorPushH, setlastIndicatorPushH] = useState(37);


  useEffect(() => {

    if (showProfiileData) {
      if (postData.length < 20) { } else {
        setTimeout(() => {

          // Initialize the observer in the effect
          const observer = new IntersectionObserver((entries: any) => {
            const ent = entries[0];
            if (ent.isIntersecting) {

              if (sTimer.current) {
                clearTimeout(sTimer.current);
              }

              if (sTimer2.current) {
                clearTimeout(sTimer2.current);
              }

              if (sTimer3.current) {
                clearTimeout(sTimer3.current);
              }

              sTimer.current = setTimeout(() => {
                setshowMoreIndicator(true)

                sTimer2.current = setTimeout(() => {

                  dispatch(UpdateLoader(true));
                  setshowThisComponenet(true);
                  setminiProfile(false);
                  callPagination();






                }, 1400)


              }, 200)


            } else {
              if (sTimer.current) {
                clearTimeout(sTimer.current);
              }

              if (sTimer2.current) {
                clearTimeout(sTimer2.current);
              }


              setshowMoreIndicator(false)
              ///setmoreFeeds(false);
            }
          });

          if (lastItemElement.current) {
            observer.observe(lastItemElement.current);
          }

          // Cleanup function to disconnect the observer
          return () => {
            observer.disconnect();
          };
        }, 4500)
      }
    }


  }, [lastItemElement, postData, showProfiileData]); // Re-run the effect when dependencies change



  const [ActiveCanvas, setActiveCanvas] = useState(0);

  const [itemOriginalPostHeight, setitemOriginalPostHeight] = useState<
    Array<number>
  >([]);

  const [itemCLICKED, setitemCLICKED] = useState<Array<boolean>>([]);
  const [onLoadDataOnce, setonLoadDataOnce] = useState<Array<boolean>>([]);

  const [ActiveAutoPlay, setActiveAutoPlay] = useState<Array<boolean>>([]);

  var heightplus = matchPc ? 0.38 : matchTablet ? 0.3 : 0.265;
  var postbackheighthold = document.documentElement.clientHeight * heightplus;

  const [postbackheight] = useState<number>(postbackheighthold);

  const sTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);


  const scrollTypeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);



  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      pagenum: number

    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, activateLoader, pagenum } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const activateLoaderReducer = activateLoader;
  const pagenumReducer = pagenum;


  ///
  ///
  ///CREATE REFS FROM POSTS AND ADD THEM TO ARRAY
  const addPostItemsRef = (itemsRef: any) => {
    if (itemsRef && !postItemsRef.current.includes(itemsRef)) {
      postItemsRef.current.push(itemsRef);
    }
    ////console.log(postItemsRef.current[1]);
  };


  const addpostDivRefRoll = (divRef: any) => {
    if (divRef && !postDivRefRoll.current.includes(divRef)) {
      postDivRefRoll.current.push(divRef);
    }

    ////console.log(postItemsRef.current[1]);
  };

  ///
  ///
  ///
  ///CREATE div REFS FROM POSTS AND ADD THEM TO ARRAY
  const addpostDivRef = (divRef: any) => {
    if (divRef && !postDivRef.current.includes(divRef)) {
      postDivRef.current.push(divRef);
    }

    ////console.log(postItemsRef.current[1]);
  };

  const addpostDivRefx = (divRef: any) => {
    if (divRef && !postDivRefx.current.includes(divRef)) {
      postDivRefx.current.push(divRef);
    }

    ////console.log(postItemsRef.current[1]);
  };

  useEffect(() => {
    if (postData.length > 0 && showProfiileData) {
      const initialItemheight = postData.map((obj: any) => obj.itemheight);
      setitemheight(initialItemheight);

      const initialItemrealheighthold = postData.map(
        (obj: any) => obj.itemrealheighthold
      );
      setitemheighthold(initialItemrealheighthold);

      const initialtemcroptype = postData.map((obj: any) => obj.itemcroptype);
      setitemcroptype(initialtemcroptype);

      const initialitemFinalPostHeight = postData.map(
        (obj: any) => obj.itemFinalPostHeight
      );
      setitemFinalPostHeight(initialitemFinalPostHeight);


      const itemInteractGo1xx = postData.map(
        (obj: any) => obj.itemInteractGo
      );
      setitemInteractGo(itemInteractGo1xx);



      const initialitemOriginalPostHeight = postData.map(
        (obj: any) => obj.itemOriginalPostHeight
      );
      setitemOriginalPostHeight(initialitemOriginalPostHeight);

      const initialitemCLICKED = postData.map((obj: any) => obj.itemCLICKED);
      setitemCLICKED(initialitemCLICKED);

      const initialsetonLoadDataOnce = postData.map(
        (obj: any) => obj.onLoadDataOnce
      );
      setonLoadDataOnce(initialsetonLoadDataOnce);

      const initialsetActiveAutoPlay = postData.map(
        (obj: any) => obj.ActiveAutoPlay
      );
      setActiveAutoPlay(initialsetActiveAutoPlay);
    }
  }, [postData, showProfiileData]);

  const newArraa = [...itemheight];

  const newArrxy = [...onLoadDataOnce];
  const newArrayFinalPostHeight = [...itemFinalPostHeight];
  const newArrxq = [...itemcroptype];

  const newArrayitemOriginalPostHeight = [...itemOriginalPostHeight];

  const newArrx = [...itemheighthold];

  const newArr = [...itemheight];

  function percentage(num: number, per: number) {
    return (num / 100) * per;
  }

  const navvScroll = () => {
    /// alert(ScrollTo);
    if (ScrollTo === 0) {
    } else {
      ///alert(ScrollTo);
      setTimeout(() => {
        paperPostScrollRef.current.scrollTop = ScrollTo;
      }, 30);
    }

  };

  const onPostsItemload = useCallback(
    (e: any, index: number, itemnum: number) => {


      ///


      if (ScrollTo === index) {
        navvScroll();
      }
      if (itemnum === 0) {
        if (postItemsRef.current[index]) {
          var imageHeight = postItemsRef.current[index].clientHeight;

          ///////////////////////////////

          newArraa[index] = `${imageHeight}px`;
          setitemheight(newArraa);
          ///////////////////////////////

          ///////////////////////////////

          var newh = imageHeight / 1.042 - postbackheighthold;
          newArrx[index] = `${newh}`;
          setitemheighthold(newArrx);
          ///////////////////////////////

          newArrayFinalPostHeight[index] = imageHeight;
          setitemFinalPostHeight(newArrayFinalPostHeight);

          ///////////////////////////////

          newArrayitemOriginalPostHeight[index] = imageHeight;
          setitemOriginalPostHeight(newArrayitemOriginalPostHeight);
          ///////////////////////////////

          var choppedHeight = percentage(screenHeightReducer, 101);

          var choppedwidth = percentage(
            screenHeightReducer,
            matchPc ? 55 : matchTablet ? 52 : 35
          );

          if (imageHeight < choppedwidth) {
            /////WIDE IMAGE SET

            newArr[index] = `${choppedwidth}px`;
            setitemheight(newArr);
            ///////////////////////////////

            var newh = choppedwidth / 1.015 - postbackheighthold;
            newArrx[index] = `${newh}`;
            setitemheighthold(newArrx);
            ////////////////////////////
            ///////////////////////////////

            newArrxq[index] = 1;
            setitemcroptype(newArrxq);


            ////////////////////////////
            ///////////////////////////////

            newArrayFinalPostHeight[index] = choppedwidth;
            setitemFinalPostHeight(newArrayFinalPostHeight);
          } else if (imageHeight > choppedHeight) {
            /////LONG IMAGE SET

            newArr[index] = `${choppedHeight}px`;
            setitemheight(newArr);
            ///////////////////////////////

            var newh = choppedHeight / 1 - postbackheighthold;
            newArrx[index] = `${newh}`;
            setitemheighthold(newArrx);
            ////////////////////////////////
            ///////////////////////////////

            newArrxq[index] = 2;
            setitemcroptype(newArrxq);
            ///////////////////////////////

            newArrayFinalPostHeight[index] = choppedHeight;
            setitemFinalPostHeight(newArrayFinalPostHeight);
            ///////////////////////////////
          } else {
            var imageWidth = postItemsRef.current[index].clientWidth;
            if (imageWidth > imageHeight) {
              ///////////////////////////////

              var newh = imageHeight / 1.066 - postbackheighthold;
              newArrx[index] = `${newh}`;
              setitemheighthold(newArrx);
              ///////////////////////////////
              ///////////////////////////////

              newArrxq[index] = 3;
              setitemcroptype(newArrxq);


              ///////////////////////////////
            } else {
              ///////////////////////////////

              newArrxq[index] = 4;
              setitemcroptype(newArrxq);
              ///////////////////////////////
            }
          }
          ///////////////////////////////

          newArrxy[index] = true;
          setonLoadDataOnce(newArrxy);
          ///////////////////////////////



          if (StopMini || pagenumReducer === 0) { } else {
            if (postData[0].lim > 0 && index === 0) {
              setTimeout(function () {


                postDivRef.current[0].scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                postDivRefx.current[0].scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });



                ///////////
              }, 1100);
            }
          }


          if (postData.length - 1 === index) {





            /**  if (activateLoaderReducer) {
                            dispatch(UpdateLoader(false));
                          } */

            ////
            navvScroll();
            ///
            ///

            dispatch(UpdateLoader(true));
            setTimeout(function () {

              if (StopMini) {
                setStopMini(false)
              } else {
                setminiProfile(true);
              }
              ///////////
            }, 2000);


            setTimeout(function () {

              setlastIndicatorPushH(22 + 37);
              setlastIndicatorPush(true);


              setshowThisComponenet(false);
              dispatch(UpdateLoader(false));
              ///////////
            }, 4000);





          }
        }

      }
    },
    [StopMini,
      screenHeightReducer,
      itemheight,
      itemheighthold,
      itemFinalPostHeight,
      showProfiileData,
      activateLoaderReducer,
      postItemsRef,
      postData,
      pagenumReducer
    ]
  );

  const scrollToPost = (index: any) => {
    postDivRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPostx = (index: any) => {
    postDivRefx.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const postitemSHOWFULLHEIGHT = (index: any, type: number) => {
    if (itemcroptype[index] === 1 || itemcroptype[index] === 2) {
      if (type === 0) {
        const newitemHeight = [...itemheight];
        newitemHeight[index] = `auto`;
        setitemheight(newitemHeight);
      } else {
        const newitemHeight = [...itemheight];
        newitemHeight[index] = `${itemFinalPostHeight[index]}px`;
        setitemheight(newitemHeight);
      }
    }
  };

  const scrollLongPicTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollLongPicTimerx = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const freesnap = () => {
    dispatch(SnapToggleAction(false));
    if (snapTimer.current) {
      clearTimeout(snapTimer.current);
    }
    snapTimer.current = setTimeout(
      function () {
        dispatch(SnapToggleAction(true));
      },
      matchMobile ? 6000 : 11000
    );
  };

  const AUTOSlideLongImages = (index: number) => {
    ////freesnap();
    if (itemcroptype[index] === 2) {
      scrollLongPicTimerx.current = setTimeout(() => {
        if (paperPostScrollRef.current) {
          paperPostScrollRef.current.scrollTo({
            top:
              paperPostScrollRef.current.scrollTop +
              itemOriginalPostHeight[index] / 3,
            behavior: "auto",
          });
        }
      }, 500);
      scrollLongPicTimer.current = setTimeout(() => {
        postDivRef.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 1300);
    }
  };



  const onPostsItemClicked = useCallback((index: number) => {

    setindexRoll(index);

    clearAllTimers();

    setActiveCanvas(index);

    if (itemCLICKED[index]) {



      dispatch(SnapToggleAction(true));


      if (snapTimer.current) {
        clearTimeout(snapTimer.current);
      }
      snapTimer.current = setTimeout(function () { }, 3000);



      const newclickArray = [...itemCLICKED];
      newclickArray[index] = false;
      setitemCLICKED(newclickArray);
      postitemSHOWFULLHEIGHT(index, 1);
      scrollToPost(index);
    } else {



      dispatch(SnapToggleAction(false));



      AUTOSlideLongImages(index);
      if (scrollTypeTimer.current) {
        clearTimeout(scrollTypeTimer.current);
      }

      const newclickArray = [...itemCLICKED];
      newclickArray[index] = true;
      setitemCLICKED(newclickArray);
      postitemSHOWFULLHEIGHT(index, 0);
      scrollToPost(index);
    }


  }, [itemCLICKED]
  );



  ///
  ///
  ///TYPES FOR ISLOGGEDIN
  interface RootStateIsLogged {
    IsLoggedReducer: {
      loggedIn: boolean;
    };
  }

  ///
  ///LOGGED IN DATA FROM REDUX
  const { loggedIn } = useSelector((state: RootStateIsLogged) => ({
    ...state.IsLoggedReducer,
  }));
  const loggedInReducer = loggedIn;

  ///
  ///
  ///MUI PAPER STYLES FROM REDUX
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );
  var PaperStyleReducer = "";

  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
  } else {
    PaperStyleReducer = PaperStyleLight;
  }

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

  var widthProfilePic = matchPc ? "72%" : matchTablet ? "84%" : "44vw";
  var topProfilePic = matchPc ? "-20vh" : matchTablet ? "-12vh" : "-8vh";
  var leftProfilePic = matchPc ? "1vw" : matchTablet ? "3.5vw" : "2.7vw";

  var optionsClass = "";
  var fontOptions = "";

  if (matchPc) {
    optionsClass = "profile-optionsImagePc";
    fontOptions = "2.7vw";
  } else if (matchTablet) {
    optionsClass = "profile-optionsImageTablet";
    fontOptions = "5rem";
  } else {
    optionsClass = "profile-optionsImageMobile";
    fontOptions = "1.9rem";
  }

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
    };
  }
  const { image } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));
  const imageReducer = image;

  const blank = () => { };

  const [showModalUpload, setShowModalUpload] = useState<boolean>(false);

  ///
  ///
  ///
  /// CLOSE MODAL (STARTS AN ONPOPSTATE EVENT)
  const closeUploadModal = useCallback((backbutton: number) => {
    //pop states fires when back and forward buttons used
    if (backbutton === 1) {
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = null;
        setShowModalUpload(false);
      };
    } else {
      window.history.pushState(null, "", ".");
      window.onpopstate = null;
      setShowModalUpload(false);
    }
  }, []);

  ///
  ///
  ///
  ///OPEN MODAL THEN CALL CLOSEMODAL FUNCTION WHICH WAITS FOR A POP EVENT(for closing modal)
  const OpenUploadModal = useCallback(() => {
    setShowModalUpload(!showModalUpload);
    //pushstate add enteries to your history
    window.history.pushState(null, "", "Options");
    closeUploadModal(1);
  }, [showModalUpload, closeUploadModal]);










  useEffect(() => {
    /// miniProfile ? setx(false) : setx(true);
  }, [miniProfile]);

  useEffect(() => {


    setTimeout(function () {
      dispatch(UpdateLoader(false));
      if (showThisComponenet) setshowThisComponenet(false);
    }, 7500);

    setTimeout(function () {
      if (ShowLoader2) {
        setShowLoader2(false);
      }
    }, 1500);



  }, [postData]);






  const TopRef = useRef<any>();



  const [indexRoll, setindexRoll] = useState(0);

  const postDivRefRoll = useRef<any[]>([]);



  const tyTimer = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [AllowRoll, setAllowRoll] = useState(false);

  const clearAllTimers = () => {
    tyTimer.current.forEach(timer => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    });
    tyTimer.current = [];
    setShowBigPlay(false);
  }


  const postDivRefx = useRef<any>([]);



  const scrollToRef = useCallback(() => {

    var Limit: number = postData.length;

    var Time = 0;

    for (let i = 0; i <= Limit; i++) {  // <= 20 to include the reset to the first post
      if (i > indexRoll) {
        Time = Time + 4500;
        setShowBigPlay(true);

        tyTimer.current[i] = setTimeout(() => {

          if (i === Limit) {
            // Reset to the first post after reaching the last post
            postDivRefx.current[Limit < 3 ? Limit : Limit - 3].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            //
            postDivRefRoll.current[Limit < 3 ? Limit : Limit - 3].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowBigPlay(false);
          } else {
            postDivRefx.current[i].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            //
            postDivRefRoll.current[i].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }


        }, Time - 4500);
      }
    }

  }, [AllowRoll, indexRoll, postData]);


  /////////////////////////////////////////////////////////////





  return (
    <>
      <Grid container className="dontallowhighlighting">
        <Grid
          item
          xs={12}
          style={{
            position: "fixed",
            width: "100%",
            padding: "0px",
            height: "0px",
            zIndex: 20000,
            top: "0px",
            cursor: "pointer",
          }}
        ></Grid>

        <Grid
          item
          style={{
            height: "0px",
            zIndex: 500000000000,
            position: 'fixed',
            top: '0vh'
          }}
        >
          <ActualMenu
            scrollToRef={scrollToRef}
            setsuperSettings={setsuperSettings}
            postData={postData}
            showModalFormMenu={showModalFormMenu}
            setshowModalFormMenu={setshowModalFormMenu} />

        </Grid>



        <Grid
          ref={TopRef}
          className="parent-containerEffect  effect"
          item
          xs={12}
          style={{
            padding: "0px",
            paddingLeft: miniProfile ? (matchPc ? "10.5vw" : "0vw") : "0vw",
            paddingRight: miniProfile ? (matchPc ? "10.5vw" : "0vw") : "0vw",
            height: "auto",
            marginTop: '5.5vh'
          }}
        >
          {postData.length > 0 ? (
            <Masonry
              columns={matchPc ? 2 : miniProfile ? 2 : 1}
              spacing={miniProfile && matchMobile ? 0 : miniProfile ? 4 : 0}
              style={{
                padding: "0px",
              }}
            >
              {postData.map((post: any, i: any) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    scrollSnapAlign: x ? "start" : "",
                  }}
                >
                  <div
                    style={{
                      display: miniProfile ? "block" : "none",
                      marginTop: "-5px",
                    }}
                  >
                    <MiniPost
                      setSliderIndexMini={setSliderIndexMini}
                      sliderIndexMini={sliderIndexMini}
                      zoomClickedIndex={zoomClickedIndex}
                      setzoomClickedIndex={setzoomClickedIndex}
                      miniProfile={miniProfile}
                      setminiProfile={setminiProfile}
                      setStopBodyScroll={setStopBodyScroll}
                      setx={setx}
                      miniLayoutPost={miniLayoutPost}
                      setCommentPostid={setCommentPostid}
                      postData={postData}
                      setDiscussionImage={setDiscussionImage}
                      OpenModalForm={OpenModalForm}
                      second={second}
                      setsecond={setsecond}
                      secondgo={secondgo}
                      setsecondgo={setsecondgo}
                      setcountAutoplay={setcountAutoplay}
                      countAutoplay={countAutoplay}
                      onLoadDataOnce={onLoadDataOnce}
                      pey={i}
                      addPostItemsRef={addPostItemsRef}
                      postDivRefx={postDivRefx}
                      onPostsItemload={onPostsItemload}
                      post={post}
                      itemheight={itemheight}
                      itemheighthold={itemheighthold}
                      postbackheight={postbackheight}
                      itemcroptype={itemcroptype}
                      length={postData.length}
                      itemFinalPostHeight={itemFinalPostHeight}
                      onPostsItemClicked={onPostsItemClicked}
                      itemCLICKED={itemCLICKED}
                      addpostDivRefx={addpostDivRefx}
                      postDatainner={postDatainner}
                      postDatainnerThumb={postDatainnerThumb}
                      itemOriginalPostHeight={itemOriginalPostHeight}
                      ActiveAutoPlay={ActiveAutoPlay}
                      setActiveAutoPlay={setActiveAutoPlay}
                      AUTOSlideLongImages={AUTOSlideLongImages}
                      scrollToPostx={scrollToPostx}
                    />
                    <Grid
                      item
                      xs={12}
                      style={{
                        marginTop: "20px",
                        height: matchMobile ? "30px" : ' 10px',
                      }}
                    ></Grid>
                  </div>

                  <div key={i} style={{ display: miniProfile ? "none" : "block", }}>
                    <Post
                      addpostDivRefRoll={addpostDivRefRoll}
                      canvasRefIn={canvasRefIn}
                      ActiveCanvas={ActiveCanvas}
                      postItemsRef={postItemsRef}
                      postDatainnerInteraction2={postDatainnerInteraction2}
                      postDatainnerInteraction1={postDatainnerInteraction1}
                      setscrollLocation={setscrollLocation}
                      paperPostScrollRef={paperPostScrollRef}
                      settypeEmo={settypeEmo}
                      setconnectTemplateGo={setconnectTemplateGo}
                      sliderIndexMini={sliderIndexMini}
                      setsliderIndexMini={setSliderIndexMini}
                      zoomClickedIndex={zoomClickedIndex}
                      setzoomClickedIndex={setzoomClickedIndex}
                      miniProfile={miniProfile}
                      setminiProfile={setminiProfile}
                      setStopBodyScroll={setStopBodyScroll}
                      setx={setx}
                      miniLayoutPost={miniLayoutPost}
                      setCommentPostid={setCommentPostid}
                      postData={postData}
                      setDiscussionImage={setDiscussionImage}
                      OpenModalForm={OpenModalForm}
                      second={second}
                      setsecond={setsecond}
                      secondgo={secondgo}
                      setsecondgo={setsecondgo}
                      setcountAutoplay={setcountAutoplay}
                      countAutoplay={countAutoplay}
                      onLoadDataOnce={onLoadDataOnce}
                      pey={i}
                      addPostItemsRef={addPostItemsRef}
                      postDivRef={postDivRef}
                      onPostsItemload={onPostsItemload}
                      post={post}
                      itemheight={itemheight}
                      itemheighthold={itemheighthold}
                      postbackheight={postbackheight}
                      itemcroptype={itemcroptype}
                      length={postData.length}
                      itemFinalPostHeight={itemFinalPostHeight}
                      onPostsItemClicked={onPostsItemClicked}
                      itemCLICKED={itemCLICKED}
                      addpostDivRef={addpostDivRef}
                      postDatainner={postDatainner}
                      postDatainnerThumb={postDatainnerThumb}
                      itemOriginalPostHeight={itemOriginalPostHeight}
                      ActiveAutoPlay={ActiveAutoPlay}
                      setActiveAutoPlay={setActiveAutoPlay}
                      AUTOSlideLongImages={AUTOSlideLongImages}
                      scrollToPost={scrollToPost}
                    /> <Grid
                      item
                      xs={12}
                      style={{
                        marginTop: "0px",
                        height: "0.5vh",
                      }}
                    ></Grid>
                  </div>

                </div>
              ))}
            </Masonry>
          ) : null}
        </Grid>




        <Grid
          container
          xs={12}

        >

          <Grid
            item
            xs={2}>
          </Grid>


          <Grid
            item
            className="animateColorAndPadding"
            xs={8}
            ref={lastItemElement}
            style={{
              visibility: showMoreIndicator ? 'visible' : 'hidden',
              marginTop: lastIndicatorPush ? `${lastIndicatorPushH}vh` : "37vh",
              height: "7px",
              backgroundColor: 'blue'
            }}
          ></Grid>


        </Grid>







      </Grid >
    </>
  );
}

export const Profile = React.memo(Profilex);
