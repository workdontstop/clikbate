import React, {
    useRef,
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
} from "react";

import { Grid } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import Cropper from "react-easy-crop";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PhotoIcon from "@mui/icons-material/Photo";
import CloseIcon from "@mui/icons-material/Close";
import GifIcon from "@mui/icons-material/Gif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "@mui/material/Slider";
import { AnySoaRecord } from "dns";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import AdjustIcon from '@material-ui/icons/Adjust';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';


interface HTMLVideoElementWithCapture extends HTMLVideoElement {
    captureStream(): MediaStream;
}







function VideoEditorffmpegx({ VideoUrl }: any): JSX.Element {

    ///



    const ffmpeg = createFFmpeg({ log: true });

    async function testFFmpeg(videoUrl: any) {
        if (!ffmpeg.isLoaded()) {
            alert('failed');
            await ffmpeg.load();
            alert('true');
        }

        try {
            alert('true zz');
            // Fetch the video file from the URL
            const video = await fetchFile(videoUrl);

            // Write the video to FFmpeg's file system
            ffmpeg.FS('writeFile', 'input.mp4', video);

            // Perform a simple FFmpeg command, such as getting video info
            await ffmpeg.run('-i', 'input.mp4');

            // Optionally, you can process the video further or convert it
            // Example: ffmpeg.run('-i', 'input.mp4', 'output.mp4');

            // Log a success message or output
            console.log('FFmpeg operation completed successfully.');
        } catch (error) {
            alert('failed zz');
            console.error('Error with FFmpeg:', error);
        }
    }


    useEffect(() => {
        testFFmpeg(VideoUrl);
    }, [VideoUrl]);




    const videoPlayerRef = useRef<HTMLVideoElementWithCapture>(null);

    const videoPlayerRefx = useRef<HTMLVideoElementWithCapture>(null);




    ////**     < VideoFFmpeg VideoUrl={RecordedBlob} />*////
    return (
        <>



        </>
    );
}

export const VideoEditorffmpeg = React.memo(VideoEditorffmpegx)