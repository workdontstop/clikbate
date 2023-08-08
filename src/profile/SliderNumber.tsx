import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

function SliderNumberx({
  activeSlide,
  total,
  pey,
  itemCLICKED,
  stopSlider,
  ActiveAutoPlay,
  startSlider,
  postDatainnerInteraction1,
  postDatainnerInteraction2,
  HasInteractivity
}: any): JSX.Element {
  const startplay = () => {
    if (ActiveAutoPlay[pey]) {
      startSlider(0);
    } else {
      stopSlider(0);
    }
  };




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

  return (
    <>
      {itemCLICKED[pey] ? null : (
        <>
          {" "}
          <div
            onClick={startplay}
            style={{
              position: "absolute",
              zIndex: 30,
              left: 30,
              cursor: "pointer",
              top: "5vh",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bolder",
              opacity: "0.9",
              height: "0px",
              padding: "0px",
            }}
          >
            <span
              className={HasInteractivity ? darkmodeReducer ? "turx heartbeat" : "turdark heartbeat" : darkmodeReducer ? "turx" : "turdark"}
              style={{
                padding: "7px",
                paddingLeft: HasInteractivity ? "0.9vw" : '10px',
                paddingRight: HasInteractivity ? "0.9vw" : '10px',
                backgroundColor: darkmodeReducer
                  ? "rgba(81,81,81,0.76)"
                  : "rgba(255,255,255,0.7) ",
                borderRadius: "50%",
                fontSize: "0.92vw",
                display: total === 1 ? HasInteractivity ? 'block' : 'none' : 'block',
                color: darkmodeReducer ? "#ffffff" : "#000000",
              }
              }
            >
              <span style={{ opacity: HasInteractivity && total === 1 ? 0 : 1 }}>{total}</span>
            </span>
          </div>{" "}
        </>
      )
      }

      {
        itemCLICKED[pey] ? (
          total === 1 ? null : (
            <>
              {" "}
              <div
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  zIndex: 30,
                  right: 21,
                  height: "0px",
                  top: "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: "0.9",
                  padding: "0px",
                }}
              >
                <span
                  className={darkmodeReducer ? "turdark" : "turlight"}
                  style={{
                    padding: "7px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: darkmodeReducer
                      ? "rgba(51,51,51,0.76)"
                      : "rgba(255,255,255,0.7) ",

                    borderRadius: "50%",
                    fontSize: "0.92vw",
                    color: darkmodeReducer ? "#eeeeee" : "#111111 ",
                  }}
                >
                  {activeSlide + 1}
                </span>
              </div>{" "}
            </>
          )
        ) : null
      }
    </>
  );
}

export const SliderNumber = React.memo(SliderNumberx);
