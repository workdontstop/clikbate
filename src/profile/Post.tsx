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
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import VisibilityIcon from '@material-ui/icons/Visibility';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import { useLocation } from 'react-router-dom';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from './utils'; // Ensure this is the correct path to your utils


import { Button } from "@material-ui/core";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";


import MusicOffIcon from '@material-ui/icons/MusicOff';
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { Slider } from "./Slider";

import { ReactionPost } from "./ReactionPost";

import { ReactionPost2k } from "./ReactionPost2k";


import { Connect } from "./Connect";

import laughim from "../images/emotions/laugh.png";
import ooim from "../images/emotions/oo.png";

import { MuteIndexAudio } from ".././GlobalActions";




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
  MuteAction,



} from ".././GlobalActions";

import Axios from "axios";
import { UpdateSign } from "../GlobalActions";
import { DarkMode } from "@mui/icons-material";
import { isSafari } from "react-device-detect";
import { SuperLoader } from "../SuperLoader";




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
  ShowBigPlay,

  clearAllTimers,
  AllowAllHdImagesShow,
  ActiveAutoPost,
  setActiveAutoPost,
  InitializingAutoPlayIndex,
  currentClicked,
  setkeypost,
  WebsiteMode,
  setlatestInview,
  ActualpostDataAll,
  setuptype,

  profileDataHold,
  minimise,
  setminimise,
  postDivRefRoll,
  setIdReactRouterAsInt,
  RandomColor,
  setScrollReactRouter,
  PostPagenumPusher,
  setScrollIndexPusher,

  setStopRouterScroll,

  setminimiseSpecificScroll,
  minimiseSpecificScroll,
  StopRouterScroll,

  snapallow,
  setsnapallow,
  FeedType,
  autoplayAll,
  setShowBigPlay,

  AutoGo,
  setAutoGo,
  TopRef,

  allowInitialexplainIt,
  localPostId,
  localProfileId,

  showMonoPc



}: any) {
  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_APPX_STATE, REACT_APP_CLOUNDFRONT } = process.env;



  const [Hideonload, setHideonload] = useState(true);


  const [inV, setinV] = useState(false);


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

  const [LockCaption, setLockCaption] = useState('');

  const [LockTopic, setLockTopic] = useState('');


  const [imageActive, setImageActive] = useState<boolean>(false);




  useEffect(() => {
    if (post) {
      // Limits for topic and caption lengths
      const topicLimit = 45;
      const captionLimit = 78;

      // Function to truncate text and add ellipsis if necessary
      const truncateText = (text: any, limit: any) => {
        return text.length > limit ? text.substring(0, limit - 2) + '..' : text;
      };

      // Apply the limits and set the state
      setLockTopic(truncateText(post.topic, topicLimit));
      setLockCaption(truncateText(post.caption, captionLimit));
    }
  }, [post]);




  const [ShowAudioIcon, setShowAudioIcon] = useState(true);

  const [maximiseFirst, setmaximiseFirst] = useState(false);

  const [HideAudioicon, setHideAudioicon] = useState(true);


  const [playXAudio, setplayXAudio] = useState(false);

  const [playXAudioType, setplayXAudioType] = useState(false);

  const [audionotify, setaudionotify] = useState(false);

  useEffect(() => {


    setplayXAudioType(playXAudio);
    /// alert(playXAudio);

  }, [playXAudio])


  const [Maximisefromcanvas, setMaximisefromcanvas] = useState(false);


  const [PlayClik, setPlayClik] = useState(false);


  const [ShowReactionsIcon, setShowReactionsIcon] = useState(true);


  const [ShowEmoIcon, setShowEmoIcon] = useState(true);


  const [dateint, setdateint] = useState<any>(null);

  const [dateint2, setdateint2] = useState<any>(null);




  const updateCurrentURLWithScrollPosition = useCallback(() => {
    var indexplus1 = pey + 1;

    var l = localPostId;
    var lx = localProfileId;





    const currentPath = location.pathname.split('/');
    const currentIdRoute1 = currentPath[currentPath.length - 6]; // Assuming idRoute1 is the fourth last segment
    const currentIdRoute2 = currentPath[currentPath.length - 5]; // Assuming idRoute2 is the third last segment
    const currentIdRoute3 = currentPath[currentPath.length - 4]; // Assuming idRoute3 is the second last segment
    const currentIdRoute4 = currentPath[currentPath.length - 3]; // Assuming idRoute4 is the last segment

    const encodedScrollIndex = encodeBase64(indexplus1.toString());
    const encodedPageNumber = encodeBase64(PostPagenumPusher.toString());
    const encodedFeedtype = encodeBase64(FeedType.toString());

    const localpost = encodeBase64(l.toString());
    const localprofile = encodeBase64(lx.toString());

    navigate(`/Feeds/${currentIdRoute1}/${encodedScrollIndex}/${encodedPageNumber}/${encodedFeedtype}/${localpost}/${localprofile}`, { replace: true });
  }, [FeedType, PostPagenumPusher, localPostId, localProfileId]);





  useEffect(() => {
    if (post) {
      setdateint(new Date().getTime());

      setTimeout(() => {
        setdateint2(new Date().getTime());
      }, 400)
    }


  }, [post]);


  const profileImageref = useRef<any>();



  const divBox = useRef<HTMLDivElement>(null);


  const divBox2 = useRef<HTMLDivElement>(null);

  var allow4dev = "";

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);


  interface HTMLaudioElementWithCapture extends HTMLAudioElement {
    captureStream(): MediaStream;
  }

  const audioPlayerRef = useRef<HTMLaudioElementWithCapture>(null);



  const [ActiveCanvas, setActiveCanvas] = useState(-1);


  const truncatedName = post.audioDataName ? post.audioDataName.slice(0, 30) : '';



  const [interactContentx, setinteractContentx] = useState("");

  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      historyscroll: number;
      x: any;
      interact: boolean;
      MenuData: String;
      pagenum: number;
      SignIn: boolean,
      Guest: number,
      muteaudio: boolean,
      ActiveAudioIndex: number,
    };
  }

  ///alert(postDatainner[pey]);

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interact, MenuData, pagenum, SignIn, Guest, muteaudio, ActiveAudioIndex } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;
  const activateLoaderReducer = activateLoader;
  const historyscrollReducer = historyscroll;
  const interactReducer = interact;

  const ActiveAudioIndexReducer = ActiveAudioIndex;

  const MenuDataReducer = MenuData
  const pagenumReducer = pagenum;
  const SignInReducer = SignIn;
  const GuestReducer = Guest;
  const muteaudioReducer = muteaudio;




  const ReactionClickedNew = (tyx: any) => {



    const id = postData[pey].id; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());


    const ty = tyx; // Replace reaction Type
    const encodedIdx = encodeBase64(ty.toString());


    // Update the current URL with the scroll position and page number
    updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Reactions/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodedIdx}`);
    //dispatch(UserInfoUpdateMEMBER(post.sender));
    setScrollReactRouter(0);
  };




  const commentClickedNew = () => {

    const id = postData[pey].id; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());


    // Update the current URL with the scroll position and page number
    updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Discussions/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    //dispatch(UserInfoUpdateMEMBER(post.sender));
    setScrollReactRouter(0);
  };




  const pauseAudio = (mute: boolean) => {


    if (mute) {
      // If the audio is playing with volume, mute it

      /// audioPlayerRef.currd = true;
      dispatch(MuteAction(true));

    } else {
      // If the audio is playing without volume, unmute it

      ///  audioPlayerRef.current.muted = false;
      dispatch(MuteAction(false));

    }


  }




  useEffect(() => {
    if (secondgo) {
      if (second === pey) {
        setsecondgo(false);
        /// startSlider(0);
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




  ///
  ///
  ///
  /// GET  SIGNUP BUTTON AND LOGIN BUTTON STYLE FROM REDUX
  const { MozBoxShadowSD, WebkitBoxShadowSD, boxShadowSD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerDark,
    })
  );

  const { MozBoxShadowSL, WebkitBoxShadowSL, boxShadowSL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerLight,
    })
  );

  const { MozBoxShadowLD, WebkitBoxShadowLD, boxShadowLD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerDark,
    })
  );

  const { MozBoxShadowLL, WebkitBoxShadowLL, boxShadowLL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerLight,
    })
  );



  var MozBoxShadowReducerLogin = " ";
  var WebkitBoxShadowReducerLogin = " ";
  var boxShadowReducerLogin = " ";

  var MozBoxShadowReducerSign = " ";
  var WebkitBoxShadowReducerSign = " ";
  var boxShadowReducerSign = " ";

  if (darkmodeReducer) {
    MozBoxShadowReducerLogin = MozBoxShadowLD;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLD;
    boxShadowReducerLogin = boxShadowLD;

    MozBoxShadowReducerSign = MozBoxShadowSD;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSD;
    boxShadowReducerSign = boxShadowSD;
  } else {
    MozBoxShadowReducerLogin = MozBoxShadowLD;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLD;
    boxShadowReducerLogin = boxShadowLD;

    MozBoxShadowReducerSign = MozBoxShadowSD;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSD;
    boxShadowReducerSign = boxShadowSD;
  }






  const [charCount, setCharCount] = useState(0);


  const countCharacters = (text: any) => {
    if (!text) return 0;
    return text.length;
  };



  useEffect(() => {
    ///alert(countCharacters(post.topic));
    setCharCount(countCharacters(post.topic));
  }, [post.topic]);

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



  const [ShowPad, setShowPad] = useState(false);

  const [StopShowPad, setStopShowPad] = useState(false);

  const [autoSlideDuration] = useState(6000);


  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();


  const [BigCircle, setBigCircle] = useState(false);

  const [opacityController, setopacityController] = useState<boolean>(false);

  const [LImiter, setLImiter] = useState<boolean>(false);

  var emoOpacity = 1;

  ///

  const [StopSpring, setStopSpring] = useState(false);

  const [showingEmotion, setshowingEmotion] = useState(false);

  const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
  const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);

  const [ShowPost, setShowPost] = useState(false);



  const [Private, setPrivate] = useState(1);



  useEffect(() => {


    setPrivate(post.private);




  }, [post])




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
    filter: ShowPost ? 'brightness(1)' : matchMobile ? 'brightness(0.45)' : 'brightness(0.55)'
  });


  const animationPad = useSpring({
    opacity: ShowPad ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 400 },
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


    setTimeout(() => {



      setEin(post.EmoIn);

      /// alert(post.EmoIn);

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
    }, 3000);


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



  const ComProfile = post.commentorProfileImage ? post.commentorProfileImage : imageReducer;
  const ComColor = post.commentorColor ? post.commentorColor : colorReducer;
  const ComUsername = post.commentorUsername ? post.commentorUsername : usernameReducer;


  const wax = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );


  const wa = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const wa2 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const wa2k = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );



  useEffect(() => {

    if (minimise) {

      ///setsnapallow(true)
    }

    else {
      if (wa2.current) {
        clearTimeout(wa2.current);
      }

      wa2.current = setTimeout(() => {
        ///setsnapallow(false);
      }, 2500)



    }

  }, [minimise]);


  const privateClik = useCallback(() => {

    var k = 0;

    if (Private === 1) {
      k = 0
    } else {
      k = 1
    }

    var xx = {
      postid: post.id,
      id: idReducer,
      key: k,
    };

    Axios.put(
      `${REACT_APP_SUPERSTARZ_URL}/update_private`,
      { values: xx },
      {}
    )
      .then((response) => {
        if (response.data.message === "updated") {
          setPrivate(k);
        }
      })
      .catch(function (error) {
        ///  alert("profileoutter color  error");
      });

  }
    , [
      post,
      Private,
      idReducer,
    ]);





  useEffect(() => {

    if (minimiseSpecificScroll) {

      setminimiseSpecificScroll(false);
    }

    else {
      if (ActiveCanvas === pey) {

        /// alert('jj');

        if (wa.current) {
          clearTimeout(wa.current);
        }

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500)

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1000)

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1500)

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2000)

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2500)

        wa.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2800)

      }
    }


  }, [minimise])




  useEffect(() => {

    if (matchMobile) {

      ///setminimiseSpecificScroll(false);
    }

    else {
      if (ActiveCanvas === pey) {

        /// alert('jj');

        if (wax.current) {
          clearTimeout(wax.current);
        }

        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500)


        if (wax.current) {
          clearTimeout(wax.current);
        }
        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1000)


        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1500)

        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2000)

        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2500)

        wax.current = setTimeout(() => {
          postDivRef.current[pey].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2800)

      }
    }


  }, [showMonoPc])




  const ClickLike = useCallback(() => {



    if (Ein === null || Ein === 0) {

      setShowEmoIcon(true);

      if (idReducer === GuestReducer) {
        dispatch(UpdateSign(true));
      } else {
        startSpin4();
        CallEmoBackend(4);

      }

    } else {

      ReactionClickedNew(4);


    }



  }, [Ein, idReducer, GuestReducer])


  const ClickLove = useCallback(() => {



    if (Ein === null || Ein === 0) {



      setShowEmoIcon(true);


      if (idReducer === GuestReducer) {
        dispatch(UpdateSign(true));
      } else {
        startSpin3();
        CallEmoBackend(3);

      }
    } else {
      ReactionClickedNew(3);


    }





  }, [Ein, idReducer, GuestReducer])




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

  const [muteaudioState, setmuteaudioState] = useState(false);

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

  const [Zoomxaudio, setZoomxaudio] = useState(false);

  const [Zoomxm, setZoomxm] = useState(false);
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
  const waitChangeIndexTimer2x = useRef<ReturnType<typeof setTimeout> | null>(
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

  ////
  ////
  ////
  ///
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
      onPostsItemClicked(pey, 0);
    } else {
      if (ActiveAutoPlay[pey]) {
      } else {
        stopSlider(0);
      }
      onPostsItemClicked(pey, 0);
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



  const [PlayAudio, setPlayAudio] = useState(false);


  const ClickAudio = useCallback(() => {

    dispatch(MuteIndexAudio(pey));


    if (audioPlayerRef.current) {
      if (audioPlayerRef.current.paused) {
        audioPlayerRef.current.play();
        setPlayAudio(true);
      } else {
        audioPlayerRef.current.pause();
        setPlayAudio(false);
      }
    }
  }, [audioPlayerRef])





  const clickslider = (e: any) => {

    setActiveCanvas(pey);

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
      ? 95
      : 73
    : matchTablet
      ? 0
      : itemcroptype[pey] === 3
        ? 40
        : 52;

  var emoNum3 = matchPc
    ? itemcroptype[pey] === 2
      ? -7.7
      : -4.8
    : matchTablet
      ? 20
      : itemcroptype[pey] === 3
        ? -9.3
        : -9.7;

  var emoNum2 = matchPc
    ? itemcroptype[pey] === 2
      ? 2.3
      : 5.4
    : matchTablet
      ? 20
      : itemcroptype[pey] === 1
        ? 9
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
      ? 80
      : 58
    : matchTablet
      ? 0
      : itemcroptype[pey] === 3
        ? 23
        : 35;

  var emo2 = matchPc
    ? itemcroptype[pey] === 2
      ? 18
      : 15
    : matchTablet
      ? 20
      : itemcroptype[pey] === 3
        ? 20.5
        : 21;


  var profilewidth = matchPc
    ? minimise ? '12%' : "7%"
    : matchTablet
      ? minimise ? '5%' : "12.5%"
      : minimise ? '22%' : "15%";

  var postprofiletop = matchPc ? "3vh" : matchTablet ? "-9.3vh" : "-10vh";

  var postusernametop = matchPc ? "-1vh" : matchTablet ? "-11.9vh" : "-13.6vh";

  var topV = matchPc ? "0.6vh" : "-13vh";



  var postusernametoptime = matchPc ? "0vh" : matchTablet ? "-11.9vh" : "-12.3vh";

  var postusernametop2 = matchPc ? "2.5vh" : matchTablet ? "-11.9vh" : "-10.5vh";

  var postusernamefont = matchPc ? "1vw" : matchTablet ? "2.32vh" : "2.2vh";

  var postusernameleft = matchPc ? "11.1%" : matchTablet ? "15.5%" : "20%";

  var postusernamelefttime = matchPc ? "83.1%" : matchTablet ? "15.5%" : "80%";


  var postTopicLeft = matchPc ? "-1%" : matchTablet ? "15.5%" : "1%";

  var postusernamefontx = matchPc ? "0.8vw" : matchTablet ? "0.9vh" : "1.4vh";

  var postcirclefont = matchPc ? "0.95vw" : matchTablet ? "1.2vw" : "2.1vh";
  var dotspace = matchPc ? "1.7vw" : matchTablet ? "1.9vh" : "1.9vh";
  var dotspace2 = matchPc ? "0.9vw" : matchTablet ? "1.9vh" : "1.9vh";

  var posttopicfont = matchPc ? "0.9vw" : matchTablet ? "1.8vh" : "1.9vh";

  var postcaptiontop = matchPc ? "-1.85vh" : matchTablet ? "-9.2vh" : "-9.6vh";
  var postcaptionfont = matchPc ? "1.2vw" : matchTablet ? "2.35vh" : "1.75vh";



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
  var postcommentfontx = matchPc ? "1.8vw" : matchTablet ? "4vh" : "3.8vh";
  var postcommentwidth = matchPc ? "99.7%" : matchTablet ? "97.5%" : "95.5%";

  var postoptionstop = matchPc ? "7.8vh" : matchTablet ? "-15.4vh" : "-3.7vh";
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










  const GoToMember = useCallback(() => {






    const id = post.sender; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());



    // Update the current URL with the scroll position and page number
    updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    dispatch(UserInfoUpdateMEMBER(post.sender));
    setIdReactRouterAsInt(post.sender);
    setScrollReactRouter(0);


  }, [paperPostScrollRef, localPostId]);



  const GoToMembercc = () => {



    if (MemberProfileDataReducer.id === post.sender) {
      dispatch(UpdateLoader(false));

    } else {

      ///paperPostScrollRef.current.scrollTop = 0;
      ///

      dispatch(Updatepagenum(0));
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
          dataPageNumberState: setuptype,
          dataAll: ActualpostDataAll,
          profileDataAll: profileDataHold,

          ProfileLocal: 1,
          PostLocal: 1

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
          dataPageNumberState: setuptype,
          dataAll: ActualpostDataAll,
          profileDataAll: profileDataHold,

          ProfileLocal: 1,
          PostLocal: 1


        };
      }

      window.history.replaceState(d, "", `${n}`);

      let modalName = `${post.username}`;

      var dd = {
        type: 1,
        id: post.sender,
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




    }
  };

  const GoToMemberLoaderUp = () => {

    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }



    dispatch(UpdateLoader(true));

    Timervv.current = setTimeout(function () {
      GoToMember();
    }, 100);
  };

  const commentClicked = () => {

    setkeypost(pey);
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
      <animated.div style={animationmenu}>




        <div



          style={{
            padding: "0px",
            width: "100%",
            height: '0px',
            position: 'absolute',
            marginTop: '-20%'


          }}


        ></div>


        <div

          style={{
            padding: "0px",
            width: "auto",
            height: '0px'


          }}
        >
        </div>



        <div

          ref={addpostDivRef}

          style={{
            padding: "0px",
            width: "100%",



          }}
        >





          <div

            ref={divBox}
            style={{
              padding: "0px",
              width: "100%",
              marginTop: "0px",
              zIndex: length - 1 - pey,
              paddingLeft: matchMobile ? "0px" : "0.5px",
              paddingRight: matchMobile ? "0px" : "0.5px",
              paddingTop: minimise ? '4vh' : "0px",
              scrollSnapAlign: snapallow ? 'none' : 'start',


              ///transform


            }}
          >




            {/*///////////////////////////////////////////////////////////////////////////POST DATA*/}

            <Slider
              PlayClik={PlayClik}
              imageActive={imageActive}
              setImageActive={setImageActive}

              scrollToPost={scrollToPost}
              showMonoPc={showMonoPc}

              allowInitialexplainIt={allowInitialexplainIt}

              audionotify={audionotify}
              setaudionotify={setaudionotify}

              playXAudio={playXAudio}
              setplayXAudio={setplayXAudio}

              setHideAudioicon={setHideAudioicon}
              HideAudioicon={HideAudioicon}

              setinV={setinV}

              Maximisefromcanvas={Maximisefromcanvas}
              setMaximisefromcanvas={setMaximisefromcanvas}

              divBox={divBox}

              dateint2={dateint2}

              setminimiseSpecificScroll={setminimiseSpecificScroll}

              setStopRouterScroll={setStopRouterScroll}
              StopRouterScroll={StopRouterScroll}


              setScrollIndexPusher={setScrollIndexPusher}
              setminimise={setminimise}
              RandomColor={RandomColor}


              minimise={minimise}
              setPlayAudio={setPlayAudio}


              ShowPost={ShowPost}
              setShowPost={setShowPost}

              ClickAudio={ClickAudio}

              setlatestInview={setlatestInview}
              setShowPad={setShowPad}
              setStopShowPad={setStopShowPad}

              setShowEmoIcon={setShowEmoIcon}
              setShowAudioIcon={setShowAudioIcon}

              setShowReactionsIcon={setShowReactionsIcon}
              dateint={dateint}
              setinteractContent={setinteractContentx}
              interactContent={interactContentx}
              setmuteaudioState={setmuteaudioState}

              currentClicked={currentClicked}
              setshowSliderLoaderxx={setshowSliderLoaderxx}

              setActiveCanvas={setActiveCanvas}
              ActiveCanvas={ActiveCanvas}

              InitializingAutoPlayIndex={InitializingAutoPlayIndex}
              ActiveAutoPost={ActiveAutoPost}
              setActiveAutoPost={setActiveAutoPost}

              audioPlayerRef={audioPlayerRef}

              AllowAllHdImagesShow={AllowAllHdImagesShow}


              paperPostScrollRef={paperPostScrollRef}
              postDivRef={postDivRef}
              checkifClicked={checkifClicked}
              postItemsRef={postItemsRef}
              postDatainnerInteraction2={postDatainnerInteraction2[pey]}
              postDatainnerInteraction1={postDatainnerInteraction1[pey]}
              setsliderIndexMini={setsliderIndexMini}
              setzoomClickedIndex={setzoomClickedIndex}
              setminiProfile={setminiProfile}


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



            {/*///////////////////////////////////////////////////////////////////////////AUDIO ICON*/}


            <span

              onClick={() => {

                ClickAudio();
              }}

              style={{

                fontWeight: 'bold',
                padding: "0px",
                cursor: "pointer",
                position: 'absolute',
                marginLeft: matchMobile ? '48vw' : "24vw",
                top: matchMobile ? '9.5vh' : `18.2vh`,
                display: post.audioData && itemCLICKED[pey] ? 'none' : 'none'

              }}
            >




              {



                <AudiotrackIcon

                  onMouseEnter={(e: any) => {
                    setZoomxaudio(true);

                  }}
                  onMouseLeave={(e: any) => {
                    setZoomxaudio(false);

                  }}
                  onClick={() => {

                    ///ClickAudio();

                  }}
                  className={
                    "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                  }

                  style={{
                    color: darkmodeReducer
                      ? "#ffffff"
                      : "#000000",
                    transform: matchMobile ? Zoomxaudio ? "scale(2.4)" : 'scale(1.6)'
                      : Zoomxaudio ? "scale(2.8)" : 'scale(1.8)',
                    transition: "transform 0.1s",
                    position: "absolute",
                    zIndex: 30,
                    backgroundColor: post.color1,
                    right: matchMobile ? '36.5vw' : '20.05vw',
                    cursor: "pointer",
                    top: matchMobile ? '1vh' : "5vh",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "bolder",
                    opacity: 1,
                    padding: "2px",
                    display: ShowAudioIcon ? 'block' : 'none'
                  }}
                />

              }




            </span>
            {/*///////////////////////////////////////////////////////////////////////////AUDIO ICON*/}



            {/*///////////////////////////////////////////////////////////////////////////COMMENTS*/}
            <span
              onMouseEnter={(e: any) => {
                setZoomx(true);

              }}
              onMouseLeave={(e: any) => {
                setZoomx(false);

              }}

              style={{
                marginLeft: matchMobile ? minimise ? '80vw' : '90vw'
                  : minimise ? '27.35vw' : "46vw",

                top: minimise ? matchMobile ? '2.8vh' : `5.2vh` : matchMobile ? '-15.05vh' : `-12vh`,

                marginTop: minimise ? '2vh' : '0px',

                fontWeight: 'bold',
                padding: "0px",
                cursor: "pointer",
                position: 'absolute',
                visibility: interactContentx ? 'visible' : 'visible',

                display: matchMobile ? minimise ? 'none' : 'block'
                  : minimise ? 'block' : "block",

              }}
            >
              <span
                onClick={() => {
                  if (idReducer === GuestReducer) {
                    dispatch(UpdateSign(true));


                    /// commentClickedNew();
                  } else {
                    commentClickedNew();

                  }

                }}
                className={
                  Emo2Num === 0 || Emo2Num === null
                    ? ""
                    : darkmodeReducer
                      ? "turlight"
                      : " turdark"
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
                        ? "rgba(255,255,255,0.7)"
                        : " rgba(51,51,51,0.76)",
                  borderRadius: "50%",
                  fontSize: matchMobile ? '1vh' : Emofontcom,
                  color: darkmodeReducer ? "#000000" : "#ffffff",
                  fontFamily: "Arial, Helvetica, sans-seri",
                  visibility:
                    post.commentCount === 0 ? "hidden" : "visible",

                }}
              >
                {Ein === null || Ein === 0 ? "+" : post.commentCount}
              </span>







              <ChatBubbleOutlineIcon
                className={
                  darkmodeReducer
                    ? "dontallowhighlighting zuperkingIcon  zuperkingIconPostLight "
                    : "   dontallowhighlighting zuperkingIcon  zuperkingIconPostDark"
                }
                onClick={() => {

                  if (idReducer === GuestReducer) {

                    dispatch(UpdateSign(true));

                    commentClickedNew();
                    // commentClickedNew();
                  } else {
                    commentClickedNew();

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
                  color: darkmodeReducer ? "#dddddd" : "#000000",

                }}
              />
            </span>
            {/*///////////////////////////////////////////////////////////////////////////COMMENTS*/}



            {/*///////////////////////////////////////////////////////////////////////////EXPLAIN MUTE AUDIO*/}
            <span
              onMouseEnter={(e: any) => {
                setZoomx(true);

              }}
              onMouseLeave={(e: any) => {
                setZoomx(false);

              }}

              style={{
                marginLeft: matchMobile ? minimise ? '80vw' : '90vw'
                  : minimise ? '29vw' : "46vw",

                top: matchMobile ? '14.8vh' : `20.2vh`,

                marginTop: minimise ? '2vh' : '0px',

                fontWeight: 'bold',
                padding: "0px",
                cursor: "pointer",
                position: 'absolute',
                visibility: HideAudioicon ? 'hidden' : 'visible',

                display: matchMobile ? minimise ? 'none' : 'block'
                  : minimise ? 'block' : "block",

              }}
            >





              {playXAudio ? null :
                <VolumeOffIcon
                  className={
                    darkmodeReducer
                      ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark blinken"
                      : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight blinken"
                  }
                  onClick={() => {

                  }}
                  style={{
                    position: "relative",

                    transform: matchMobile ? Zoomx ? "scale(2.1)" : "scale(1.6)" : Zoomx ? "scale(2)" : "scale(1.2)",
                    transition: "transform 0.1s",
                    zIndex: 20,
                    verticalAlign: "middle",
                    fontSize: postcommentfont,
                    opacity: 1,
                    color: darkmodeReducer ? "#000000" : "#dddddd",

                  }}
                />}



            </span>





            {/*///////////////////////////////////////////////////////////////////////////EXPLAIN MUTE AUDIO*/}



            {/*///////////////////////////////////////////////////////////////////////////EXPLAIN PLAY PAUSE*/}
            <span
              onMouseEnter={(e: any) => {
                setZoomx(true);

              }}
              onMouseLeave={(e: any) => {
                setZoomx(false);

              }}

              style={{
                marginLeft: matchMobile ? minimise ? '80vw' : '90vw'
                  : minimise ? '29vw' : "46vw",

                top: matchMobile ? '14.8vh' : `20.2vh`,

                marginTop: minimise ? '2vh' : '0px',
                visibility: audionotify ? 'visible' : 'hidden',

                fontWeight: 'bold',
                padding: "0px",
                cursor: "pointer",
                position: 'absolute',


                display: matchMobile ? minimise ? 'none' : 'block'
                  : minimise ? 'block' : "block",

              }}
            >







              {

                post.mode === 1 ?

                  playXAudio ?

                    <VolumeUpIcon
                      className={
                        darkmodeReducer
                          ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark blinken"
                          : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight blinken"
                      }
                      onClick={() => {


                      }}

                      style={{
                        position: "relative",

                        transform: matchMobile ? Zoomx ? "scale(2.1)" : "scale(1.6)" : Zoomx ? "scale(2)" : "scale(1.2)",
                        transition: "transform 0.1s",
                        zIndex: 20,
                        verticalAlign: "middle",
                        fontSize: postcommentfont,
                        opacity: 1,
                        color: darkmodeReducer ? "#000000" : "#dddddd",

                      }}
                    />
                    :
                    <VolumeOffIcon
                      className={
                        darkmodeReducer
                          ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark blinken"
                          : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight blinken"
                      }
                      onClick={() => {


                      }}
                      style={{
                        position: "relative",

                        transform: matchMobile ? Zoomx ? "scale(2.1)" : "scale(1.6)" : Zoomx ? "scale(2)" : "scale(1.2)",
                        transition: "transform 0.1s",
                        zIndex: 20,
                        verticalAlign: "middle",
                        fontSize: postcommentfont,
                        opacity: 1,
                        color: darkmodeReducer ? "#000000" : "#dddddd",

                      }}
                    />

                  : playXAudio ? null : null}







            </span>
            {/*///////////////////////////////////////////////////////////////////////////EXPLAIN PLAY PAUSE*/}


            < PlayArrowIcon
              className={
                darkmodeReducer
                  ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark "
                  : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight "
              }
              onClick={() => {
                setPlayClik(true);

                setTimeout(() => {
                  setPlayClik(false);
                }, 500)
              }}
              style={{
                position: "absolute",
                transform: matchMobile ? "scale(2.5)" : "scale(3)",
                transition: "transform 0.1s",
                zIndex: 20,
                verticalAlign: "middle",
                fontSize: minimise ? '0px' : postcommentfont,
                top: matchMobile ? '25vh' : '50vh',
                left: matchMobile ? '46.8vw' : '24vw',
                opacity: 1,
                color: darkmodeReducer ? "#000000" : "#dddddd",
                cursor: 'pointer',
                display: post.mode === 1 ? 'block' : 'none',
                visibility: imageActive ? 'hidden' : 'visible',

              }}
            />


            {/*///////////////////////////////////////////////////////////////////////////Profile pic minimise*/}

            <div


              onMouseEnter={(e: any) => {
                setZoomx(true);

              }}
              onMouseLeave={(e: any) => {
                setZoomx(false);

              }}

              style={{
                top: '7.8vh',
                marginLeft: '45%',
                position: "fixed",
                // display: "flex", //flex
                alignItems: "center",
                justifyContent: "left",
                zIndex: 75,
                padding: "0px",
                height: "0px",
                display: matchMobile ? minimise ? 'block' : 'none' : minimise ? 'none' : 'none',
                visibility: Maximisefromcanvas ? 'visible' : 'hidden',
                backgroundColor: ''


              }}
            >




              <ZoomInIcon


                className={
                  darkmodeReducer
                    ? " dontallowhighlighting zuperkingIcon  zuperkingIconPostDark"
                    : "  dontallowhighlighting zuperkingIcon  zuperkingIconPostLight"
                }
                onClick={() => {


                  setminimiseSpecificScroll(true);

                  setminimise(false);

                  if (wa2k.current) {
                    clearTimeout(wa2k.current);
                  }
                  wa2k.current = setTimeout(() => {
                    postDivRef.current[pey].scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 1000)


                }}
                style={{
                  position: "relative",
                  transform: matchMobile ? Zoomx ? "scale(2)" : "scale(1.4)" : Zoomx ? "scale(2)" : "scale(1.2)",
                  transition: "transform 0.1s",
                  zIndex: 1,
                  verticalAlign: "middle",
                  fontSize: '5vh',
                  opacity: 1,
                  color: darkmodeReducer ? "#000000" : "#dddddd",

                }}
              />
            </div>

            {/*///////////////////////////////////////////////////////////////////////////Profile pic minimise*/}



            {
              (

                <>








                  <animated.div


                    className='post-background-dark'
                    style={{

                      height: '0px',
                      top: matchMobile ? minimise ? '9vh' : `-2vh` : minimise ? '-2.5vh' : `-13vh`,
                      position: "absolute",
                      backgroundColor: '',
                      transition: "all 350ms ease",
                      zIndex: 12,
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      display: minimise ? 'none' : 'block'


                    }}
                  >





                    {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}



                    <div

                      ref={divBox2}

                      style={{
                        padding: "0px",
                        width: "100%",
                        zIndex: 0,
                        height: '1px',
                        marginTop: matchMobile ? '-34%' : '-160%',
                        position: 'absolute',
                        backgroundColor: '',



                      }}
                    >
                    </div>

                    <Connect
                      minimise={minimise}
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
                      postprofiletop={isSafari ? '-7.1vh' : postprofiletop}
                      optionsClass={optionsClass}
                      post={post}
                      profileImagethumbLeft={profileImagethumbLeft}
                      profileImagethumbTop={profileImagethumbTop}
                    />
                    {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}





                    {/*///////////////////////////////////////////////////////////////////////////USERNAME   */}
                    <div



                      className={
                        darkmodeReducer
                          ? "zuperxy"
                          : "zuperxy"
                      }
                      style={{
                        width: "100%",

                        top: postusernametop,
                        position: "relative",
                        display: "flex", //flex
                        alignItems: "center",
                        justifyContent: "left",
                        zIndex: 1,
                        paddingLeft: "2vw",
                        marginLeft: postusernameleft,
                        height: "20px",
                      }}
                    >
                      <span>
                        <span

                          style={{
                            color: darkmodeReducer ? "#ffffff" : "#000000",
                          }}
                        >
                          <span

                            style={{

                              fontSize: matchMobile ? '0.95rem' : '1.06rem',
                              cursor: 'pointer',
                              fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                              opacity: darkmodeReducer ? '0.4' : '1',
                              fontWeight: "bold",

                            }}
                          >

                            <span
                              style={{
                                padding: '0px',
                                visibility: minimise ? 'hidden' : 'visible'
                              }}>


                              {idReducer === memeberPageidReducer && post.mode === 1 ?




                                Private === 1 ?
                                  <Button



                                    style={{
                                      fontSize: matchMobile ? '1.4vh' : '0.9vw',
                                      padding: '1.4vh',
                                      borderRadius: "50px",

                                      MozBoxShadow: MozBoxShadowReducerSign,
                                      WebkitBoxShadow: WebkitBoxShadowReducerSign,
                                      boxShadow: boxShadowReducerSign,
                                      left: '-0.9vw',
                                      top: '-3vh'
                                    }}
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    onClick={() => {
                                      privateClik();
                                    }}
                                  >
                                    PRIVATE

                                  </Button> :

                                  <Button



                                    style={{
                                      fontSize: matchMobile ? '1.4vh' : '0.9vw',
                                      padding: '1.4vh',
                                      borderRadius: "50px",

                                      MozBoxShadow: MozBoxShadowReducerLogin,
                                      WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                                      boxShadow: boxShadowReducerLogin,
                                      left: '-0.9vw',
                                      top: '-3vh'
                                    }}
                                    variant="outlined"
                                    size="large"
                                    color="primary"
                                    onClick={() => {
                                      privateClik();
                                    }}
                                  >
                                    PUBLIC

                                  </Button>


                                :

                                <span onClick={() => {
                                  GoToMemberLoaderUp();
                                }} >

                                  {post.username}

                                </span>}</span>
                          </span>
                        </span>
                      </span>
                    </div>


                    {/*///////////////////////////////////////////////////////////////////////////USERNAME   */}







                    {/*/////////////////////////////////////////////////////////////////////////// TOPIC */}
                    <div
                      className={
                        darkmodeReducer
                          ? "zuperxy"
                          : "zuperxy"
                      }
                      style={{
                        width: matchMobile ? '65%' : "85%",

                        top: topV,
                        position: "relative",
                        display: "flex", //flex
                        alignItems: "center",
                        justifyContent: "left",
                        zIndex: 1,
                        paddingLeft: "2vw",
                        marginLeft: postusernameleft,
                        height: "20px",
                      }}
                    >
                      <span>
                        <span
                          style={{
                            color: darkmodeReducer ? "#ffffff" : "#000000",
                          }}
                        >
                          <span
                            style={{
                              fontSize: matchMobile ? '0.95rem' : '1.06rem',
                              cursor: 'pointer',
                              ////  fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                              fontFamily: "kaushan_scriptregular",
                              opacity: darkmodeReducer ? '0.4' : '0.6',
                              fontWeight: "bold",
                            }}
                          >
                            <span
                              style={{
                                /// fontSize: matchMobile ? charCount > 28 ? '0.rem' : '' : charCount > 28 ? '' : '',
                                fontSize: matchMobile ? '0.75rem' : '0.9rem',
                                padding: '0px',
                                position: 'absolute',
                                width: '100%',
                                textAlign: 'left',

                                fontWeight: 'normal',

                                marginTop: matchMobile ? '-1.2vh' : '-2vh',
                              }}>

                              {LockTopic}  </span>

                          </span>
                        </span>
                      </span>
                    </div>


                    {/*/////////////////////////////////////////////////////////////////////////// TOPIC */}







                    {/*///////////////////////////////////////////////////////////////////////////CAPTION */}

                    <div
                      className={
                        darkmodeReducer
                          ? "zuperxy"
                          : "zuperxy"
                      }
                      style={{
                        width: "79%",

                        top: matchMobile ? '-11.5vh' : '1.3vh',
                        position: "relative",

                        alignItems: "center",
                        justifyContent: "left",
                        zIndex: 1,
                        paddingLeft: "2vw",
                        display: minimise ? 'none' : 'flex',
                        marginLeft: postusernameleft,
                        height: "20px",
                      }}
                    >
                      <span>
                        <span

                          style={{
                            color: darkmodeReducer ? "#ffffff" : "#000000",
                          }}
                        >
                          <span
                            onClick={() => {
                              ///GoToMemberLoaderUp();
                            }}

                            style={{

                              fontSize: matchMobile ? '0.85rem' : '1.16rem',
                              cursor: 'pointer',
                              fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                              color: darkmodeReducer ? "#ffffff" : "#000000",

                            }}
                          >

                            {LockCaption}


                            <span style={{ visibility: 'hidden' }}>.....</span>

                            <span style={{ fontSize: '60%', opacity: 0.5 }}>    {PostTime} </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    {/*///////////////////////////////////////////////////////////////////////////CAPTION*/}




                    {/*///////////////////////////////////////////////////////////////////////////AUDIO */}

                    <div
                      className={
                        darkmodeReducer
                          ? "zuperxy"
                          : "zuperxy"
                      }
                      style={{
                        width: "79%",
                        top: matchMobile ? '-10vh' : '1.7vh',
                        position: "relative",
                        // display: "flex", //flex
                        alignItems: "center",
                        justifyContent: "left",
                        zIndex: 1,
                        paddingLeft: "1vw",
                        marginLeft: matchMobile ? '19%' : '12.5%',
                        height: "20px",
                        display: post.audioData ? minimise ? 'none' : 'flex' : minimise ? 'none' : 'none'
                      }}
                    >
                      <span>
                        <span

                          style={{
                            color: darkmodeReducer ? "#ffffff" : "#000000",
                          }}
                        >
                          <span
                            onClick={() => {
                              ClickAudio();
                            }}

                            style={{
                              fontWeight: "normal",
                              fontSize: matchMobile ? '0.8rem' : '1rem',
                              cursor: 'pointer',
                              fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                              color: darkmodeReducer ? "#ffffff" : "#000000",

                            }}
                          >

                            <AudiotrackIcon
                              style={{
                                transform: matchMobile ? 'scale(0.5)' : 'scale(0.6)',
                                transition: "transform 0.1s",
                                zIndex: 30,
                                cursor: "pointer",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: "bolder",
                                opacity: 1,
                                padding: "0px",
                                position: 'absolute',
                                marginTop: '-2px',


                              }}
                            />

                            <span style={{ paddingLeft: matchMobile ? '5vw' : "1.3vw", opacity: 0.4 }}>
                              {truncatedName}  </span>

                          </span>
                        </span>
                      </span>
                    </div>
                    {/*///////////////////////////////////////////////////////////////////////////AUDIO*/}





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


                        <span className='emotionClass'

                          style={{
                            cursor: "pointer",

                            fontSize: matchMobile ? '9vh' : '10vw',
                            marginLeft: matchMobile ? '43%' : "38%",
                            opacity: Hideonload ? 0 : 0.7,
                            height: "auto",
                            padding: "0px",
                            objectFit: "contain",
                            borderRadius: "50%",
                            transition: "transform 2s",
                            display: ZoomBigEmo3 ? "block" : "none",
                          }}>

                          ❤️</span>
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


                          <span className='emotionClass'

                            style={{
                              cursor: "pointer",
                              fontSize: matchMobile ? '9vh' : '10vw',
                              marginLeft: matchMobile ? '42%' : "37%",
                              opacity: Hideonload ? 0 : 0.7,
                              height: "auto",
                              padding: "0px",
                              objectFit: "contain",
                              borderRadius: "50%",
                              transition: "transform 2s",
                              display: ZoomBigEmo4 ? "block" : "none",
                            }}>

                            👍</span>
                        </>
                      ) : null}
                    </Grid>

                    <Grid item xs={12} style={{ padding: "0px", height: "0px" }}>
                      {" "}
                    </Grid>








                  </animated.div >


                  <div style={{
                    position: 'absolute', bottom: matchMobile ? '-10vh' : '56.5vh',
                    left: '-60%',
                    visibility: inV ? AutoGo ? 'hidden' : 'visible' : 'hidden',
                    transition: "transform 0.1s",
                  }}>

                    {StopShowPad ? null :
                      <ReactionPost
                        minimise={minimise}
                        setShowAudioIcon={setShowReactionsIcon}
                        Ein={Ein}
                        setZoom3={setZoom3}
                        setZoomBigEmo3={setZoomBigEmo3}
                        Zoom3={Zoom3}
                        ClickLove={ClickLove}
                        ShowAudioIcon={ShowReactionsIcon}
                        Spincare={Spincare}
                        Emo3Num={Emo3Num}
                        ClickLike={ClickLike}
                        setZoom4={setZoom4}
                        setZoomBigEmo4={setZoomBigEmo4}
                        Zoom4={Zoom4}
                        Spinfun={Spinfun}
                        Emo4Num={Emo4Num}
                      />}

                  </div>



                  <div style={{
                    position: 'absolute', bottom:
                      matchMobile ? Ein === null || Ein === 0 ? '-23.3vh' : '-23.2vh' :
                        '42.3vh', left: matchMobile ? '-25%' : '-30%',
                    visibility: inV ? AutoGo ? 'hidden' : 'visible' : 'hidden',
                    transition: "transform 0.1s",
                  }}>

                    {StopShowPad ? null :
                      <ReactionPost2k
                        minimise={minimise}
                        setShowAudioIcon={setShowReactionsIcon}
                        Ein={Ein}
                        setZoom3={setZoom3}
                        setZoomBigEmo3={setZoomBigEmo3}
                        Zoom3={Zoom3}
                        ClickLove={ClickLove}
                        ShowAudioIcon={ShowReactionsIcon}
                        Spincare={Spincare}
                        Emo3Num={Emo3Num}
                        ClickLike={ClickLike}
                        setZoom4={setZoom4}
                        setZoomBigEmo4={setZoomBigEmo4}
                        Zoom4={Zoom4}
                        Spinfun={Spinfun}
                        Emo4Num={Emo4Num}
                      />}

                  </div>




                  {/*///////////////////////////////////////////////////////////////////////////COMMENT */}

                  <div
                    className={
                      darkmodeReducer
                        ? "zuperxy"
                        : "zuperxy"
                    }
                    style={{
                      width: "100%",
                      top: matchMobile ? '10.5vh' : `10vh`,
                      position: "relative",

                      alignItems: "center",
                      justifyContent: "left",
                      zIndex: 1,
                      paddingLeft: "0px",
                      marginLeft: matchMobile ? '3vw' : '2vw',
                      height: "auto",
                      color: darkmodeReducer
                        ? "#ffffff"
                        : "#000000",
                      display: minimise ? 'none' : 'flex',
                      visibility: matchMobile ? inV ? 'visible' : 'visible' :
                        inV ? AutoGo ? 'hidden' : 'visible' : 'hidden',

                      transition: "transform 0.1s",

                    }}
                  >


                    <img
                      onClick={() => {

                      }}
                      ref={profileImageref}
                      onLoad={calculateconnectPosition}
                      className={darkmodeReducer ? "turpostDarkmini" : "turpostDarkmini"}

                      src={`${REACT_APP_CLOUNDFRONT}${ComProfile}`}
                      alt="a superstarz post "
                      style={{
                        cursor: "pointer",
                        boxShadow: darkmodeReducer
                          ? "0 0 1px #555555"
                          : "0 0 3.5px #aaaaaa",
                        width: matchMobile ? '10vw' : '3vw',
                        height: "auto",
                        padding: "0px",
                        objectFit: "contain",
                        borderRadius: "50%",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />


                    <span style={{
                      fontWeight: "normal",
                      fontSize: matchMobile ? '0.85rem' : '1.06rem',
                      /// cursor: 'pointer',
                      fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                      opacity: darkmodeReducer ? '0.4' : '0.7',
                      marginLeft: matchMobile ? '2.5vw' : '0vw'
                    }}> </span>

                    <span style={{ marginLeft: "0.8vw" }}>
                      {" "}
                      <CircleIcon
                        style={{
                          fontSize: matchMobile ? '1vh' : "0.5vw",
                          color: ComColor,
                        }}
                      />{" "}
                    </span>


                    <span
                      onClick={() => {
                        if (idReducer === GuestReducer) {
                          dispatch(UpdateSign(true));

                          commentClickedNew();
                          //   //scale
                        } else {
                          commentClickedNew();

                        }

                      }}
                      style={{
                        fontWeight: "normal",
                        fontSize: matchMobile ? '0.8rem' : '1rem',
                        /// cursor: 'pointer',
                        width: matchMobile ? '58%' : "64%",
                        fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                        opacity: darkmodeReducer ? '0.5' : '0.8',
                        marginLeft: '1vw',
                        backgroundColor: '',
                        overflow: 'hidden'

                      }}>

                      {post.commentPost ? post.commentPost :

                        <TextField
                          multiline
                          size="medium"

                          inputProps={{ style: { fontSize: "20px" } }}
                          InputLabelProps={{ style: { fontSize: matchMobile ? "11.2px" : '15px' } }}
                          style={{
                            width: matchMobile ? '90%' : "100%",
                            marginLeft: matchMobile ? '2vw' : "5vw",
                            marginTop: '-2vh',
                            zIndex: 100,
                            opacity: 8,
                            textAlign: "center",
                          }}
                          label="Start a Discussion"
                          margin="normal"
                          name="findcomment"
                          type="text"

                        />
                      }  </span>




                    <span
                      style={{
                        position: 'absolute',
                        right: matchMobile ? '17vw' : '6.3vw',
                      }}>


                      {post.audioData ?

                        <VisibilityIcon

                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                              : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "
                          }

                          style={{
                            color: darkmodeReducer
                              ? "#ffffff"
                              : "#000000",
                            transform: matchMobile ? 'scale(1.4)' : 'scale(1.8)',
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
                        :
                        null

                      }

                    </span>



                    <span

                      style={{
                        position: 'absolute',
                        right: matchMobile ? '7vw' : '3.3vw',
                      }}>


                      {post.audioData ? <AudiotrackIcon

                        onClick={() => {

                          ClickAudio();
                        }}
                        className={

                          PlayAudio ? 'blinken  make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight ' :
                            "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                        }

                        style={{
                          color: darkmodeReducer
                            ? "#ffffff"
                            : "#000000",
                          transform: matchMobile ? 'scale(1.4)' : 'scale(1.8)',
                          transition: "transform 0.1s",
                          zIndex: 30,
                          backgroundColor: darkmodeReducer
                            ? "rgba(41,41,41,0.86)"
                            : "rgba(205,205,205,0.9) ",

                          cursor: "pointer",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bolder",

                          padding: "2px",
                        }}
                      />
                        :
                        <VisibilityIcon

                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                              : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "
                          }

                          style={{
                            color: darkmodeReducer
                              ? "#ffffff"
                              : "#000000",
                            transform: matchMobile ? 'scale(1.4)' : 'scale(1.8)',
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

                      }

                    </span>



                  </div>


                  {/*///////////////////////////////////////////////////////////////////////////COMMENT */}

                </>
              )}



          </div>
        </div >

      </animated.div >


      <div

        style={{
          padding: "0px",
          width: "100%",
          zIndex: 0,
          height: '1px',
          marginTop: matchMobile ? '12vh' : '10%',
          position: 'absolute',
          scrollSnapAlign: snapallow ? 'none' : 'end',
          backgroundColor: '',

          display: minimise ? 'none' : 'block'



        }}
      >
      </div>


    </>
  );
}

export const Post = React.memo(Postx);
