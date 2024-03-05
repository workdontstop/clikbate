import React, { useState, useRef, useCallback, useEffect } from "react";
import { Arrow } from "./Arrow";
import { Dots } from "./Dots";
import { SliderNumber } from "./SliderNumber";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { RootStateOrAny, useSelector } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

function Loaderx({ sliderLoader, autoSlideDisplay, post }: any): JSX.Element {
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

  return (
    <>
      <Grid
        item
        xs={12}
        className={
          darkmodeReducer
            ? `${sliderLoader} turLight`
            : `${sliderLoader} turlight`
        }
        style={{
          backgroundColor: post ? post.color1 : colorReducer,
          height: "0.8vh",
          position: "absolute",
          display: autoSlideDisplay,
          zIndex: 100000,
          top: "0em",
          width: '92%'
        }}
      ></Grid>
    </>
  );
}

export const Loader = React.memo(Loaderx);
