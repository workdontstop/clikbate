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
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";


import AddIcon from "@mui/icons-material/Add";
import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType, Updatepagenum
} from ".././GlobalActions";
import { Connect } from "./Connect";
import { Slider } from "./Slider";
import { useInView } from "react-intersection-observer";

function MiniPostx({
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
  addpostDivRefx,
  postDatainner,
  itemOriginalPostHeight,
  ActiveAutoPlay,
  setActiveAutoPlay,
  AUTOSlideLongImages,
  postDivRefx,
  onLoadDataOnce,
  postDatainnerThumb,
  setcountAutoplay,
  countAutoplay,
  second,
  setsecond,
  secondgo,
  setsecondgo,
  scrollToPostx,
  OpenModalForm,
  setDiscussionImage,
  postData,
  setCommentPostid,
  miniLayoutPost,
  setStopBodyScroll,
  setminiProfile,
  postItemsRef,
  miniProfile,
  zoomClickedIndex,
  setzoomClickedIndex,
  sliderIndexMini,
  setSliderIndexMini,
  paperPostScrollRef,
  postDatainnerInteraction2,
  postDatainnerInteraction1,
  ShowBigPlay,
  clearAllTimers,
  AllowAllHdImagesShow

}: any) {
  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  var allow4dev = "";

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }


  const [BigCircle, setBigCircle] = useState(false);


  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [opacityController, setopacityController] = useState<boolean>(false);

  const [StopSpring, setStopSpring] = useState(false);
  const [showIndex, setshowIndex] = useState(false);

  const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
  const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);

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

  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX

  useEffect(() => {
    setTimeout(() => {
      setStopSpring(true);
    }, 30000);
  }, [post]);



  const [AllowFadoutMiniThumb, setAllowFadoutMiniThumb] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      if (zoomClickedIndex === 0) {
        setshowIndex(false);
      } else {
        if (zoomClickedIndex - 1 === pey) {
          setshowIndex(true);
        } else {
          setshowIndex(false);
        }

        if (sliderIndexMini > 400) {
        } else {
          scrollToPostx(zoomClickedIndex - 1);
        }
        setzoomClickedIndex(0);
      }
    }, 500);
  }, [miniProfile, sliderIndexMini]);






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


  const profileImageref = useRef<any>();

  var textback = "";
  if (darkmodeReducer) {
    textback = "caption-darkPost";
  } else {
    textback = "caption-lightPost";
  }

  var themepadding = darkmodeReducer ? "turdarkemo" : "turlightemo";

  const [LImiter, setLImiter] = useState<boolean>(false);

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



  const [Hideonload, setHideonload] = useState(true);

  const [FavIcon, setFavIcon] = useState(false);

  const [CommSho, setCommsho] = useState(false);



  useEffect(() => {

    if (post.funny > 0 || post.care > 0) {

      setFavIcon(true)
    }
    else if (post.commentCount > 0) {
      setCommsho(true)
    }
    else {
      setCommsho(false);
      setFavIcon(false)
    }


    setTimeout(() => {
      setHideonload(false);
    }, 3500);
    if (post) {
      setAdded(post.favCount);
    }
  }, [post]);


  var postprofiletop = matchPc ? "-5.8vh" : matchTablet ? "-9.3vh" : "-4.7vh";
  var posttopicfont = matchPc ? "1.25vw" : matchTablet ? "1.8vh" : "1.6vh";

  var postusernamefont = matchPc ? "1.1vw" : matchTablet ? "2.32vh" : "1.7vh";
  var postusernameleft = matchPc ? "41.1%" : matchTablet ? "15.5%" : "20%";
  var postcirclefont = matchPc ? ShowBigPlay ? '1.4vw' : "0.7vw" : matchTablet ? "1.2vw" : ShowBigPlay ? '3vh' : "1.1vh";
  var postcirclefontx = matchPc ? ShowBigPlay ? '2.2vw' : "1.4vw" : matchTablet ? "1.2vw" : ShowBigPlay ? '4.1vh' : "2.2vh";

  var dotspace = matchPc ? "1.7vw" : matchTablet ? "1.9vh" : "1.9vh";
  var dotspace2 = matchPc ? "0.9vw" : matchTablet ? "1.9vh" : "1.9vh";

  var postusernametop = matchPc ? "-6vh" : matchTablet ? "-11.9vh" : "-2.5vh";

  var profilewidth = matchPc
    ? miniLayoutPost
      ? "12%"
      : "12.5%"
    : matchTablet
      ? "12.5%"
      : "15%";

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

  const calculateconnectPosition = useCallback(() => { }, []);


  const [Added, setAdded] = useState(100);

  const dispatch = useDispatch();

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


  const [HasInteractivity, setHasInteractivity] = useState(false);


  const containsURL = (str: any) => {
    // Regular expression pattern to match URLs (simplified, not covering all cases)
    const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;

    // Test if the string contains a URL using the regular expression
    return urlPattern.test(str);
  };



  useEffect(() => {
    // Function to check if a string is likely a file name
    const isFileName = (str: any) => {
      // Example regex for a typical file name (adjust as needed)
      const fileNameRegex = /^[a-zA-Z0-9._-]+$/;
      return fileNameRegex.test(str);
    };

    // Iterate through postDatainnerInteraction1
    let foundFileName = postDatainnerInteraction1.some(isFileName);

    if (!foundFileName) {
      // If not found in the first array, check in postDatainnerInteraction2
      foundFileName = postDatainnerInteraction2.some(isFileName);
    }

    // Set the state based on the presence of a file name
    setHasInteractivity(foundFileName);
  }, [postDatainnerInteraction1, postDatainnerInteraction2, itemCLICKED]);






  const [isWide, setIsWide] = useState(false);

  const handleImageLoad = (e: any) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (naturalWidth > naturalHeight) {
      setIsWide(true);
    }


  };




  return (
    <>
      <animated.div style={animationmenu}>


        <div
          ref={addpostDivRefx}
          style={{
            padding: "0px",
            width: "100%",
            marginTop: pey === 0 || pey === 1 ? "-0.5px" : "-1.1px",
            zIndex: length - 1 - pey,
            paddingLeft: matchMobile ? "0px" : "0px",
            paddingRight: matchMobile ? "0px" : "0px",
            paddingTop: matchMobile ? "10px" : "3px",
            scrollSnapAlign: snapStartReducer ? "start" : 'none'

          }}
        >
          {/*///////////////////////////////////////////////////////////////////////////POST DATA*/}

          {matchMobile ? <div

            style={{
              position: "absolute",
              zIndex: 30,
              right: -14,
              cursor: "pointer",
              top: matchMobile ? '1vh' : "4vh",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bolder",
              opacity: 1,
              height: "0px",
              padding: "0px",
            }}
          >
            <span
              className={HasInteractivity ? "zuperkingtur heartbeat" : darkmodeReducer ? "turx" : "turdark"}
              style={{
                padding: "7px",
                paddingLeft: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                paddingRight: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                backgroundColor: post.color1,
                borderRadius: "50%",
                fontSize: "0.92vw",
                display: HasInteractivity ? 'block' : 'none',
                color: darkmodeReducer ? "#ffffff" : "#000000",
                transform: matchMobile ? 'scale(0.15)' : 'scale(0.3)'
              }
              }
            >
              <span style={{ opacity: 0 }}>{0}</span>
            </span>
          </div> : <div

            style={{
              position: "absolute",
              zIndex: 30,
              left: 30,
              cursor: "pointer",
              top: "4vh",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bolder",
              opacity: 1,
              height: "0px",
              padding: "0px",
            }}
          >
            <span
              className={HasInteractivity ? "zuperkingtur heartbeat" : darkmodeReducer ? "turx" : "turdark"}
              style={{
                padding: "7px",
                paddingLeft: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                paddingRight: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                backgroundColor: post.color1,
                borderRadius: "50%",
                fontSize: "0.92vw",
                display: HasInteractivity ? 'block' : 'none',
                color: darkmodeReducer ? "#ffffff" : "#000000",
                transform: matchMobile ? 'scale(0.15)' : 'scale(0.26)'
              }
              }
            >
              <span style={{ opacity: 0 }}>{0}</span>
            </span>
          </div>}
          {" "}


          <div>

            <img
              onLoad={handleImageLoad}
              onClick={() => {
                setzoomClickedIndex(pey + 1);
                setSliderIndexMini(0);
                setminiProfile(false);
              }}
              className={

                darkmodeReducer ? "turlightpostdar  " : "turlightpostlight "
              }


              src={`${REACT_APP_CLOUNDFRONT}${postDatainnerThumb[pey][showIndex ? (sliderIndexMini > 400 ? 0 : sliderIndexMini) : 0
              ]}`}

              alt="a Clikbate post "
              style={{

                cursor: "pointer",
                width: "100%",
                height: isWide && matchMobile ? '28vh' : 'auto',
                position: AllowAllHdImagesShow ? "absolute" : 'relative',
                padding: "0px",
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",

                zIndex: 0,

              }}

            />


            {AllowAllHdImagesShow ? <img
              onLoad={handleImageLoad}
              onClick={() => {
                setzoomClickedIndex(pey + 1);
                setSliderIndexMini(0);
                setminiProfile(false);
              }}
              className={
                darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
              }



              src={`${REACT_APP_CLOUNDFRONT}${post.item2}`}

              alt="a Clikbate post "
              style={{

                cursor: "pointer",
                width: "100%",
                height: isWide && matchMobile ? '28vh' : 'auto',
                position: "relative",
                padding: "0px",
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",

                zIndex: 1,


              }}

            /> : null}

          </div>



          {/*///////////////////////////////////////////////////////////////////////////USERNAME AND TOPIC*/}
          <div
            className={
              darkmodeReducer ? "zuperxyinfoPostDark" : "zuperxyinfoPostLight"
            }
            style={{
              visibility: miniLayoutPost ? "hidden" : "visible",
              top: postusernametop,
              position: "relative",
              display: "flex", //flex
              alignItems: "center",
              justifyContent: "left",
              zIndex: 50,
              color: "#ffffffff",
              paddingLeft: "2vw",
              fontFamily: "Arial, Helvetica, sans-seri",
              marginLeft: postusernameleft,
              textAlign: "center",
              left: matchMobile ? '6vw' : '0px',
              height: "0px",
            }}
          >
            <span>
              <span
                className={
                  darkmodeReducer ? "zuperkinglight" : "zuperkinglight"
                }
                style={{
                  color: darkmodeReducer ? "#ffffff" : "#ffffff",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: postusernamefont,
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

                  onClick={() => {
                    if (ShowBigPlay) {
                      clearAllTimers();
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

                  className={ShowBigPlay ? `blinkingxx` : `    `}
                  style={{
                    marginLeft: matchMobile ? ShowBigPlay ? '1vw' : '1vw' : '1vw',
                    position: 'absolute',
                    cursor: BigCircle ? ShowBigPlay ? "pointer" : "default" : "default",

                  }}
                >
                  {CommSho ?


                    <CommentIcon
                      className={darkmode ? 'zuperkingIconPostDark' : "zuperkingIconPostLightx"}
                      style={{
                        fontSize: postcirclefontx,
                        color: post.color1,
                        transform: BigCircle ? "scale(2.7)" : "scale(1)", opacity: 0.6,
                        transition: "transform 0.05s",
                      }}
                    /> : FavIcon ?
                      <SentimentVerySatisfiedIcon
                        className={darkmode ? 'zuperkingIconPostDark' : "zuperkingIconPostLightx"}
                        style={{
                          fontSize: postcirclefontx,
                          color: post.color1,
                          transform: BigCircle ? "scale(2.7)" : "scale(1)", opacity: 0.6,
                          transition: "transform 0.05s",
                        }}
                      /> :
                      <CircleIcon
                        className={darkmode ? 'zuperkingIconPostDark' : "zuperkingIconPostLightx"}
                        style={{
                          fontSize: postcirclefont,
                          color: post.color1,
                          transform: BigCircle ? "scale(2.7)" : "scale(1)", opacity: 0.6,
                          transition: "transform 0.05s",
                        }}
                      />}

                </span>





                <span
                  style={{
                    opacity: 0,
                    fontSize: dotspace2,
                  }}
                >
                  .
                </span>
              </span>
            </span>
          </div>
          {/*///////////////////////////////////////////////////////////////////////////USERNAME AND TOPIC*/}
          {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}

          <Connect
            GoToMember={GoToMember}
            Added={Added}
            setAdded={setAdded}
            PostCon={2}
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

          <div>


            <div
              style={{
                fontWeight: "bold",
                color: darkmodeReducer ? "#ffffff" : "#000000",
                fontSize: matchPc ? "2.2vh" : "1.7vh",
                zIndex: 5,
                paddingLeft: matchPc ? "7vw" : matchTablet ? "2.3vw" : "4vw",
                height: "0px",
                fontFamily: "Arial, Helvetica, sans-serif",
                opacity: darkmodeReducer ? "0.6" : "0.8",
              }}
            >   <p>
                {post.topic}
              </p>

            </div>
          </div>


          {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}
        </div>
      </animated.div>
    </>
  );
}

export const MiniPost = React.memo(MiniPostx);
