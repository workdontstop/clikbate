import React from "react";
import { Grid, Button } from "@material-ui/core";

import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { ILogButtons } from "./log-Interfaces";
import { UpdateSign } from ".././GlobalActions";
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import { useRef, useState, useEffect, useCallback } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from '../profile/utils'; // Ensure this is the correct path to your utils



function LoginButtonsx({ OpenModalForm, type, setScrollReactRouter, setFormtype, setCurrentPage }: any) {
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  var buttonFont = "";
  var buttonTransform = " ";
  var pad = "";

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

  if (matchPc) {
    buttonFont = "1vw";
    buttonTransform = " ";
    pad = darkmodeReducer ? "25px" : "27px";
    ///
  } else if (matchTablet) {
    pad = "21.5px";
    buttonFont = "2vw";
    buttonTransform = " ";
    ///
  } else {
    buttonFont = "";
    buttonTransform = "scale(0.95)";
    pad = "25px";
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


  const dispatch = useDispatch();


  const location = useLocation();

  const navigate = useNavigate();


  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);


  const Loginxx = () => {

    const id = 1; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());

    setCurrentPage('login');

    // Update the current URL with the scroll position and page number

    // Navigate to the new URL with the new ID
    navigate(`/Login/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    //dispatch(UserInfoUpdateMEMBER(post.sender));
    setScrollReactRouter(0);
  };






  return (




    <>

      <Grid
        container
        className={matchPc ? "containerloginpc" : "containerloginmobile "}
        item
        style={{ marginTop: matchMobile ? "-2.5vh" : "1vh", padding: "0px" }}

      >


        <CancelIcon
          onClick={() => {

            dispatch(UpdateSign(false));
          }}
          className={`${darkmodeReducer
            ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
            : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
            } `}
          style={{
            fontSize: matchMobile ? '8vh' : '3.8vw',
            color: darkmodeReducer ? '#ffffff' : '#000000',
            position: 'absolute',
            right: '1vw',
            top: matchMobile ? '0vh' : '0px',
            display: 'none',
          }}
        />


        {matchMobile ? null : <Grid item xs={false} sm={3}></Grid>}

        <Grid item className="buttonpad buttonshake" xs={6} sm={2}>
          <Button
            onClick={() => {


              setFormtype(true);

              Loginxx();


            }}

            style={{
              fontSize: buttonFont,
              transform: buttonTransform,
              padding: "21.5px",
              borderRadius: "52px",
              MozBoxShadow: MozBoxShadowReducerLogin,
              WebkitBoxShadow: WebkitBoxShadowReducerLogin,
              boxShadow: boxShadowReducerLogin,
            }}
            fullWidth={true}
            variant="outlined"
            size="large"
            color="primary"
          >
            Log In
          </Button>
        </Grid>


        {matchMobile ? null : <Grid item xs={false} sm={2}></Grid>}



        <Grid item className="buttonpad buttonshake" xs={6} sm={2}>
          <Button
            onClick={() => {


              setFormtype(false);

              Loginxx();

            }}
            style={{
              fontSize: buttonFont,
              transform: buttonTransform,
              padding: pad,
              borderRadius: "50px",
              MozBoxShadow: MozBoxShadowReducerSign,
              WebkitBoxShadow: WebkitBoxShadowReducerSign,
              boxShadow: boxShadowReducerSign,
            }}
            fullWidth={true}
            variant="contained"
            size="large"
            color="secondary"
          >
            {" "}
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={1} sm={3} md={2}></Grid>
      </Grid>

    </>
  );
}

export const LoginButtons = React.memo(LoginButtonsx);
