import React, { useRef, useState, useEffect, useCallback } from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSpring, animated, useTransition } from "react-spring";
import Crop54Icon from "@mui/icons-material/Crop54";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import CropIcon from "@mui/icons-material/Crop";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import AspectRatioTwoToneIcon from "@mui/icons-material/AspectRatioTwoTone";
import StarIcon from "@mui/icons-material/Star";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import AlbumIcon from "@mui/icons-material/Album";
import BentoIcon from "@mui/icons-material/Bento";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { Slider } from "./Slider";
import { Connect } from "./Connect";
import { useInView } from "react-intersection-observer";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import AddIcon from "@mui/icons-material/Add";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType,
  Updatepagenum,



} from ".././GlobalActions";

import Axios from "axios";
import { UpdateSign } from "../GlobalActions";



function Postx({
  pey,
  addPostItemsRef,
  onPostsItemload,
  post,
  length,
  itemheight,
  itemheighthold,
  postbackheight,
  itemcroptype,
  itemFinalPostHeight,
  onPostsItemClicked,
  itemCLICKED,
  addpostDivRef,
  addpostDivRefRoll,
  postDatainner,
  itemOriginalPostHeight,
  ActiveAutoPlay,
  setActiveAutoPlay,
  AUTOSlideLongImages,
  postDivRef,
  onLoadDataOnce,
  postDatainnerThumb,
  setcountAutoplay,
  countAutoplay,
  second,
  setsecond,
  secondgo,
  setsecondgo,
  scrollToPost,
  OpenModalForm,
  setDiscussionImage,
  postData,
  setCommentPostid,
  miniLayoutPost,
  setStopBodyScroll,
  setminiProfile,
  zoomClickedIndex,
  setzoomClickedIndex,
  miniProfile,
  setsliderIndexMini,
  sliderIndexMini,
  setconnectTemplateGo,
  settypeEmo,
  paperPostScrollRef,
  setscrollLocation,
  postDatainnerInteraction1,
  postDatainnerInteraction2,
  itemInteractGo2,
  itemInteractGo1,
  postItemsRef,
  ActiveCanvas,
  ShowBigPlay,
  activeAudio,
  setactiveAudio,
  clearAllTimers,
  AllowAllHdImagesShow,
  setitemCLICKED



}: any) {
  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_APPX_STATE } = process.env;

  const [Hideonload, setHideonload] = useState(true);

  const [Emo1Num, setEmo1Num] = useState(0);
  const [Emo2Num, setEmo2Num] = useState(0);
  const [Emo3Num, setEmo3Num] = useState(0);
  const [Emo4Num, setEmo4Num] = useState(0);

  const [Added, setAdded] = useState(100);

  const Emopad = Emo1Num > 9 ? "8px" : "7px";
  const Emofont = Emo1Num > 9 ? "0.7vw" : "0.75vw";

  const Emopad2 = Emo2Num > 9 ? "8px" : "7px";
  const Emofont2 = Emo2Num > 9 ? "0.7vw" : "0.75vw";

  const Emopad3 = Emo3Num > 9 ? "8px" : "7px";
  const Emofont3 = Emo3Num > 9 ? "0.7vw" : "0.75vw";

  const Emopad4 = Emo4Num > 9 ? "8px" : "7px";
  const Emofont4 = Emo4Num > 9 ? "0.7vw" : "0.75vw";

  const Emopadcom = post.commentCount > 9 ? "8px" : "7px";
  const Emofontcom = post.commentCount > 9 ? "0.7vw" : "0.75vw";

  const [Ein, setEin] = useState(0);


  const profileImageref = useRef<any>();

  var allow4dev = "";

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.95,


  });

  /* onst scrollToRef = (ref: any) => {
    TopRef.current.scrollIntoView({ behavior: 'smooth' });
  };  */


  const startinview = useCallback(() => {
    if (inView) {



      if (Timer.current) {
        clearTimeout(Timer.current);
      }


      if (countAutoplay === 0) {
        setcountAutoplay(1);
      }

      Timer.current = setTimeout(function () {
        if (countAutoplay === 1) {
          if (post.post_count === 1) {
          } else {
            setsecond(pey);
          }
        } else {
          if (post.post_count === 1) {
          } else {
            startSlider(0);
          }
        }
      }, 1000);
    } else {
      if (Timer.current) {
        clearTimeout(Timer.current);
      }
      if (countAutoplay !== 0) {
        setcountAutoplay(0);
      }
      if (secondgo) {
        setsecondgo(false);
      }
      if (second !== 0) {
        setsecond(0);
      }

      if (post.post_count === 1) {
      } else {
        stopSlider(0);
      }
    }
  }, [countAutoplay, inView]);

  useEffect(() => {
    startinview();
  }, [inView]);

  useEffect(() => {
    if (secondgo) {
      if (second === pey) {
        setsecondgo(false);
        startSlider(0);
      }
    } else {
    }
  }, [secondgo]);

  ///
  ///
  ///
  /// SCROLL TO POST ON MAXIMISE
  useEffect(() => {
    setTimeout(() => {
      if (zoomClickedIndex === 0) {
      } else {
        if (sliderIndexMini > 400) {
        } else {
          scrollToPost(zoomClickedIndex - 1);
        }

        setzoomClickedIndex(0);
      }
    }, 500);
  }, [miniProfile, sliderIndexMini]);




  const [autoSlideDuration] = useState(6000);

  const dispatch = useDispatch();

  const [BigCircle, setBigCircle] = useState(false);

  const [opacityController, setopacityController] = useState<boolean>(false);

  const [LImiter, setLImiter] = useState<boolean>(false);

  var emoOpacity = 1;

  ///

  const [StopSpring, setStopSpring] = useState(false);

  const [showingEmotion, setshowingEmotion] = useState(false);

  const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
  const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);

  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX
  const animationmenu = useSpring({
    config: {
      duration: 2,
    },
    opacity: opacityController ? 1 : StopSpring ? 1 : 0,
    transform: opacityController
      ? `translateY(0%)`
      : StopSpring
        ? `translateY(0%)`
        : `translateY(150%)`,
  });

  useEffect(() => {
    setTimeout(() => {
      setHideonload(false);
    }, 3500);
    if (post) {
      setAdded(post.favCount);
    }
  }, [post]);

  useEffect(() => {
    setEin(post.EmoIn);
    setEmo1Num(post.lovely);
    setEmo2Num(post.cool);
    setEmo3Num(post.care);
    setEmo4Num(post.funny);

    if (post.EmoIn === 1) {
      startSpin();
    } else if (post.EmoIn === 2) {
      startSpin2();
    } else if (post.EmoIn === 3) {
      startSpin3();
    } else if (post.EmoIn === 4) {
      startSpin4();
    } else {
    }

    setTimeout(() => {
      setStopSpring(true);
    }, 30000);
  }, [post]);

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      username: string;
      image: string;
      imageThumb: string;
      id: number;
      memeberPageid: number;
      MemberProfileData: any;

    };
  }
  const { image, imageThumb, id, memeberPageid, MemberProfileData, username } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));
  const imageReducer = image;
  const imageReducerThumb = imageThumb;
  const idReducer = id;
  const memeberPageidReducer = memeberPageid;
  const MemberProfileDataReducer = MemberProfileData;
  const usernameReducer = username;


  const CallEmoBackend = useCallback(
    (ty: number) => {
      var emoboy = {
        post: post.id,
        user: idReducer,
        type: ty,
      };

      if (Ein === 0 || Ein === null) {
        Axios.post(
          `${REACT_APP_SUPERSTARZ_URL}/insertEmo`,
          { values: emoboy },
          {}
        )
          .then((response) => {
            if (response.data.message === "emo updated") {
              setEin(ty);

              if (ty === 1) {
                setEmo1Num((state: any) => state + 1);
              } else if (ty === 2) {
                setEmo2Num((state: any) => state + 1);
              } else if (ty === 3) {
                setEmo3Num((state: any) => state + 1);
              } else {
                setEmo4Num((state: any) => state + 1);
              }
            }
          })
          .catch(function (error) {
            alert("profileoutter post error emo");
            stopEmoAlreadySpinning();
          });
      } else {
        Axios.put(
          `${REACT_APP_SUPERSTARZ_URL}/updateEmo`,
          { values: emoboy },
          {}
        )
          .then((response) => {
            if (response.data.message === "emo updated") {
              if (Ein === 1) {
                setEmo1Num((state: any) => state - 1);
              } else if (Ein === 2) {
                setEmo2Num((state: any) => state - 1);
              } else if (Ein === 3) {
                setEmo3Num((state: any) => state - 1);
              } else if (Ein === 4) {
                setEmo4Num((state: any) => state - 1);
              }

              setEin(ty);

              if (ty === 1) {
                setEmo1Num((state: any) => state + 1);
              } else if (ty === 2) {
                setEmo2Num((state: any) => state + 1);
              } else if (ty === 3) {
                setEmo3Num((state: any) => state + 1);
              } else {
                setEmo4Num((state: any) => state + 1);
              }
            }
          })
          .catch(function (error) {
            alert("profileoutter post error emo");
            stopEmoAlreadySpinning();
          });
      }
    },
    [
      REACT_APP_SUPERSTARZ_URL,
      post.id,
      idReducer,
      Emo1Num,
      Emo2Num,
      Emo3Num,
      Emo4Num,
    ]
  );
  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      historyscroll: number;
      interactContent: any;
      interact: boolean;
      MenuData: String;
      pagenum: number;
      SignIn: boolean,
      Guest: number
    };
  }



  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interactContent, interact, MenuData, pagenum, SignIn, Guest } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;
  const activateLoaderReducer = activateLoader;
  const historyscrollReducer = historyscroll;
  const interactContentReducer: any = interactContent;
  const interactReducer = interact;
  const MenuDataReducer = MenuData
  const pagenumReducer = pagenum;
  const SignInReducer = SignIn;
  const GuestReducer = Guest;


  var textback = "";
  if (darkmodeReducer) {
    textback = "caption-darkPost";
  } else {
    textback = "caption-lightPost";
  }

  const showcaptionwaitTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [showSliderLoader, setshowSliderLoader] = useState(false);

  const [showSliderLoaderxx, setshowSliderLoaderxx] = useState(false);

  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderIndexSlow, setSliderIndexSlow] = useState(0);

  const [SpinLovely, setSpinLovely] = useState(0);
  const [Spincool, setSpincool] = useState(0);
  const [Spinfun, setSpinfun] = useState(0);
  const [Spincare, setSpincare] = useState(0);

  const [currentSpinState, setcurrentSpinState] = useState(0);

  const [Zoom1, setZoom1] = useState(false);
  const [Zoom2, setZoom2] = useState(false);
  const [Zoom3, setZoom3] = useState(false);
  const [Zoom4, setZoom4] = useState(false);


  const [Zoomx, setZoomx] = useState(false);
  const [Zoomx1, setZoomx1] = useState(false);
  const [Zoomx2, setZoomx2] = useState(false);

  const [Zoomu, setZoomu] = useState(false);

  const [ZoomBigEmo1, setZoomBigEmo1] = useState(false);
  const [ZoomBigEmo2, setZoomBigEmo2] = useState(false);
  const [ZoomBigEmo3, setZoomBigEmo3] = useState(false);
  const [ZoomBigEmo4, setZoomBigEmo4] = useState(false);

  const [Dragstart, setDragstart] = useState(false);

  const waitChangeIndexTimer2 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  useEffect(() => {
    if (onLoadDataOnce[pey]) {
      if (LImiter) {
      } else {
        setTimeout(() => {
          setopacityController(true);
        }, pey * 250);
        setLImiter(true);
      }
    }
  }, [onLoadDataOnce, LImiter]);

  const flashBlackAndWhite = () => {
    //// postDivRef.current[pey].style.filter = "grayscale(100%)";

    setTimeout(function () {
      /// postDivRef.current[pey].style.filter = "none";
    }, 500);
  };

  const stopSlider = (type: any) => {
    if (type === 1) {
      flashBlackAndWhite();
    }

    ///////////////////////////////
    const newArrxq = [...ActiveAutoPlay];
    newArrxq[pey] = true;
    setActiveAutoPlay(newArrxq);
    ////////////////////////////
    setshowSliderLoaderxx(false);
    setshowSliderLoader(true);

    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  const autoPlaysec = useCallback(() => {
    if (sliderIndex === 0 && showSliderLoaderxx && countAutoplay === 1) {
      setTimeout(function () {
        if (countAutoplay === 1 && second !== 0) {
          stopSlider(0);

          if (Timer2.current) {
            clearTimeout(Timer2.current);
          }

          Timer2.current = setTimeout(function () {
            setcountAutoplay(0);
            setsecondgo(true);
          }, 500);
        }
      }, 2000);
    }
  }, [showSliderLoaderxx, countAutoplay, sliderIndex]);

  useEffect(() => {
    autoPlaysec();
  }, [sliderIndex]);

  ///
  ///
  ///
  /// SHOW  LOGIN PASSWORD FOR A WHILE
  const startSlider = useCallback(
    (ty: number) => {
      var peyx: number;

      if (ty === 1) {
        peyx = pey + 1;
      } else {
        peyx = pey;
      }

      if (itemCLICKED[peyx]) {
      } else {
        flashBlackAndWhite();
        //////the callback is passed the element, the index, and the array itself.
        ActiveAutoPlay.forEach(function (part: any, index: any, theArray: any) {
          if (peyx === index) {
            theArray[index] = false;
            setshowSliderLoaderxx(true);
          } else {
            theArray[index] = true;
          }
          if (index === ActiveAutoPlay.length) {
            setActiveAutoPlay(theArray);
          }
        });

        ///////////////////////////////
        const newArrxq = [...ActiveAutoPlay];
        newArrxq[peyx] = false;
        setActiveAutoPlay(newArrxq);
        ////////////////////////////
        setshowSliderLoader(false);
        autoPlayTimer.current = setInterval(function () {
          if (ActiveAutoPlay[peyx]) {
            AUTOSlideLongImages(peyx);
          } else {
          }

          setshowSliderLoader(true);

          setSliderIndex((state) => (state + 1) % postDatainner[peyx].length);
          if (waitChangeIndexTimer2.current) {
            clearTimeout(waitChangeIndexTimer2.current);
          }
          waitChangeIndexTimer2.current = setTimeout(function () {
            setSliderIndexSlow(
              (state) => (state + 1) % postDatainner[peyx].length
            );
            setshowSliderLoader(false);
          }, 500);
        }, autoSlideDuration);
      }
    },
    [ActiveAutoPlay]
  );

  const SliderAutoPlay = (type: number) => {
    if (type === 1) {
      startSlider(0);
    } else {
      if (ActiveAutoPlay[pey]) {
        startSlider(0);
      } else {
        stopSlider(1);
      }
    }
  };

  ///
  ///
  ///
  /// CHANGE SLIDER CONTENT USING  DOTS
  const checkifClicked = () => {
    if (itemCLICKED[pey]) {
      onPostsItemClicked(pey);
    } else {
      if (ActiveAutoPlay[pey]) {
      } else {
        stopSlider(0);
      }
      onPostsItemClicked(pey);
    }
  };





  ///
  ///
  ///
  /// CHANGE SLIDER CONTENT USING  DOTS
  const checkifClickedDouble = () => { };

  ///
  ///
  ///
  /// CLICK BILLBOARD OPEN ON DOUBLE CLICK



  const clickslider = (e: any) => {



    switch (e.detail) {
      case 1:
        checkifClicked();
        break;
      case 2:
        checkifClickedDouble();
        break;
      case 3:
        checkifClickedDouble();
        break;
      case 4:
        checkifClickedDouble();
        break;
    }






  };

  const calculateconnectPosition = useCallback(() => {
    var t = profileImageref.current.clientHeight;
    var v = profileImageref.current.clientWidth;

    setprofileImagethumbTop(t - t / 0.64);
    setprofileImagethumbLeft(v - v / 1.48);
  }, [profileImageref.current]);

  var postcropfont = matchPc ? "2.1vw" : matchTablet ? "4vh" : "3.6vh";
  var postcroppadding = matchPc ? "17px" : matchTablet ? "20px" : "4px";
  var cropTop: number = matchPc ? 1.5 : matchTablet ? 7 : -2;

  var posteyefont = matchPc ? "1.75vw" : matchTablet ? "3.4vh" : "3.3vh";
  var posteyeleft = matchPc ? "92.4%" : matchTablet ? "92.693%" : "90%";
  var eyeTop = matchPc ? "-9px" : matchTablet ? "-6px" : "-12px";

  var emotionClass = matchPc
    ? "turpostDark emotionspostPC "
    : matchTablet
      ? "turpostDark emotionspostTablet"
      : "turpostDark emotionspostMOBILE";

  var emoNum4 = matchPc
    ? itemcroptype[pey] === 2
      ? 3.5
      : 6.4
    : matchTablet
      ? 20
      : itemcroptype[pey] === 3
        ? 7
        : 6.7;

  var emoNum3 = matchPc
    ? itemcroptype[pey] === 2
      ? -7.5
      : -4.6
    : matchTablet
      ? 20
      : itemcroptype[pey] === 3
        ? -3.3
        : -4.7;

  var emoNum2 = matchPc
    ? itemcroptype[pey] === 2
      ? 2.3
      : 5.4
    : matchTablet
      ? 20
      : itemcroptype[pey] === 1
        ? 8
        : 10;

  var emoNum = matchPc
    ? itemcroptype[pey] === 2
      ? -2.5
      : 0.5
    : matchTablet
      ? 20
      : itemcroptype[pey] === 1
        ? 8
        : 10;

  var emo = matchPc
    ? itemcroptype[pey] === 2
      ? 12
      : 9
    : matchTablet
      ? 20
      : itemcroptype[pey] === 1
        ? 10
        : 10;

  var emo2 = matchPc
    ? itemcroptype[pey] === 2
      ? 18
      : 15
    : matchTablet
      ? 20
      : itemcroptype[pey] === 3
        ? 14.5
        : 16;


  var profilewidth = matchPc
    ? miniLayoutPost
      ? "12%"
      : "9.5%"
    : matchTablet
      ? "12.5%"
      : "15%";
  var postprofiletop = matchPc ? "8.2vh" : matchTablet ? "-9.3vh" : "-5.7vh";

  var postusernametop = matchPc ? "7vh" : matchTablet ? "-11.9vh" : "-7vh";

  var postusernamefont = matchPc ? "1vw" : matchTablet ? "2.32vh" : "1.7vh";
  var postusernameleft = matchPc ? "11.1%" : matchTablet ? "15.5%" : "20%";

  var postcirclefont = matchPc ? "0.9vw" : matchTablet ? "1.2vw" : "1.1vh";
  var dotspace = matchPc ? "1.7vw" : matchTablet ? "1.9vh" : "1.9vh";
  var dotspace2 = matchPc ? "0.9vw" : matchTablet ? "1.9vh" : "1.9vh";

  var posttopicfont = matchPc ? "1.2vw" : matchTablet ? "1.8vh" : "1.65vh";

  var postcaptiontop = matchPc ? "-1.85vh" : matchTablet ? "-9.2vh" : "-9.6vh";
  var postcaptionfont = matchPc ? "1.2vw" : matchTablet ? "2.35vh" : "1.82vh";
  var postcaptionline = matchPc ? "2.1" : matchTablet ? "1.9" : "1.95";
  var postcaptionleft = matchPc ? "11.1%" : matchTablet ? "15.5%" : "17.5%";
  var postcaptionheight = matchPc ? "10.1vh" : matchTablet ? "8.3vh" : "8.8vh";
  var postcaptionwidth = matchPc ? "79.5%" : matchTablet ? "76%" : "84%";

  var postcommenttop = matchPc
    ? itemcroptype[pey] === 1 || itemcroptype[pey] === 2
      ? itemheighthold[pey] - 30
      : itemheighthold[pey] - 6
    : matchTablet
      ? itemcroptype[pey] === 1 || itemcroptype[pey] === 2
        ? itemheighthold[pey] - 40
        : itemheighthold[pey] - 10
      : itemcroptype[pey] === 1 || itemcroptype[pey] === 2
        ? itemcroptype[pey] === 1
          ? itemheighthold[pey] - 24
          : itemheighthold[pey] - 40
        : itemheighthold[pey] - 13;
  var postcommentfont = matchPc ? "1.8vw" : matchTablet ? "4vh" : "3.15vh";
  var postcommentwidth = matchPc ? "99.7%" : matchTablet ? "97.5%" : "95.5%";

  var postoptionstop = matchPc ? "-3.8vh" : matchTablet ? "-15.4vh" : "-13.5vh";
  var postoptionsleft = matchPc ? "95.5%" : matchTablet ? "94.7%" : "91.5%";
  var postvertfont = matchPc ? "2.2vw" : matchTablet ? "3.6vh" : "3.6vh";

  var postdatetop = matchPc ? "2.15vh" : matchTablet ? "-7.7vh" : "-7.8vh";
  var postdatefont = matchPc ? "0.9vw" : matchTablet ? "1.25vh" : "1.25vh";
  var postdateleft = matchPc ? "98%" : matchTablet ? "98.5%" : "96.3%";

  var emocolor = "";

  const startSpin = () => {
    stopEmoAlreadySpinning();
    setSpinLovely(1);
    setcurrentSpinState(1);

    setZoomBigEmo1(true);
    setTimeout(() => {
      setZoomBigEmo1(false);
    }, 200);
    setTimeout(() => {
      setZoomBigEmo1(true);
    }, 500);
    setTimeout(() => {
      setZoomBigEmo1(false);
    }, 2500);
  };
  const startSpin2 = () => {
    stopEmoAlreadySpinning();
    setSpincool(1);
    setcurrentSpinState(2);

    setZoomBigEmo2(true);
    setTimeout(() => {
      setZoomBigEmo2(false);
    }, 200);
    setTimeout(() => {
      setZoomBigEmo2(true);
    }, 500);
    setTimeout(() => {
      setZoomBigEmo2(false);
    }, 2500);
  };
  const startSpin3 = () => {
    stopEmoAlreadySpinning();
    setSpincare(1);
    setcurrentSpinState(3);

    setZoomBigEmo3(true);
    setTimeout(() => {
      setZoomBigEmo3(false);
    }, 200);
    setTimeout(() => {
      setZoomBigEmo3(true);
    }, 500);
    setTimeout(() => {
      setZoomBigEmo3(false);
    }, 2500);
  };
  const startSpin4 = () => {
    stopEmoAlreadySpinning();
    setSpinfun(1);
    setcurrentSpinState(4);

    setZoomBigEmo4(true);
    setTimeout(() => {
      setZoomBigEmo4(false);
    }, 200);
    setTimeout(() => {
      setZoomBigEmo4(true);
    }, 500);
    setTimeout(() => {
      setZoomBigEmo4(false);
    }, 2500);
  };
  const stopEmoAlreadySpinning = () => {
    switch (currentSpinState) {
      case 1:
        setSpinLovely(0);
        break;
      case 2:
        setSpincool(0);
        break;
      case 3:
        setSpincare(0);
        break;
      case 4:
        setSpinfun(0);
        break;
      default:
    }
  };

  var themepadding = darkmodeReducer ? "turdarkemo" : "turlightemo";

  var optionsClass = "";
  var fontOptions = "";

  if (matchPc) {
    optionsClass = "post-optionsImagePc";
    fontOptions = "1.2vw";
  } else if (matchTablet) {
    optionsClass = "profile-optionsImageTablet";
    fontOptions = "5rem";
  } else {
    optionsClass = "profile-optionsImageMobile";
    fontOptions = "1.9rem";
  }

  const GoToMember = () => {

    dispatch(Updatepagenum(0));

    if (memeberPageidReducer === post.sender) {
    } else {
      ///
      dispatch(UserInfoUpdateMEMBER(post.sender));
      //
      var tt = paperPostScrollRef.current.scrollTop;

      var n, d;

      if (memeberPageidReducer === 0) {
        n = usernameReducer;
        d = {
          type: 0,
          id: 0,
          index: tt,
          data: postData,
          innerid: 0,
          pagenumReducer: pagenumReducer,
        };
      } else {
        n = MemberProfileDataReducer.username;
        d = {
          type: 1,
          id: memeberPageidReducer,
          index: tt,
          data: postData,
          innerid: 0,
          pagenumReducer: pagenumReducer,
        };
      }

      window.history.replaceState(d, "", `${n}`);

      let modalName = `${post.username}`;

      var dd = {
        type: 1,
        id: post.sender,
        innerid: 0,
        pagenumReducer: pagenumReducer,
      };
      window.history.pushState(dd, "", modalName);
    }
  };

  const GoToMemberLoaderUp = () => {
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (memeberPageidReducer === post.sender) {
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMember();
    }, 1000);
  };

  const commentClicked = () => {
    dispatch(UpdateHistory(paperPostScrollRef.current.scrollTop));

    dispatch(UpdatePostFromCom(postData));

    dispatch(UpdateCommentHistory(postData[pey], postData[pey].item2));

    setCommentPostid(postData[pey]);
    setDiscussionImage(postData[pey].item2);
    OpenModalForm(2);
  };




  function formatClikBateTime(dateTime: any) {
    const now: any = new Date();
    const timestamp: any = new Date(dateTime);
    const timeDiff = Math.abs(now - timestamp) / 1000;

    if (timeDiff < 60) {
      return 'just now';
    } else if (timeDiff < 3600) {
      const minutes = Math.floor(timeDiff / 60);
      return `${minutes}m ago`;
    } else if (timeDiff < 86400) {
      const hours = Math.floor(timeDiff / 3600);
      return `${hours}h ago`;
    } else if (timeDiff < 2592000) {
      const days = Math.floor(timeDiff / 86400);
      return `${days}d ago`;
    } else if (timeDiff < 31536000) {
      const months = Math.floor(timeDiff / 2592000);
      return `${months}mo ago`;
    } else {
      const years = Math.floor(timeDiff / 31536000);
      return `${years}y ago`;
    }
  }


  var PostTime = formatClikBateTime(post.time);


  return (
    <>
      <animated.div ref={ref} style={animationmenu}>
        <div
          ref={addpostDivRefRoll}
          style={{
            padding: "0px",
            width: "100%",
            height: '0px'


          }}
        ></div>

        <div
          ref={addpostDivRef}
          style={{
            padding: "0px",
            width: "100%",
            marginTop: pey === 0 || pey === 1 ? "-0.5px" : "-1.1px",
            zIndex: length - 1 - pey,
            paddingLeft: matchMobile ? "0px" : "0.5px",
            paddingRight: matchMobile ? "0px" : "0.5px",
            paddingTop: "0px",
            scrollSnapAlign: snapStartReducer ? "start" : 'none'

          }}
        >



          {/*///////////////////////////////////////////////////////////////////////////POST DATA*/}

          <Slider
            setitemCLICKED={setitemCLICKED}
            AllowAllHdImagesShow={AllowAllHdImagesShow}
            activeAudio={activeAudio}
            setactiveAudio={setactiveAudio}

            paperPostScrollRef={paperPostScrollRef}
            postDivRef={postDivRef}
            checkifClicked={checkifClicked}
            postItemsRef={postItemsRef}
            postDatainnerInteraction2={postDatainnerInteraction2[pey]}
            postDatainnerInteraction1={postDatainnerInteraction1[pey]}
            setsliderIndexMini={setsliderIndexMini}
            setzoomClickedIndex={setzoomClickedIndex}
            setminiProfile={setminiProfile}
            ActiveCanvas={ActiveCanvas}
            type={0}
            ActiveAutoPlay={ActiveAutoPlay}
            setActiveAutoPlay={setActiveAutoPlay}
            pey={pey}
            addPostItemsRef={addPostItemsRef}
            itemheight={itemheight}
            onPostsItemClicked={onPostsItemClicked}
            onPostsItemload={onPostsItemload}
            post={post}
            slides={postDatainner[pey]}
            slidesThumb={postDatainnerThumb[pey]}
            itemcroptype={itemcroptype}
            itemFinalPostHeight={itemFinalPostHeight}
            itemCLICKED={itemCLICKED}
            itemOriginalPostHeight={itemOriginalPostHeight}
            AUTOSlideLongImages={AUTOSlideLongImages}
            clickslider={clickslider}
            startSlider={startSlider}
            stopSlider={stopSlider}
            SliderAutoPlay={SliderAutoPlay}
            showSliderLoader={showSliderLoader}
            setshowSliderLoader={setshowSliderLoader}
            autoPlayTimer={autoPlayTimer}
            sliderIndex={sliderIndex}
            setSliderIndex={setSliderIndex}
            sliderIndexSlow={sliderIndexSlow}
            setSliderIndexSlow={setSliderIndexSlow}
            length={length}
          />
          {/*///////////////////////////////////////////////////////////////////////////POST DATA*/}



          {/*///////////////////////////////////////////////////////////////////////////COMMENTS*/}
          <span
            onMouseEnter={(e: any) => {
              setZoomx(true);

            }}
            onMouseLeave={(e: any) => {
              setZoomx(false);

            }}

            style={{
              marginLeft: matchMobile ? '90vw' : "46vw",
              top: matchMobile ? '3.7vh' : `5.2vh`,
              fontWeight: 'bold',
              padding: "0px",
              cursor: "pointer",
              position: 'absolute'
            }}
          >
            <span
              onClick={() => {

                if (idReducer === GuestReducer) {
                  dispatch(UpdateSign(true));
                } else {
                  commentClicked();

                }

              }}
              className={
                Emo2Num === 0 || Emo2Num === null
                  ? ""
                  : darkmodeReducer
                    ? "turdark"
                    : "turlight"
              }
              style={{
                position: 'absolute',
                padding: matchMobile ? '1px' : Emopadcom,
                paddingLeft: matchMobile ? '4px' : "10px",
                paddingRight: matchMobile ? '4px' : "10px",
                marginLeft: matchMobile ? '4vw' : "1vw",
                transform: matchMobile ? Zoomx ? "scale(2)" : "scale(2.2)" : Zoomx ? "scale(2)" : "scale(1.2)",
                transition: "transform 0.1s",
                top: "-1.5vh",
                zIndex: 22,
                backgroundColor:
                  post.commentCount === 0
                    ? ""
                    : darkmodeReducer
                      ? "rgba(51,51,51,0.76)"
                      : "rgba(255,255,255,0.7) ",
                borderRadius: "50%",
                fontSize: matchMobile ? '1vh' : Emofontcom,
                color: darkmodeReducer ? "#ffffff" : "#000000",
                fontFamily: "Arial, Helvetica, sans-seri",
                visibility:
                  post.commentCount === 0 ? "hidden" : "visible",
              }}
            >
              {Ein === null || Ein === 0 ? "+" : post.commentCount}
            </span>



            <CommentIcon
              className={
                darkmodeReducer
                  ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark"
                  : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight"
              }
              onClick={() => {

                if (idReducer === GuestReducer) {
                  dispatch(UpdateSign(true));
                } else {
                  commentClicked();

                }

              }}
              style={{
                position: "relative",

                transform: matchMobile ? Zoomx ? "scale(2)" : "scale(1.4)" : Zoomx ? "scale(2)" : "scale(1.2)",
                transition: "transform 0.1s",
                zIndex: 20,
                verticalAlign: "middle",
                fontSize: postcommentfont,
                opacity: 1,
                color: darkmodeReducer ? "#000000" : "#dddddd",
              }}
            />
          </span>
          {/*///////////////////////////////////////////////////////////////////////////COMMENTS*/}



          {itemCLICKED[pey] ? null : (
            <>
              <div
                className='post-background-dark'
                style={{
                  height: `${postbackheight / 1.03}px`,
                  marginTop: `-${postbackheight / 1.03}px`,
                  position: "relative",
                  transition: "all 350ms ease",
                  zIndex: 2,
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  backgroundColor: "",
                }}
              >
                {/*///////////////////////////////////////////////////// opacity: 0.6,//////////////////////EMOTIONS*/}


                <Grid
                  item
                  xs={12}
                  style={{
                    top: `-${emo}vh`,
                    width: matchPc ? "3vw" : matchTablet ? "5vw" : "15vw",
                    height: matchPc ? "5vh" : matchTablet ? "7vh" : "5.5vh",
                    position: "relative",
                    display: "flex",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9,
                    cursor: "pointer",
                    left: matchPc ? "94%" : matchTablet ? "93%" : "85%",
                    backgroundColor: emocolor,
                    opacity: emoOpacity,
                  }}
                >






                  <span
                    className={
                      SpinLovely === 0
                        ? `${themepadding}`
                        : `${themepadding} spinnerEmo`
                    }
                    style={{
                      padding: "2px",
                      width: matchPc ? "1.8vw" : matchTablet ? "4vw" : "7.5vw",
                      height: matchPc ? "1.8vw" : matchTablet ? "3vh" : "4vh",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  >
                    <img
                      className={emotionClass}
                      src={`./images/emotions/love.png`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 0.1px #222222",
                        width: "100%",
                        height: "auto",
                        transform: Zoom1 ? "scale(1.3)" : "scale(1)",
                        transition: "transform 2s",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        display: "none",
                      }}
                    />
                  </span>{" "}
                </Grid>





                <Grid
                  item
                  xs={12}
                  style={{
                    top: `-${emo}vh`,
                    width: matchPc ? "3vw" : matchTablet ? "5vw" : "15vw",
                    height: matchPc ? "5vh" : matchTablet ? "7vh" : "5.5vh",
                    position: "relative",
                    display: "flex",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9,
                    left: matchPc ? "94%" : matchTablet ? "93%" : "85%",
                    backgroundColor: emocolor,
                    opacity: emoOpacity,
                  }}
                >
                  <span
                    className={
                      Spincool === 0
                        ? `${themepadding}`
                        : `${themepadding} spinnerEmo`
                    }
                    style={{
                      padding: "2px",
                      width: matchPc ? "1.8vw" : matchTablet ? "4vw" : "7.5vw",
                      height: matchPc ? "1.8vw" : matchTablet ? "3vh" : "4vh",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  >
                    <img
                      className={emotionClass}
                      src={`./images/emotions/cool.png`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 0.1px #222222",
                        width: "100%",
                        height: "auto",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        transform: Zoom2 ? "scale(1.3)" : "scale(1)",
                        transition: "transform 2s",
                        display: "none",
                      }}
                    />
                  </span>
                </Grid>

                <Grid
                  onMouseEnter={(e: any) => {
                    setZoom3(true);
                    setZoomBigEmo3(true);
                  }}
                  onMouseLeave={(e: any) => {
                    setZoom3(false);
                    setZoomBigEmo3(false);
                  }}
                  onClick={() => {



                    startSpin3();
                    CallEmoBackend(3);


                  }}
                  item
                  xs={12}
                  style={{
                    top: `-${emo2}vh`,
                    width: matchPc ? "3vw" : matchTablet ? "5vw" : "15vw",
                    height: matchPc ? "5vh" : matchTablet ? "7vh" : "5.5vh",
                    position: "relative",
                    display: "flex",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9,
                    left: matchPc ? "94%" : matchTablet ? "93%" : "85%",
                    backgroundColor: emocolor,
                    opacity: emoOpacity,
                  }}
                >
                  <span
                    className={
                      Spincare === 0
                        ? `${themepadding}`
                        : `${themepadding} spinnerEmott`
                    }
                    style={{
                      padding: "2px",
                      width: matchPc ? "1.8vw" : matchTablet ? "4vw" : "7vw",
                      height: matchPc ? "1.8vw" : matchTablet ? "3vh" : "4vh",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  >
                    <img
                      className={emotionClass}
                      src={`./images/emotions/oo.png`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 0.1px #222222",
                        width: "100%",
                        height: "auto",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        transform: Zoom3 ? "scale(2)" : "scale(1.2)",
                        transition: "transform 0.1s",
                        opacity: 1
                      }}
                    />
                  </span>
                </Grid>

                <Grid
                  onMouseEnter={(e: any) => {
                    setZoom4(true);
                    setZoomBigEmo4(true);
                  }}
                  onMouseLeave={(e: any) => {
                    setZoom4(false);
                    setZoomBigEmo4(false);
                  }}
                  onClick={() => {

                    startSpin4();
                    CallEmoBackend(4);


                  }}
                  item
                  xs={12}
                  style={{
                    top: `-${emo}vh`,
                    width: matchPc ? "3vw" : matchTablet ? "5vw" : "15vw",
                    height: matchPc ? "5vh" : matchTablet ? "7vh" : "5.5vh",
                    position: "relative",
                    display: "flex",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9,
                    left: matchPc ? "94%" : matchTablet ? "93%" : "85%",
                    backgroundColor: emocolor,
                    opacity: emoOpacity,
                  }}
                >
                  <span
                    className={
                      Spinfun === 0
                        ? `${themepadding}`
                        : `${themepadding} spinnerEmott`
                    }
                    style={{
                      padding: "2px",
                      width: matchPc ? "1.8vw" : matchTablet ? "4vw" : "7vw",
                      height: matchPc ? "1.8vw" : matchTablet ? "3vh" : "4vh",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  >
                    <img
                      className={emotionClass}
                      src={`./images/emotions/laugh.png`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 0.1px #222222",
                        width: "100%",
                        height: "auto",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        opacity: 1,
                        transform: Zoom4 ? "scale(2)" : "scale(1.2)",
                        transition: "transform 0.1s",
                      }}
                    />
                  </span>
                </Grid>

                {/*///////////////////////////////////////////////////////////////////////////EMOTIONS*/}

                {/*///////////////////////////////////////////////////////////////////////////REACTION NUMBERS*/}
                < div
                  className={
                    darkmodeReducer ? "zuperkinglight" : "zuperkinglight"
                  }
                  style={{
                    backgroundColor: emocolor,
                    padding: Emo1Num === 0 ? "0px" : "5px",
                    opacity: darkmodeReducer ? 0.89 : 0.84,
                    cursor: "pointer",
                    top: `${emoNum}vh`,
                    position: "absolute",
                    zIndex: 8,
                    fontFamily: "Arial, Helvetica, sans-seri",
                    width: Emo1Num === 0 ? "0px" : "6%",
                    height: Emo1Num === 0 ? "0px" : "",
                    marginLeft: "89%",
                    fontSize: "1.2vw",
                    fontWeight: "bold",
                    textAlign: "center",
                    transform: "scale(0.9)",
                    visibility:
                      Ein === null || Ein === 0 ? "hidden" : "visible",
                  }}
                >
                  <span
                    onClick={() => {
                      setconnectTemplateGo(0);
                      setCommentPostid(postData[pey]);
                      setDiscussionImage(postDatainner[pey]);
                      OpenModalForm(3);
                      settypeEmo(3);
                    }}
                    className={
                      Emo1Num === 0 || Emo1Num === null
                        ? ""
                        : darkmodeReducer
                          ? "turdark"
                          : "turlight"
                    }
                    style={{
                      padding: Emopad,
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      backgroundColor:
                        Emo1Num === 0 || Emo1Num === null
                          ? ""
                          : darkmodeReducer
                            ? "rgba(51,51,51,0.76)"
                            : "rgba(255,255,255,0.7) ",

                      borderRadius: "50%",
                      fontSize: Emofont,
                      color: darkmodeReducer ? "#ffffff" : "#000000",
                      display: "none",
                    }}
                  >
                    {Emo1Num === 0 ? "" : Emo1Num}
                  </span>
                </div>

                <div
                  className={
                    darkmodeReducer ? "zuperkinglight" : "zuperkinglight"
                  }
                  style={{
                    backgroundColor: emocolor,
                    padding: Emo2Num === 0 ? "0px" : "5px",
                    opacity: darkmodeReducer ? 0.89 : 0.84,
                    cursor: "pointer",
                    top: `${emoNum2}vh`,
                    position: "absolute",
                    zIndex: 8,
                    fontFamily: "Arial, Helvetica, sans-seri",
                    width: Emo2Num === 0 ? "0px" : "6%",
                    height: Emo2Num === 0 ? "0px" : "",
                    marginLeft: "89%",
                    fontSize: "1.2vw",
                    fontWeight: "bold",
                    textAlign: "center",
                    transform: "scale(0.9)",
                    visibility:
                      Ein === null || Ein === 0 ? "hidden" : "visible",
                  }}
                >
                  <span
                    className={
                      Emo2Num === 0 || Emo2Num === null
                        ? ""
                        : darkmodeReducer
                          ? "turdark"
                          : "turlight"
                    }
                    style={{
                      padding: Emopad2,
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      backgroundColor:
                        Emo2Num === 0 || Emo2Num === null
                          ? ""
                          : darkmodeReducer
                            ? "rgba(51,51,51,0.76)"
                            : "rgba(255,255,255,0.7) ",

                      borderRadius: "50%",
                      fontSize: Emofont2,
                      color: darkmodeReducer ? "#ffffff" : "#000000",
                      display: "none",
                    }}
                  >
                    {Emo2Num === 0 ? "" : Emo2Num}
                  </span>
                </div>

                <div

                  onMouseEnter={(e: any) => {
                    setZoomx1(true);

                  }}
                  onMouseLeave={(e: any) => {
                    setZoomx1(false);

                  }}


                  className={
                    ////Ein is emo in
                    darkmodeReducer ? "zuperkinglight" : "zuperkinglight"
                  }
                  style={{
                    backgroundColor: emocolor,
                    padding: Emo3Num === 0 ? "0px" : "5px",
                    opacity: darkmodeReducer ? 0.79 : 0.74,
                    transform: matchMobile ? Zoomx1 ? "scale(1.4)" : "scale(0.7)" : Zoomx1 ? "scale(2.7)" : "scale(1)",
                    transition: "transform 0.1s",
                    cursor: "pointer",
                    top: `${emoNum3}vh`,
                    position: "absolute",
                    zIndex: 8,
                    fontFamily: "Arial, Helvetica, sans-seri",
                    width: Emo3Num === 0 ? "0px" : "6%",
                    height: Emo3Num === 0 ? "0px" : "",
                    marginLeft: matchMobile ? '76%' : "88%",
                    fontSize: "1.2vw",
                    fontWeight: "bold",
                    textAlign: "center",
                    visibility:
                      Ein === null || Ein === 0 ? "hidden" : "visible",
                  }}
                >
                  <span
                    onClick={() => {
                      dispatch(
                        UpdateHistory(paperPostScrollRef.current.scrollTop)
                      );
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(
                        UpdateCommentHistory(postData[pey], postData[pey].item2)
                      );

                      dispatch(UpdateReactType(3));

                      setconnectTemplateGo(0);
                      setCommentPostid(postData[pey]);
                      setDiscussionImage(postData[pey].item2);
                      OpenModalForm(3);
                      settypeEmo(3);
                    }}
                    className={
                      Emo3Num === 0 || Emo3Num === null
                        ? ""
                        : darkmodeReducer
                          ? "turdark"
                          : "turlight"
                    }
                    style={{
                      padding: matchMobile ? '5px' : Emopad3,
                      paddingLeft: matchMobile ? '10px' : "10px",
                      paddingRight: matchMobile ? '10px' : "10px",
                      backgroundColor:
                        Emo3Num === 0 || Emo3Num === null
                          ? ""
                          : darkmodeReducer
                            ? "rgba(51,51,51,0.76)"
                            : "rgba(255,255,255,0.7) ",

                      borderRadius: "50%",
                      fontSize: matchMobile ? '2.7vh' : Emofont3,
                      color: darkmodeReducer ? "#ffffff" : "#000000",
                    }}
                  >
                    {Emo3Num === 0 ? "" : Emo3Num}
                  </span>
                </div>

                <div
                  className={
                    darkmodeReducer ? "zuperkinglight" : "zuperkinglight"
                  }

                  onMouseEnter={(e: any) => {
                    setZoomx2(true);

                  }}
                  onMouseLeave={(e: any) => {
                    setZoomx2(false);

                  }}


                  style={{
                    backgroundColor: emocolor,
                    padding: Emo4Num === 0 ? "0px" : "5px",
                    opacity: darkmodeReducer ? 0.79 : 0.74,
                    transform: matchMobile ? Zoomx2 ? "scale(1.4)" : "scale(0.7)" : Zoomx2 ? "scale(2.7)" : "scale(1)",
                    transition: "transform 0.1s",
                    cursor: "pointer",
                    top: `${emoNum4}vh`,
                    position: "absolute",
                    zIndex: 8,
                    fontFamily: "Arial, Helvetica, sans-seri",
                    width: Emo4Num === 0 ? "0px" : "6%",
                    height: Emo4Num === 0 ? "0px" : "",
                    marginLeft: matchMobile ? '76%' : "88%",
                    fontSize: "1.2vw",
                    fontWeight: "bold",
                    textAlign: "center",
                    visibility:
                      Ein === null || Ein === 0 ? "hidden" : "visible",
                  }}
                >
                  <span
                    onClick={() => {
                      dispatch(
                        UpdateHistory(paperPostScrollRef.current.scrollTop)
                      );
                      dispatch(UpdatePostFromCom(postData));
                      dispatch(
                        UpdateCommentHistory(postData[pey], postData[pey].item2)
                      );

                      dispatch(UpdateReactType(4));

                      setconnectTemplateGo(0);
                      setCommentPostid(postData[pey]);
                      setDiscussionImage(postData[pey].item2);
                      OpenModalForm(3);
                      settypeEmo(4);
                    }}
                    className={
                      Emo4Num === 0 || Emo4Num === null
                        ? ""
                        : darkmodeReducer
                          ? "turdark"
                          : "turlight"
                    }
                    style={{
                      padding: matchMobile ? '5px' : Emopad3,
                      paddingLeft: matchMobile ? '10px' : "10px",
                      paddingRight: matchMobile ? '10px' : "10px",
                      backgroundColor:
                        Emo4Num === 0 || Emo4Num === null
                          ? ""
                          : darkmodeReducer
                            ? "rgba(51,51,51,0.76)"
                            : "rgba(255,255,255,0.7)",

                      borderRadius: "50%",
                      fontSize: matchMobile ? '2.7vh' : Emofont4,
                      color: darkmodeReducer ? "#ffffff" : "#000000",
                    }}
                  >
                    {Emo4Num === 0 ? "" : Emo4Num}
                  </span>
                </div>
                {/*///////////////////////////////////////////////////////////////////////////REACTION NUMBERS*/}



                {/*///////////////////////////////////////////////////////////////////////////BACKPAD CLICKABLE*/}
                <div
                  onClick={clickslider}
                  style={{
                    opacity: 0,
                    cursor: "pointer",
                    top: matchMobile ? `-9vh` : `-1vh`,
                    position: "absolute",
                    zIndex: 6,
                    paddingLeft: "2vw",
                    fontFamily: "Arial, Helvetica, sans-seri",
                    height: "20vh",
                    width: "100%",
                    backgroundColor: "",
                  }}
                ></div>
                {/*///////////////////////////////////////////////////////////////////////////BACKPAD CLICKABLE*/}


                {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}

                <Connect
                  GoToMember={GoToMember}
                  Added={Added}
                  setAdded={setAdded}
                  PostCon={1}
                  Comment={0}
                  Reaction={0}
                  Profile={0}
                  Mini={0}
                  profileImageref={profileImageref}
                  calculateconnectPosition={calculateconnectPosition}
                  profilewidth={profilewidth}
                  postprofiletop={postprofiletop}
                  optionsClass={optionsClass}
                  post={post}
                  profileImagethumbLeft={profileImagethumbLeft}
                  profileImagethumbTop={profileImagethumbTop}
                />
                {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}
                {/*///////////////////////////////////////////////////////////////////////////USERNAME AND TOPIC*/}
                <div
                  className={
                    darkmodeReducer
                      ? "zuperxyinfoPostDark"
                      : "zuperxyinfoPostLight"
                  }
                  style={{
                    width: "79%",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    top: postusernametop,
                    position: "relative",
                    display: "flex", //flex
                    alignItems: "center",
                    justifyContent: "left",
                    zIndex: 1,
                    paddingLeft: "2vw",
                    fontFamily: "Arial, Helvetica, sans-seri",
                    marginLeft: postusernameleft,
                    height: "20px",
                  }}
                >
                  <span>
                    <span
                      className={
                        darkmodeReducer ? "zuperkinglightx" : "zuperkinglight"
                      }
                      style={{
                        color: darkmodeReducer ? "#eeeeee" : "#ffffff",
                      }}
                    >
                      <span
                        onClick={() => {
                          GoToMemberLoaderUp();
                        }}

                        style={{
                          fontWeight: "bold",
                          fontSize: postusernamefont,
                          cursor: 'pointer',

                        }}
                      >
                        {post.username}
                      </span>

                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>

                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>


                      <span className={ShowBigPlay ? 'blinkingxx' : ''}
                        onClick={() => {

                          if (ShowBigPlay) {
                            clearAllTimers();
                          } else {
                            setsliderIndexMini(sliderIndex);
                            setzoomClickedIndex(pey + 1);
                            setminiProfile(true);
                          }

                        }}

                        onTouchStart={() => {
                          setBigCircle(true);
                        }}
                        onTouchEnd={() => {
                          setBigCircle(false);
                        }}

                        onMouseOver={() => {
                          setBigCircle(true);
                        }}
                        onMouseOut={() => {
                          setBigCircle(false);
                        }}

                        style={{
                          opacity: 0.9,
                          cursor: BigCircle ? "pointer" : "default",


                        }}
                      >



                        {itemcroptype[pey] === 1 ? (
                          <AlbumIcon
                            className="zuperkingtur"
                            style={{
                              fontSize: postcirclefont,
                              color: post.color1,
                              transform: BigCircle ? "scale(5)" : "scale(2.2)", opacity: 0.6,
                              transition: "transform 0.05s",

                            }}
                          />
                        ) : itemcroptype[pey] === 2 ? (
                          <AlbumIcon
                            className="zuperkingtur"
                            style={{
                              fontSize: postcirclefont,
                              color: post.color1,
                              transform: BigCircle ? "scale(5)" : "scale(2.2)", opacity: 0.6,
                              transition: "transform 0.05s",
                            }}
                          />
                        ) : (
                          <CircleIcon
                            className="zuperkingtur"
                            style={{
                              fontSize: postcirclefont,
                              color: post.color1,
                              transform: BigCircle ? "scale(5)" : "scale(2.2)", opacity: 0.6,
                              transition: "transform 0.05s",

                            }}
                          />
                        )}

                      </span>
                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>

                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace,


                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          opacity: 0,
                          fontSize: dotspace2,
                        }}
                      >
                        .
                      </span>

                      <span
                        style={{
                          fontSize: posttopicfont,
                          fontFamily: "Arial, Helvetica, sans-seri",
                          fontWeight: "bold",
                          opacity: 0.9,
                        }}
                      >

                        {
                          //////////////////caption
                        }

                        <span style={{}}>      {post.topic ? post.topic : "Clikbate"}{" "}</span>


                        {
                          ////////////////  caption
                        }

                        <span style={{ padding: "5px" }}>
                          <CircleIcon
                            onClick={() => {
                              setsliderIndexMini(sliderIndex);
                              setzoomClickedIndex(pey + 1);
                              setminiProfile(true);
                            }}
                            onMouseOver={() => {
                              setBigCircle(true);
                            }}
                            onMouseOut={() => {
                              setBigCircle(false);
                            }}
                            className="zuperkingtur"
                            style={{
                              display: 'none',
                              fontSize: postcirclefont,
                              color: "#fffff",
                              transform: BigCircle ? "scale(2.5)" : "scale(1)",
                              cursor: BigCircle ? "pointer" : "default",
                              transition: "transform 0.5s",
                            }}
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                {/*///////////////////////////////////////////////////////////////////////////USERNAME AND TOPIC*/}
                {/*///////////////////////////////////////////////////////////////////////////CAPTION*/}
                <div
                  style={{
                    top: postcaptiontop,
                    position: "relative",
                    marginLeft: postcaptionleft,
                    zIndex: 1,
                    paddingLeft: "1.95vw",
                    fontFamily: "Arial, Helvetica, sans-seri",
                    height: postcaptionheight,
                    width: postcaptionwidth,
                    lineHeight: postcaptionline,
                    overflow: "hidden",
                    visibility: "hidden",
                  }}
                >
                  <span
                    className={textback}
                    style={{
                      verticalAlign: "middle",
                      fontSize: postcaptionfont,
                      fontWeight: "normal",
                      margin: "0",
                      opacity: darkmodeReducer ? 0.6 : 0.7,
                      padding: "7px",
                      justifyContent: "center",
                      color: darkmodeReducer ? "#cccccc" : "#000000",
                    }}
                  ></span>
                </div>
                {/*///////////////////////////////////////////////////////////////////////////CAPTION*/}
                {/*///////////////////////////////////////////////////////////////////////////OPTIONS*/}

                <div
                  className={
                    darkmodeReducer
                      ? "zuperxyinfoPostDark"
                      : "zuperxyinfoPostLight"
                  }
                  style={{
                    top: postoptionstop,
                    marginLeft: matchMobile ? '84vw' : '43vw',
                    position: "relative",
                    transition: "all 350ms ease",
                    display: "flex",
                    visibility: miniLayoutPost ? "hidden" : "visible",
                    alignItems: "center",
                    justifyContent: "left",
                    zIndex: 2,
                    height: "0px",
                    width: "98%",
                    paddingLeft: "2vw",
                    textAlign: 'center',
                    opacity: darkmodeReducer ? 1 : 0.9,
                  }}
                >
                  <span
                    className={
                      darkmodeReducer ? "zuperkinglightx" : "zuperkinglight"
                    }
                    style={{
                      color: '#ffffff',
                      padding: "0px",
                      opacity: 0.8,
                      fontSize: postusernamefont,
                      fontFamily: "Arial, Helvetica, sans-seri",
                      cursor: "pointer",
                    }}
                  >
                    {PostTime}
                  </span>
                </div>
                {/*///////////////////////////////////////////////////////////////////////////OPTIONS*/}

                <Grid
                  item
                  className={Spincare ? "" : "changeOpacity"}
                  xs={12}
                  style={{
                    padding: "0px",
                    height: "0px",
                    position: "fixed",
                    width: "100%",
                    top: ZoomBigEmo3 ? "14%" : "-20%",
                    zIndex: 0,
                  }}
                >
                  {ZoomBigEmo3 ? (
                    <img
                      className={emotionClass}
                      src={`./images/emotions/oo.png`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 0.1px #222222",
                        width: matchPc ? "20%" : "26%",
                        marginLeft: "38%",
                        opacity: Hideonload ? 0 : 0.7,
                        height: "auto",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        transition: "transform 2s",
                        display: ZoomBigEmo3 ? "block" : "none",
                      }}
                    />
                  ) : null}{" "}
                </Grid>

                <Grid
                  item
                  className={Spinfun ? "" : "changeOpacity"}
                  xs={12}
                  style={{
                    padding: "0px",
                    height: "0px",
                    position: "fixed",
                    width: "100%",
                    top: ZoomBigEmo4 ? "14%" : "-20%",
                    zIndex: 0,
                  }}
                >
                  {" "}
                  {ZoomBigEmo4 ? (
                    <>
                      {" "}
                      <img
                        className={emotionClass}
                        src={`./images/emotions/laugh.png`}
                        alt="a superstarz post "
                        style={{
                          cursor: "pointer",
                          boxShadow: darkmodeReducer
                            ? "0 0 1px #555555"
                            : "0 0 0.1px #222222",
                          width: matchPc ? "20%" : "26%",
                          marginLeft: "38%",
                          opacity: Hideonload ? 0 : 0.7,
                          height: "auto",
                          padding: "0px",
                          objectFit: "contain",
                          borderRadius: "50%",
                          transition: "transform 2s",
                          display: ZoomBigEmo4 ? "block" : "none",
                        }}
                      />
                    </>
                  ) : null}
                </Grid>

                <Grid item xs={12} style={{ padding: "0px", height: "0px" }}>
                  {" "}
                </Grid>
              </div>{" "}
            </>
          )}
        </div>
      </animated.div >
    </>
  );
}

export const Post = React.memo(Postx);
