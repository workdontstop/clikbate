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
import AddIcon from "@mui/icons-material/Add";
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
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;

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

  var postprofiletop = matchPc ? "-5.8vh" : matchTablet ? "-9.3vh" : "-4.7vh";
  var posttopicfont = matchPc ? "1.25vw" : matchTablet ? "1.8vh" : "1.6vh";

  var postusernamefont = matchPc ? "1.1vw" : matchTablet ? "2.32vh" : "1.7vh";
  var postusernameleft = matchPc ? "41.1%" : matchTablet ? "15.5%" : "20%";
  var postcirclefont = matchPc ? "0.7vw" : matchTablet ? "1.2vw" : "1.1vh";

  var dotspace = matchPc ? "1.7vw" : matchTablet ? "1.9vh" : "1.9vh";
  var dotspace2 = matchPc ? "0.9vw" : matchTablet ? "1.9vh" : "1.9vh";

  var postusernametop = matchPc ? "-6vh" : matchTablet ? "-11.9vh" : "-5vh";

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

  const calculateconnectPosition = useCallback(() => {}, []);

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
                zIndex: 1,
                float: "left",
              }}
            />
          </div>

          {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}

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
                {itemcroptype[pey] === 1 ? (
                  <AlbumIcon
                    className="zuperkingIconPostLight"
                    style={{
                      fontSize: postcirclefont,
                      color: post.color1,
                    }}
                  />
                ) : itemcroptype[pey] === 2 ? (
                  <AlbumIcon
                    className="zuperkingIconPostLight"
                    style={{
                      fontSize: postcirclefont,
                      color: post.color1,
                    }}
                  />
                ) : (
                  <CircleIcon
                    className="zuperkingIconPostLight"
                    style={{
                      fontSize: postcirclefont,
                      color: post.color1,
                    }}
                  />
                )}

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
          <div
            className="zuperxyinfo"
            style={{
              opacity: 1,
              top: postprofiletop,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              zIndex: 5,
              paddingLeft: matchPc ? "1.4vw" : matchTablet ? "2.3vw" : "2.1vw",
              height: "0px",
              fontFamily: "Arial, Helvetica, sans-seri",
            }}
          >
            <Grid
              className={`  ${optionsClass}   `}
              style={{
                backgroundColor: `${post.color1}`,
                zIndex: 2,
                left: `1.6vh`,
                marginTop: `-4vh`,
                opacity: 0.8,
                position: "absolute",
                display: "none",
              }}
            >
              <AddIcon
                style={{
                  fontSize: fontOptions,
                  color: "#ffffff",
                }}
                className="zuperkinginfo"
              />
            </Grid>
            <img
              ref={profileImageref}
              className={darkmodeReducer ? "turpostDark" : "turpostLight"}
              src={`${post.profile_image}`}
              alt="a superstarz post "
              style={{
                boxShadow: darkmodeReducer
                  ? "0 0 1px #555555"
                  : "0 0 3.5px #aaaaaa",
                width: profilewidth,
                height: "auto",
                padding: "0px",
                objectFit: "contain",
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>

          {/*///////////////////////////////////////////////////////////////////////////PROFILE-PIC*/}
        </div>
      </animated.div>
    </>
  );
}

export const MiniPost = React.memo(MiniPostx);
