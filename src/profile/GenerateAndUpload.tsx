import React, { useRef, useState, useCallback, useEffect } from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";

import { Grid, Button } from "@material-ui/core";

import { TextField } from "@material-ui/core";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import PublishIcon from '@material-ui/icons/Publish';

import ImageSearchIcon from '@material-ui/icons/ImageSearch';

import { UpdateUploadData, Updatepagenum } from "../GlobalActions";


import CancelIcon from '@material-ui/icons/Cancel';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import OpenAI from 'openai';



import Axios from "axios";



function GenerateAndUploadx({ setUploadGPT, OpenUploadModal, Loader, setLoader }: any) {


  const { REACT_APP_SUPERSTARZ_URL } = process.env;



  const dispatch = useDispatch();

  const [prompt, setprompt] = useState('');

  const [Total, setTotal] = useState(1);

  const [pxResolution, setpxResolution] = useState('');


  const [imageUrl, setimageUrl] = useState('');







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


  const imageRef = useRef(null);

  const [imageDataURL, setImageDataURL] = useState('');

  const imageHandleChangeDalle = useCallback(() => {
    // Access the image element using ref
    const par = {
      dalle: imageUrl,
    };

    setLoader(true);

    Axios.get(`${REACT_APP_SUPERSTARZ_URL}/ProxyDalle`, {
      params: par, // Send the 'par' object as query parameters
      responseType: 'arraybuffer', // Set responseType to 'arraybuffer' to receive binary data
    })
      .then((response) => {
        const dataURL = `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
        setImageDataURL(dataURL);

        var ray: any[] = [];

        ray = [dataURL];

        setLoader(false);

        dispatch(UpdateUploadData(ray, ray[0]));


        OpenUploadModal(1);
      })
      .catch(function (error) {
        setLoader(false);
        console.error('Error fetching image:', error);
        // Handle error
      });
  }, [imageUrl]);





  const imageHandleChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {

      const FileArray = Array.from(e.target.files).map((file: any, index: any) =>
        URL.createObjectURL(file)
      );

      const ray: any[] = [];



      var lim = FileArray.length
      if (lim > 1) {
        lim = 0
      } else { lim = lim - 1 }



      for (let i = 0; i <= lim; i++) {
        ray[i] = FileArray[i];
      }

      dispatch(UpdateUploadData(ray, FileArray[0]));
      console.log(FileArray);

      OpenUploadModal(1);
      ///window.history.pushState(null, "", "Crop");
      /// dispatch(UpdateNavCropReducer(true));


      e.target.value = null;
    }
  };




  //////
  const GenerateImage = useCallback(async () => {

    const par = {
      prompt: prompt,
      n: Total,
      size: pxResolution
    }



    console.log("go to  backend dalle");

    /// alert(prompt)

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/DalleApi`,
      { values: par },
      {}
    )
      .then((response) => {
        if (response.data.message === "Done") {

          const GeneratedImage = response.data.payload;

          const imageD = GeneratedImage.data[0].url;

          setLoader(false);

          setimageUrl(imageD);

        }
      })
      .catch(function (error) {

        setLoader(false);
        console.log(error);
        ///  alert("profileoutter color  error");
      });

  }, [prompt, Total, pxResolution])





  /////
  ///////
  /////////////
  var transform = "";
  var font1 = "";
  var font2 = "";
  var paddingbutU = "";

  var width = " ";
  var sizex: "small" | "medium" | undefined = undefined;
  ///
  ///
  ///
  if (matchPc) {
    sizex = "medium";
    width = "33%";
    transform = "scale(1)";
    font1 = "2.7vh";
    font2 = "2.1vh";
    paddingbutU = "70px";
  } else if (matchTablet) {
    sizex = "small";
    width = "62%";
    transform = "scale(1)";
    font1 = "2.6vh";
    font2 = "2vh";
    paddingbutU = "100px";
  } else {
    sizex = "small";
    width = "100%";
    transform = "scale(0.94)";
    font1 = "";
    font2 = "";
    paddingbutU = "80px";
  }


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
    buttonFont = "1.5vw";
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





  return (<>





    <Grid
      container
      style={{
        padding: '0px',
        overflow: 'hidden'

      }}
    >


      {imageUrl ?


        <>

          <div

            className={
              darkmodeReducer ? `  AnimateLoaderDalle turdark` : ` AnimateLoaderDalle  turlight`
            }
            style={{
              boxShadow: `0 0 3px ${colorReducer}`,
              backgroundColor: colorReducer,
              height: "1vh",
              margin: 'auto',
              width: '100%',
              top: '0vh',
              position: 'relative',
              zIndex: '30',
              visibility: Loader ? 'visible' : 'hidden'


            }}
          ></div>

          <img src={imageUrl} ref={imageRef} alt={`Generated Image `}

            style={{
              borderRadius: '5vh', padding: '4px', marginTop: '-1vh',
              position: 'relative', width: '100%', height: '80vh', objectFit: 'cover'
            }} />

          <Grid
            item
            xs={5}
            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>
          <Grid
            item
            xs={2}
            style={{
              padding: '0px',

            }}
          >

            <CancelIcon

              onClick={() => {
                setimageUrl('');
              }}
              className={`${darkmodeReducer
                ? " zuperxyinfo make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : " zuperxyinfo make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
                } `}
              style={{
                fontSize: '8vh',
                color: '#ffffff',
                position: 'absolute',
                right: '1vw',
                top: '7vh',
                opacity: '0.8',
                display: 'block'

              }}
            />
            <Grid item className="buttonpad buttonshake" xs={12} style={{ marginTop: '-17vh', }} >






              <PublishIcon
                className={
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                    : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                }
                style={{
                  position: 'absolute',
                  marginTop: '2.7vh',
                  marginLeft: '-6.9vh',

                  fontSize:
                    matchTablet || matchMobile ? "4.8vh" : "2.5vw",
                }}
              />







              <div
                onClick={imageHandleChangeDalle}
                className="zuperxyinfo"
                style={{
                  fontSize: buttonFont,
                  transform: buttonTransform,
                  padding: "16.5px",
                  marginTop: '1.8vh',
                  borderRadius: "52px",
                  MozBoxShadow: MozBoxShadowReducerLogin,
                  WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                  boxShadow: boxShadowReducerLogin,
                  fontFamily: ' Arial, Helvetica, sans-serif',
                  textAlign: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 40
                }}

              >
                IMPORT

              </div>


            </Grid>


          </Grid>


          <Grid
            item
            xs={12}
            style={{
              padding: '0px',
              textAlign: 'center',
              backgroundColor: 'rgb(8,8,8,0)',
              height: '110vh',
              top: '-76.3vh',
              borderRadius: '5vh',
              position: 'relative',
              zIndex: 100,
              display: Loader ? 'block' : 'none'
            }}
          ></Grid>

        </> :



        <>


          <input
            onChange={imageHandleChange}
            type="file"
            name="superImages"
            accept="image/*"
            multiple
            id="fileoo"
            style={{ visibility: "hidden", display: "none" }}
          />

          <Grid
            item
            xs={11}

            style={{
              position: "relative",
              display: 'block',
              zIndex: 100000,
              top: "0em",
              margin: 'auto',


            }}
          >


            <div

              className={
                darkmodeReducer ? `  AnimateLoaderDalle turdark` : ` AnimateLoaderDalle  turlight`
              }
              style={{
                boxShadow: `0 0 3px ${colorReducer}`,
                backgroundColor: colorReducer,
                height: "1vh",
                margin: 'auto',
                width: '100%',
                display: Loader ? 'block' : 'none'


              }}
            ></div>


          </Grid>

          <Grid
            item
            xs={5}
            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>
          <Grid
            item
            xs={2}
            style={{
              padding: '0px',

            }}
          >


            <Grid item className="buttonpad buttonshake" xs={12} style={{ marginTop: '0.5vh', }} >

              <label htmlFor="fileoo">

                <PublishIcon
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    position: 'absolute',
                    marginTop: '1.5vh',
                    marginLeft: '-6.9vh',

                    fontSize:
                      matchTablet || matchMobile ? "4.8vh" : "2.5vw",
                  }}
                />







                <div


                  style={{
                    fontSize: buttonFont,
                    transform: buttonTransform,
                    padding: "16.5px",
                    borderRadius: "52px",
                    MozBoxShadow: MozBoxShadowReducerLogin,
                    WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                    boxShadow: boxShadowReducerLogin,
                    fontFamily: ' Arial, Helvetica, sans-serif',
                    textAlign: 'center',
                    color: darkmodeReducer ? '#ffffff' : '#000000',
                    cursor: 'pointer'
                  }}

                >
                  IMPORT

                </div>

              </label>

            </Grid>


          </Grid>



          <Grid
            item
            xs={12}
            style={{
              marginTop: '4vh',
              padding: '0.04px',
              textAlign: 'center',
              opacity: '0.7',
              backgroundColor: '#aaaaaa'
            }}>
          </Grid>


          <TextField
            size={sizex}
            inputProps={{ style: { fontSize: font1 } }}
            InputLabelProps={{ style: { fontSize: font2 } }}
            onChange={(e) => { setprompt(e.target.value) }}
            /// value={captionvalues.caption}
            style={{
              transform: transform,
              width: width,
              paddingBottom: "0px",
              paddingTop: "6vh",
              position: "fixed",
              top: "55vh",
              left: "34.1vw",
              zIndex: 26,
              padding: '0vh',
              borderRadius: '4%',
              backgroundImage: 'rgb(255,255,255,0.2)',
            }}
            label="Generate &#129302; Image Here, Add A Prompt"
            type="text"
            name="caption"
            variant='outlined'
          />{" "}
          <Grid
            item
            xs={5}
            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>


          <Grid
            item
            xs={2}
            style={{
              padding: '0px',
              textAlign: 'center',
              marginTop: '40vh',
            }}
          >

            <Grid item className="buttonpad buttonshake" xs={12} style={{ display: Loader ? 'none' : 'block' }}>

              <ImageSearchIcon
                className={
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                    : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                }
                style={{
                  position: 'absolute',
                  marginTop: '2vh',
                  marginLeft: '-7vh',

                  fontSize:
                    matchTablet || matchMobile ? "4.8vh" : "2.5vw",
                }}
              />

              <Button
                onClick={() => {
                  setLoader(true);
                  GenerateImage();
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
                CREATE
              </Button>
            </Grid>


          </Grid>

          <Grid
            item
            xs={12}
            style={{
              padding: '0px',
              textAlign: 'center',
              backgroundColor: 'rgb(8,8,8,0)',
              height: '110vh',
              top: '-76.3vh',
              borderRadius: '5vh',
              position: 'relative',
              zIndex: 100,
              display: Loader ? 'block' : 'none'
            }}
          ></Grid>


        </>}




    </Grid>

  </>);
}

export const GenerateAndUpload = React.memo(GenerateAndUploadx);
