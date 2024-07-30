import { Grid } from '@mui/material';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Axios from "axios";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { setTimeout } from 'timers';
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

interface ExplainItPreviewProps {
    initialSteps: any[];
    AImodel: number;
    promptx: any;
    setloader: any;
    loaderx: any
}

const ExplainItPreview: React.FC<ExplainItPreviewProps> = ({ initialSteps, AImodel, promptx, setloader, loaderx }) => {

    const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;
    const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timervv2 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timervv3 = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [loader, setLoader] = useState(false);
    const [ExplainItIMG, setExplainItIMG] = useState(['', '', '', '', '', '', '', '', '', '']);
    const [ExplainItLoaded, setExplainItLoaded] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [audioURLs, setAudioURLs] = useState<string[]>([]);

    const [isPlaying, setIsPlaying] = useState(false);
    const [stopObserve, setstopObserve] = useState(false);
    const [showPla, setshowPla] = useState(true);
    const [currentIndex, setCurrentIndex] = useState<number | null>(0);
    const [sanitizedSteps, setSanitizedSteps] = useState<string[]>([]); // New state for sanitized steps

    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const observerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

    const [Total, setTotal] = useState(1);
    const [pxResolution, setpxResolution] = useState('');

    // Function to split text into chunks
    const splitText = (text: string, chunkSize: number = 600) => {
        const sentences = text.split('. ');
        const chunks = [];
        let currentChunk = '';

        sentences.forEach(sentence => {
            if ((currentChunk + sentence).length > chunkSize) {
                chunks.push(currentChunk.trim());
                currentChunk = sentence;
            } else {
                currentChunk += sentence + '. ';
            }
        });

        if (currentChunk) {
            chunks.push(currentChunk.trim());
        }

        return chunks;
    };

    useEffect(() => {
        setIsPlaying(false);
        window.speechSynthesis.cancel();
    }, [initialSteps])

    useEffect(() => {
        setshowPla(false);
        if (Timervv3.current) {
            clearTimeout(Timervv3.current);
        }
        Timervv3.current = setTimeout(() => {
            setshowPla(true);
        }, 3000);

        // Sanitize initialSteps and set the sanitizedSteps state
        setSanitizedSteps(initialSteps.map(step => step.replace(/\*/g, '')));
    }, [initialSteps, isPlaying]);

    const synthesizeSpeech = useCallback((textx: any, index: any) => {
        var text = textx;

        text = text.replace(/\*\*.*?\*\*:/, '').trim();
        text = text.replace(/[^a-zA-Z0-9\s]/g, ''); // Retain letters, numbers, and spaces



        if (matchMobile) { }
        else {
            document.querySelector(`[data-index='${index}']`)?.scrollIntoView({ behavior: 'smooth' });
        }
        if ('speechSynthesis' in window) {
            const chunks = splitText(text, 600);
            let chunkIndex = 0;

            const speakNextChunk = (currentIndexx: any) => {
                if (chunkIndex < chunks.length) {
                    const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex]);
                    utterance.lang = 'en-GB';
                    utterance.rate = 0.83; // Set the speech rate to 0.75

                    const setVoice = () => {
                        const voices = window.speechSynthesis.getVoices();
                        const femaleVoice = voices.find(voice => voice.lang === 'en-GB' && voice.name.includes('Female'));

                        if (femaleVoice) {
                            utterance.voice = femaleVoice;
                        } else {
                            console.warn('No female voice found for en-GB. Using default voice.');
                        }

                        utterance.onend = () => {
                            console.log('Speech synthesis complete');
                            chunkIndex++;
                            if (chunkIndex < chunks.length) {
                                speakNextChunk(currentIndexx);
                            } else {
                                if (Timervv.current) {
                                    clearTimeout(Timervv.current);
                                }
                                Timervv.current = setTimeout(() => {

                                    if (matchMobile) {


                                    } else {
                                        handleNext(currentIndexx);
                                    }

                                }, 1000);
                            }
                        };

                        utterance.onerror = (event) => {
                            console.error('Speech synthesis error:', event.error);
                        };

                        utterance.onpause = () => {
                            console.log('Speech synthesis paused');
                        };

                        utterance.onresume = () => {
                            console.log('Speech synthesis resumed');
                        };

                        utterance.onstart = () => {
                            console.log('Speech synthesis started');
                        };

                        utterance.onboundary = (event) => {
                            console.log('Speech synthesis boundary reached:', event.name);
                        };

                        window.speechSynthesis.cancel();

                        utteranceRef.current = utterance;
                        window.speechSynthesis.speak(utterance);
                    };

                    if (window.speechSynthesis.getVoices().length === 0) {
                        window.speechSynthesis.onvoiceschanged = setVoice;
                    } else {
                        setVoice();
                    }
                }
            };

            speakNextChunk(currentIndex);
        } else {
            console.error('Web Speech API is not supported in this browser.');
        }
    }, [currentIndex, initialSteps, audioURLs]);

    const handleNext = useCallback((currentIndex: any) => {
        if (matchMobile) { } else { setstopObserve(true); }

        if (Timervv2.current) {
            clearTimeout(Timervv2.current);
        }
        Timervv2.current = setTimeout(() => {
            setstopObserve(false);
        }, 700);

        if (sanitizedSteps.length - 1 === currentIndex) {
            setIsPlaying(false);
            window.speechSynthesis.cancel();
        } else {
            if (currentIndex !== null && currentIndex < sanitizedSteps.length - 1) {
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);

                if (audioURLs[nextIndex]) {
                    synthesizeSpeech(audioURLs[nextIndex], nextIndex);
                }


                document.querySelector(`[data-index='${nextIndex}']`)?.scrollIntoView({ behavior: 'smooth' });

            }
        }
    }, [currentIndex, sanitizedSteps, audioURLs]);

    useEffect(() => {

        if (matchMobile) { }
        else {
            setIsPlaying(true);
        }


    }, [initialSteps, matchMobile])

    const CallImageDesign = async (x: number, pp: any, index: number, prompt: any) => {
        try {
            let response;
            if (x === 2) {
                response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/ChatGPTApiDesign3`, { pp, prompt });
            } else {
                response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/ChatGPTApiDesign4`, { pp, prompt });
            }
            const { initialSteps: initial } = response.data;
            console.log(initial);

            if (AImodel === 0) {
                GenerateImageStable3(index, initial);
            } else if (AImodel === 1) {
                GenerateImageGpt(index, initial);
            } else if (AImodel === 2) {
                handleGenerateImageSDXL(index, initial);
            }

            setAudioURLs(prevState => {
                const newState = [...prevState];
                newState[index] = pp;
                return newState;
            });

        } catch (error: any) {
            console.error('Error:', error.message);
        }
    };

    const GenerateImageGpt = useCallback(async (i: number, pp: any) => {
        const par = { prompt: pp, n: Total, size: pxResolution };
        console.log("go to backend dalle");

        try {
            const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/DalleApi`, { values: par });
            if (response.data.message === "Done") {
                const imageD = response.data.payload.data[0].url;
                setLoader(false);
                setExplainItIMG(prevState => {
                    const newState = [...prevState];
                    newState[i] = imageD;
                    return newState;
                });
                setExplainItLoaded(prevState => {
                    const newState = [...prevState];
                    newState[i] = 1;
                    return newState;
                });
            }
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    }, [Total, pxResolution]);

    const GenerateImageStableSDXL = useCallback(async (i: number, pp: any, model: string, height: number, width: number) => {
        setLoader(true);
        const par = { prompt: pp, model, height, width };

        try {
            const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/StableDiffusionApisd`, { values: par }, { responseType: 'blob' });
            const url = URL.createObjectURL(new Blob([response.data]));
            setExplainItIMG(prevState => {
                const newState = [...prevState];
                newState[i] = url;
                return newState;
            });
            setExplainItLoaded(prevState => {
                const newState = [...prevState];
                newState[i] = 1;
                return newState;
            });
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setLoader(false);
        }
    }, []);

    const handleGenerateImageSDXL = (i: any, pp: any) => {
        const model = "stable-diffusion-xl-1024-v1-0";
        const height = 1024;
        const width = 1024;
        GenerateImageStableSDXL(i, pp, model, height, width);
    };

    const GenerateImageStable3 = useCallback(async (i: number, pp: any) => {
        setLoader(true);
        const par = { prompt: pp };

        try {
            const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/StableDiffusionApi`, { values: par }, { responseType: 'blob' });
            const url = URL.createObjectURL(new Blob([response.data]));
            setExplainItIMG(prevState => {
                const newState = [...prevState];
                newState[i] = url;
                return newState;
            });
            setExplainItLoaded(prevState => {
                const newState = [...prevState];
                newState[i] = 1;
                return newState;
            });
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setLoader(false);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0');
                    if (isPlaying && audioURLs[index]) {
                        window.speechSynthesis.cancel();
                        synthesizeSpeech(audioURLs[index], index);
                    }
                }
            });
        }, { threshold: 1.0 });  // Adjusted threshold to 1.0 to ensure full image is in view

        const imageElements = document.querySelectorAll('.explain-it-img');
        imageElements.forEach(img => observer.observe(img));

        return () => {
            imageElements.forEach(img => observer.unobserve(img));
        };
    }, [audioURLs, isPlaying]);

    const handlePlayButtonClick = () => {
        setIsPlaying(false);
        setIsPlaying(true);
        setCurrentIndex(0);
        if (audioURLs[0]) {
            synthesizeSpeech(audioURLs[0], 0);
        }
    };

    const handleImageClick = (index: number) => {
        if (currentIndex === index && isPlaying) {
            setIsPlaying(false);
            window.speechSynthesis.cancel();
        } else {

            setCurrentIndex(index);
            setIsPlaying(true);
            if (audioURLs[index]) {
                synthesizeSpeech(audioURLs[0], 0);
                synthesizeSpeech(audioURLs[index], index);
            }
        }
    };

    // GET LOGGED USER DATA FROM REDUX STORE
    interface RootStateReducerImage {
        UserdataReducer: {
            id: number;
            image: string;
            username: string;
            quote: string;
            billboard1: string;
            billboard2: string;
            billboardthumb1: string;
            billboardthumb2: string;
            fans: number;
            favorites: number;
            memeberPageid: number;
            MemberProfileData: any;
            billboardstate: number;
            reg: number;
            imageThumb: string;
        };
    }
    const {
        id, image, username, quote, billboard1, billboard2, billboardthumb1, billboardthumb2,
        fans, favorites, memeberPageid, MemberProfileData, billboardstate, reg, imageThumb
    } = useSelector((state: RootStateReducerImage) => ({ ...state.UserdataReducer }));

    const dummyImages = Array.from({ length: initialSteps.length }, (_, index) => `${REACT_APP_CLOUNDFRONT}${image}`);

    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;
            screenHeight: number;
            muteaudio: boolean;
            ActiveAudioIndex: number;
        };
    }

    const { screenHeight, darkmode, snapStart, muteaudio, ActiveAudioIndex } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;

    return (
        <>
            {isPlaying ? <PlayArrowIcon
                className={
                    darkmodeReducer
                        ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                }
                style={{
                    fontSize: matchMobile ? '8vh' : "4.2vw",
                    position: 'relative',
                    top: matchMobile ? '22vh' : '17vh',
                    left: '5vw',
                    zIndex: 50,
                    visibility: showPla ? 'hidden' : 'visible',
                }}
            /> : <PauseIcon
                className={
                    darkmodeReducer
                        ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                        : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                }
                style={{
                    fontSize: matchMobile ? '8vh' : "4.2vw",
                    position: 'relative',
                    top: matchMobile ? '22vh' : '17vh',
                    left: '5vw',
                    zIndex: 50,
                    visibility: showPla ? 'hidden' : 'visible',
                }}
            />}

            <Grid
                item
                xs={12}
                style={{
                    padding: "0px",
                    height: 'auto',
                    margin: "auto",
                    backgroundColor: '',
                    overflowX: 'scroll',
                    overflowY: 'hidden',
                    display: 'flex',
                    scrollSnapType: 'x mandatory',
                    marginTop: matchMobile ? '10vh' : '0px',
                }}
            >
                {dummyImages.map((src, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={stopObserve ? '' : matchMobile ? "explain-it-img" : 'explain-it-img'}
                        style={{
                            minWidth: matchMobile ? '90vw' : '700px',
                            height: matchMobile ? 'auto' : 'auto',
                            position: 'relative',
                            scrollSnapAlign: 'start',
                            marginRight: matchMobile ? '0px' : '10px'
                        }}
                        onClick={() => handleImageClick(index)}
                    >
                        <img
                            src={ExplainItIMG[index] ? ExplainItIMG[index] : src}
                            onLoad={() => {
                                if (sanitizedSteps[index]) {
                                    if (ExplainItLoaded[index] === 1) {
                                        if (initialSteps.length - 1 === index) {
                                            setloader(false);
                                        }
                                    }
                                    setTimeout(() => {
                                        if (ExplainItLoaded[index] === 0) {
                                            CallImageDesign(AImodel, sanitizedSteps[index], index, promptx);
                                        }
                                    }, 10000 * index);
                                }
                            }}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                filter: loaderx ? 'grayscale(100%)' : ''
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: matchMobile ? '1vh' : '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                width: '90%',
                                fontSize: matchMobile ? '0.9rem' : '1.6rem',
                                fontFamily: 'Arial, Helvetica, sans-serif'
                            }}
                        >
                            {sanitizedSteps[index]}
                        </div>
                    </div>
                ))}
            </Grid>
        </>
    );
};

export default React.memo(ExplainItPreview);
