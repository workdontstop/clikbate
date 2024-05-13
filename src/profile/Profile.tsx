import React, { useState, useRef, useCallback, useEffect } from "react";
import { Menu } from "./Menu";
import { Billboard } from "./Billboard";
import { Post } from "./Post";
import { MiniPost } from "./MiniPost";
import { OptionsSlider } from "./OptionsSlider";
import $ from "jquery";

import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import { UpdateInteract, UpdateAlertReducer } from ".././GlobalActions";


import {
  Paper,
  Grid,
  Typography,
  createTheme,
  MuiThemeProvider,
  Box,
} from "@material-ui/core";


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import Masonry from "@mui/lab/Masonry";
import AddIcon from "@mui/icons-material/Add";
import { Upload } from "../upload/Upload";
import { SnapToggleAction } from ".././GlobalActions";
import { UpdateLoader } from ".././GlobalActions";

function Profilex({
  OpenModalForm,

  postData,

  postDatainner,
  postDatainnerThumb,
  showProfiileData,
  paperPostScrollRef,
  setx,

  setDiscussionImage,
  setCommentPostid,

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
  clikplay,
  callPagination,
  setShowBigPlay,

  ShowBigPlay,
  callhistoryModal,
  openmodalhistory,
  historyScrollonload,
  setkeypost,
  WebsiteMode,
  setlatestInview,
  postDivRefx,


  setindexRoll,
  postDivRefRoll,


  showData2,
  setuptype,
  showData3,
  showDataTop,
  showData1,

  CallMorePages,
  setupTop,
  setPostPageLimit,
  PostPageLimit,
  ActualpostDataAll,
  RandomColor,

  sethistoryScrollonload,

}: any) {

  const [countAutoplay, setcountAutoplay] = useState<number>(0);

  const dispatch = useDispatch();

  var pagenumLimit = 18;



  const postDivRef = useRef<any[]>([]);

  const postItemsRef = useRef<any>([]);





  const canvasRefIn: any = useRef(null);




  ///

  const [second, setsecond] = useState<any>(0);

  const [ShowBar, setShowBar] = useState(false);


  const [secondgo, setsecondgo] = useState<boolean>(false);


  const [AllowAllHdImagesShow, setAllowAllHdImagesShow] = useState<boolean>(false);

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

  const [showMoreIndicatorxxx, setshowMoreIndicatorxxx] = useState(false);


  const [lastIndicatorPush, setlastIndicatorPush] = useState(false);

  const [lastIndicatorPushH, setlastIndicatorPushH] = useState(37);





  useEffect(() => {

    if (clikplay) {
      clearAllTimers();
    }


  }, [clikplay])


  useEffect(() => {

    ////setshowThisComponenet(true);

  }, [])


  useEffect(() => {


    setCloudPost(true);

  }, [postData])

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      memeberPageid: number;
      id: number;

    };
  }
  const { image, id, memeberPageid } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));
  const imageReducer = image;
  const idReducer = id;
  const memeberPageidReducer = memeberPageid;

  /////
  /////
  /////



  useEffect(() => {

    if (showProfiileData) {
      if (postData.length < pagenumLimit) {

        setshowMoreIndicatorxxx(false)

      } else {

        setshowMoreIndicatorxxx(true)
      }
    }


  }, [lastItemElement, postData, showProfiileData]); // Re-run the effect when dependencies change


  const [AllowMore, setAllowMore] = useState(false);

  useEffect(() => {

    if (postData) {

      setAllowMore(true);

      if (sTimern.current) {
        clearTimeout(sTimern.current);
      }

      sTimern.current = setTimeout(() => {


        setAllowMore(false);
      }, 500)
    }

  }, [])




  useEffect(() => {

    if (showProfiileData) {

      if (postData) {
        setTimeout(() => {

          // Initialize the observer in the effect
          const observer = new IntersectionObserver((entries: any) => {


            const ent = entries[0];
            if (ent.isIntersecting) {


              if (sTimer.current) {
                clearTimeout(sTimer.current);
              }



              sTimer.current = setTimeout(() => {

                if (setuptype === 1) {
                  if (showData2) {
                  } else {
                    CallMorePages(2);
                  }
                } else if (setuptype === 2) {
                  if (showData3) {
                  } else {
                    CallMorePages(3);
                  }
                }
                else if (setuptype === 38) {


                  ////alert(postData[0];)

                  if (sTimer3.current) {
                    clearTimeout(sTimer3.current);
                  }

                  if (sTimer2.current) {
                    clearTimeout(sTimer2.current);
                  }

                  if (sTimer4.current) {
                    clearTimeout(sTimer4.current);
                  }





                  sTimer4.current = setTimeout(() => {
                    CallMorePages(4);
                  }, 2000)







                  sTimer2.current = setTimeout(() => {
                    ////callPagination();
                  }, 5000)




                }
                else if (setuptype === 3) {




                  setShowBar(true);




                  if (sTimer6.current) {
                    clearTimeout(sTimer6.current);
                  }


                  sTimer6.current = setTimeout(() => {

                    setminiProfile(false);
                    setShowBar(false);


                    callPagination();

                    if (sTimer3.current) {
                      clearTimeout(sTimer3.current);
                    }

                    paperPostScrollRef.current.scrollTop = 0;


                  }, 2500)


                }
                else if (setuptype === 4) {

                  if (showData1) { } else {
                    /// dispatch(UpdateLoader(true));
                    ///setshowThisComponenet(true);
                    /// setminiProfile(false);

                  }


                } else { }





              }, 200)


            } else {


              setShowBar(false);

              if (sTimer6.current) {
                clearTimeout(sTimer6.current);
              }



              if (sTimer.current) {
                clearTimeout(sTimer.current);
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
        }, 500)
      }
    }


  }, [lastItemElement, postData, showProfiileData, setuptype,
    showData2, showData3, showDataTop, showData1]); // Re-run the effect when dependencies change




  const [ActiveCanvasx, setActiveCanvasx] = useState(0);

  const [itemOriginalPostHeight, setitemOriginalPostHeight] = useState<
    Array<number>
  >([]);

  const [itemCLICKED, setitemCLICKED] = useState<Array<boolean>>([]);
  const [onLoadDataOnce, setonLoadDataOnce] = useState<Array<boolean>>([]);

  const [ActiveAutoPlay, setActiveAutoPlay] = useState<Array<boolean>>([]);

  const [ActiveAutoPost, setActiveAutoPost] = useState<Array<number>>([]);

  var heightplus = matchPc ? 0.18 : matchTablet ? 0.1 : 0.065;
  var postbackheighthold = document.documentElement.clientHeight * heightplus;

  const [postbackheight] = useState<number>(postbackheighthold);

  const sTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimern = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimer4 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);


  const sTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);



  const scrollTypeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  const postTimer1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer4 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer5 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer7 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cloudTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);






  const tTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );




  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      pagenum: number,
      Guest: number



    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, activateLoader, pagenum, Guest } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const activateLoaderReducer = activateLoader;
  const pagenumReducer = pagenum;
  const GuestReducer = Guest;


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

      const initialsetsetActiveAutoPost = postData.map(
        (obj: any) => obj.ActiveAutoPost
      );
      setActiveAutoPost(initialsetsetActiveAutoPost);


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

  const navvScroll = useCallback(() => {
    /// alert(ScrollTo);

    if (StopMini) {
      if (ScrollTo === 0) {
      } else {
        //alert('kjjhg');
        setTimeout(() => {
          paperPostScrollRef.current.scrollTop = ScrollTo;
        }, 30);
      }
    } else {

    }

  }, [StopMini, ScrollTo]);



  const [CloudPost, setCloudPost] = useState(true);








  const onPostsItemload = useCallback(
    (e: any, index: number, itemnum: number) => {

      if (itemnum === 0) {
        if (postItemsRef.current[index]) {

          clearAllTimers();


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
            matchPc ? 55 : matchTablet ? 52 : 5
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

          /// 



          if (StopMini || pagenumReducer === 0) { } else {
            if (postData[0].lim > 0 && index === 0) {
              ///// setTimeout(function () {
              /////postDivRef.current[0].scrollIntoView({
              /////behavior: "smooth",
              /////block: "start",
              /////////});
              /////////postDivRefx.current[0].scrollIntoView({
              ////////behavior: "smooth",
              ///////// block: "start",
              /////// })
              ///////////
              //////// }, 1100);
            }
          }


          setAllowAllHdImagesShow(true);
          if (memeberPageidReducer === 0) { setCloudPost(false); }


          if (StopMini) {
          } else {
            navvScroll();

          }


          if (postData.length - 1 === index) {





            /**  if (activateLoaderReducer) {
                            dispatch(UpdateLoader(false));
                          } */



            dispatch(UpdateLoader(true));



            if (postTimer1.current) {
              clearTimeout(postTimer1.current);
            }
            postTimer1.current = setTimeout(function () {

              if (cloudTimer2.current) {
                clearTimeout(cloudTimer2.current);
              }

              if (StopMini) {



                cloudTimer2.current = setTimeout(function () {
                  setCloudPost(false);
                }, 2000);

                if (postTimer2.current) {
                  clearTimeout(postTimer2.current);
                }
                postTimer2.current = setTimeout(function () {
                  setStopMini(false)
                }, 2000);
              } else {

                if (memeberPageidReducer === 0) {

                  // historyBoy();

                } else {



                  setminiProfile(true);

                  cloudTimer2.current = setTimeout(function () {
                    setCloudPost(false);
                  }, 2000);




                }





              }
              ///////////
            }, 1000);

            if (postTimer3.current) {
              clearTimeout(postTimer3.current);
            }
            postTimer3.current = setTimeout(function () {
              setlastIndicatorPushH(22 + 37);
              setlastIndicatorPush(true);


              openmodalhistory(callhistoryModal);
              if (historyScrollonload === 0) {
              } else {
                if (postTimer4.current) {
                  clearTimeout(postTimer4.current);
                }
                postTimer4.current = setTimeout(() => {
                  /// alert('zzzzzz');

                  paperPostScrollRef.current.scrollTop = historyScrollonload;

                  sethistoryScrollonload(0);
                }, 1000);
              }


              if (StopMini) {

                if (postTimer5.current) {
                  clearTimeout(postTimer5.current);
                }
                postTimer5.current = setTimeout(() => {
                  setshowThisComponenet(false);
                  dispatch(UpdateLoader(false));
                }, 1000);


              } else {


                setshowThisComponenet(false);
                dispatch(UpdateLoader(false));

                if (postTimer7.current) {
                  clearTimeout(postTimer7.current);
                }

                postTimer7.current = setTimeout(() => {



                  ////

                  ///
                  ///



                }, 1000)

              }
              ///////////
            }, 1000);





          }
        }

      }
    },
    [StopMini,
      idReducer,
      GuestReducer,
      memeberPageidReducer,
      screenHeightReducer,
      itemheight,
      itemheighthold,
      itemFinalPostHeight,
      showProfiileData,
      activateLoaderReducer,
      postItemsRef,
      postData,
      pagenumReducer,
      setuptype,
      historyScrollonload

    ]
  );


  //historyBoy

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






  const InitializingAutoPlayIndex = (index: number) => {

    setindexRoll(index);

    ///clearAllTimers();

  }

  const [currentClicked, setcurrentClicked] = useState(-1);

  const onPostsItemClicked = useCallback((index: number, type: number) => {



    InitializingAutoPlayIndex(index);


    if (itemCLICKED[index]) {





    } else {



      setcurrentClicked(index);
      ///dispatch(SnapToggleAction(false));



      AUTOSlideLongImages(index);
      if (scrollTypeTimer.current) {
        clearTimeout(scrollTypeTimer.current);
      }

      const newclickArray = [...itemCLICKED];
      newclickArray[index] = true;
      setitemCLICKED(newclickArray);
      postitemSHOWFULLHEIGHT(index, 0);

      setTimeout(() => {
        //// scrollToPost(index); 
      }, 500)

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
    }, 4000);

    setTimeout(function () {
      if (ShowLoader2) {
        setShowLoader2(false);
      }
    }, 1500);



  }, [postData]);






  const TopRef = useRef<any>();




  const tyTimer = useRef<ReturnType<typeof setTimeout>[]>([]);



  const clearAllTimers = () => {
    tyTimer.current.forEach(timer => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    });
    tyTimer.current = [];
    setShowBigPlay(false);
  }






  /////////////////////////////////////////////////////////////




  const [Added, setAdded] = useState(100);

  const [TempMini, setTempMini] = useState(true);


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
          ref={TopRef}
          className="parent-containerEffect  effect"
          item
          xs={12}
          style={{
            padding: "0px",
            paddingLeft: miniProfile ? (matchPc ? "6vw" : "0vw") : matchPc ? "0vw" : '0vw',
            paddingRight: miniProfile ? (matchPc ? "6vw" : "0vw") : matchPc ? "0vw" : '0vw',
            height: "auto",
            marginTop: matchMobile ? miniProfile ? '-0.8vh' : '18vh' : miniProfile ? '5.5vh' : '18vh',
            marginLeft: miniProfile && matchPc ? '1.5vw' : '0px',
          }}
        >
          <Grid
            item
            className={darkmodeReducer ? 'post-background-darkx' : 'post-background-lightx'}
            xs={12}
            style={{

              height: '100%',
              width: '100%',
              position: 'absolute',
              top: '0vh',
              zIndex: 10,

              display: CloudPost ? miniProfile ? 'none' : 'block' : 'none'
            }}
          ></Grid>
          {postData.length > 0 ? (
            <Masonry
              columns={matchPc ? miniProfile ? 3 : 2 : miniProfile ? 3 : 1}
              spacing={matchMobile ? miniProfile ? 0.5 : 0 : miniProfile ? 4 : 0}
              style={{
                padding: "0px",

              }}
            >

              {postData.map((post: any, i: any) => (
                <div
                  key={i}
                  style={{
                    position: "relative",

                  }}
                >


                  <div ref={
                    setuptype === 1 || setuptype === 2 ?
                      postData.length - 2 === i ? lastItemElement : null :
                      null
                  }

                    style={{
                      position: "relative",
                      display: AllowMore ? 'none' : 'block',
                      backgroundColor: '#00ccff',
                      height: '0vh'
                    }}
                  >  </div>



                  <div

                    style={{
                      display: miniProfile ? "block" : "none",
                      marginTop: "-5px",

                    }}
                  >
                    <MiniPost

                      WebsiteMode={WebsiteMode}
                      InitializingAutoPlayIndex={InitializingAutoPlayIndex}

                      AllowAllHdImagesShow={AllowAllHdImagesShow}
                      clearAllTimers={clearAllTimers}

                      ShowBigPlay={ShowBigPlay}
                      setAdded={setAdded}
                      Added={Added}
                      postDatainnerInteraction2={postDatainnerInteraction2}
                      postDatainnerInteraction1={postDatainnerInteraction1}
                      paperPostScrollRef={paperPostScrollRef}
                      setSliderIndexMini={setSliderIndexMini}
                      sliderIndexMini={sliderIndexMini}
                      zoomClickedIndex={zoomClickedIndex}
                      setzoomClickedIndex={setzoomClickedIndex}
                      miniProfile={miniProfile}
                      setminiProfile={setminiProfile}
                      setStopBodyScroll={setStopBodyScroll}
                      setx={setx}
                      ActiveCanvasx={ActiveCanvasx}
                      setActiveCanvasx={setActiveCanvasx}

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
                        marginTop: matchMobile ? "-9px" : "1px",
                        height: '-2vh',
                      }}
                    ></Grid>
                  </div>

                  <div

                    key={i} style={{ display: miniProfile ? "none" : "block", }}>


                    <Post
                      setuptype={setuptype}
                      ActualpostDataAll={ActualpostDataAll}
                      setlatestInview={setlatestInview}
                      WebsiteMode={WebsiteMode}
                      setkeypost={setkeypost}
                      currentClicked={currentClicked}
                      InitializingAutoPlayIndex={InitializingAutoPlayIndex}
                      ActiveAutoPost={ActiveAutoPost}
                      setActiveAutoPost={setActiveAutoPost}


                      AllowAllHdImagesShow={AllowAllHdImagesShow}
                      clearAllTimers={clearAllTimers}

                      ShowBigPlay={ShowBigPlay}
                      setAdded={setAdded}
                      Added={Added}
                      addpostDivRefRoll={addpostDivRefRoll}
                      canvasRefIn={canvasRefIn}

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
                    />

                    <Grid
                      item
                      xs={12}
                      style={{
                        marginTop: "0px",
                        height: matchMobile ? postData.length - 1 === i ? '1vh' : "27.5vh" :
                          postData.length - 1 === i ? '0vh' : '27vh',
                      }}
                    ></Grid>


                  </div>



                  <div ref={
                    setuptype === 3 ?
                      postData.length - 1 === i ? lastItemElement : null : null

                  }

                    style={{
                      position: setuptype === 3 ?
                        postData.length - 1 === i ?
                          'relative' : "absolute" : "absolute",

                      backgroundColor: 'red',
                      height: '0vh',
                      marginTop: matchMobile ? '25vh' : '15vh',
                      display:
                        setuptype === 3 ?
                          postData.length - 1 === i ?
                            'block' : 'none' : 'none',
                    }}
                  >  </div>


                  <div
                    className="blinken"
                    style={{
                      position: setuptype === 3 ?
                        postData.length - 1 === i ?
                          'relative' : "absolute" : "absolute",
                      height: '1vh',
                      opacity: '0.8',
                      marginTop: matchMobile ? '-2vh' : '-2vh',
                      margin: 'auto',
                      width: '80%',
                      display:
                        setuptype === 3 ?
                          postData.length - 1 === i ?
                            ShowBar ? 'block' : 'none' : 'none' : 'none',

                      backgroundImage: `linear-gradient(45deg, ${RandomColor}, ${colorReducer})`,
                    }}
                  >  </div>



                </div>
              ))}
            </Masonry>
          ) : null}
        </Grid>







        <Grid
          onClick={() => {
            clearAllTimers();
          }}
          container

          className={darkmodeReducer ? "post-background-darkPlay" : 'post-background-lightPlay'}
          xs={12}
          style={{
            height: "100%",
            width: '100%',
            display: ShowBigPlay ? 'block' : 'none',
            position: 'fixed',
            top: '0vh',
            textAlign: 'center',
            padding: '0px',
            cursor: 'pointer'
          }}

        >

          <Grid
            item
            xs={12}
            style={{ padding: '0px' }}
          >





          </Grid>




        </Grid>




      </Grid >
    </>
  );
}

export const Profile = React.memo(Profilex);
