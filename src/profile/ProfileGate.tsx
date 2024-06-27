import React, { useRef, useState, useEffect, useCallback } from "react";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Menu } from "./Menu";
import { Billboard } from "./Billboard";
import "./profile.css";
import { Connect } from "./Connect";
import { ProfileSetup } from "./ProfileSetup";
import { GenerateAndUpload } from "./GenerateAndUpload";
import { ActualMenu } from "./ActualMenu";


import { useLocation } from 'react-router-dom';



import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from "axios";
import { CommentTemplate } from "../CommentTemplate";
import { Upload } from "../upload/Upload";
import { UploadProfilePic } from "../upload/UploadProfilePic";
import AddIcon from "@mui/icons-material/Add";
import { OptionsSlider } from "./OptionsSlider";
import { UpdateNavFilterReducer, UpdateSign } from "../GlobalActions";
import { UpdateNavCropReducer } from "../GlobalActions";
import LogoutIcon from "@mui/icons-material/Logout";
import PublicIcon from '@material-ui/icons/Public';

import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import { DarkmodeToggleAction } from ".././GlobalActions";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { ServerError } from "../log/ServerError";
import { UserInfoUpdateMEMBERDATA } from "../log/actions/UserdataAction";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import { LoaderPost } from "./LoaderPost";
import { UpdateLoader, UpdateMenuData, Updatepagenum } from ".././GlobalActions";
import { Taskbar } from "./Taskbar";
import { UpdateInteract, UpdateAlertReducer } from ".././GlobalActions";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { UserdataReg } from "../log/actions/UserdataAction";

import { UpdateTutorials } from "../GlobalActions";
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { decodeBase64, encodeBase64 } from './utils';

import { useParams } from 'react-router-dom';

import M1 from "../images/m1.jpg";
import M2 from "../images/m2.jpg";
import M3 from "../images/m3.jpg";

import { LoginButtons } from "../log/LogButtons";


import {
    Paper,
    Grid,
    Switch,
    Typography,
    createTheme,
    MuiThemeProvider,
    Box,
} from "@material-ui/core";





