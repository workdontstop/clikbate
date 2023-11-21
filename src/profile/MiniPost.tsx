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
  postDatainnerInteraction1
}: any) {
  const { REACT_APP_APPX_STATE } = process.env;

  var allow4dev = "";

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

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

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
      pagenum: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, pagenum } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );

  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const pagenumReducer = pagenum;


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


    if (post.commentCount > 0) {
      setCommsho(true)
    }
    else if (post.funny > 0 || post.care > 0) {
      setFavIcon(true)
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
  var postcirclefont = matchPc ? "0.7vw" : matchTablet ? "1.2vw" : "1.1vh";
  var postcirclefontx = matchPc ? "1.4vw" : matchTablet ? "1.2vw" : "2.2vh";

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
    //console.log(postDatainnerInteraction1[0])

    postDatainnerInteraction1.map((str: any, index: any) => {
      if (containsURL(str)) {
        setHasInteractivity(true);
        ///alert('kk')
      }
    });

    postDatainnerInteraction2.map((str: any, index: any) => {
      if (containsURL(str)) {
        setHasInteractivity(true);
      }
    });
  }, [postDatainnerInteraction1, postDatainnerInteraction2, itemCLICKED]);




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
                display: 'block',
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
                display: 'block',
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


            <animated.img
              onClick={() => {
                setzoomClickedIndex(pey + 1);
                setSliderIndexMini(0);
                setminiProfile(false);
              }}
              className={
                darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
              }
              src={
                postDatainner[pey][
                showIndex ? (sliderIndexMini > 400 ? 0 : sliderIndexMini) : 0
                ]
              }
              alt="a superstarz post "
              style={{

                cursor: "pointer",
                width: "100%",
                height: "auto",
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
                float: "left",

              }}
            />
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
              zIndex: 5,
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

                {CommSho ?
                  <CommentIcon
                    className="zuperkingIconPostLight"
                    style={{
                      fontSize: postcirclefontx,
                      color: post.color1,
                    }}
                  /> : FavIcon ?
                    <SentimentVerySatisfiedIcon
                      className="zuperkingIconPostLight"
                      style={{
                        fontSize: postcirclefontx,
                        color: post.color1,
                      }}
                    /> :
                    <CircleIcon
                      className="zuperkingIconPostLight"
                      style={{
                        fontSize: postcirclefont,
                        color: post.color1,
                      }}
                    />}




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

          <div
            style={{
              fontWeight: "bold",
              color: darkmodeReducer ? "#ffffff" : '#000000',
              fontStyle: 'italic',
              fontSize: matchPc ? "2.39vh" : '1.8vh',
              zIndex: 5,
              paddingLeft: matchPc ? "7vw" : matchTablet ? "2.3vw" : "2vw",
              height: "0px",
              fontFamily: "Arial, Helvetica, sans-seri",
              opacity: darkmodeReducer ? '0.6' : '0.4',
            }}
          >
            {post.topic}
          </div>

          {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}
        </div>
      </animated.div>
    </>
  );
}

export const MiniPost = React.memo(MiniPostx);
