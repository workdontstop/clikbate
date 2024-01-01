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
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightModeIcon from "@mui/icons-material/LightMode";
import TextFormatIcon from "@mui/icons-material/TextFormat";
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
import date from "date-and-time";
import { UpdateNavFilterReducer } from "../GlobalActions";
import { UpdateNavCropReducer } from "../GlobalActions";
import { AudioEditor } from "./AudioEditor";


function CaptionTextx({
    sizex, font1, font2,
    updatecaptiontop,
    captionvalues,
    transform, width

}: any): JSX.Element {




    return (
        <>
            <TextField
                size={sizex}
                inputProps={{ style: { fontSize: font1 } }}
                InputLabelProps={{ style: { fontSize: font2 } }}
                onChange={updatecaptiontop}
                value={captionvalues.topic}
                style={{
                    transform: transform,
                    width: width,
                    paddingBottom: "0px",
                    position: "fixed",
                    bottom: "7vh",
                    left: "36.5vw",
                    zIndex: 26,
                }}
                label="Share Your Thoughts"
                type="text"
                name="topic"
                variant="standard"
            />{" "}
        </>
    );
}

export const CaptionText = React.memo(CaptionTextx);