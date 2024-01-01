import React, { useEffect, useRef, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { Grid, Switch, DialogContent } from "@material-ui/core";
import { matchMobile } from "../DetectDevice";


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
  HasInteractivity,
  startInteractivity,
  post,
  ActiveCanvas, showSpin, setshowSpin
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




  const sc = useRef<ReturnType<typeof setTimeout> | null>(null);



  useEffect(() => {
    if (itemCLICKED[pey] && ActiveCanvas === pey) {



      setshowSpin(true);
      if (sc.current) {
        clearTimeout(sc.current);
      }


    }

  }, [itemCLICKED, ActiveCanvas, pey]);






  return (
    <>

      {showSpin ?
        <Grid item xs={12} style={{ position: 'absolute', zIndex: 100, padding: '3vh', visibility: HasInteractivity ? 'visible' : 'hidden' }}>
          <div className="spinner zuperxyinfo" style={{
            borderTop: `8px solid ${post.color1}`, boxShadow: `0 0 8.5px, ${post.color1}`
          }}></div>
        </Grid> :

        null
      }




      {
        itemCLICKED[pey] ? null : (
          <>
            {" "}
            <div
              onClick={startplay}
              style={{
                position: "absolute",
                zIndex: 30,
                left: matchMobile ? '1vh' : 30,
                cursor: "pointer",
                top: matchMobile ? '1vh' : "5vh",
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
                  display: total === 1 ? HasInteractivity ? 'block' : 'none' : 'block',
                  color: darkmodeReducer ? "#ffffff" : "#000000",
                  transform: matchMobile ? 'scale(0.15)' : 'scale(0.3)'
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
          total === 0 ? null : (
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
                      ? "rgba(41,41,41,0.86)"
                      : "rgba(205,205,205,0.9) ",
                    borderRadius: "50%",
                    fontSize: "0.92vw",
                    display: total === 1 ? HasInteractivity ? 'none' : 'none' : 'block',
                    visibility: startInteractivity && HasInteractivity ? 'hidden' : 'visible',
                    color: darkmodeReducer ? "#ffffff" : "#000000",
                  }
                  }
                >
                  <span style={{ opacity: HasInteractivity && total === 1 ? 0 : 1 }}>

                    {activeSlide + 1}
                  </span>
                </span>
              </div>


            </>
          )
        ) : null
      }
    </>
  );
}

export const SliderNumber = React.memo(SliderNumberx);
