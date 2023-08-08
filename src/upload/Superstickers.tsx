import React, {
  ChangeEvent,
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { TextField } from "@material-ui/core";
import { Grid, GridSize } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import { SuperCrop } from "./SuperCrop";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PhotoIcon from "@mui/icons-material/Photo";
import GifIcon from "@mui/icons-material/Gif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Axios from "axios";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import { FilterModeArrow } from "./FilterModeArrow";
import { OptionsSlider } from "../profile/OptionsSlider";
import { convertHexToRGB } from "material-ui/utils/colorManipulator";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import UndoIcon from "@mui/icons-material/Undo";
import LayersIcon from "@mui/icons-material/Layers";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import AddIcon from "@mui/icons-material/Add";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightModeIcon from "@mui/icons-material/LightMode";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import TitleIcon from '@mui/icons-material/Title';
import HighlightIcon from "@mui/icons-material/Highlight";
import Slider from "@material-ui/core/Slider";
import { HexColorPicker } from "react-colorful";
import ColorizeIcon from "@mui/icons-material/Colorize";
import EditIcon from "@mui/icons-material/Edit";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import CloseIcon from "@mui/icons-material/Close";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import UploadIcon from "@mui/icons-material/Upload";
import { readFileContent } from './FileReader';
import DeleteIcon from '@material-ui/icons/Delete';


function Superstickersx({
  setstartSuperStickerblur,
  setstartSuperSticker,
  startSuperSticker,
  itemUploadRef,
  index,
  setsuperStickerActivated,
  setduplicateItemupload,
  duplicateItemupload,
  setactiveSticker,
  effectMode,
  seteffectMode,
  regimageholdfilter,
  regimageholdfilterxx,
  setcallfilter,
  callfilter,
  setFilterUnderStickerStopFiltering,
  superzeroeffect,
  setsuperzeroeffect,
  superzeroeffectonce,
  setsuperzeroeffectonce,
  interactContent,
  setinteractContent,
  interactContent2,
  setinteractContent2,
  cropInitialIn,
  setcropInitialIn,
  cropInitialIn2,
  setcropInitialIn2,
  interactContentBlob,
  setinteractContentBlob,
  interactContent2Blob,
  setinteractContent2Blob
}: any): JSX.Element {
  const [superundoArray, setsuperundoArray] = useState<any>([]);

  const [ShowInteraction, setShowInteraction] = useState(false);

  const { REACT_APP_SUPERSTARZ_URL } = process.env;
  const superundoArrayxx = [...superundoArray];
  const duplicateItemuploadxx = [...duplicateItemupload];
  const effectModexx = [...effectMode];


  const [matchTabletMobile, setmatchTabletMobile] = useState<boolean>(false);

  var extendxy = 1;
  extendxy = matchTabletMobile ? 2.5 : 2.4;

  var pcfont = 2.9;

  var mobilefont = 4.8;

  var sizex: "small" | "medium" | undefined = undefined;



  ///
  ///
  ///DARKMODE FROM REDUX
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
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootUserdataReducer {
    UserdataReducer: {
      id: number;
      username: string;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { id, username } = useSelector((state: RootUserdataReducer) => ({
    ...state.UserdataReducer,
  }));

  const idReducer = id;
  const usernameReducer = username;

  const aRef: any = useRef(null);
  const aaRef: any = useRef(null);

  const [superImageHolderxDrawn, setsuperImageHolderxDrawn] =
    useState<boolean>(false);

  const [superImageHolder, setsuperImageHolder] = useState<any>(null);

  const [superImageHolderx, setsuperImageHolderx] = useState<any>(null);

  const [OriginalImageHeightx, setOriginalImageHeightx] = useState<number>(0);

  const [OriginalImageWidthx, setOriginalImageWidthx] = useState<number>(0);

  const [OriginalImageHeight, setOriginalImageHeight] = useState<number>(0);

  const [OriginalImageWidth, setOriginalImageWidth] = useState<number>(0);

  const [heightx, setheightx] = useState<number>(0);

  const [longmobileimage, setlongmobileimage] = useState<number>(0);

  const [widthx, setwidthx] = useState<number>(0);

  const [iconpositionY, seticonpositionY] = useState<number>(0);

  const [iconpositionX, seticonpositionX] = useState<number>(0);

  const [iconpositionBottom, seticonpositionBottom] = useState<number>(0);

  const canvasRefsticker: any = useRef(null);

  const canvasRefIn: any = useRef(null);

  const canvasRefInteraction1: any = useRef(null);

  const canvasRefstickerimage: any = useRef(null);

  const canvasRefstickerimagex: any = useRef(null);

  const [crop, setcrop] = useState<any>({ x: 0, y: 0 });

  const [croptex, setcroptex] = useState<any>({ x: 0, y: 0 });

  const [cropsticker, setcropsticker] = useState<any>({ x: 0, y: 0 });

  const [superDragAcivated, setsuperDragAcivated] = useState<boolean>(false);

  const [cropInitial, setcropInitial] = useState<any>({ x: 0, y: 0 });

  const [optionscropshow, setoptionsStickershow] = useState<boolean>(true);

  const [cropOffset, setcropOffset] = useState<any>({ x: 0, y: 0 });

  const [Drag, setDrag] = useState<boolean>(false);

  const [dd, setdd] = useState<any>(0);

  const allowscrolltimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const timm = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Timecc = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [textStyle, settextStyle] = useState<number>(0);

  const [stickerOPtionsDefault, setstickerOPtionsDefault] = useState(0);

  const [stickerOPtionsTextType, setstickerOPtionsTextType] = useState(0);

  const [textzoom, settextzoom] = useState<any>(60);

  const [textzoomSwitch, settextzoomSwitch] = useState<boolean>(false);

  const [stickersizezoom, setstickersizezoom] = useState<any>(1);

  const [stickerrotatezoom, setstickerrotatezoom] = useState<any>(1);

  const [shinezoom, setshinezoom] = useState<any>(0);

  const [stickerOPtionsTextfont, setstickerOPtionsTextfont] = useState(0);

  const [showSliderText, setshowSliderText] = useState<boolean>(false);

  const [showSliderstickersize, setshowSliderstickersize] =
    useState<boolean>(false);

  const [showSliderstickerRotate, setshowSliderstickerRotate] =
    useState<boolean>(false);

  const [showshowstickerComplete, setshowshowstickerComplete] =
    useState<boolean>(false);

  const [showalloptions, setshowalloptions] = useState<boolean>(true);

  const [showSliderShine, setshowSliderShine] = useState<boolean>(false);

  const [showTextOptions, setshowTextOptions] = useState<boolean>(true);

  const [showstickerOptions, setshowstickerOptions] = useState<boolean>(true);

  const [showTextField, setshowTextField] = useState<boolean>(false);

  const [startmerge, setstartmerge] = useState<boolean>(false);

  const [Textwidthx, setTextwidthx] = useState(0);

  const [canvaswidth, setcanvaswidth] = useState(0);

  const [colorx, setColorx] = useState("#f5bf42");

  const [colorstroke, setColorstroke] = useState("#343634");

  const [usecolorstroke, setusecolorstroke] = useState<boolean>(false);

  const [showColorPicker, setshowColorPicker] = useState<boolean>(false);

  const [textvalue, settextvalue] = useState("");

  const [superundoArrayHolder, setsuperundoArrayHolder] = useState<any>([]);

  const [undoswitcher, setundoswitcher] = useState(0);

  const [restoreswitcher, setrestoreswitcher] = useState(0);

  const [superLoadFadex, setsuperLoadFadex] = useState<boolean>(false);

  var width = " ";
  var sizex: "small" | "medium" | undefined = undefined;

  var zIndex = 0;
  var zindexU = 0;
  var zindexBackPlateU = 0;
  var displayBackPlateU = "none";
  var zindexBackPlateP = 0;
  var displayBackPlateP = "none";

  const [stickersize, setstickersize] = useState<number>(1);

  const [addedImagex, setaddedImagex] = useState<any>(null);

  const [addedImagexx, setaddedImagexx] = useState<any>(null);



  const interactContentxx = [...interactContent];
  const interactContentxxBlob = [...interactContentBlob];

  const interactContentxx2 = [...interactContent2];
  const interactContentxx2Blob = [...interactContent2Blob];


  var transform = "";
  var font1 = "";
  var font2 = "";
  var paddingbutU = "";

  ///
  ///
  ///
  if (matchPc) {
    sizex = "medium";
    width = "20%";
    transform = "scale(1)";
    zIndex = 1;
    font1 = "2.7vh";
    font2 = "2.1vh";
    paddingbutU = "70px";
  } else if (matchTablet) {
    sizex = "small";
    width = "62%";
    transform = "scale(1)";
    zIndex = 0;
    font1 = "2.6vh";
    font2 = "2vh";
    paddingbutU = "100px";
  } else {
    sizex = "small";
    width = "100%";
    transform = "scale(0.94)";
    zIndex = 0;
    font1 = "";
    font2 = "";
    paddingbutU = "80px";
  }

  const updatetextzoom = (e: any, data: any) => {
    settextzoom(data);
  };

  const updatestickerRotatezoom = (e: any, data: any) => {
    setstickerrotatezoom(data);
  };

  const updatestickerzoom = (e: any, data: any) => {
    setstickersizezoom(data);
  };

  const updateshinezoom = (e: any, data: any) => {
    setshinezoom(data);
  };

  const handleTouchStart = (e: any, type: any) => {
    ////mouseover(0);

    setoptionsStickershow(false);
    if (type === 0) {
      setcropInitial({
        ...cropInitial,
        x: e.clientX * extendxy - cropOffset.x,
        y: e.clientY * extendxy - cropOffset.y,
      });
    } else {
      setcropInitial({
        ...cropInitial,
        x: e.touches[0].clientX * extendxy - cropOffset.x,
        y: e.touches[0].clientY * extendxy - cropOffset.y,
      });
    }
    if (e.target) {
      setDrag(true);
      setshowalloptions(false);
    }
  };

  const handleTouchEnd = () => {
    if (allowscrolltimer.current) {
      clearTimeout(allowscrolltimer.current);
    }

    allowscrolltimer.current = setTimeout(function () {
      ////mouseover(1);
    }, 1200);

    setoptionsStickershow(true);
    setcropInitial({
      ...cropInitial,
      x: crop.x,
      y: crop.y,
    });
    setDrag(false);
    setshowalloptions(true);
  };

  const handleTouchDrag = (e: any, type: any) => {
    if (Drag) {
      if (type === 0) {
        setcrop({
          ...crop,
          x: e.clientX * extendxy - cropInitial.x,
          y: e.clientY * extendxy - cropInitial.y,
        });
      } else {
        setcrop({
          ...crop,
          x: e.touches[0].clientX * extendxy - cropInitial.x,
          y: e.touches[0].clientY * extendxy - cropInitial.y,
        });
      }

      setcropOffset({
        ...cropOffset,
        x: crop.x,
        y: crop.y,
      });
    }
  };

  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (matchTabletMobile && longmobileimage === 0) {
      seticonpositionY(window.innerHeight - heightx);
      seticonpositionX(window.innerWidth - window.innerWidth);
      seticonpositionBottom(heightx);
    } else {
      var xtra;
      if (OriginalImageWidth > OriginalImageHeight) {
        xtra = 140;
      } else {
        xtra = 134;
      }
      seticonpositionY(window.innerHeight - window.innerHeight + 5);
      var qq = window.innerWidth - widthx;
      seticonpositionX(qq / 2 + widthx - xtra);
      seticonpositionBottom(window.innerHeight - 90);
    }
  }, [
    heightx,
    longmobileimage,
    widthx,
    OriginalImageHeight,
    OriginalImageWidth,
  ]);

  useEffect(() => {

    if (startmerge && postData.length === 0) {
      callfeedsx();
    }
  }, [startmerge, REACT_APP_SUPERSTARZ_URL]);







  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [val, setval] = useState(false);

  const handleRandomColor = () => {
    setColorx(getRandomColor());
    setColorstroke(getRandomColor());
  };


  useEffect(() => {
    handleRandomColor();
  }, []);

  useEffect(() => {

    callInteract(0);
  }, [interactContent[index]]);


  useEffect(() => {

    callInteract(0);
  }, [interactContent2[index]]);





  //
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (matchMobile || matchTablet) {
      setmatchTabletMobile(true);
    }
  }, []);

  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (Drag) {
      if (stickerOPtionsDefault === 1) {
        setcroptex({
          ...croptex,
          x: crop.x * 10,
          y: crop.y * 10,
        });
      }

      setcropsticker({
        ...cropsticker,
        x: crop.x,
        y: crop.y,
      });
    }
  }, [crop]);

  const clearFilterDrag = () => {
    setcroptex({
      ...croptex,
      x: 0,
      y: 0,
    });

    setcrop({
      ...crop,
      x: 0,
      y: 0,
    });

    setcropInitial({
      ...cropInitial,
      x: 0,
      y: 0,
    });

    setcropOffset({
      ...cropOffset,
      x: 0,
      y: 0,
    });
  };





  ///
  ////
  ///
  ///
  const drawText = (
    ctx: any,
    canvasRefsticker: any,
    widthx: any,
    heightx: any
  ) => {
    var fonttype = "";
    if (stickerOPtionsTextfont === 0) {
      fonttype = "sans-serif";
    } else if (stickerOPtionsTextfont === 1) {
      fonttype = "Big Shoulders Display";
    } else if (stickerOPtionsTextfont === 2) {
      fonttype = "Loved by the King";
    } else {
      fonttype = "Oleo Script";
    }

    var dragDistanceX;
    var dragDistanceY;
    var fontsize;

    if (Textwidthx > canvaswidth) {
      settextzoom((textzoom: number) => textzoom - 2);
      fontsize = textzoom + 2;
    } else {
      fontsize = textzoom;
    }

    if (stickerOPtionsTextType === 5 || stickerOPtionsTextType === 4) {
      ctx.font = `bold italic ${fontsize}px sans-serif`;
    } else {
      if (stickerOPtionsTextfont === 0) {
        ctx.font = `bold italic ${fontsize}px ${fonttype} `;
      } else {

        ctx.font = `bold  ${fontsize}px ${fonttype}`;
      }
    }

    ///
    ///
    ctx.textBaseline = "top";
    var text = textvalue;
    var zz: number = 0;
    if (text == "") {
      text = "Clik Bate";
    }
    var textWidth = ctx.measureText(text).width;
    setTextwidthx(textWidth);

    if (longmobileimage === 1) {
      zz = 140;
    } else {
      zz = 20;
    }
    dragDistanceX = OriginalImageWidth - textWidth - 15;
    dragDistanceY = OriginalImageHeight - fontsize - zz;

    if (Drag) {
      if (crop.x > dragDistanceX) {
        setcrop({ ...crop, x: dragDistanceX });
      } else if (crop.x < 17) {
        setcrop({ ...crop, x: 17 });
      } else {
      }

      if (crop.y > dragDistanceY) {
        setcrop({ ...crop, y: dragDistanceY });
      } else if (crop.y < 17) {
        setcrop({ ...crop, y: 17 });
      } else {
      }
    }

    if (stickerOPtionsTextType === 4) {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "rgba(255,255,255,0.86)";
      ctx.shadowColor = "rgba(255,255,255,0.86)";
      ctx.fillRect(
        croptex.x * 0.1 - 11,
        croptex.y * 0.1 - 14,
        textWidth + 24,
        fontsize + 20
      );
      ///
      ///
      ///
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(000,000,005,0.5)";
    } else if (stickerOPtionsTextType === 5) {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "rgba(000,000,005,0.83)";
      ctx.shadowColor = "rgba(000,000,005,0.83)";
      ctx.fillRect(
        croptex.x * 0.1 - 11,
        croptex.y * 0.1 - 10,
        textWidth + 24,
        fontsize + 20
      );
      ///
      ///
      ///
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(255,255,255,0.5)";
    } else if (stickerOPtionsTextType === 3) {
      //
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'black';
      ctx.lineWidth = 13;
      ctx.strokeStyle = 'white';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = shinezoom;


      ctx.strokeText(text, croptex.x * 0.1, croptex.y * 0.1);
    }
    else if (stickerOPtionsTextType === 2) {
      //
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'white';
      ctx.lineWidth = 13;

      ctx.strokeStyle = 'black';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = shinezoom;



      ctx.strokeText(text, croptex.x * 0.1, croptex.y * 0.1);
    } else if (stickerOPtionsTextType === 0) {
      //
      ctx.globalAlpha = 1;
      ctx.fillStyle = colorx;
      ctx.lineWidth = 13;
      ctx.strokeStyle = colorstroke;
      ctx.shadowColor = colorstroke;
      ctx.shadowBlur = shinezoom;

      ctx.strokeText(text, croptex.x * 0.1, croptex.y * 0.1);
    } else {
      ctx.globalAlpha = 1;
      ctx.fillStyle = colorx;
      ctx.shadowColor = colorx;
      ctx.shadowBlur = shinezoom;
    }

    ctx.fillText(text, croptex.x * 0.1, croptex.y * 0.1);

    ///
  };


  useLayoutEffect(() => {
    const Newstickfilterx: any = new Image();

    Newstickfilterx.src = addedImagex;

    Newstickfilterx.onload = function () {
      if (superImageHolderx === Newstickfilterx) {
      } else {
        setsuperImageHolderx(Newstickfilterx);
      }

      setOriginalImageHeightx(Newstickfilterx.naturalHeight);
      setOriginalImageWidthx(Newstickfilterx.naturalWidth);
    };
  }, [addedImagex]);

  useLayoutEffect(() => {
    if (superImageHolderx && canvasRefsticker.current) {
      const ctxMini = canvasRefstickerimage.current.getContext("2d");
      var newh;
      var neww;
      var quality = 1000;
      if (OriginalImageWidthx > OriginalImageHeightx) {
        var ratio = quality / OriginalImageHeightx;
        neww = ratio * OriginalImageWidthx;
        canvasRefstickerimage.current.width = neww;
        canvasRefstickerimage.current.height = quality;
        var rot = 30;
        ///ctxMini.translate(neww / 2, quality / 2);

        //ctxMini.rotate((-rot * Math.PI) / 180);
        ctxMini.drawImage(superImageHolderx, 0, 0, neww, quality);
        setTimeout(function () {
          runBigdraw(0);
        }, 1100);
      } else {
        var ratiox = quality / OriginalImageWidthx;
        newh = ratiox * OriginalImageHeightx;
        canvasRefstickerimage.current.width = quality;
        canvasRefstickerimage.current.height = newh;
        var rot = 1;
        ///ctxMini.translate(quality / 2, newh / 2);

        //ctxMini.rotate((-rot * Math.PI) / 180);
        ctxMini.drawImage(superImageHolderx, 0, 0, quality, newh);
        setTimeout(function () {
          runBigdraw(0);
        }, 1100);
      }
    }
  }, [superImageHolderx, OriginalImageWidthx, OriginalImageHeightx]);

  ///////////////////////////////////////////////////////////////////////////////////////////

  useLayoutEffect(() => {
    const Newstickfilter: any = new Image();
    var inde;
    if (restoreswitcher > 1) {
      setrestoreswitcher(0);
    }

    if (superundoArray.length === 0) {
      if (duplicateItemupload[index]) {
        if (restoreswitcher === 1) {
          Newstickfilter.src = itemUploadRef.current[index].src;
        } else {
          Newstickfilter.src = duplicateItemupload[index];
        }
      } else {
        if (effectMode[index] === "normal" || effectMode[index] === "normalx") {
          Newstickfilter.src = itemUploadRef.current[index].src;
        } else {
          Newstickfilter.src = regimageholdfilter[index];
        }
      }
    } else {
      inde = superundoArray.length - 1 - undoswitcher;
      if (inde < 0) {
        setundoswitcher(0);
        inde = superundoArray.length - 1;
      }

      if (restoreswitcher === 1) {
        Newstickfilter.src = itemUploadRef.current[index].src;
      } else {
        Newstickfilter.src = superundoArray[inde];
      }
    }

    Newstickfilter.onload = function () {
      if (superImageHolder === Newstickfilter) {
      } else {
        setsuperImageHolder(Newstickfilter);
      }

      if (OriginalImageHeight === Newstickfilter.naturalHeight) {
      } else {
        setOriginalImageHeight(Newstickfilter.naturalHeight);
      }
      //
      if (OriginalImageWidth === Newstickfilter.naturalWidth) {
      } else {
        setOriginalImageWidth(Newstickfilter.naturalWidth);
      }

      var scalehh = window.innerHeight / Newstickfilter.naturalHeight;
      var widthxx = Newstickfilter.naturalWidth * scalehh;

      var scalehhr = window.innerWidth / Newstickfilter.naturalWidth;
      var heightxx = Newstickfilter.naturalHeight * scalehhr;

      setheightx(heightxx);
      setwidthx(widthxx);

      if (heightxx > window.innerHeight && matchTabletMobile) {
        setlongmobileimage(1);
      }
    };
  }, [
    startSuperSticker,
    superundoArray,
    undoswitcher,
    restoreswitcher,
    regimageholdfilter,
  ]);

  useLayoutEffect(() => {
    runBigdraw(0);
  }, [
    superImageHolder,
    OriginalImageWidth,
    OriginalImageHeight,
    crop,
    croptex,
    heightx,
    widthx,
    stickerOPtionsDefault,
    stickerOPtionsTextType,
    textzoom,
    stickerOPtionsTextfont,
    showSliderText,
    shinezoom,
    colorx,
    colorstroke,
    textvalue,
    stickersizezoom,
  ]);


  const [canvasInteractWidth, setcanvasInteractWidth] = useState(0);


  const [Touched, setTouched] = useState(0);

  const [TouchedOpacity, setTouchedOpacity] = useState(false);


  const [StopCollectInteractData1, setStopCollectInteractData1] = useState<boolean>(false);


  const [StopTouch, setStopTouch] = useState(false);



  const handleTouchStartIn = useCallback((e: any, type: any) => {
    ////mouseover(0);

    if (StopTouch) { }
    else {

      // console.log(e.clientX);
      if (interactContent[index] || interactContent2[index]) {


        var context = canvasRefIn.current.getContext("2d");
        const pictureWidth = canvasInteractWidth;
        const screenWidth = window.innerWidth * 0.94;
        const offsetX = (screenWidth - pictureWidth) / 2;

        if (context.isPointInPath(e.clientX - offsetX, e.clientY)) {

          if (Touched === 1 || Touched === 2) { } else { calldraw(3, e.clientX, e.clientY, 0); }
        } else {

          if (interactContent[index]) {

          } else {
            const newCropInitialIn = {
              x: type === 0 ? e.clientX : e.touches[0].clientX,
              y: type === 0 ? e.clientY : e.touches[0].clientY,
            };

            // Update the array at the specified index or add a new element if the index is not present
            setcropInitialIn((prevArray: any) => {
              const newArray: any = [...prevArray];
              newArray[index] = newCropInitialIn;
              return newArray;
            });

            if (e.target) {
              triggerFileInput(1);






              // Other logic here...
            }
          }

          if (interactContent2[index]) {
            if (Touched === 1 || Touched === 2) { } else { calldraw(3, e.clientX, e.clientY, 0); }
          } else {


            const newCropInitialIn2 = {
              x: type === 0 ? e.clientX : e.touches[0].clientX,
              y: type === 0 ? e.clientY : e.touches[0].clientY,
            };

            // Update the array at the specified index or add a new element if the index is not present
            setcropInitialIn2((prevArray: any) => {
              const newArray: any = [...prevArray];
              newArray[index] = newCropInitialIn2;
              return newArray;
            });
            if (e.target) {
              triggerFileInput(2);
              // Other logic here...
            }
          }

        }



      } else {
        const newCropInitialIn = {
          x: type === 0 ? e.clientX : e.touches[0].clientX,
          y: type === 0 ? e.clientY : e.touches[0].clientY,
        };

        // Update the array at the specified index or add a new element if the index is not present
        setcropInitialIn((prevArray: any) => {
          const newArray: any = [...prevArray];
          newArray[index] = newCropInitialIn;
          return newArray;
        });

        if (e.target) {
          triggerFileInput(1);
          // Other logic here...
        }

      }

      ///BREAK
      ///
    }



  }, [interactContent[index], interactContent2[index], Touched, canvasRefIn, canvasInteractWidth, StopTouch])


  const fileInputRef2 = useRef<HTMLInputElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [interactionData, setinteractionData] = useState(null);

  const [widthInteraction, setwidthInteraction] = useState(0);



  const [dat, setdat] = useState(null)
  const [HaltInteraction1, setHaltInteraction1] = useState(false)

  const tiim = useRef<ReturnType<typeof setTimeout> | null>(null);
  const TouchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const TouchTimer22 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [intervalStart, setintervalStart] = useState(false);

  const [showArc, setShowArc] = useState(true);





  const callInteract = useCallback((interMode: any) => {
    var context = canvasRefIn.current.getContext("2d");
    context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
    const previewFileReadimage: any = new Image();



    if (interMode === 0) {
      var canData = canvasRefsticker.current.toDataURL();
      previewFileReadimage.src = canData;

    } else if (interMode === 1) {

      previewFileReadimage.src = interactContent[index];

    } else {
      previewFileReadimage.src = interactContent2[index];
    }

    previewFileReadimage.onload = function () {
      if (dat === previewFileReadimage) {
      } else {
        setdat(previewFileReadimage)
      }
      var ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;
      var width = window.innerHeight / ratio;
      setcanvasInteractWidth(width);

      ///use this
    };
  }, [interactContent[index], canvasRefIn, interactContent2[index]]);



  ///
  ///
  ///
  useEffect(() => {
    setTouchedOpacity(true);


    if (TouchTimer22.current) {
      clearTimeout(TouchTimer22.current);
    }
    TouchTimer22.current = setTimeout(() => {
      setTouchedOpacity(false);

    }, 500)
  }, [Touched]);




  const callDelInteract = useCallback(() => {

    if (Touched === 1) {

      interactContentxx[index] = '';
      setinteractContent(interactContentxx);
      interactContentxxBlob[index] = '';
      setinteractContentBlob(interactContentxxBlob);

      const newCropInitialIn = { x: 0, y: 0 };

      // Update the array at the specified index or add a new element if the index is not present
      setcropInitialIn((prevArray: any) => {
        const newArray: any = [...prevArray];
        newArray[index] = newCropInitialIn;
        return newArray;
      });
      setTouched(0);


    } else {

      interactContentxx2[index] = '';
      setinteractContent2(interactContentxx2);
      interactContentxx2Blob[index] = '';
      setinteractContent2Blob(interactContentxx2Blob);

      const newCropInitialIn2 = { x: 0, y: 0 };

      // Update the array at the specified index or add a new element if the index is not present
      setcropInitialIn2((prevArray: any) => {
        const newArray: any = [...prevArray];
        newArray[index] = newCropInitialIn2;
        return newArray;
      });
      setTouched(0);
    }

  }, [Touched, interactContent2, interactContent, cropInitialIn2, cropInitialIn])


  const calldraw = useCallback((typex: number, x: number, y: number, mode: number) => {

    if (canvasRefIn.current) {
      var context = canvasRefIn.current.getContext("2d");



      canvasRefIn.current.height = window.innerHeight;
      canvasRefIn.current.width = canvasInteractWidth;


      requestAnimationFrame(() => {
        context.drawImage(dat, 0, 0, canvasInteractWidth, window.innerHeight);
        // Get the screen width
        const screenWidth = window.innerWidth * 0.94;

        // Get the picture width (adjust this according to your specific scenario)
        const pictureWidth = canvasInteractWidth;

        // Calculate the offsetX based on the combination of screen width and picture width
        const offsetX = (screenWidth - pictureWidth) / 2;

        // Use cropInitialIn.y directly for offsetY as it works perfectly

        // Adjust the coordinates of ctx.arc() based on the offset
        const xx = cropInitialIn[index].x - offsetX;

        const xx2 = cropInitialIn2[index].x - offsetX;

        var yy = cropInitialIn[index].y;
        var yy2 = cropInitialIn2[index].y;
        var r = 35;



        if (interactContent[index] && mode === 0 || interactContent2[index] && mode === 0) {


          if (interactContent[index]) {
            /////typex filps between zero and one for blinking efect
            if (typex === 0 || typex === 3) {
              context.beginPath();
              context.arc(xx, yy, r, 0, Math.PI * 2);
              var clikarc1 = context.isPointInPath(x - offsetX, y);
              context.fillStyle = `rgba(250, 250,250,0.3)`;
              context.closePath();
              context.fill();
              context.lineWidth = 2;
              context.strokeStyle = "#333333";
              context.stroke();
            }
            else if (typex === 1) {
              context.beginPath();
              context.arc(xx, yy, r, 0, Math.PI * 2);
              var clikarc1 = context.isPointInPath(x - offsetX, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              context.closePath();
              context.fill();


            } else {


            }
          }

          if (interactContent2[index]) {


            /////typex filps between zero and one for blinking efect
            if (typex === 0 || typex === 3) {
              context.beginPath();
              context.arc(xx2, yy2, r, 0, Math.PI * 2);
              var clikarc2 = context.isPointInPath(x - offsetX, y);
              context.fillStyle = `rgba(250, 250,250,0.3)`;
              context.closePath();
              context.fill();
              context.lineWidth = 2;
              context.strokeStyle = "#333333";
              context.stroke();
            }
            else if (typex === 1) {
              context.beginPath();
              context.arc(xx2, yy2, r, 0, Math.PI * 2);
              var clikarc2 = context.isPointInPath(x - offsetX, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              context.closePath();
              context.fill();


            } else {


            }
          }


          if (typex === 3) { } else {

            if (tiim.current) {
              clearTimeout(tiim.current);
            }
            tiim.current = setTimeout(() => {

              if (Touched === 1 || Touched === 2) { } else {

                if (typex === 0 || typex === 3) {
                  calldraw(1, 0, 0, 0);
                } else { calldraw(0, 0, 0, 0); }
              }
            }, 1000)

          }






          if (typex === 3) {
            if (clikarc1) {
              ///  calldraw(0, 0, 0, 1);

              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              callInteract(1);
              setTouched(1);


              if (TouchTimer.current) {
                clearTimeout(TouchTimer.current);
              }


              TouchTimer.current = setTimeout(() => {

                setTouched(0);
                callInteract(0);

                if (TouchTimer.current) {
                  clearTimeout(TouchTimer.current);
                }


              }, 5000);

              /// context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
              ///callInteract(00, 0, 0, 1)
              // Stop the spinning animation
            } else if (clikarc2) {
              ///  calldraw(0, 0, 0, 1);

              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              callInteract(2);
              setTouched(2);


              if (TouchTimer.current) {
                clearTimeout(TouchTimer.current);
              }


              TouchTimer.current = setTimeout(() => {

                setTouched(0);
                callInteract(0);

                if (TouchTimer.current) {
                  clearTimeout(TouchTimer.current);
                }


              }, 5000);

              /// context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
              ///callInteract(00, 0, 0, 1)
              // Stop the spinning animation
            } else {

            }
            ///////////////
          }
        }



      });
      ///use this
    }

  }, [dat, cropInitialIn, cropInitialIn2, interactContent2, interactContent, canvasRefIn, showArc, canvasInteractWidth, Touched]);




  useLayoutEffect(() => {
    if (stickerOPtionsDefault === 4) callInteract(0);
  }, [stickerOPtionsDefault, cropInitialIn, cropInitialIn2]);


  useLayoutEffect(() => {
    if (dat) {

      if (Touched === 1 || Touched === 2) {
        calldraw(0, 0, 0, 1);
      } else { calldraw(0, 0, 0, 0); }

    }
  }, [dat, Touched, canvasInteractWidth]);






  const runBigdraw = (save: number) => {
    if (superImageHolder && canvasRefsticker.current) {
      const ctx = canvasRefsticker.current.getContext("2d");
      const ctxMini = canvasRefstickerimage.current.getContext("2d");

      canvasRefsticker.current.width = OriginalImageWidth;
      canvasRefsticker.current.height = OriginalImageHeight;

      ctx.drawImage(superImageHolder, 0, 0);


      if (stickerOPtionsDefault === 1) {
        if (matchTabletMobile) {
          drawText(ctx, canvasRefsticker, window.innerWidth, heightx);
        } else {
          drawText(ctx, canvasRefsticker, widthx, window.innerHeight);
        }
      }

      if (stickerOPtionsDefault === 2) {
        if (addedImagex) {
          var dragDistanceY;
          var dragDistanceX;

          var addto;
          if (matchTabletMobile && OriginalImageHeight === OriginalImageWidth) {
            addto = 120;
          } else {
            addto = 0;
          }

          dragDistanceY = OriginalImageHeight - 100;
          dragDistanceX = OriginalImageWidth - 100;

          if (Drag) {
            if (crop.x > dragDistanceX) {
              setcrop({ ...crop, x: dragDistanceX });
            } else if (crop.x < -50) {
              setcrop({ ...crop, x: -50 });
            } else {
            }

            if (crop.y > dragDistanceY) {
              setcrop({ ...crop, y: dragDistanceY });
            } else if (crop.y < -50) {
              setcrop({ ...crop, y: -50 });
            } else {
            }
          }

          var scalehhc = window.innerHeight / OriginalImageHeight;
          var widthxxc = OriginalImageWidth * scalehhc;

          var scalehhrc = widthx / OriginalImageWidth;
          var heightxxc = OriginalImageHeight * scalehhrc;

          var rr = canvasRefstickerimage.current.width / widthx;
          var tt = rr * window.innerHeight;

          var rr = canvasRefstickerimage.current.width / widthx;
          var tt = rr * window.innerHeight;

          var rrw = canvasRefstickerimage.current.height / window.innerHeight;
          var qq = rrw * widthx;

          if (matchTabletMobile) {
            ctx.drawImage(
              canvasRefstickerimage.current,
              0,
              0,
              window.innerWidth,
              heightx,
              crop.x,
              crop.y,
              window.innerWidth,
              heightx
            );
          } else {
            if (OriginalImageWidth > OriginalImageHeight) {
              ctx.drawImage(
                canvasRefstickerimage.current,
                0,
                0,
                (qq * 3) / stickersizezoom,
                (canvasRefstickerimage.current.height * 3) / stickersizezoom,
                crop.x,
                crop.y,
                widthx * 2,
                window.innerHeight * 2
              );
            } else {
              ctx.drawImage(
                canvasRefstickerimage.current,
                0,
                0,
                (canvasRefstickerimage.current.width * 2) / stickersizezoom,
                (tt * 2) / stickersizezoom,
                crop.x,
                crop.y,
                widthx * 2,
                window.innerHeight * 2
              );
            }
          }
        }
      }

      if (matchTabletMobile && longmobileimage === 0) {
        setcanvaswidth(OriginalImageWidth * 0.97);
        canvasRefsticker.current.style.width = `${window.innerWidth}px`;
        canvasRefsticker.current.style.height = `${heightx}px`;
      } else {
        setcanvaswidth(OriginalImageWidth * 0.97);
        canvasRefsticker.current.style.width = `${widthx}px`;
        canvasRefsticker.current.style.height = `${window.innerHeight}px`;
      }





      if (save === 1) {
        var ccc = superundoArray.length;

        superundoArrayxx[ccc] = canvasRefsticker.current.toDataURL();
        setsuperundoArray(superundoArrayxx);
      } else if (save === 2 && restoreswitcher === 0) {
        duplicateItemuploadxx[index] = canvasRefsticker.current.toDataURL();
        setduplicateItemupload(duplicateItemuploadxx);

        if (effectMode[index] === "normal") {
        } else {
          setFilterUnderStickerStopFiltering(true);


        }
      } else if (save === 2 && restoreswitcher === 1) {
        superzeroeffectoncexx[index] = false;
        setsuperzeroeffectonce(superzeroeffectoncexx);

        superzeroeffectxx[index] = false;
        setsuperzeroeffect(superzeroeffectxx);

        setFilterUnderStickerStopFiltering(false);


      } else {
      }
    }
  };

  const confirmUndo = () => {
    var l = superundoArray.length - undoswitcher;
    const superundoArrayxx = [...superundoArray];
    const superundoArrayxxz = [];
    setsuperundoArray([]);
    for (let i = 0; i < l; i++) {
      superundoArrayxxz[i] = superundoArrayxx[i];
      if (l - 1 === i) {
        setsuperundoArray(superundoArrayxxz);
        setundoswitcher(0);
      }
    }
  };

  const GetSecureURL = (datax: any) => {
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/get_signed_url_Sticker`)
      .then((response) => {
        setsuperLoadFadex(false);
        var url = response.data.url;
        setsuperLoadFadex(true);
        PutImageInS3WithURL(datax, url);
      })
      .catch(function (error) {
        setsuperLoadFadex(false);
        alert("caption erroerrr");
      });
  };

  const PutImageInS3WithURL = useCallback(
    (a: any, url: any) => {
      Axios.put(url, a)
        .then((response) => {
          setsuperLoadFadex(false);
          console.log(response);
          if (response.status === 200) {
            setsuperLoadFadex(true);

            let imagelink = url.split("?")[0];

            var datak = {
              imagedata: imagelink,
              id: idReducer,
            };

            UpdateStickerDatabaseStatus200(datak);
          }
        })
        .catch(function (error) {
          setsuperLoadFadex(false);
          alert("caption erroerrr");
        });
    },
    [idReducer]
  );

  const UpdateStickerDatabaseStatus200 = (datak: any) => {
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/sticker_upload_data`, {
      values: datak,
    })
      .then((response) => {
        setsuperLoadFadex(false);

        if (response.data.message === "sticker image data updated") {
          setPostData([]);
          callfeedsx();
        }
      })
      .catch(function (error) {
        setsuperLoadFadex(false);
        alert(" error");
      });
  };

  const addedimagex = useCallback(
    async (e: any) => {
      if (e.target.files && e.target.files.length > 0) {
        const FileArray = Array.from(e.target.files).map((file: any) =>
          URL.createObjectURL(file)
        );

        const Newstickfilterx: any = new Image();
        Newstickfilterx.origin = "anonymous";

        Newstickfilterx.src = FileArray[0];

        Newstickfilterx.onload = function () {
          aaRef.current.width = Newstickfilterx.naturalWidth;
          aaRef.current.height = Newstickfilterx.naturalHeight;

          const ctx = aaRef.current.getContext("2d");

          var ff = ctx.drawImage(Newstickfilterx, 0, 0);

          var data = aaRef.current.toDataURL("image/png", 1.0);

          setaddedImagex(data);
          setstickerOPtionsDefault(2);
          setcropsticker({
            ...cropsticker,
            x: crop.x * 100,
            y: crop.y * 100,
          });
          clearFilterDrag();
        };
      }
    },
    [aaRef]
  );

  function blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  const collectSticker = async (x: any) => {
    const Newstickfilterx: any = new Image();

    const res = await fetch(x);
    const datax = await res.blob();

    var bx = await blobToBase64(datax);

    Newstickfilterx.src = bx;
    Newstickfilterx.origin = "anonymous";

    Newstickfilterx.onload = function () {
      aaRef.current.width = Newstickfilterx.naturalWidth;
      aaRef.current.height = Newstickfilterx.naturalHeight;

      const ctx = aaRef.current.getContext("2d");

      var ff = ctx.drawImage(Newstickfilterx, 0, 0);

      var data = aaRef.current.toDataURL("image/png", 1.0);

      setaddedImagex(data);
      setstickerOPtionsDefault(2);
      setcropsticker({
        ...cropsticker,
        x: crop.x * 100,
        y: crop.y * 100,
      });
      clearFilterDrag();
    };
  };

  const addedimage = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const FileArray = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      const res = await fetch(FileArray[0]);
      const datax = await res.blob();

      setsuperLoadFadex(true);
      GetSecureURL(datax);
    }
  };

  const closeme = () => { };

  const changetextstyle = () => {
    if (stickerOPtionsTextType === 0) {
      if (usecolorstroke) { setusecolorstroke(false); } else { }
      setstickerOPtionsTextType(1);
    } else if (stickerOPtionsTextType === 1) {

      setstickerOPtionsTextType(2);
    } else if (stickerOPtionsTextType === 2) {
      setstickerOPtionsTextType(3);
    }
    else if (stickerOPtionsTextType === 3) {
      setstickerOPtionsTextType(4);
    }
    else if (stickerOPtionsTextType === 4) {
      setstickerOPtionsTextType(5);
    } else {
      setstickerOPtionsTextType(0);
    }
  };

  const changetextfont = () => {
    if (stickerOPtionsTextfont === 0) {
      setstickerOPtionsTextfont(1);
    } else if (stickerOPtionsTextfont === 1) {
      setstickerOPtionsTextfont(2);
    } else if (stickerOPtionsTextfont === 2) {
      setstickerOPtionsTextfont(3);
    } else {
      setstickerOPtionsTextfont(0);
    }
    settextzoom((textzoom: number) => textzoom);
  };


  const changestickersize = () => {
    setshowstickerOptions(false);
    setshowSliderstickersize(true);
  };

  const opencolorpicker = () => {
    setshowTextOptions(false);
    setshowColorPicker(true);

    if (stickerOPtionsTextType === 2) {
      //
      setusecolorstroke(true);
    } else {
      setusecolorstroke(false);
    }
  };

  ///
  ///
  ///
  ///
  const updateText = useCallback(
    (e: any) => {
      settextvalue(e.target.value);
    },

    [textvalue]
  );

  const superzeroeffectxx = [...superzeroeffect];
  const superzeroeffectoncexx = [...superzeroeffectonce];

  const savesticker = () => {
    const duplicateItemuploadxx = [...duplicateItemupload];
    duplicateItemuploadxx[index] = null;
    setduplicateItemupload(duplicateItemuploadxx);
    setactiveSticker(index);

    if (restoreswitcher !== 1) {
      if (effectMode[index] === "normal") {
        superzeroeffectoncexx[index] = true;
        setsuperzeroeffectonce(superzeroeffectoncexx);
      } else {
        if (superzeroeffectonce[index]) {
        } else {
          if (superzeroeffect[index]) {
          } else {
            superzeroeffectxx[index] = true;
            setsuperzeroeffect(superzeroeffectxx);
          }
          superzeroeffectoncexx[index] = true;
          setsuperzeroeffectonce(superzeroeffectoncexx);
        }
      }
    }

    runBigdraw(2);
    setstartSuperSticker(false);
    setstartSuperStickerblur(false);


  };

  const [postData, setPostData] = useState<Array<any>>([]);

  const callfeedsx = () => {
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/feeds_stickers`, {
      withCredentials: true,
    })
      .then((response) => {
        if (response.data.message === "feeds fetched") {
          var postdataRep = response.data.payload;
          setPostData(postdataRep);
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction profile outter 2");
        alert("jhggh");
      });
  };

  function convertToDataUrl(content: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      // Convert the binary data to Data URL format
      reader.readAsDataURL(content);
    });
  }


  const handleFileChange2 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      try {


        const dataUrl: any = await readFileAsDataUrl(file);

        const res = await fetch(dataUrl);
        const dataxs = await res.blob();


        interactContentxx2Blob[index] = dataxs;
        interactContentxx2[index] = dataUrl;


        setinteractContent2(interactContentxx2);
        setinteractContent2Blob(interactContentxx2Blob);


      } catch (error) {
        console.error('Error reading the file:', error);
      }
    }
  };


  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      try {


        const dataUrl: any = await readFileAsDataUrl(file);

        const res = await fetch(dataUrl);
        const dataxs = await res.blob();


        interactContentxxBlob[index] = dataxs;
        interactContentxx[index] = dataUrl


        setinteractContent(interactContentxx);
        setinteractContentBlob(interactContentxxBlob);


      } catch (error) {
        console.error('Error reading the file:', error);
      }
    }
  };

  const triggerFileInput = (type: any) => {

    setStopTouch(true)

    if (timm.current) {
      clearTimeout(timm.current);
    }
    timm.current = setTimeout(function () {
      setStopTouch(false)

    }, 3000);



    if (type == 1) {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    } else {
      if (fileInputRef2.current) {
        fileInputRef2.current.click();
      }
    }

  };

  function readFileAsDataUrl(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      // Read the file and get the Data URL directly
      reader.readAsDataURL(file);
    });
  }

  return (
    <>
      <Grid container>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <input
          type="file"
          ref={fileInputRef2}
          style={{ display: 'none' }}
          onChange={handleFileChange2}
        />



        {superLoadFadex ? (
          <>
            <Grid
              container
              style={{
                backgroundColor: darkmodeReducer
                  ? "rgba(50,50,50,0.65)"
                  : "rgba(250,250,250,0.65)",
                position: "fixed",
                top: "0px",
                width: "100%",
                height: "100%",
                zIndex: 10000,
              }}
            ></Grid>{" "}
          </>
        ) : null}

        {startmerge ? (
          <>
            {" "}
            <Grid
              item
              onClick={() => {
                setstartmerge(false);
              }}
              xs={12}
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                bottom: "0vh",
                zIndex: 95,
                cursor: "pointer",
              }}
            ></Grid>
            <Grid
              item
              className={
                darkmodeReducer
                  ? "mobileTextfield-backplateColorDark"
                  : "mobileTextfield-backplateColorLight"
              }
              xs={12}
              style={{
                width: "100%",
                height: "46%",
                position: "fixed",
                bottom: "0vh",
                zIndex: 100,
                overflow: "auto",
              }}
            >
              {startmerge ? (
                <>
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "0px",
                      height: "90px",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                      marginTop: "15px",
                      marginRight: "10vw",
                    }}
                  >
                    <label htmlFor="filewwyxx" style={{ padding: "0px" }}>
                      <UploadIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkxx dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightxx  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                          margin: "auto",
                          color: "#ffffff",
                          fontSize: matchTabletMobile
                            ? `${mobilefont}vh`
                            : `${pcfont}vw`,
                          textAlign: "center",
                        }}
                      />
                      <input
                        onChange={addedimagex}
                        type="file"
                        name="superImages"
                        accept="image/*"
                        id="filewwyxx"
                        style={{ visibility: "hidden" }}
                      />
                    </label>
                  </Grid>

                  <Masonry
                    columns={6}
                    spacing={0}
                    style={{
                      padding: "0px",
                      marginTop: "10px",
                    }}
                  >
                    <label
                      htmlFor="filewwy"
                      style={{
                        textAlign: "center",
                        marginTop: "10vh",
                        paddingBottom: "10px",
                      }}
                    >
                      <AddIcon
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkxx dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightxx  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                          margin: "auto",
                          color: "#ffffff",
                          fontSize: matchTabletMobile
                            ? `${mobilefont}vh`
                            : `${pcfont}vw`,
                        }}
                      />
                      <input
                        onChange={addedimage}
                        type="file"
                        name="superImages"
                        accept="image/*"
                        id="filewwy"
                        style={{ visibility: "hidden" }}
                      />
                    </label>

                    {postData.map((post: any, i: any) => (
                      <div
                        key={i}
                        style={{
                          position: "relative",
                          paddingBottom: "10px",
                          padding: "0px",
                        }}
                      >
                        <img
                          onClick={() => {
                            collectSticker(postData[i].stickname);
                          }}
                          src={postData[i].stickname}
                          alt="a superstarz post "
                          style={{
                            width: "60%",
                            height: "auto",
                            padding: "0px",
                            objectFit: "contain",
                          }}
                          crossOrigin="anonymous"
                        />
                      </div>
                    ))}
                  </Masonry>
                </>
              ) : null}
            </Grid>{" "}
          </>
        ) : null}

        <Grid
          item
          xs={12}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0vh",
            zIndex: 1,
          }}
        ></Grid>

        {showalloptions && stickerOPtionsDefault === 1 ?
          stickerOPtionsTextType === 0 || stickerOPtionsTextType === 1 ||
            stickerOPtionsTextType === 2 || stickerOPtionsTextType === 3 ?
            <>
              {" "}
              <Grid
                item
                xs={12}
                style={{
                  width: "100%",
                  padding: "0px",
                  position: "fixed",
                  top: "2vh",
                  zIndex: 16,
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  style={{
                    padding: "0px",
                    height: "0px",
                    margin: "auto",
                    display: "grid",
                    alignItems: "center",
                  }}
                ></Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  style={{
                    paddingLeft: "2vw",
                    padding: matchTabletMobile ? "50px" : "20px",
                    height: "0px",
                    margin: "auto",
                    opacity: 0.8,
                    display: "grid",
                    alignItems: "center",
                  }}
                >
                  <Slider
                    value={shinezoom}
                    onChange={updateshinezoom}
                    defaultValue={0}
                    max={70}
                    min={0}
                    step={0.000001}
                  />
                </Grid>
              </Grid>
            </> : null
          : null}

        {showSliderText ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                padding: "0px",
                position: "fixed",
                top: "4vh",
                zIndex: 26,
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  padding: "0px",
                  height: "0px",
                  margin: "auto",
                  display: "grid",
                  alignItems: "center",
                }}
              ></Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  paddingLeft: "2vw",
                  padding: matchTabletMobile ? "50px" : "20px",
                  height: "0px",
                  margin: "auto",

                  opacity: 0.8,
                  display: "grid",
                  alignItems: "center",
                }}
              >
                <Slider
                  value={50}
                  defaultValue={80}
                  max={200}
                  min={50}
                  step={0.000001}
                />
              </Grid>
            </Grid>
          </>
        ) : null}

        {showalloptions && stickerOPtionsDefault === 2 ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                padding: "0px",
                position: "fixed",
                top: "4vh",
                zIndex: 16,
              }}
            >
              <Grid
                item
                xs={12}
                md={5}
                style={{
                  padding: "0px",
                  height: "0px",
                  margin: "auto",
                  display: "grid",
                  alignItems: "center",
                }}
              ></Grid>
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  paddingLeft: "2vw",
                  padding: matchTabletMobile ? "50px" : "20px",
                  height: "0px",
                  margin: "auto",

                  opacity: 0.8,
                  display: "grid",
                  alignItems: "center",
                }}
              >
                <Slider
                  value={stickersizezoom}
                  onChange={updatestickerzoom}
                  defaultValue={1}
                  max={16}
                  min={0.2}
                  step={0.000001}
                />
              </Grid>
            </Grid>
          </>
        ) : null}

        {showSliderstickerRotate ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                padding: "0px",
                position: "fixed",
                top: "4vh",
                zIndex: 26,
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  padding: "0px",
                  height: "0px",
                  margin: "auto",
                  display: "grid",
                  alignItems: "center",
                }}
              ></Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  paddingLeft: "2vw",
                  padding: matchTabletMobile ? "50px" : "20px",
                  height: "0px",
                  margin: "auto",

                  opacity: 0.8,
                  display: "grid",
                  alignItems: "center",
                }}
              >
                <Slider
                  value={stickerrotatezoom}
                  onChange={updatestickerRotatezoom}
                  defaultValue={1}
                  max={70}
                  min={1}
                  step={0.000001}
                />
              </Grid>
            </Grid>
          </>
        ) : null}

        {showalloptions && stickerOPtionsDefault === 1 && stickerOPtionsTextType === 0 || stickerOPtionsTextType === 1 ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                height: "0px",
                padding: "0px",
                position: "fixed",
                bottom: "42vh",
                zIndex: 26,
                left: `${iconpositionX - 7}px`,
              }}
            >
              <HexColorPicker
                className=""
                color={usecolorstroke ? colorstroke : colorx}
                onChange={usecolorstroke ? setColorstroke : setColorx}
                style={{ opacity: 1, width: '6%' }}
              />
            </Grid>
          </>
        ) : null}

        <Grid
          className="zuperxyinfo"
          item
          xs={12}
          style={{
            position: "absolute",
            top: `${iconpositionBottom}px`,
            zIndex: 20,
            padding: "0px",
            opacity: 0.98,
            width: "100%",
            height: "0px",
          }}
        >
          {
            ///////////////////////////////////////////////////////////UPDATE TEXT
          }

          <>
            {stickerOPtionsDefault === 1 &&
              showalloptions &&
              showTextOptions ? (
              <>
                {" "}
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "center",
                    height: "0px",
                    width: "100%",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      runBigdraw(1);
                      setstickerOPtionsDefault(0);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                      marginRight: "5vw",
                    }}
                  />
                  <EditIcon
                    onClick={() => {
                      setshowTextOptions(false);
                      setshowTextField(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                      marginLeft: "5vw",
                    }}
                  />
                </Grid>
              </>
            ) : null}
          </>

          {
            ///////////////////////////////////////////////////////////UPDATE TEXT
          }
        </Grid>

        <Grid
          className="zuperxyinfo"
          item
          xs={12}
          style={{
            position: "absolute",
            zIndex: 20,
            bottom: "46vh",
            padding: "0px",
            opacity: 0.98,
            width: "100%",
            height: "0px",
          }}
        >
          {
            ///////////////////////////////////////////////////////////CHECK MODE FOR COLOR PICKER
          }

          <>
            <Grid
              item
              xs={4}
              style={{
                padding: "0px",
                height: "0px",
              }}
            ></Grid>

            {showColorPicker ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      setshowColorPicker(false);
                      setshowTextOptions(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
          </>

          {
            ///////////////////////////////////////////////////////////CHECK MODE FOR COLOR PICKER
          }
        </Grid>

        <Grid
          className="zuperxyinfo"
          item
          xs={12}
          style={{
            position: "absolute",
            zIndex: 20,
            top: `${iconpositionBottom}px`,
            padding: "0px",
            opacity: 0.98,
            width: "100%",
            height: "0px",
          }}
        >
          {
            ///////////////////////////////////////////////////////////CHECK MODE
          }
          <>
            <Grid
              item
              xs={4}
              style={{
                padding: "0px",
                height: "0px",
              }}
            ></Grid>
            {showSliderShine ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      setshowSliderShine(false);
                      setshowTextOptions(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {showSliderText ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      setshowSliderText(false);
                      setshowTextOptions(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {
              //////////////////////////STICKER CHECK
            }
            {stickerOPtionsDefault === 2 && showstickerOptions ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      runBigdraw(1);
                      setstickerOPtionsDefault(0);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {
              //////////////////////////STICKER CHECK}
            }
            {
              //////////////////////////STICKER SIZE CHECK
            }
            {showSliderstickersize ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      setshowSliderstickersize(false);
                      setshowstickerOptions(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {
              //////////////////////////STICKER SIZE CHECK}
            }

            {
              //////////////////////////STICKER ROTATE CHECK
            }
            {showSliderstickerRotate ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      setshowSliderstickerRotate(false);
                      setshowstickerOptions(true);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {
              //////////////////////////STICKER ROTATE CHECK}
            }

            {
              //////////////////////////UNDO CHECK
            }
            {stickerOPtionsDefault === 3 ? (
              <>
                {" "}
                <Grid
                  item
                  xs={4}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "0px",
                  }}
                >
                  <CheckIcon
                    onClick={() => {
                      confirmUndo();
                      setstickerOPtionsDefault(0);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              </>
            ) : null}
            {
              //////////////////////////UNDO CHECK}
            }
          </>

          {
            ///////////////////////////////////////////////////////////CHECK MODE
          }

          {
            ////////////////////////// ACCEPT SUPERMERGE AND CANCEL SUPERSTICKER
          }
          {stickerOPtionsDefault === 0 ? (
            <>
              {" "}
              <Grid
                item
                xs={2}
                style={{
                  margin: "auto",
                  textAlign: "left",
                  right: '5px',
                  height: "0px",
                }}
              >
                {superundoArray.length === 0 && restoreswitcher === 0 ? (
                  null
                ) : (
                  <CheckIcon
                    onClick={savesticker}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                )}
              </Grid>

              <Grid
                item
                xs={2}
                style={{
                  margin: "auto",
                  textAlign: superundoArray.length === 0 && restoreswitcher === 0 ? 'center' : "right",
                  left: superundoArray.length === 0 && restoreswitcher === 0 ? '0px' : '5px',
                  height: "20px",
                }}
              >
                <CloseIcon
                  onClick={() => {

                    setstartSuperSticker(false);
                    setstartSuperStickerblur(false);

                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
            </>
          ) : null}
          {
            ////////////////////////// ACCEPT SUPERMERGE AND CANCEL SUPERSTICKER}
          }


          {stickerOPtionsDefault === 4 ?
            interactContent[index] || interactContent2[index] ? <>

              <Grid
                item
                xs={2}
                style={{
                  margin: "auto",
                  textAlign: 'center',
                  left: '0px',
                  height: "20px",
                }}
              >
                {Touched === 1 || Touched === 2 ? <DeleteIcon
                  onClick={() => {

                    callDelInteract();

                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                /> : <CheckIcon
                  onClick={() => {

                    if (tiim.current) {
                      clearTimeout(tiim.current);
                    }
                    if (TouchTimer.current) {
                      clearTimeout(TouchTimer.current);
                    }

                    calldraw(0, 0, 0, 1);

                    setstickerOPtionsDefault(0);


                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />}


              </Grid>
            </> : null : null}

        </Grid>

        <Grid
          className="zuperxyinfo"
          item
          xs={12}
          style={{
            position: "absolute",
            zIndex: 20,
            top: `${iconpositionY}px`,
            left: `${iconpositionX}px`,
            padding: "0px",
            opacity: 0.9,
          }}
        >
          {
            ///////////////////////////////////////////////////////////DEFAULT MODE
          }
          {stickerOPtionsDefault === 0 ? (
            <>
              {" "}
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  paddingBottom: "40px",
                  visibility: restoreswitcher === 1 ? 'hidden' : 'visible'
                }}
              >
                <TitleIcon
                  onClick={() => {
                    setstickerOPtionsDefault(1);
                    clearFilterDrag();
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  paddingBottom: "40px",
                  visibility: restoreswitcher === 1 ? 'hidden' : 'visible'
                }}
              >
                <InsertPhotoIcon
                  onClick={() => {
                    setstartmerge(true);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>

              {superundoArray.length > 1 ? (
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: "20px",
                    paddingBottom: "40px",
                    visibility: restoreswitcher === 1 ? 'hidden' : 'visible'
                  }}
                >
                  <RestoreIcon
                    onClick={() => {
                      setundoswitcher((undoswitcher: number) => undoswitcher + 1);
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              ) : null}






              {duplicateItemupload[index] || superundoArray.length > 0 ? (
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: "20px",
                  }}
                >
                  <SettingsBackupRestoreIcon
                    onClick={() => {
                      setrestoreswitcher(
                        (restoreswitcher: number) => restoreswitcher + 1
                      );
                    }}
                    className={
                      darkmodeReducer
                        ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                      margin: "auto",
                      color: "#ffffff",
                      fontSize: matchTabletMobile
                        ? `${mobilefont}vh`
                        : `${pcfont}vw`,
                    }}
                  />
                </Grid>
              ) : null}
            </>
          ) : null}

          {stickerOPtionsDefault === 0 ? <>   <Grid
            item
            xs={12}
            style={{
              padding: "20px",
              paddingBottom: "20px",
              visibility: restoreswitcher === 1 ? 'hidden' : 'visible',
            }}
          >
            <TouchAppIcon
              onClick={() => {
                setstickerOPtionsDefault(4);

              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
              }
              style={{
                margin: "auto",
                color: interactContent[index] || interactContent2[index] ? colorstroke : "#ffffff",
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
              }}
            />
          </Grid></> : null}



          {
            ///////////////////////////////////////////////////////////DEFAULT MODE
          }

          {
            ///////////////////////////////////////////////////////////UNDO MODE
          }
          {stickerOPtionsDefault === 3 ? (
            <>
              {" "}
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <UndoIcon
                  onClick={() => {
                    setundoswitcher(0);
                    setstickerOPtionsDefault(0);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <RestoreIcon
                  onClick={() => {
                    setundoswitcher((undoswitcher: number) => undoswitcher + 1);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
            </>
          ) : null}
          {
            ///////////////////////////////////////////////////////////UNDO MODE
          }

          {
            ///////////////////////////////////////////////////////////TEXT MODE
          }


          {stickerOPtionsDefault === 4 ?
            interactContent[index] || interactContent2[index] ? null : < Grid
              item
              xs={12}
              style={{
                padding: "20px",
              }}
            >
              <CloseIcon
                onClick={() => {
                  if (tiim.current) {
                    clearTimeout(tiim.current);
                  }
                  if (TouchTimer.current) {
                    clearTimeout(TouchTimer.current);
                  }

                  calldraw(0, 0, 0, 1);
                  setstickerOPtionsDefault(0);
                  //setStopCollectInteractData1(false);
                }}
                className={
                  darkmodeReducer
                    ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                    : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                }
                style={{
                  margin: "auto",
                  color: "#ffffff",
                  fontSize: matchTabletMobile
                    ? `${mobilefont}vh`
                    : `${pcfont}vw`,
                }}
              />
            </Grid>
            : null}





          {stickerOPtionsDefault === 1 && showTextOptions && showalloptions ? (
            <>
              {" "}
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <CloseIcon
                  onClick={() => {
                    setstickerOPtionsDefault(0);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <LayersIcon
                  onClick={changetextstyle}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>


              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <FormatSizeIcon
                  onClick={() => {
                    if (textzoomSwitch) { settextzoom(60); settextzoomSwitch(false) }
                    else { settextzoomSwitch(true); settextzoom(86); }
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: "#ffffff",
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>

              {stickerOPtionsTextType === 0 || stickerOPtionsTextType === 1 || stickerOPtionsTextType === 2 || stickerOPtionsTextType === 3 ? (
                <>
                  {" "}
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "20px",
                    }}
                  >
                    <FontDownloadIcon
                      onClick={changetextfont}
                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                          : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                      }
                      style={{
                        margin: "auto",
                        color: "#ffffff",
                        fontSize: matchTabletMobile
                          ? `${mobilefont}vh`
                          : `${pcfont}vw`,
                      }}
                    />
                  </Grid>
                </>
              ) : null}
              {stickerOPtionsTextType === 0 ? (
                <>
                  {" "}
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TextFormatIcon
                      onClick={() => {

                        if (usecolorstroke) {
                          setusecolorstroke(false);
                        } else {
                          setusecolorstroke(true);
                        }

                      }}
                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                          : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                      }
                      style={{
                        margin: "auto",
                        color: usecolorstroke ? colorstroke : colorx,
                        fontSize: matchTabletMobile
                          ? `${mobilefont}vh`
                          : `${pcfont + 1}vw`,
                        marginLeft: '-0.5vw'
                      }}
                    />
                  </Grid>
                </>
              ) : null}
              {stickerOPtionsTextType === 0 ||
                stickerOPtionsTextType === 1 ||
                stickerOPtionsTextType === 4 ? (
                <>
                  {" "}
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "20px",
                    }}
                  >
                    <LightModeIcon
                      onClick={() => {
                        setshowTextOptions(false);
                        setshowSliderShine(true);
                      }}
                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                          : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                      }
                      style={{
                        margin: "auto",
                        color: "#ffffff",
                        fontSize: matchTabletMobile
                          ? `${mobilefont}vh`
                          : `${pcfont}vw`,
                        display: 'none'
                      }}
                    />
                  </Grid>
                </>
              ) : null}
            </>
          ) : null}
          {
            ///////////////////////////////////////////////////////////TEXT MODE
          }














          {
            ///////////////////////////////////////////////////////////STICKER MODE
          }



          {
            ///////////////////////////////////////////////////////////STROKE COLOR SELECT MODE
          }
          {showColorPicker && stickerOPtionsTextType === 0 ? (
            <>
              {" "}
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <TextFormatIcon
                  onClick={() => {
                    setusecolorstroke(true);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: colorstroke,
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                }}
              >
                <TextFormatIcon
                  onClick={() => {
                    setusecolorstroke(false);
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-dark dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-light  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    margin: "auto",
                    color: colorx,
                    fontSize: matchTabletMobile
                      ? `${mobilefont}vh`
                      : `${pcfont}vw`,
                  }}
                />
              </Grid>
            </>
          ) : null}
          {
            ///////////////////////////////////////////////////////////STROKE COLOR SELECT MODE
          }







        </Grid>




        <canvas
          className={TouchedOpacity ? 'changeOpacityEdit' : ""}
          onMouseDown={(e: any) => {
            // handleTouchStart(e, 0);
          }}
          onTouchStart={(e: any) => {
            // handleTouchStart(e, 1);
          }}
          onMouseMove={(e: any) => {
            //handleTouchDrag(e, 0);
          }}
          onTouchMove={(e: any) => {
            // handleTouchDrag(e, 1);
          }}
          onMouseUp={(e: any) => {
            handleTouchStartIn(e, 0);
          }}
          onTouchEnd={(e: any) => {
            handleTouchStartIn(e, 1);
          }}
          ref={canvasRefIn}
          style={{
            padding: "0px",
            position: 'relative',
            zIndex: 11,
            top: '0vh',
            margin: 'auto',
            display: stickerOPtionsDefault === 4 ? 'block' : 'none',

          }}
        />


        <canvas
          onClick={() => {
            if (showTextField) {
              setshowTextOptions(true);
              setshowTextField(false);
            }
          }}
          className={
            darkmodeReducer ? "turlightpostdarkx" : "turlightpostlightx"
          }
          onMouseOver={() => {
            /// mouseover(0);
          }}
          onMouseDown={(e: any) => {
            handleTouchStart(e, 0);
          }}
          onTouchStart={(e: any) => {
            handleTouchStart(e, 1);
          }}
          onMouseMove={(e: any) => {
            handleTouchDrag(e, 0);
          }}
          onTouchMove={(e: any) => {
            handleTouchDrag(e, 1);
          }}
          onMouseUp={handleTouchEnd}
          onTouchEnd={handleTouchEnd}
          ref={canvasRefsticker}
          style={{
            padding: "0px",
            margin: "auto",
            zIndex: 10,
            position: "relative",
            display: stickerOPtionsDefault === 4 ? 'none' : 'block',
          }}
        />

        <canvas
          className={
            darkmodeReducer ? "turlightpostdarkx" : "turlightpostlightx"
          }
          ref={canvasRefstickerimage}
          style={{
            padding: "0px",
            margin: "auto",
            position: "fixed",
            top: "200000px",
          }}
        />

        <canvas
          className={
            darkmodeReducer ? "turlightpostdarkx" : "turlightpostlightx"
          }
          ref={aaRef}
          style={{
            padding: "0px",
            margin: "auto",

            position: "fixed",

            top: "200000px",
          }}
        />

        <img
          ref={aRef}
          src={addedImagex ? addedImagex : null}
          style={{
            width: "30%",
            height: "auto",
            cursor: "pointer",
            position: "fixed",
            top: "20000vh",
            backgroundColor: "#00ccff",
          }}
        />

        {showTextField ? (
          <>
            {" "}
            <Grid
              className={
                darkmodeReducer
                  ? "mobileTextfield-backplateColorDark"
                  : "mobileTextfield-backplateColorLight"
              }
              item
              xs={12}
              style={{
                width: "100%",
                padding: "0px",
                position: "fixed",
                height: "13vh",
                bottom: "0vh",
                zIndex: 20,
              }}
            ></Grid>
            <TextField
              size={sizex}
              inputProps={{ style: { fontSize: font1 } }}
              InputLabelProps={{ style: { fontSize: font2 } }}
              onChange={updateText}
              value={textvalue}
              style={{
                transform: transform,
                width: width,
                paddingBottom: "0px",
                position: "fixed",
                bottom: "3.5vh",
                left: "40vw",
                zIndex: 26,
              }}
              label="Input Text"
              type="text"
              name="inputedPassword"
              variant="standard"
            />{" "}
          </>
        ) : null}




      </Grid >
    </>
  );


}

export const Superstickers = React.memo(Superstickersx);
