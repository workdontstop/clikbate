import React, { useRef, useState, useCallback, useEffect } from "react";
import { Ispinnerinterface, IFormHolder } from "../log/log-Interfaces";
import Axios from "axios";
import SuperstarzIconLight from "./../images/ssmall.png";
import SuperstarzIconDark from "./../images/sdsmall.png";
import { TextFieldLogin } from "../log/TextFieldLogin";
import { TextFieldSignup } from "../log/TextFieldSignup";
import { ModalFormSignupError } from "../log/ModalFormSignupError";
import { ModalFormLoginError } from "../log/ModalFormLoginError";
import { Button, Grid } from "@material-ui/core";
import { matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { IsLoggedAction } from "../log/actions/IsLoggedAction";
import { UserdataAction } from "../log/actions/UserdataAction";
import { ActivateLoaderAction, HideLoaderAction } from "../GlobalActions";
//////import { useHistory } from "react-router-dom";
import { PasswordCheck } from "../log/PasswordCheck";
import { UpdateColorAction } from "../GlobalActions";
import { UserInfoUpdateAction } from "../log/actions/UserdataAction";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import { ICommentTemplate, IGrid } from "../log/log-Interfaces";
import CircleIcon from "@mui/icons-material/Circle";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { DialogContent } from "@material-ui/core";
import { animated } from "react-spring";

import { MiniFormComment } from "./MiniFormComment";
import { MiniFormReaction } from "./MiniFormReaction";
import { UpdateComData } from ".././GlobalActions";

///Axios.defaults.withCredentials = true;

function CommentFormHolderx({
  zoomedModal,
  WidthHolder,
  loginForm,
  setServerErrorData,
  setServerErrorDisplay,
  setserverEmojiplain,
  checkSignupPasswordACTIVATE,
  setcheckSignupPasswordACTIVATE,
  imageHeightoverflow,
  DiscussionImage,
  MiniLayoutOverFlow,
  wideImage,
  showComAddBack,
  setshowComAddBack,
  setFeedBackData,
  setFeedbackshow,
  CommentTimer,
  CommentPostid,
  containerHeight,
  reactionTemplateGo,
  ModalImageRef,
  connectTemplateGo,
  typeEmo,
  scrollLocation,
  postData,
  commentHistoryScroll,
  CommentHistoryData,
  setcommentHistoryScroll,
  setCommentHistoryData,
}: any) {
  const dispatch = useDispatch();

  const { REACT_APP_SUPERSTARZ_URL } = process.env;

  const [Focus, setFocus] = useState<boolean>(false);
  const [inputedComment, setinputedComment] = useState<string>("");
  const [inputedCommentFinal, setinputedCommentFinal] = useState<string>("");

  const [CommentLoaderData, setCommentLoaderData] = useState<string>("");

  const [reactionDatax, setreactionDatax] = useState<Array<any>>([]);
  const [reactionData, setreactionData] = useState<Array<any>>([]);
  const [reactionData2, setreactionData2] = useState<Array<any>>([]);
  const [reactionData3, setreactionData3] = useState<Array<any>>([]);

  const [commentDatax, setcommentDatax] = useState<Array<any>>([]);
  const [commentData, setcommentData] = useState<Array<any>>([]);
  const [commentData2, setcommentData2] = useState<Array<any>>([]);
  const [commentData3, setcommentData3] = useState<Array<any>>([]);

  const [showComment2, setshowComment2] = useState<boolean>(false);
  const [showComment3, setshowComment3] = useState<boolean>(false);

  const [MoreCommentState, setMoreCommentState] = useState<number>(0);
  const [postlimit, setpostlimit] = useState<number>(0);

  const [showCommentLoader, setshowCommentLoader] = useState<boolean>(false);

  const [blinkenx, setblinkenx] = useState<boolean>(false);

  const [wait4ref, setwait4ref] = useState<boolean>(false);

  const lastItemElement = useRef<any>();

  const [moreFeeds, setmoreFeeds] = useState<boolean>(false);

  const [originalData, setoriginalData] = useState<Array<any>>([]);

  const paperPostScrollRefxx = useRef<any>(null);

  const callObserver = useCallback(() => {
    const observer = new IntersectionObserver((entries: any) => {
      const ent = entries[0];
      console.log(ent.isIntersecting);
      setmoreFeeds(ent.isIntersecting);
    });
    if (reactionTemplateGo) {
      if (reactionData) {
        if (lastItemElement.current || lastItemElement) {
          observer.observe(lastItemElement.current);
        }
      }
    } else {
      if (commentData) {
        if (lastItemElement.current || lastItemElement) {
          observer.observe(lastItemElement.current);
        }
      }
    }
  }, [lastItemElement, commentData, reactionData, reactionTemplateGo]);

  ///////CALLS COMMENT PAGINATION
  useEffect(() => {
    if (reactionTemplateGo) {
      ///////////////////////
      /////CALLS REACTION PAGINATION
      if (moreFeeds) {
        //alert("shown");
        if (MoreCommentState === 0) {
          setshowComment2(true);
          setMoreCommentState(1);
        } else if (MoreCommentState === 1) {
          setshowComment3(true);
          setMoreCommentState(2);
        } else {
          if (reactionData3.length > 0) {
            setreactionDatax(reactionData3);

            setreactionData([]);
            setreactionData2([]);
            setreactionData3([]);
            setshowComment2(false);
            setshowComment3(false);
            setMoreCommentState(0);

            callfeedsReactionxx();
          }
        }
        ///setcommentData([]);
        ///callfeeds();
      } else {
      }
      ///////////////////////////////
    } else {
      /////////////////
      if (moreFeeds) {
        //alert("shown");
        if (MoreCommentState === 0) {
          setshowComment2(true);
          setMoreCommentState(1);
        } else if (MoreCommentState === 1) {
          setshowComment3(true);
          setMoreCommentState(2);
        } else {
          if (commentData3.length > 0) {
            setcommentDatax(commentData3);
            setcommentData([]);
            setcommentData2([]);
            setcommentData3([]);
            setshowComment2(false);
            setshowComment3(false);
            setMoreCommentState(0);
            callfeedsxx();
          }
        } ///setcommentData([]);
        ///callfeeds();
      } else {
      }
      /////////////////
    }
  }, [moreFeeds]);

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
  /// GET DARKMODE FROM REDUX STORE
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      username: string;
      imageThumb: string;
      id: number;
    };
  }
  const { username, image, imageThumb, id } = useSelector(
    (state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    })
  );
  const usernameReducer = username;
  const imageReducer = image;
  const imageReducerThumb = imageThumb;
  const idReducer = id;

  const [GridZoomAx, setGridZoomAx] = useState<IGrid>(12);

  const [GridZoomA, setGridZoomA] = useState<IGrid>(3);

  const [GridZoomB, setGridZoomB] = useState<IGrid>(8);

  useEffect(() => {
    if (zoomedModal) {
      setGridZoomAx(1);
      setGridZoomA(2);
      setGridZoomB(9);
      if (wideImage) {
      } else {
        setGridZoomAx(1);
        setGridZoomA(2);
        setGridZoomB(8);
      }
    } else {
      setGridZoomAx(false);
      setGridZoomA(3);
      setGridZoomB(8);
    }
  }, [zoomedModal, wideImage]);

  const startAddComment = () => {
    if (showComAddBack) {
      setshowComAddBack(false);
    } else {
      setshowComAddBack(true);
    }
  };

  var TextFieldOpacity = "1";
  if (Focus) {
    TextFieldOpacity = "1";
  } else {
    TextFieldOpacity = "0.75";
  }

  const focusTextfield = (a: number) => {
    if (a === 1) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  /// SANITISE LOG IN FORM INPUT CLIENT SIDE
  const updateComment = useCallback(
    (e: any) => {
      const { name, value } = e.target;

      if (name === "findcomment") {
        let usernameCleaner = /[^a-z0-9áéíóúñü\._ ]/gim;

        let cleanValue = value.replace(usernameCleaner, "");

        let usernameLimiter = /^.{220}$/;
        let finalUsername = cleanValue.replace(usernameLimiter, "");

        let checkUsernameClean = usernameCleaner.test(value);
        let checkUsernameLimited = usernameLimiter.test(cleanValue);

        if (checkUsernameClean) {
        } else {
          setFeedBackData(0);
          setFeedbackshow(false);
        }

        let userNameLength = finalUsername.length;

        if (checkUsernameClean) {
        } else {
          if (checkUsernameLimited || userNameLength > 220) {
            setFeedBackData(2);
            setFeedbackshow(true);
            closeAfterAWhile();
          } else {
            setFeedBackData(0);
            setFeedbackshow(false);
            setinputedComment(value);
            setinputedCommentFinal(value);
          }
        }
        ///
      } else {
      }
    },
    [inputedComment, inputedCommentFinal]
  );

  const closeAfterAWhile = () => {
    if (CommentTimer.current) {
      clearTimeout(CommentTimer.current);
    }
    CommentTimer.current = setTimeout(function () {
      setFeedbackshow(false);
    }, 3000);
  };

  var buttonFont = "";
  var buttonTransform = " ";
  var pad = "";

  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  if (matchPc) {
    buttonFont = "1vw";
    buttonTransform = " ";
    pad = "14.5px";

    ///
  } else if (matchTablet) {
    pad = "16px";
    buttonFont = "2vw";
    buttonTransform = " ";
    ///
  } else {
    buttonFont = "";
    buttonTransform = "scale(0.95)";
    pad = "16px";
  }

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
    MozBoxShadowReducerLogin = MozBoxShadowLL;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLL;
    boxShadowReducerLogin = boxShadowLL;

    MozBoxShadowReducerSign = MozBoxShadowSL;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSL;
    boxShadowReducerSign = boxShadowSL;
  }

  var updatebuttonShow: any = "hidden";
  if (inputedComment) {
    updatebuttonShow = "visible";
  } else {
    updatebuttonShow = "hidden";
  }

  ///
  ///
  ///
  /// SENDING SIGN UP  DATA TO SERVER SIDE

  var disboy: any = {
    inputedCom: "",
    postid: CommentPostid.id,
    id: idReducer,
  };

  const signmeup = useCallback(() => {
    if (inputedCommentFinal) {
      disboy = {
        inputedCom: inputedComment,
        postid: CommentPostid.id,
        id: idReducer,
      };

      setCommentLoaderData(inputedCommentFinal);
      setshowComAddBack(false);
      setshowCommentLoader(true);
      setblinkenx(true);

      Axios.post(
        `${REACT_APP_SUPERSTARZ_URL}/Create_comment`,
        { values: disboy },
        {}
      )
        .then((response) => {
          setTimeout(function () {
            setblinkenx(false);
          }, 3000);

          if (response.data.message === "Comment Added") {
            setinputedCommentFinal("");
            setinputedComment("");
          } else {
            setinputedCommentFinal("");
            setshowCommentLoader(false);
            alert("something went wrong  , please try again");
          }
        })
        .catch(function (error) {
          setTimeout(function () {
            setblinkenx(false);
          }, 3000);

          setinputedCommentFinal("");
          setshowCommentLoader(false);
          alert("something went wrong , please try again");
        });
    } else {
    }
  }, [REACT_APP_SUPERSTARZ_URL, inputedCommentFinal]);

  ///
  ///
  ///
  ///ENTER KEY EMULATE FORM ACTION
  const enterPress = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        signmeup();
      }
    },
    [signmeup]
  );

  useEffect(() => {
    document.addEventListener("keydown", enterPress);
    return () => document.removeEventListener("keydown", enterPress);
  }, [enterPress]);

  var disboyReactionX: any = {
    post: CommentPostid.id,
    type: typeEmo,
    limit: postlimit,
    id: idReducer,
  };

  var disboyx: any = {
    commentId: CommentPostid.id,
    id: idReducer,
  };

  var disboyxmore: any = {
    commentId: CommentPostid.id,
    id: idReducer,
    limit: postlimit,
  };

  const callfeeds = () => {
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/comments_chronological`,
      { values: disboyx },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "feeds fetched") {
          var postdataRep = response.data.payload;

          dispatch(UpdateComData(postdataRep));

          if (postdataRep.length > 0) {
            callPagination(postdataRep, 0);
          }

          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          alert("Connection malfunction profile outter");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction profile outter 2");
      });
  };

  const callfeedsxx = () => {
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/comments_chronological_more`,
      { values: disboyxmore },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "feeds fetched") {
          var postdataRep = response.data.payload;

          dispatch(UpdateComData(postdataRep));

          if (postdataRep.length > 0) {
            callPagination(postdataRep, 1);
          }
          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          alert("Connection malfunction profile outter");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction profile outter 2");
      });
  };

  const callfeedsReaction = () => {
    var ss: string =
      connectTemplateGo === 1
        ? `fav_chronological`
        : connectTemplateGo === 2
        ? `fan_chronological`
        : `reaction_chronological`;

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/${ss}`,
      { values: disboyReactionX },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "feeds fetched") {
          var postdataRep = response.data.payload;

          dispatch(UpdateComData(postdataRep));

          if (postdataRep.length > 0) {
            callPaginationReaction(postdataRep, 0);
          }

          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          alert("Connection malfunction commentformholder");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction commentformholder");
      });
  };
  const callfeedsReactionxx = () => {
    var ss: string =
      connectTemplateGo === 1
        ? `fav_chronological_more`
        : connectTemplateGo === 2
        ? `fan_chronological_more`
        : `reaction_chronological_more`;

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/${ss}`,
      { values: disboyReactionX },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "feeds fetched") {
          var postdataRep = response.data.payload;

          dispatch(UpdateComData(postdataRep));

          if (postdataRep.length > 0) {
            callPaginationReaction(postdataRep, 1);
          }

          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          alert("Connection malfunction commentformholder");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction commentformholder");
      });
  };

  const callPagination = (postdataRep: any, ty: number) => {
    if (commentHistoryScroll === 0) {
    } else {
      setTimeout(() => {
        paperPostScrollRefxx.current.scrollTop = commentHistoryScroll;
        setcommentHistoryScroll([]);
      }, 1000);
    }
    postdataRep.forEach((obj: any) => {
      obj.itemheight = "auto";
      obj.itemrealheighthold = "0";
      obj.itemcroptype = "0";
      obj.itemFinalPostHeight = "0";
      obj.itemOriginalPostHeight = "0";
      obj.itemCLICKED = false;
      obj.onLoadDataOnce = false;
      obj.ActiveAutoPlay = true;
    });

    const temp: any = [];
    const tempx: any = [];
    const tempxx: any = [];

    postdataRep.map((post: any, ix: any) => {
      if (ix >= 0 && ix <= 29) {
        temp[ix] = postdataRep[ix];
      } else if (ix >= 30 && ix <= 59) {
        tempx[ix] = postdataRep[ix];
      } else {
        tempxx[ix] = postdataRep[ix];
      }
      if (ix === postdataRep.length - 1) {
        setpostlimit(postdataRep[ix].id);
        setcommentData(temp);
        setcommentData2(tempx);
        setcommentData3(tempxx);
      }
    });
  };

  useEffect(() => {
    if (reactionTemplateGo) {
      if (CommentHistoryData.length === 0) {
        callfeedsReaction();
      } else {
        callPaginationReaction(CommentHistoryData, 0);
        setCommentHistoryData([]);
      }
    } else {
      if (CommentHistoryData.length === 0) {
        callfeeds();
      } else {
        callPagination(CommentHistoryData, 0);
        setCommentHistoryData([]);
      }
    }
  }, [REACT_APP_SUPERSTARZ_URL, reactionTemplateGo, connectTemplateGo]);

  const callPaginationReaction = (postdataRep: any, ty: number) => {
    if (commentHistoryScroll === 0) {
    } else {
      setTimeout(() => {
        paperPostScrollRefxx.current.scrollTop = commentHistoryScroll;
        setcommentHistoryScroll([]);
      }, 1000);
    }

    const temp: any = [];
    const tempx: any = [];
    const tempxx: any = [];

    postdataRep.map((post: any, ix: any) => {
      if (ix >= 0 && ix <= 29) {
        temp[ix] = postdataRep[ix];
      } else if (ix >= 30 && ix <= 59) {
        tempx[ix] = postdataRep[ix];
      } else {
        tempxx[ix] = postdataRep[ix];
      }
      if (ix === postdataRep.length - 1) {
        setpostlimit(postdataRep[ix].id);
        setreactionData(temp);
        setreactionData2(tempx);
        setreactionData3(tempxx);
      }
    });
  };

  const menuTimer5 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Datax: any = {
    profile_image: imageReducer,
    username: usernameReducer,
    com: CommentLoaderData,
  };

  return (
    <>
      {matchPc /*PC PC PC PC PC PC PC PC  SIGNUP  PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC */ ? (
        <>
          {showComAddBack ? (
            <>
              {/*///////////////////////////////////////////////////////////////////////////ADD COM TEXTFIELD*/}
              <Grid
                item
                xs={12}
                style={{
                  padding: "0vh",
                  marginTop: zoomedModal
                    ? MiniLayoutOverFlow && imageHeightoverflow
                      ? "24vh"
                      : imageHeightoverflow
                      ? "12vh"
                      : "3vh"
                    : MiniLayoutOverFlow
                    ? "10vh"
                    : "0vh",
                  position: "relative",
                  height: "20vh",
                  top: "0vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  multiline
                  onFocus={() => focusTextfield(1)}
                  onBlur={() => focusTextfield(0)}
                  size="medium"
                  inputProps={{ style: { fontSize: "20px" } }}
                  InputLabelProps={{ style: { fontSize: "15px" } }}
                  style={{
                    width: "80%",
                    paddingBottom: "40px",
                    zIndex: 100,
                    opacity: TextFieldOpacity,
                    textAlign: "center",
                    top: wideImage
                      ? "85%"
                      : imageHeightoverflow
                      ? "190%"
                      : "140%",
                  }}
                  label="Start a Discussion"
                  margin="normal"
                  name="findcomment"
                  type="text"
                  onChange={updateComment}
                  value={inputedComment}
                />
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////ADD COM TEXTFIELD*/}
            </>
          ) : (
            <>
              {/*///////////////////////////////////////////////////////////////////////////VIEW COMMENTS*/}
              <Grid
                item
                xs={12}
                style={{
                  padding: "0vh",
                  marginTop: zoomedModal
                    ? MiniLayoutOverFlow && imageHeightoverflow
                      ? "24vh"
                      : imageHeightoverflow
                      ? "12vh"
                      : "0vh"
                    : MiniLayoutOverFlow
                    ? "10vh"
                    : "",
                  position: "relative",
                  height: "0px",
                  top: "0vh",
                }}
              >
                <ChevronLeftIcon
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-darkcm dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-lightcm  dontallowhighlighting   "
                  }
                  style={{
                    color: darkmodeReducer ? "#ffffff" : "#999999",
                    fontSize: "2.9vw",
                    opacity: darkmodeReducer ? 0.2 : 0.4,
                  }}
                />{" "}
                <ChevronRightIcon
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-darkcm dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-lightcm  dontallowhighlighting   "
                  }
                  style={{
                    opacity: darkmodeReducer ? 0.2 : 0.4,
                    color: darkmodeReducer ? "#ffffff" : "#999999",
                    fontSize: "2.9vw",
                    position: "absolute",
                    right: "0vw",
                  }}
                />{" "}
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: "0vh",
                    position: "relative",
                    height: "8vh",
                    overflow: "hidden",
                  }}
                ></Grid>
                <Grid
                  container
                  style={{
                    padding: zoomedModal ? "0vh" : "0vh",
                    marginTop: "-5vh",
                    height: "auto",
                    overflow: "hidden",
                  }}
                >
                  {reactionTemplateGo ? (
                    <MiniFormReaction
                      connectTemplateGo={connectTemplateGo}
                      paperPostScrollRefxx={paperPostScrollRefxx}
                      originalData={originalData}
                      scrollLocation={scrollLocation}
                      DiscussionImage={DiscussionImage}
                      CommentPostid={CommentPostid}
                      ModalImageRef={ModalImageRef}
                      containerHeight={containerHeight}
                      blinkenx={blinkenx}
                      showCommentLoader={showCommentLoader}
                      Datax={Datax}
                      zoomedModal={zoomedModal}
                      wideImage={wideImage}
                      commentDatax={reactionDatax}
                      callObserver={callObserver}
                      commentData={reactionData}
                      lastItemElement={lastItemElement}
                      showComment2={showComment2}
                      commentData2={reactionData2}
                      showComment3={showComment3}
                      commentData3={reactionData3}
                      postData={postData}
                    />
                  ) : (
                    <MiniFormComment
                      paperPostScrollRefxx={paperPostScrollRefxx}
                      originalData={originalData}
                      postData={postData}
                      scrollLocation={scrollLocation}
                      DiscussionImage={DiscussionImage}
                      CommentPostid={CommentPostid}
                      containerHeight={containerHeight}
                      blinkenx={blinkenx}
                      showCommentLoader={showCommentLoader}
                      Datax={Datax}
                      zoomedModal={zoomedModal}
                      wideImage={wideImage}
                      commentDatax={commentDatax}
                      callObserver={callObserver}
                      commentData={commentData}
                      lastItemElement={lastItemElement}
                      showComment2={showComment2}
                      commentData2={commentData2}
                      showComment3={showComment3}
                      commentData3={commentData3}
                    />
                  )}
                </Grid>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////VIEW COMMENTS*/}
            </>
          )}
          <CommentIcon
            onClick={startAddComment}
            className={
              darkmodeReducer
                ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-lightab  dontallowhighlighting   "
            }
            style={{
              display: reactionTemplateGo
                ? "none"
                : showComAddBack
                ? "none"
                : "block",
              color: darkmodeReducer ? "#ffffff" : "#000000",
              fontSize: "2vw",
              opacity: 0.6,
              position: "fixed",
              bottom:
                zoomedModal && MiniLayoutOverFlow && imageHeightoverflow
                  ? "21%"
                  : zoomedModal && imageHeightoverflow
                  ? "15%"
                  : MiniLayoutOverFlow && imageHeightoverflow
                  ? "11%"
                  : zoomedModal
                  ? "8%"
                  : "4%",
              right: "1vw",
              textAlign: "center",
            }}
          />{" "}
          <Grid
            container
            style={{
              opacity: checkSignupPasswordACTIVATE ? 0 : 1,
              marginTop: wideImage
                ? "27%"
                : imageHeightoverflow
                ? zoomedModal
                  ? "42%"
                  : "62%"
                : zoomedModal
                ? "32%"
                : "45%",
              height: "0px",
            }}
            className="modal-hold-signup"
          >
            <Grid item xs={4} style={{ height: "0px" }}></Grid>
            <Grid
              item
              className="buttonpad buttonshake"
              xs={4}
              style={{ display: showComAddBack ? "block" : "none" }}
            >
              <Button
                style={{
                  fontSize: buttonFont,
                  transform: buttonTransform,
                  padding: pad,
                  borderRadius: "50px",
                  MozBoxShadow: MozBoxShadowReducerSign,
                  WebkitBoxShadow: WebkitBoxShadowReducerSign,
                  boxShadow: boxShadowReducerSign,
                  visibility: updatebuttonShow,
                }}
                onClick={() => {
                  signmeup();
                }}
                fullWidth={true}
                variant="contained"
                size="large"
                color="secondary"
              >
                Share
              </Button>
            </Grid>{" "}
          </Grid>{" "}
        </> /*PC PC PC PC   SIGN UP PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC */
      ) : (
        /*MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE*/
        <>
          <Grid container></Grid>
        </>
      )}
    </>
    /*MOBILE  MOBILE  MOBILE  MOBILE  SIGNUP MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE*/
  );
}

export const CommentFormHolder = React.memo(CommentFormHolderx);
