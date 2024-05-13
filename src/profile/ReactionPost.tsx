import React from "react";
import { Grid } from "@material-ui/core";
import { Slider } from "./Slider";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { matchMobile, matchPc, matchTablet } from "../DetectDevice";

import FavoriteIcon from '@material-ui/icons/Favorite';
import MoodIcon from '@material-ui/icons/Mood';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";


function ReactionPostx({ Ein,
    setZoom3,
    setZoomBigEmo3,
    Zoom3,
    ClickLove,
    ShowAudioIcon,
    Spincare,
    Emo3Num,
    ClickLike,
    setZoom4,
    setZoomBigEmo4,
    Zoom4,
    Spinfun,
    Emo4Num,
    setShowAudioIcon
}: any) {




    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;
            screenHeight: number;
            activateLoader: boolean;
            historyscroll: number;
            x: any;
            interact: boolean;
            MenuData: String;
            pagenum: number;
            SignIn: boolean,
            Guest: number,
            muteaudio: boolean,
            ActiveAudioIndex: number,
        };
    }



    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interact, MenuData, pagenum, SignIn, Guest, muteaudio, ActiveAudioIndex } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;
    const snapStartReducer = snapStart;
    const activateLoaderReducer = activateLoader;
    const historyscrollReducer = historyscroll;
    const interactReducer = interact;

    const ActiveAudioIndexReducer = ActiveAudioIndex;

    const MenuDataReducer = MenuData
    const pagenumReducer = pagenum;
    const SignInReducer = SignIn;
    const GuestReducer = Guest;
    const muteaudioReducer = muteaudio;


    var mobileemoTop = '13vh';

    var mobileTop = '5vh';


    return (
        <>


            {Ein === null || Ein === 0 ?

                <FavoriteIcon

                    onMouseEnter={(e: any) => {
                        setZoom3(true);
                        setZoomBigEmo3(true);
                    }}
                    onMouseLeave={(e: any) => {
                        setZoom3(false);
                        setZoomBigEmo3(false);
                    }}


                    onClick={() => {
                        ClickLove();

                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }

                    style={{
                        transform: Zoom3 ? "scale(2)" : "scale(1)",
                        color: darkmodeReducer
                            ? "#ffffff" : '#000000',
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '87vw' : '45.6vw',
                        cursor: "pointer",
                        bottom: matchMobile ? mobileTop : "0px",
                        top: matchMobile ? '' : "52vh",
                        backgroundColor: 'red',
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: '2.8rem',
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "2px",
                        display: ShowAudioIcon ? 'block' : 'none',

                    }}
                />
                : <span

                    onMouseEnter={(e: any) => {
                        setZoom3(true);
                        setZoomBigEmo3(true);
                    }}
                    onMouseLeave={(e: any) => {
                        setZoom3(false);
                        setZoomBigEmo3(false);
                    }}


                    onClick={() => {
                        ClickLove();
                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }
                    style={{
                        color: darkmodeReducer ? "#ffffff" : "#000000",
                        transform: matchMobile ? Zoom3 ? "scale(1)" : "scale(0.95)" :
                            Zoom3 ? "scale(2)" : "scale(1)",
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '87vw' : '45.6vw',
                        cursor: "pointer",
                        bottom: matchMobile ? mobileemoTop : "0px",
                        top: matchMobile ? '' : "50vh",
                        backgroundColor: "red",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "2.8rem",
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "0px",
                        height: '0px',
                        display: ShowAudioIcon ? "inline" : "none",
                    }}
                >
                    <span className={Spincare === 0 ? '' : 'spinnerEmott'}>

                        ❤️</span>
                    <span
                        style={{
                            textAlign: 'center',
                            right: matchMobile ? '2.3vw' : "1.1vw",
                            fontSize: matchMobile ? '2.4rem' : " ",
                            position: 'absolute',
                            transform: "scale(0.4)",
                            top: '0.86vh',
                            color: '#ffffff'

                        }}
                    >
                        {Emo3Num === 0 ? "" : Emo3Num}
                    </span>
                </span>

            }


            {Ein === null || Ein === 0 ?

                <ThumbUpAltIcon
                    onMouseEnter={(e: any) => {
                        setZoom4(true);
                        setZoomBigEmo4(true);
                    }}
                    onMouseLeave={(e: any) => {
                        setZoom4(false);
                        setZoomBigEmo4(false);
                    }}


                    onClick={() => {
                        ClickLike();

                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }

                    style={{
                        color: darkmodeReducer
                            ? "#ffffff" : '#000000',
                        transform: Zoom4 ? "scale(2)" : "scale(1)",
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '87vw' : '45.6vw',
                        cursor: "pointer",
                        bottom: matchMobile ? '19vh' : "0px",
                        top: matchMobile ? '' : "38vh",
                        backgroundColor: 'orange',
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: '2.8rem',
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "2px",
                        display: ShowAudioIcon ? 'block' : 'none'
                    }}
                />

                :

                <span
                    onMouseEnter={(e: any) => {
                        setZoom4(true);
                        setZoomBigEmo4(true);
                    }}
                    onMouseLeave={(e: any) => {
                        setZoom4(false);
                        setZoomBigEmo4(false);
                    }}




                    onClick={() => {
                        ClickLike();
                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }
                    style={{
                        transform: matchMobile ? Zoom4 ? "scale(1)" : "scale(0.95)" :
                            Zoom4 ? "scale(2)" : "scale(1)",
                        color: darkmodeReducer ? "#ffffff" : "#000000",
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '87vw' : '45.6vw',
                        cursor: "pointer",
                        bottom: matchMobile ? '27vh' : "0px",
                        top: matchMobile ? '' : "35vh",
                        backgroundColor: "red",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "2.8rem",
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "0px",
                        height: "0px",
                        display: ShowAudioIcon ? "inline" : "none",
                    }}
                >
                    <span className={Spinfun === 0 ? '' : 'spinnerEmott'}>

                        👍</span>
                    <span
                        style={{
                            textAlign: 'center',
                            right: matchMobile ? '2.3vw' : "1.1vw",
                            fontSize: matchMobile ? '2.4rem' : " ",
                            position: 'absolute',
                            transform: "scale(0.4)",
                            top: '1.5vh',
                            color: '#ffffff'
                        }}
                    >
                        {Emo4Num === 0 ? "" : Emo4Num}
                    </span>
                </span>
            }


            <MoodIcon

                onMouseEnter={(e: any) => {
                    setZoom3(true);

                }}
                onMouseLeave={(e: any) => {
                    setZoom3(false);

                }}


                onClick={() => {
                    setShowAudioIcon(true);
                }}
                className={
                    "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                }

                style={{
                    transform: Zoom3 ? "scale(1.6)" : "scale(0.8)",
                    color: darkmodeReducer
                        ? "#ffffff" : '#000000',
                    position: "absolute",
                    zIndex: 30,
                    left: matchMobile ? '87vw' : '45.6vw',
                    cursor: "pointer",
                    bottom: matchMobile ? '2vh' : "0px",
                    top: matchMobile ? '' : "62vh",
                    backgroundColor: darkmodeReducer
                        ? "#000000" : '#ffffff',
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: '2.8rem',
                    fontWeight: "bolder",
                    opacity: 1,
                    padding: "2px",
                    display: ShowAudioIcon ? 'none' : 'block',

                }}
            />

        </>
    );
}


export const ReactionPost = React.memo(ReactionPostx);