function ProfileGatex({
    stopBodyScroll,
    setStopBodyScroll,
    setsuperSettings,
    WebsiteMode,
    setWebsiteMode,

    showProfiileData,
    setshowProfiileData,
    getSliderWidth,
    getSliderWidthRef,

    setselectedImage,
    selectedImage,
    setminimise,
    minimise,
    paperPostScrollRef,

    setIdReactRouterAsInt,
    setScrollReactRouter,
    IdReactRouterAsInt,
    ScrollReactRouter,
    setPagenumReactRouter,
    setPostPagenumPusher,
    PostPagenumPusher,

    PagenumReactRouter,

    setScrollIndexPusher,
    ScrollIndexPusher,

    setCurrentPage,
    RandomColor,

    snapallow,
    setsnapallow,

    settypex,
    setprofileimageSource,
    setcropimageProfile,
    setShowModalUploadProfile,
    showModalUploadProfile,
    sliderIndex,
    setSliderIndex,
    billdefaultbill,
    OpenUploadModalProfile,
    setShowmaxPost,
    ShowmaxPost,
    setUploadGPT,




}: any): JSX.Element {



    const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;
    const dispatch = useDispatch();
    const location = useLocation();


    const navigate = useNavigate();

    const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);


    const { idRoute1, idRoute2, idRoute3 } = useParams();
    let idReactRouter: string | undefined;
    let PagenumRouter: string | undefined;
    let scrollRouter: string | undefined;




    useEffect(() => {
        const handlePopstate = () => {
            // Extract IDs from the pathname
            const pathSegments = window.location.pathname.split('/');
            const idRoute1 = pathSegments[pathSegments.length - 3]; // Adjust index based on your route structure
            const idRoute2 = pathSegments[pathSegments.length - 2]; // Adjust index based on your route structure
            const idRoute3 = pathSegments[pathSegments.length - 1]; // Adjust index based on your route structure

            if (idRoute1) {
                const decodedId1 = decodeBase64(idRoute1);
                if (decodedId1) {
                    const parsedInt1 = parseInt(decodedId1, 10);
                    if (!isNaN(parsedInt1)) {
                        setIdReactRouterAsInt(parsedInt1);
                    }
                }
            }

            if (idRoute2) {
                const decodedId2 = decodeBase64(idRoute2);
                if (decodedId2) {
                    const parsedInt2 = parseInt(decodedId2, 10);
                    if (!isNaN(parsedInt2)) {
                        setScrollReactRouter(parsedInt2);
                        // paperPostScrollRef.current.scrollTop = parsedInt2;
                    }
                }
            }

            if (idRoute3) {
                const decodedId3 = decodeBase64(idRoute3);
                if (decodedId3) {
                    const parsedInt3 = parseInt(decodedId3, 10);
                    if (!isNaN(parsedInt3)) {
                        setPagenumReactRouter(parsedInt3);
                    }
                }
            }
        };

        // Add an event listener for the popstate event
        window.addEventListener('popstate', handlePopstate);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []); // This effect should only run once, so it has an empty dependency array


    useEffect(() => {
        if (idRoute1) {
            const decodedId1 = decodeBase64(idRoute1);
            if (decodedId1) {
                const parsedInt1 = parseInt(decodedId1, 10);
                if (!isNaN(parsedInt1)) {
                    setIdReactRouterAsInt(parsedInt1);
                }
            }
        }

        if (idRoute2) {
            const decodedId2 = decodeBase64(idRoute2);
            if (decodedId2) {
                const parsedInt2 = parseInt(decodedId2, 10);
                if (!isNaN(parsedInt2)) {
                    setScrollReactRouter(parsedInt2);
                    paperPostScrollRef.current.scrollTop = parsedInt2;
                }
            }
        }

        if (idRoute3) {
            const decodedId3 = decodeBase64(idRoute3);
            if (decodedId3) {
                const parsedInt3 = parseInt(decodedId3, 10);
                if (!isNaN(parsedInt3)) {
                    setPagenumReactRouter(parsedInt3);
                    //paperPostScrollRef.current.scrollTop = parsedInt3;
                }
            }
        }
    }, [idRoute1, idRoute2, idRoute3, location.pathname]);

    ///alert(idReactRouterAsInt);




    var allow4dev = "";

    if (REACT_APP_APPX_STATE === "dev") {
        allow4dev = "http://localhost:1000";
    } else {
        allow4dev = "";
    }



    const [postData, setPostData] = useState<Array<any>>([]);
    const [profileDataHold, setprofileDataHold] = useState<Array<any>>([]);
    const [dontallowspring, setdontallowspring] = useState<boolean>(false);
    const [scrollLocation, setscrollLocation] = useState<number>(0);
    const [CommentHistoryData, setCommentHistoryData] = useState<Array<any>>([]);
    const [commentHistoryScroll, setcommentHistoryScroll] = useState<number>(0);
    const [ActualpostDataAll, setActualPostDataAll] = useState<Array<any>>([]);
    const [keypost, setkeypost] = useState(0);
    const [aboutTemplateGo, setaboutTemplateGo] = useState<boolean>(false);
    const [commentTemplateGo, setcommentTemplateGo] = useState<boolean>(false);
    const [reactionTemplateGo, setreactionTemplateGo] = useState<boolean>(false);
    const [connectTemplateGo, setconnectTemplateGo] = useState<number>(0);
    const [typeEmo, settypeEmo] = useState<number>(0);
    const [CommentPostid, setCommentPostid] = useState<Array<any>>([]);
    const [formtype, setFormtype] = useState<number>(1);
    const [DiscussionImage, setDiscussionImage] = useState<Array<any>>([]);
    const [showModalForm, setShowModalForm] = useState<boolean>(false);
    const [checkIfColorChanged, setcheckIfColorChanged] = useState<boolean>(false);








    const [showModalFormMenu, setShowModalFormMenu] = useState<boolean>(false);
    const [ShowBigPlay, setShowBigPlay] = useState(false);
    const [x, setx] = useState<boolean>(false);
    const [miniProfile, setminiProfile] = useState<boolean>(false);
    const [sliderIndexMini, setSliderIndexMini] = useState<number>(0);
    const [zoomClickedIndex, setzoomClickedIndex] = useState(0);

    const [isPWAInstalled, setIsPWAInstalled] = useState<boolean>(false);

    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [haltDownload, sethaltDownload] = useState(false);


















    const [showModalUploadTask, setShowModalUploadTask] =
        useState<boolean>(false);
    const [showModalUpload, setShowModalUpload] = useState<boolean>(false);


    /// setShowInstallHelp





    const [postDataBackToTop, setPostDataBackToTop] = useState<Array<any>>([]);

    const [postData1, setPostData1] = useState<Array<any>>([]);
    const [postData2, setPostData2] = useState<Array<any>>([]);
    const [postData3, setPostData3] = useState<Array<any>>([]);


    //themeGeneralSettings


    const [historyDataPost, sethistoryDataPost] = useState<Array<any>>([]);

    const [historyDataProfile, sethistoryDataProfile] = useState<Array<any>>([]);



    const [ProfileLocalNav, setProfileLocalNav] = useState(0);

    const [PostLocalNav, setPostLocalNav] = useState(0);






    const [AllowDatabase, setAllowDatabase] = useState(1);

    const [callResponseTop, setcallResponseTop] = useState<boolean>(false);

    const [callResponse1, setcallResponse1] = useState<boolean>(false);
    const [callResponse2, setcallResponse2] = useState<boolean>(false);
    const [callResponse3, setcallResponse3] = useState<boolean>(false);



    const [ActualPagenum, setActualPagenum] = useState<any>(0);


    const [ActualDataTop, setActualDataTop] = useState<Array<any>>([]);
    const [showDataTop, setshowDataTop] = useState<boolean>(false);



    const [ActualData, setActualData] = useState<Array<any>>([]);
    const [showData1, setshowData1] = useState<boolean>(false);


    const [ActualData2, setActualData2] = useState<Array<any>>([]);
    const [showData2, setshowData2] = useState<boolean>(false);




    const [ActualData3, setActualData3] = useState<Array<any>>([]);
    const [showData3, setshowData3] = useState<boolean>(false);












    const [ShowInstallHelp, setShowInstallHelp] = useState(false);

    const setupTop = useRef<any>();




    const isApp = () => {

        if ((navigator as any).standalone || window.matchMedia('(display-mode: standalone)').matches) {
            setIsPWAInstalled(true);
            setWebsiteMode(false); // Hide download button if PWA is already installed


        } else {
            setIsPWAInstalled(false);
            /// setWebsiteMode(true); // H
        }

    }


    const media = window.matchMedia('(display-mode: standalone)').matches;
    const navigatorx = (navigator as any).standalone;
    const andref = document.referrer.includes('android-app://');

    useEffect(() => {

        setTimeout(() => {

            /// dispatch(UpdateSign(false));

            setWebsiteMode(false);

        }, 2000)

        isApp();

    }, [postData, media, navigatorx, andref,])




    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {

            // Prevent the default browser prompt
            event.preventDefault();
            // Store the event object for later use
            setDeferredPrompt(event);

            setIsPWAInstalled(true);
            setWebsiteMode(false); // 
        };



        // Add event listener for beforeinstallprompt
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);



        return () => {
            // Cleanup by removing the event listeners when the component unmounts
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);


        };
    }, []);





    useEffect(() => {
        const currentHost = window.location.hostname;
        if (currentHost === 'clickbate.com') {
            ///window.location.replace('https://www.clickbate.com');
        }
    }, [])


    useEffect(() => {
        ////////////////////////////////////////////////LEAVE ALERT LEAVE ALERT ///////////////////////////////////////////

        if (matchMobile) {
            const handleBeforeUnload = (e: BeforeUnloadEvent) => {

                ///alert('jjj');
                // Prompt the user before leaving the page
                e.returnValue = 'Are you sure you want to leave?';
            };

            //window.addEventListener('beforeunload', handleBeforeUnload);

            return () => {
                // Clean up the event listener when the component unmounts
                /// window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }

    }, []);



    ///
    ///
    ///
    /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;
            screenHeight: number;
            activateLoader: boolean;
            historyscroll: number;
            interactContent: any;
            interact: number;
            MenuData: String;
            pagenum: number;
            SignIn: boolean,
            Guest: number
        };
    }


    const [shownav, setShownav] = useState<boolean>(true);
    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interactContent, interact, MenuData, pagenum, SignIn, Guest } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;
    const snapStartReducer = snapStart;
    const activateLoaderReducer = activateLoader;
    const historyscrollReducer = historyscroll;
    const interactContentReducer: any = interactContent;
    const interactReducer = interact;
    const MenuDataReducer = MenuData
    const pagenumReducer = pagenum;
    const SignInReducer = SignIn;
    const GuestReducer = Guest;










    //showProfiileData








    const [StopMini, setStopMini] = useState(false);







    const [navigateUpload, setnavigateUpload] = useState<any>(0);










    const [billboardserverswitch, setbillboardserverswitch] =
        useState<boolean>(false);

    const [profileServerserverswitch, setprofileServerserverswitch] =
        useState<boolean>(false);

    const profileImagethumb = useRef<any>();

    const profileImageR = useRef<any>();

    const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
    const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);










    const [showThisComponenet, setshowThisComponenet] = useState<boolean>(false);


    const [allowCallMemberFeeds, setallowCallMemberFeeds] =
        useState<boolean>(true);




    const [clikplay, setclikplay] = useState(false);


    const [Loaderx, setLoaderx] = useState(false);





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

    ///
    ///
    ///
    /// GET LOGGED USER DATA FROM REDUX STORE
    interface RootStateReducerImage {
        UserdataReducer: {
            image: string;
            imageThumb: string;
            id: number;
            username: string;
            memeberPageid: number;
            MemberProfileData: any;
            reg: number
        };
    }
    const { username, image, imageThumb, id, memeberPageid, MemberProfileData, reg } =
        useSelector((state: RootStateReducerImage) => ({
            ...state.UserdataReducer,
        }));


    ///switchThemes

    const idReducer = id;
    const memeberPageidReducer = memeberPageid;
    const usernameReducer = username;
    const MemberProfileDataReducer = MemberProfileData;
    const regReducer = reg;

    const [imageReducer, setimageReducer] = useState("");



    const [imageReducerThumb, setimageReducerThumb] = useState("");
    const [ColorMemberReducer, setColorMemberReducer] = useState("");

    const [ShowLoader2, setShowLoader2] = useState(false);

    const [BlockonFirstLoad, setBlockonFirstLoad] = useState(true);



    var logoimage;

    if (darkmodeReducer) {

        logoimage = SuperstarzIconDark;
    } else {

        logoimage = SuperstarzIconLight;
    }





    const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

    const ChangeProfile = () => {


        if (Timervv.current) {
            clearTimeout(Timervv.current);
        }

        Timervv.current = setTimeout(() => {
            if (memeberPageid === 0) {
                setimageReducer(image);
                setimageReducerThumb(imageThumb);
                setColorMemberReducer(colorReducer);
            } else {
                setimageReducer(MemberProfileData.userimage);
                setimageReducerThumb(MemberProfileData.userimagethumb);
                setColorMemberReducer(MemberProfileData.usercolor1);
            }
        }, 1500)
    };




    const [postPageLimit, setPostPageLimit] = useState<number | null>(0);




    // Assuming temp is of type any (replace with your specific type)
    const [newPostData, setNewPostData] = useState<any | null>(null);

    // Assuming tempx is of type any (replace with your specific type)
    const [newPostData2, setNewPostData2] = useState<any | null>(null);

    // Assuming tempxx is of type any (replace with your specific type)
    const [newPostData3, setNewPostData3] = useState<any | null>(null);

    const [limit, setlimit] = useState<any>(0);


    useEffect(() => {
        ////console.log(postData)
        ChangeProfile();
    }, [MemberProfileData, colorReducer, imageThumb, image, memeberPageid]);

    useEffect(() => {
        if (BlockonFirstLoad) {
            setBlockonFirstLoad(false);
        } else {
            setShowLoader2(true);
        }
    }, [memeberPageid]);

    useEffect(() => {
        // setshowThisComponenet(true);
    }, [memeberPageid]);

    useEffect(() => {
        ChangeProfile();
    }, [image]);

    useEffect(() => {
        if (MemberProfileData) {
            //console.log(MemberProfileData);
            setAdded(MemberProfileData.connectCount);
        }
    }, [MemberProfileData]);

    ///show
    ////Allow 
    ///lockVisibility

    const [showESC, setshowESC] = useState(false);
    const [showESCLock, setshowESCLock] = useState(false);

    useEffect(() => {
        if (showESCLock) { } else {
            setTimeout(() => {
                setshowESC(true);
                setTimeout(() => {
                    setshowESC(false);
                    setshowESCLock(true);

                }, 10000)
            }, 12000)
        }
    }, [postData, showESCLock]);




    ///paperPostScrollRef
    const paperPostScrollRefMini = useRef<any>(null);

    const pagePostScroll = useRef<any>(null);

    const T1 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const T1x = useRef<ReturnType<typeof setTimeout> | null>(null);

    const Ticx = useRef<ReturnType<typeof setTimeout> | null>(null);

    const Ticx2 = useRef<ReturnType<typeof setTimeout> | null>(null);


    ///OpenUploadModal
    ///
    ///
    ///TYPES FOR ISLOGGEDIN
    interface RootStateScrollType {
        ScrollTypeReducer: {
            scroller: string;
        };
    }


    useEffect(() => {

        if (T1x.current) {
            clearTimeout(T1x.current);
        }

        T1x.current = setTimeout(() => {

            // alert('ll')

            if (T1.current) {
                clearTimeout(T1.current);
            }

            setminiProfile(false);

            setCurrentPage('feeds');

            // console.log(IdReactRouterAsInt); // Debugging

            const valax = {
                id: IdReactRouterAsInt === 0 ? idReducer : IdReactRouterAsInt,
                id2: idReducer,
            };

            if (Ticx.current) {
                clearTimeout(Ticx.current);
            }

            Ticx.current = setTimeout(() => {
                ///window paperPostScrollRef.current.scrollTop = 0;
            }, 1500);

            Axios.post(`${REACT_APP_SUPERSTARZ_URL}/checkIsLoggedxx`, {
                values: valax,
            }, {
                withCredentials: true,
            })
                .then((response) => {
                    if (response.data.message === "logged in") {

                        //alert(IdReactRouterAsInt);

                        //paperPostScrollRef.current.scrollTop = 0;
                        dispatch(UserInfoUpdateMEMBERDATA(response.data.payload));
                        setprofileDataHold(response.data.payload);
                        setshowProfiileData(false);

                        ///Update Member Data{ALL USERS BUT LOGGED}
                        dispatch(UserInfoUpdateMEMBER(IdReactRouterAsInt));

                        ///alert(pagenumReducer);
                        setShowLoader2(false);
                        if (IdReactRouterAsInt === 0) {
                            callfeeds(0, PagenumReactRouter, 0);
                        } else {
                            callfeeds(response.data.payload.id, PagenumReactRouter, 0);
                        }
                    } else if (response.data.message === "logged out") {
                        alert("Ongoing Security Updates Or You Are Logged Out, Please Try Again Later");
                    }
                })
                .catch(function (error) {
                    console.error("Error in checkIsLogged:", error);
                });

        }, 500)
    }, [idReducer, IdReactRouterAsInt, memeberPageidReducer, PagenumReactRouter]);




    const BiographyClickNew = () => {
        var v = 0;
        if (memeberPageid === 0) {
            v = idReducer;
        } else {
            v = memeberPageid;
        }

        ///alert(v);
        const id = v; //
        const encodedId = encodeBase64(id.toString());

        navigate(
            `/Biography/${encodedId}/${encodeBase64("0")}/${encodeBase64("0")}/${encodeBase64("0")}`
        );
        //dispatch(UserInfoUpdateMEMBER(post.sender));
        ///setScrollReactRouter(0);
    };





    /////////////////////////////
    ///
    ///
    ///LOGGED IN DATA FROM REDUX
    const { scroller } = useSelector((state: RootStateScrollType) => ({
        ...state.ScrollTypeReducer,
    }));
    const scrollerReducer = scroller;

    var colorboy: any = {
        color1: "",
        color2: "",
        colortype: 0,
        id: idReducer,
    };

    const updateColor = useCallback(() => {

        colorboy = {
            color1: colorReducer,
            color2: "",
            colortype: colortypeReducer,
            id: idReducer,
        };
        if (checkIfColorChanged) {
            Axios.put(
                `${REACT_APP_SUPERSTARZ_URL}/update_color`,
                { values: colorboy },
                {}
            )
                .then((response) => {
                    if (response.data.message === "color updated") {
                        setcheckIfColorChanged(false);
                    }
                })
                .catch(function (error) {
                    ///  alert("profileoutter color  error");
                });
        }
    }, [
        checkIfColorChanged,
        REACT_APP_SUPERSTARZ_URL,
        colorReducer,
        colorboy,
        colortypeReducer,
        idReducer,
    ]);

    ///
    ///
    ///CLOSE LOG MODAL
    const [OpenModalFormOnce, setOpenModalFormOnce] = useState<boolean>(false);

    const [RandomFromPostData, setRandomFromPostData] = useState('');


    useEffect(() => {
        // Check if there's any data in postData


        if (postData1.length > 0) {
            // Generate a random index within the range of the postData array
            const randomIndex = Math.floor(Math.random() * postData1.length);
            // Get the random post data
            var randomPostDatax = postData1[randomIndex];
            // Set the random image from the post data to state
            setRandomFromPostData(randomPostDatax.item2);
        } else {
            if (postData2.length > 0) {
                // Generate a random index within the range of the postData array
                const randomIndex = Math.floor(Math.random() * postData2.length);
                // Get the random post data
                var randomPostDatas = postData2[randomIndex];
                // Set the random image from the post data to state
                setRandomFromPostData(randomPostDatas.item2);
            } else {
                if (postData3.length > 0) {
                    // Generate a random index within the range of the postData array
                    const randomIndex = Math.floor(Math.random() * postData3.length);
                    // Get the random post data
                    var randomPostDataw = postData3[randomIndex];
                    // Set the random image from the post data to state
                    setRandomFromPostData(randomPostDataw.item2);
                } else {
                    if (postDataBackToTop.length > 0) {
                        // Generate a random index within the range of the postData array
                        const randomIndex = Math.floor(Math.random() * postDataBackToTop.length);
                        // Get the random post data

                        var randomPostDataq = postDataBackToTop[randomIndex];
                        // Set the random image from the post data to state
                        setRandomFromPostData(randomPostDataq.item2);
                    }
                }
            }

        }






    }, [memeberPageidReducer, postData1, postDataBackToTop, postData2, postData3]);



    const CloseModalForm = useCallback(
        (DeviceBackButtonClicked: number, type: any) => {
            if (type === 1) {
                setStopBodyScroll(false);
                setShowModalForm(false);
                setaboutTemplateGo(false);

                ///Replace modal history state with previous history
                window.history.back();
            } else if (type === 2) {
                setStopBodyScroll(false);

                ///Replace modal history state with previous history
                window.history.back();
            } else if (type === 3 || type === 4) {
                setStopBodyScroll(false);
                setShowModalForm(false);
                setcommentTemplateGo(false);
                setreactionTemplateGo(false);
                setaboutTemplateGo(false);
                ///Replace modal history state with previous history
                window.history.back();
            } else {
            }
        },
        []
    );


    ///
    ///
    ///
    /// ESCAPE KEY CLOSE MODAL
    const escapePress = useCallback(
        (e) => {
            if (e.key === "Escape") {
                window.history.back();
            }
        },
        [showModalForm, CloseModalForm, updateColor]


    );
    useEffect(() => {
        document.addEventListener("keydown", escapePress);
        return () => document.removeEventListener("keydown", escapePress);
    }, [escapePress]);





    const OpenModalForm = useCallback(
        (type: any) => {
            var dd = {
                type: 0, id: 0, index: 200, innerid: 0, pagenumReducer: pagenumReducer,

                data: postDataxx,
                dataPageNumberState: 0,
                dataAll: postDataxx,
                profileDataAll: postDataxx,
            };
            if (type === 1) {
                let modalName = "Biography";
                setaboutTemplateGo(true);
                setStopBodyScroll(true);
                setShowModalForm(true);



                window.history.pushState(dd, "", modalName);
            }
            else if (type === 9000 || type === 8000) {
                setconnectTemplateGo(0);

                setcommentTemplateGo(false);
                setreactionTemplateGo(false);
                setaboutTemplateGo(false);


                if (type === 9000) {
                    setFormtype(0);
                } else {
                    setFormtype(1);
                }


                let modalName;
                if (type === 9000) {
                    modalName = "SignUp";
                } else {
                    modalName = "LogIn";
                }

                setStopBodyScroll(true);
                setShowModalForm(true);
                window.history.pushState(dd, "", modalName);
            }
            else if (type === 2) {
                setdontallowspring(false);
                setconnectTemplateGo(0);
                let modalName = "Discussion";
                setreactionTemplateGo(false);
                setcommentTemplateGo(true);
                setStopBodyScroll(true);
                setShowModalForm(true);
                window.history.pushState(dd, "", modalName);
            } else if (type === 200) {
                setdontallowspring(true);
                setconnectTemplateGo(0);
                setreactionTemplateGo(false);
                setcommentTemplateGo(true);
                setStopBodyScroll(true);
                setShowModalForm(true);
            } else if (type === 3 || type === 4) {
                setdontallowspring(false);
                let modalName = type === 3 ? "Reaction" : "Connections";
                setcommentTemplateGo(true);
                setreactionTemplateGo(true);
                setStopBodyScroll(true);
                setShowModalForm(true);
                window.history.pushState(dd, "", modalName);
            } else if (type === 300 || type === 400) {
                setdontallowspring(true);
                setcommentTemplateGo(true);
                setreactionTemplateGo(true);
                setStopBodyScroll(true);
                setShowModalForm(true);
            } else {
            }
        },
        [showModalForm, pagenumReducer]
    );


    ///
    ///
    ///
    useEffect(() => {
        setx(false);

    }, []);

    /// CALL THIS ON NAVIGATE FROM COMMENTS TO USER PAGE -- CLOSES COMMENT WITHOUT CALLING HISTORY
    ///
    ///
    useEffect(() => {
        setStopBodyScroll(false);
        setShowModalForm(false);
        setcommentTemplateGo(false);
        setreactionTemplateGo(false);
        setaboutTemplateGo(false);
    }, [memeberPageid]);

    const [ScrollTo, setScrollTo] = useState<number>(0);

    const [HistoryDataMan, setHistoryDataMan] = useState<any>([]);




    useEffect(() => {

        if (idReducer === GuestReducer && memeberPageidReducer === 0) {
            ///dispatch(UpdateAlertReducer('Create Interactive Content Here and Express Yourself  ', 3));
        }

    }, [idReducer, GuestReducer, memeberPageidReducer]);
    ///

    useEffect(() => {
        var n, d;


        if (memeberPageidReducer === 0) {
            n = usernameReducer;
            d = {
                type: 0,
                id: 0,
                index: 0,
                innerid: 0,
                pagenumReducer: pagenumReducer,

                data: postData,
                dataPageNumberState: 0,
                dataAll: ActualpostDataAll,
                profileDataAll: postData,

                ProfileLocal: 0,
                PostLocal: 0



            };
            ///window.history.replaceState(d, "", `${n}`);
        }
    }, [idReducer, memeberPageidReducer, pagenumReducer]);
    ///
    ///
    ///

    ///
    ///
    ///
    ///
    ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID

    ///
    ///
    ///
    /// GET GLOBAL INNER NAVIGATION VARIABLE
    const { activatefilterImage, activatecropImage } = useSelector(
        (state: RootStateOrAny) => ({
            ...state.GlobalNavuploadReducer,
        })
    );
    const activatefilterImageReducer = activatefilterImage;
    const activatecropImageReducer = activatecropImage;

    const CloseModalxx = () => {
        if (activatecropImageReducer) {
            dispatch(UpdateNavCropReducer(false));
        } else if (showModalUploadProfile) {
            ///
            setStopBodyScroll(false);
            setShowModalUploadProfile(false);
        } else if (showModalUploadTask) {
            ///
            setStopBodyScroll(false);
            setShowModalUploadTask(false);
        } else if (showModalForm) {
            ///
            setStopBodyScroll(false);
            setShowModalForm(false);

            if (aboutTemplateGo) {
                setaboutTemplateGo(false);
                updateColor();
            }

            if (commentTemplateGo) {
                setcommentTemplateGo(false);
            }

            if (reactionTemplateGo) {
                setreactionTemplateGo(false);
            }
        } else {
        }
    };




    const [callhistoryModal, setcallhistoryModal] = useState(0);

    const [historyScrollonload, sethistoryScrollonload] = useState(0);

    const openmodalhistory = (t: number) => {
        if (t === 0) {
        } else {
            OpenModalForm(t);
            setcallhistoryModal(0)
        }
    }




    const Timergg = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [latestInview, setlatestInview] = useState(0);

    const postDivRefx = useRef<any[]>([]);



    const Timg = useRef<ReturnType<typeof setTimeout> | null>(null);

    const HistoryPostCall = useCallback((bool: any, arr: any, lim: any, PostPageNumberState: any) => {




    }, [])








    ///
    ///
    /////
    //////
    /////
    /////
    // Define interfaces for the state objects
    interface HistoryState {
        type: number;
        id: number;
        index: number;
        dataAll: any[];
        dataPageNumberState: number;
        data: any;
        AllMemberData: any;
        comOriginalData: any;
        comScroll: number;
        pagenumReducer: number;
        comid: string;
        DiscussionImage: string;
        reactType: number;
        profileDataAll: any[];
        ProfileLocal: number;
        PostLocal: number;

    }

    const Timerccx = useRef<ReturnType<typeof setTimeout> | null>(null);



    const uploadClose = (DeviceBackButtonClicked: number) => {
        if (DeviceBackButtonClicked === 2) {
            dispatch(UpdateNavFilterReducer(false));
            dispatch(UpdateNavCropReducer(false));
            ///Replace modal history state with previous history state
            window.history.back();
            setshowProfiileData(false);
            callfeeds(0, 0, 0);
        } else if (DeviceBackButtonClicked === 3) {
            window.history.back();
            setbillboardserverswitch(true);
        } else if (DeviceBackButtonClicked === 4) {
            window.history.back();
            setprofileServerserverswitch(true);
        } else if (DeviceBackButtonClicked === 5) {
            setStopBodyScroll(false);
            setShowModalUpload(false);
            window.history.back();
        } else {
        }
    };





    ///






    function percentage(num: number, per: number) {
        return (num / 100) * per;
    }

    ////////////////////////////////////////////////////////////////////

    ///RandomColor

    const CallMorePages = useCallback((t: number) => {

        ///setminiProfile(false);

        if (t === 2) {

            setcallResponse2(true);
            setshowData2(true);
            setActualPagenum(postPageLimit);



            //setPostData3([]);

        }
        else if (t === 3) {

            setcallResponse3(true);
            setshowData3(true);
            setActualPagenum(postPageLimit);
        }
        else if (t === 4) {


            if (miniProfile) {
                ////  historyBoy();
            }
            setminiProfile(false);


            setActualDataTop([]);
            setPostDataBackToTop([]);
            setActualDataTop(ActualData3);

            setcallResponseTop(true);
            setshowDataTop(true);
            setActualPagenum(postPageLimit);

            setshowData3(false);
            setshowData2(false);
            setshowData1(false);
        }
        else {


        }

    }, [ActualPagenum, ActualData3, miniProfile])







    var dividedData: Array<Array<any>> = [];



    const CallFirstFeed = (Datat: any, postPageLimitx: any) => {


        var postLim = postPageLimitx;

        if (postPageLimitx === 0) {
            setlimit(0);
        } else {
            setlimit(postLim);
        }


        setshowProfiileData(false);
        setActualData([]);
        setActualData2([]);
        setActualData3([]);

        setPostData1([]);
        setPostData2([]);
        setPostData3([]);





        dividedData = [];
        setActualPostDataAll(Datat);


        //alert(postLim)



        // Divide postdataRep into arrays of length 6

        for (let i = 0; i < Datat.length; i += 6) {
            dividedData.push(Datat.slice(i, i + 6));
        }

        // Ensure there are exactly 3 arrays
        while (dividedData.length < 3) {
            dividedData.push([]);
        }



        if (postPageLimitx === 0) {
            //alert('kkkinuj');
            // historyBoy();

        }


        ///var xx = Datat[Datat.length - 1].id;
        //  setPostPageLimit(xx);


        // Update ActualData state variables
        setActualData(dividedData[0]);
        setActualData2(dividedData[1]);
        setActualData3(dividedData[2]);
        ///setActualDataTop(dividedData[2]);


        /// alert('alert');
        ////////////////
        setcallResponse1(true);
        setshowData1(true);
        setActualPagenum(postPageLimit);


        setPostPagenumPusher(postPageLimitx)

        /////responsex(postdataRep, postLim)
        /////////////////


        sethistoryDataPost([]);
        sethistoryDataProfile([]);
    }



    const callfeeds = useCallback(
        (aa: number, postPageLimitx: any, fromPagination: number) => {
            var cboy = {
                id: idReducer,
                id2: idReducer,
                id3: aa,
                postPageLimit: postPageLimitx
            };





            dispatch(Updatepagenum(0));

            dispatch(UpdateLoader(true));


            var tt = "";

            if (aa === 0) {

                tt = "feeds_chronological";
            } else {
                tt = "profile";

                ////alert('kkk');

                ////POST LOAD CONTROL POINT

                setTimeout(() => {
                    /// paperPostScrollRef.current.scrollTop = 0;
                }, 1000);
            }


            ///alert(historyDataPost.length);



            //setScrollTo(0);



            Axios.post(
                `${REACT_APP_SUPERSTARZ_URL}/${tt}`,
                {
                    values: cboy,
                },
                {
                    withCredentials: true,
                }
            )
                .then((response) => {
                    if (response.data.message === "feeds fetched") {



                        var postdataRep = response.data.payload;


                        if (postdataRep.length === 0) {

                            dispatch(UpdateLoader(false));

                        } else {
                            CallFirstFeed(postdataRep, postPageLimitx);

                        }






                    } else if (response.data.message === "error in fetching feeds") {
                        alert("Ongoing Security Updates, Pls Try Again Later");
                    }
                })
                .catch(function (error) {
                    console.log("Connection malfunction profile outter 2");
                });


        },
        [idReducer, REACT_APP_SUPERSTARZ_URL, memeberPageidReducer, postPageLimit, historyDataPost, PostLocalNav]
    );

    //// scrollSnapAlign


    const Timercc = useRef<ReturnType<typeof setTimeout> | null>(null);




    //window.history.replaceState(d, "", "Home");

    ///
    ///
    ///
    useEffect(() => {
        if (Timercc.current) {
            clearTimeout(Timercc.current);
        }


        Timercc.current = setTimeout(() => {
            var dataxx = '';
            dispatch(UpdateMenuData(dataxx));


            var data = '';
            if (memeberPageidReducer === 0) {
                data = 'Feeds'
            } else if (memeberPageidReducer === idReducer) {
                data = 'Profile'
            }
            else {
                data = MemberProfileDataReducer.username
            }


            setTimeout(() => {

                dispatch(UpdateMenuData(data));
            }, 10000)

        }, 1500)

    }, [memeberPageidReducer, MemberProfileDataReducer, idReducer]);



    const updateCurrentURLWithScrollPosition = () => {
        var x = 0;

        const currentPath = location.pathname.split('/');
        const currentIdRoute1 = currentPath[currentPath.length - 3]; // Assuming idRoute1 is the third last segment
        const currentIdRoute2 = currentPath[currentPath.length - 2]; // Assuming idRoute2 is the second last segment
        const currentIdRoute3 = currentPath[currentPath.length - 1]; // Assuming idRoute2 is the second last segment

        const encodedScrollIndex = encodeBase64(x.toString());

        navigate(`/Feeds/${currentIdRoute1}/${encodedScrollIndex}/${currentIdRoute3}`, { replace: true });
    };



    const callPagination = useCallback(() => {

        updateCurrentURLWithScrollPosition();
        setScrollReactRouter(0);

        var time = 50;




        sethistoryDataPost([]);



        if (Ticx2.current) {
            clearTimeout(Ticx2.current);
        }


        Ticx2.current = setTimeout(() => {
            paperPostScrollRef.current.scrollTop = 0;
        }, 1500);




        var xx = ActualpostDataAll[ActualpostDataAll.length - 1].id;

        /////only update

        ///alert(xx);
        setPostPageLimit(xx);

        /// setminiProfile(false);
        /// alert(postPageLimit);
        if (memeberPageidReducer === 0) {

            setTimeout(() => {

                /// alert('lkkk');
                callfeeds(0, xx, 1);
            }, time);
        } else {
            setTimeout(() => {
                callfeeds(memeberPageidReducer, xx, 1);
            }, time);

        }



    }, [postPageLimit, memeberPageidReducer, ActualpostDataAll])



    const callPaginationx = useCallback(() => {
        var time = 100;
        if (memeberPageidReducer === 0) {

            setTimeout(() => {
                callfeeds(0, 0, 1);
            }, time);
        } else {
            setTimeout(() => {
                callfeeds(memeberPageidReducer, 0, 1);
            }, time);

        }



    }, [postPageLimit, memeberPageidReducer])

    ///
    ///
    ///



    const breakPoints = {
        default: 2,
        960: 2,
        600: 1,
    };

    ///
    ///
    ///TYPES FOR ISLOGGEDIN
    interface RootStateIsLogged {
        IsLoggedReducer: {
            loggedIn: boolean;
        };
    }

    ///
    ///LOGGED IN DATA FROM REDUX
    const { loggedIn } = useSelector((state: RootStateIsLogged) => ({
        ...state.IsLoggedReducer,
    }));
    const loggedInReducer = loggedIn;



    const [postDataxx, setPostDataxx] = useState<Array<any>>([]);




    const OpenUploadModalTaskbar = useCallback(
        () => {
            setStopBodyScroll(true);
            setShowModalUploadTask(true);
            //pushstate add enteries to your history
            // uploadClose(1);

            var dd = {
                type: 0, id: 0, innerid: 0, pagenumReducer: pagenumReducer,

                data: postDataxx,
                dataPageNumberState: 0,
                dataAll: postDataxx,
                profileDataAll: postDataxx,

                ProfileLocal: 0,
                PostLocal: 0
            };

            window.history.pushState(dd, "", "Editor");


        },
        [showModalUploadTask, pagenumReducer]
    );


    ///
    ///
    ///
    ///OPEN MODAL THEN CALL CLOSEMODAL FUNCTION WHICH WAITS FOR A POP EVENT(for closing modal)
    const OpenUploadModal = useCallback((t: number) => {
        if (t === 0) {
            setStopBodyScroll(true);
            setShowModalUpload(true);
            //pushstate add enteries to your history
            var dd = {
                type: 0, id: 0, innerid: 0, pagenumReducer: pagenumReducer,

                data: postDataxx,
                dataPageNumberState: 0,
                dataAll: postDataxx,
                profileDataAll: postDataxx,

                ProfileLocal: 0,
                PostLocal: 0
            };
            window.history.pushState(dd, "", "Upload");
        }

        else {

            OpenUploadModalTaskbar();
        }
    }, [showModalUpload, pagenumReducer]);

    var widthProfilePic = matchPc ? "70%" : matchTablet ? "85%" : "42vw";
    var topProfilePic = matchPc ? "-20vh" : matchTablet ? "-13vh" : "-9vh";
    var leftProfilePic = matchPc ? "1vw" : matchTablet ? "3.5vw" : "2.7vw";

    var optionsClass = "";
    var fontOptions = "";

    if (matchPc) {
        optionsClass = "profile-optionsImagePc";
        fontOptions = "2.7vw";
    } else if (matchTablet) {
        optionsClass = "profile-optionsImageTablet";
        fontOptions = "5rem";
    } else {
        optionsClass = "profile-optionsImageMobile";
        fontOptions = "1.9rem";
    }

    const blank = () => { };








    const click = (event: any) => {
        event.target.value = null;
    };

    const billboardx = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const FileArray = Array.from(e.target.files).map((file: any) =>
                URL.createObjectURL(file)
            );

            if (e.target.files.length > 1) {
                setShowmaxPost(true);
                setTimeout(function () {
                    setShowmaxPost(false);
                }, 3000);
            } else {
                settypex("billboard");
                setprofileimageSource([]);
                setprofileimageSource((prevImages: any) =>
                    prevImages.concat(FileArray)
                );
                setcropimageProfile(FileArray[0]);
                OpenUploadModalProfile(2);
            }

            //const formData = new FormData();
            ///for (let i = 0; i < e.target.files.length; i++) {
            //formData.append("superImages", e.target.files[i]);}
            ////

            ///dispatch(UpdateNavCropReducer(true));
        }
    };

    ///setShowmaxPost(true);




    const calculateconnectPosition = useCallback(() => {
        var t = profileImageR.current.clientHeight;
        var v = profileImageR.current.clientWidth;



        if (matchMobile) {
            setprofileImagethumbLeft(v - v / 0.98);
            setprofileImagethumbTop(t - t / 1.02);

        } else {
            setprofileImagethumbLeft(v - v / 1);
            setprofileImagethumbTop(t - t / 1.07);
        }

    }, [profileImageR.current]);


    /*///////////////////////////////////////////////////////////////////////////CONNECT CALL BACK END*/

    const [Added, setAdded] = useState(100);

    var vala = {
        myId: idReducer,
        friendId: "", ////fill in on history integration
    };

    const callAddfav = () => {
        setAdded(100);
        Axios.post(`${REACT_APP_SUPERSTARZ_URL}/add_fav`, { values: vala }, {})
            .then((response) => {
                if (response.data.message === "added") {
                    setTimeout(() => {
                        setAdded(1);
                    }, 2000);
                }
            })
            .catch(function (error) {
                //// alert("post fav error");
            });
    };

    var valax = {
        myId: idReducer,
        friendId: "", ////fill in on history integration
    };


    const callDelfav = () => {
        setAdded(100);
        Axios.post(`${REACT_APP_SUPERSTARZ_URL}/remove_fav`, { values: valax })
            .then((response) => {
                if (response.data.message === "removed") {
                    setTimeout(() => {
                        setAdded(0);
                    }, 2000);
                }
            })
            .catch(function (error) {
                ///alert("post fav error");
            });
    };

    /*///////////////////////////////////////////////////////////////////////////CONNECT CALL BACK END*/



    //////////////////////////////////////////Loader
    var autoSlideDisplay = "none";
    var sliderLoader = "";

    if (activateLoader || ShowLoader2) {
        autoSlideDisplay = "block";
        sliderLoader = "superloaderAutoSliderFast";
    } else {
        autoSlideDisplay = "none";
        sliderLoader = "";
    }

    ////////////////////////////////////////////






    const isEdge = /Edg/i.test(navigator.userAgent);
    const isFirefox = /Firefox/i.test(navigator.userAgent);


    const [ClikHeader, setClikHeader] = useState('');


    const Timerll = useRef<ReturnType<typeof setTimeout> | null>(null);



    useEffect(() => {

        if (Timerll.current) {
            clearTimeout(Timerll.current);
        }


        Timerll.current = setTimeout(() => {
            if (memeberPageidReducer === 0) {
                setClikHeader('Feeds')
            } else {
                setClikHeader(`${MemberProfileData.username}'s Page`)
            }

        }, 1500);

    }, [MemberProfileData, memeberPageidReducer])


    const postDivRef = useRef<any[]>([]);
    const postDivRefRoll = useRef<any[]>([]);
    const tyTimer = useRef<ReturnType<typeof setTimeout>[]>([]);

    const [indexRoll, setindexRoll] = useState(0);
    const [AllowRoll, setAllowRoll] = useState(false);






    const scrollToRef = useCallback(() => {



        if (StopMini) { } else {



            setShowBigPlay(true);
            var Limit: number = postData.length;

            var Time = 0;

            var indd = indexRoll;
            if (miniProfile) { indd = 0; }


            for (let i = 0; i <= Limit; i++) {  // <= 20 to include the reset to the first post
                if (i > indd) {
                    Time = Time + 5000;
                    setShowBigPlay(true);

                    tyTimer.current[i] = setTimeout(() => {

                        if (i === Limit) {
                            // Reset to the first post after reaching the last post
                            postDivRefx.current[Limit < 3 ? Limit - 1 : Limit - 3].scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                            //
                            postDivRefRoll.current[Limit < 3 ? Limit - 1 : Limit - 3].scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                            setShowBigPlay(false);
                        } else {


                            postDivRefx.current[i].scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                            //
                            postDivRefRoll.current[i].scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }


                    }, Time - 8000);
                }
            }

        }

    }, [AllowRoll, indexRoll, postData, StopMini, miniProfile]);


    return (
        <>



            <LoaderPost RandomColor={RandomColor} autoSlideDisplay={autoSlideDisplay} sliderLoader={sliderLoader} />

            <Grid container className="dontallowhighlighting" style={{}}>






                <Billboard
                    setsnapallow={setsnapallow}
                    snapallow={snapallow}
                    minimise={minimise}
                    sliderIndex={sliderIndex}
                    setSliderIndex={setSliderIndex}
                    setshowModalFormMenu={setShowModalFormMenu}
                    showModalFormMenu={showModalFormMenu}
                    postData={postData}
                    setconnectTemplateGo={setconnectTemplateGo}
                    setDiscussionImage={setDiscussionImage}
                    setCommentPostid={setCommentPostid}
                    billdefaultbill={billdefaultbill}
                    billboardserverswitch={billboardserverswitch}
                    OpenModalForm={OpenModalForm}
                    click={click}
                    billboardx={billboardx}
                    x={x}
                />
                <Grid item md={12} style={{ height: '0px', }}></Grid>

                <Grid
                    item
                    xs={12}
                    style={{ padding: "0px", height: "0px" }}
                ></Grid>
                <Grid
                    item
                    ref={getSliderWidthRef}
                    xs={2}
                    md={1}
                    style={{ padding: "0px" }}
                ></Grid>
                <Grid
                    item
                    xs={12}
                    style={{ padding: "0px", height: "0px" }}
                ></Grid>
                <Grid
                    item
                    component={Box}
                    display={{ xs: "none", md: "block" }}
                    md={2}
                ></Grid>

                <Grid item xs={5} md={3} style={{ padding: "0px" }}>
                    {" "}
                    <Grid
                        item
                        xs={12}
                        style={{
                            position: "relative",
                            width: widthProfilePic,
                            height: "auto",
                            marginLeft: leftProfilePic,
                            top: topProfilePic,
                            zIndex: 3,
                        }}
                    >
                        <Grid
                            onClick={() => {
                                if (Added === 1) {
                                    callDelfav();
                                } else if (Added === 0) {
                                    callAddfav();
                                }
                            }}
                            className={ShowBigPlay ? `blinkingxx    ${optionsClass}   ` : `   ${optionsClass}   `}
                            style={{
                                zIndex: 2,


                                backgroundImage: idReducer === memeberPageidReducer ? `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :
                                    `linear-gradient(45deg, ${RandomColor}, ${ColorMemberReducer})`,
                                left: `${profileImagethumbLeft}px`,
                                top: `${profileImagethumbTop}px`,
                                opacity: 0.7,
                                visibility: showModalFormMenu ? 'hidden' : "visible",

                            }}
                        >
                            <Connect
                                fontOptions={fontOptions}
                                Added={Added}
                                setAdded={setAdded}
                                connect={1}
                                PostCon={0}
                                Comment={0}
                                Reaction={0}
                                Profile={0}
                                Mini={0}
                            />{" "}
                        </Grid>
                        <img
                            ref={profileImagethumb}
                            onLoad={calculateconnectPosition}
                            onClick={() => {

                                if (idReducer === GuestReducer) {
                                    dispatch(UpdateSign(true));
                                } else {
                                    BiographyClickNew()
                                }


                            }}
                            className={
                                darkmodeReducer
                                    ? `image-gray-on-click`
                                    : `image-gray-on-click`
                            }
                            style={{
                                cursor: "pointer",
                                position: "absolute",
                                zIndex: 1,
                                objectFit: "contain",
                                width: "100%",
                                left: showModalFormMenu ? '30vw' : "0px",
                                top: showModalFormMenu ? '-30vh' : "0px",
                                borderRadius: "50%",
                                margin: "auto",
                                filter: "blur(4px)",
                                visibility: matchMobile && showModalFormMenu ? 'hidden' : 'visible',
                            }}

                            src={`${REACT_APP_CLOUNDFRONT}${imageReducerThumb}`}
                            alt="Superstarz Billboard "
                        />

                        <img
                            ref={profileImageR}
                            onClick={() => {

                                if (idReducer === GuestReducer) {
                                    dispatch(UpdateSign(true));
                                } else {
                                    BiographyClickNew()
                                }


                            }}
                            className={
                                darkmodeReducer
                                    ? `turprofileLight image-gray-on-click`
                                    : ` turprofileDark image-gray-on-click`
                            }
                            style={{
                                cursor: "pointer",
                                position: "absolute",

                                zIndex: 1,
                                objectFit: "contain",
                                width: "100%",
                                borderRadius: "50%",
                                left: showModalFormMenu ? '30vw' : "0px",
                                top: showModalFormMenu ? '-30vh' : "0px",
                                margin: "auto",
                                visibility: matchMobile && showModalFormMenu ? 'hidden' : 'visible',
                            }}



                            src={`${REACT_APP_CLOUNDFRONT}${imageReducer}`}
                            alt="Superstarz Billboard "
                        />
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={7}
                    md={5}
                    style={{
                        position: "relative",
                        height: "20vh",
                        paddingLeft: matchPc
                            ? "25px"
                            : "24px",
                        marginTop: "-0.5vh",
                        zIndex: 1,


                    }}
                >


                    <OptionsSlider
                        ScrollIndexPusher={ScrollIndexPusher}
                        PostPagenumPusher={PostPagenumPusher}

                        setIdReactRouterAsInt={setIdReactRouterAsInt}
                        setScrollReactRouter={setScrollReactRouter}


                        postDatax={ActualpostDataAll}
                        RandomColor={RandomColor}
                        setUploadGPT={setUploadGPT}
                        selectedImage={selectedImage}
                        setselectedImage={setselectedImage}
                        setsuperSettings={setsuperSettings}
                        typeUpload={0}
                        showModalUpload={showModalUpload}
                        OpenUploadModal={OpenUploadModal}
                        sethaltedTop={blank}
                        typeTop={false}
                        getSliderWidth={getSliderWidth}
                    />




                </Grid>







                <Grid item className="zuperxyinfotext" xs={12} style={{
                    padding: '0px',
                    top: matchTablet || matchMobile ? "1vh" : '2vh',
                    position: 'relative',
                    paddingBottom: miniProfile ? matchMobile ? '1vh' : '5vh'
                        : matchMobile ? '5vh' : '15vh',
                    textAlign: 'left',
                    color: '#ffffff'
                }}>




                    <Grid ref={pagePostScroll} item className="zuperxyinfotext" xs={12} style={{
                        padding: '0px',
                        top: matchMobile ? "10vh" : '17vh',
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: 1,
                        fontSize: matchMobile ? "3.6vh" : "4vh",
                        color: '#ffffff'
                    }}>


                        <span style={{ padding: '0px', marginLeft: matchMobile ? "10vw" : '20vw' }}>
                            <LanguageIcon />
                            {ClikHeader}
                        </span>


                    </Grid>

                    <img

                        src={`${REACT_APP_CLOUNDFRONT}${RandomFromPostData}`}
                        alt="Discover"
                        style={{
                            cursor: "pointer",
                            boxShadow: darkmodeReducer
                                ? "0 0 1px #555555"
                                : "0 0 0.1px #222222",
                            width: "100%",
                            scrollSnapAlign: snapallow ? 'none' : "start",
                            height: matchMobile ? '18vh' : "30vh",
                            padding: "0px",
                            objectFit: "cover",
                            borderRadius: "0px",
                            filter: 'brightness(91%)',
                            opacity: 1,
                            transition: "transform 0.1s",
                        }}
                    />

                </Grid>





                {
                    ShowmaxPost ? (
                        <Grid
                            container
                            style={{
                                height: "100%",
                                position: "fixed",
                                top: "0vh",
                                zIndex: 99,
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                style={{
                                    padding: "0px",
                                    margin: "auto",
                                }}
                            >
                                <span
                                    className={
                                        darkmodeReducer
                                            ? "dialog-container tur"
                                            : "dialog-container tur"
                                    }
                                    style={{
                                        height: "30px",
                                        width: "90px",
                                        borderRadius: "00px",
                                        backgroundColor: "#00ccff",
                                        margin: "auto",
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            marginTop: "8px",
                                        }}
                                    >
                                        {" "}
                                        max 1
                                    </span>
                                </span>
                            </Grid>
                        </Grid>
                    ) : null
                }



                <Grid item xs={12} style={{
                    height: "0px",
                    width: '100%', position: "fixed", zIndex: 6, padding: "0px", paddingRight: '6.3vw', textAlign: 'right', bottom: '6vh',
                    opacity: '0.85', visibility: postData ? limit === 0 ? 'hidden' : shownav ? 'visible' : 'hidden' : 'hidden'
                }}>
                    <ExpandLessIcon
                        onClick={() => {

                            setminiProfile(false);
                            dispatch(UpdateLoader(true));
                            //setshowThisComponenet(true);


                            callPaginationx();

                        }}
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            fontSize:
                                matchTablet || matchMobile ? "4.8vh" : "2.9vw",
                            marginTop: '-6vh', padding: "0px",
                            display: 'none'
                        }}
                    />


                </Grid>






                {/*///////////////////////////////////////////////////////////////////////////////// FEEDS   1*/}
                {
                    showData1 ? (
                        <Grid ref={paperPostScrollRefMini} item xs={12} style={{
                            position: "relative", zIndex: 1, padding: "0px",

                        }}>
                            <ProfileSetup

                                setsnapallow={setsnapallow}
                                snapallow={snapallow}

                                setScrollIndexPusher={setScrollIndexPusher}
                                PostPagenumPusher={PostPagenumPusher}
                                ScrollReactRouter={ScrollReactRouter}
                                setScrollReactRouter={setScrollReactRouter}
                                setIdReactRouterAsInt={setIdReactRouterAsInt}
                                setminimise={setminimise}
                                minimise={minimise}
                                pagePostScroll={pagePostScroll}
                                profileDataHold={profileDataHold}
                                sethistoryScrollonload={sethistoryScrollonload}
                                RandomColor={RandomColor}
                                ActualpostDataAll={ActualpostDataAll}
                                PostPageLimit={postPageLimit}
                                setupTop={setupTop}
                                CallMorePages={CallMorePages}
                                showData2={showData2}
                                setuptype={1}
                                setcallResponse={setcallResponse1}
                                callResponse={callResponse1}
                                ActualData={ActualpostDataAll}
                                ActualPagenum={ActualPagenum}
                                setPostPageLimit={setPostPageLimit}
                                setPostData={setPostData1}
                                setshowProfiileData={setshowProfiileData}
                                showProfiileData={showProfiileData}
                                setindexRoll={setindexRoll}
                                postDivRefRoll={postDivRefRoll}
                                postDivRefx={postDivRefx}
                                setlatestInview={setlatestInview}
                                WebsiteMode={WebsiteMode}
                                setkeypost={setkeypost}
                                historyScrollonload={historyScrollonload}
                                callhistoryModal={callhistoryModal}
                                openmodalhistory={openmodalhistory}
                                clikplay={clikplay}
                                ShowBigPlay={ShowBigPlay}
                                setShowBigPlay={setShowBigPlay}
                                callPagination={callPagination}
                                StopMini={StopMini}
                                setStopMini={setStopMini}
                                ShowLoader2={ShowLoader2}
                                setShowLoader2={setShowLoader2}
                                setscrollLocation={setscrollLocation}
                                showThisComponenet={showThisComponenet}
                                setshowThisComponenet={setshowThisComponenet}
                                ScrollTo={ScrollTo}
                                settypeEmo={settypeEmo}
                                setconnectTemplateGo={setconnectTemplateGo}
                                setminiProfile={setminiProfile}
                                miniProfilexx={miniProfile}
                                sliderIndexMini={sliderIndexMini}
                                setSliderIndexMini={setSliderIndexMini}
                                zoomClickedIndex={zoomClickedIndex}
                                setzoomClickedIndex={setzoomClickedIndex}
                                setStopBodyScroll={setStopBodyScroll}
                                setCommentPostid={setCommentPostid}
                                setDiscussionImage={setDiscussionImage}
                                setx={setx}
                                OpenModalForm={OpenModalForm}
                                postData={postData1}
                                paperPostScrollRef={paperPostScrollRef}
                            />

                        </Grid>
                    ) : null
                }





            </Grid >

        </>
    );
}

export const ProfileGate = React.memo(ProfileGatex);
