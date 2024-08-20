import { Grid } from "@mui/material";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import { matchMobile } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

interface ExplainItPreviewProps {
    initialSteps: any[];
    AImodel: number;
    promptx: any;
    setloader: any;
    loaderx: any;
}

const ExplainItPreview: React.FC<ExplainItPreviewProps> = ({
    initialSteps,
    AImodel,
    promptx,
    setloader,
    loaderx,
}) => {
    const {
        REACT_APP_SUPERSTARZ_URL,
        REACT_APP_CLOUNDFRONT,
        REACT_APP_APPX_STATE,
    } = process.env;

    const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timervv2 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timervv3 = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [loader, setLoader] = useState(false);
    const [IsPlayingBlock, setIsPlayingBlock] = useState(false);
    const [ExplainItIMG, setExplainItIMG] = useState(["", "", "", "", "", "",]);
    const [ExplainItLoaded, setExplainItLoaded] = useState(
        Array(initialSteps.length).fill(0) // Dynamic based on initialSteps length
    );
    const [audioURLs, setAudioURLs] = useState<string[]>([]);

    const [isPlaying, setIsPlaying] = useState(false);
    const [stopObserve, setstopObserve] = useState(false);
    const [showPla, setshowPla] = useState(true);
    const [currentIndex, setCurrentIndex] = useState<number | null>(0);
    const [sanitizedSteps, setSanitizedSteps] = useState<string[]>([]); // New state for sanitized steps

    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const observerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

    const [Total, setTotal] = useState(1);
    const [pxResolution, setpxResolution] = useState("");

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
        id,
        image,
        username,
        quote,
        billboard1,
        billboard2,
        billboardthumb1,
        billboardthumb2,
        fans,
        favorites,
        memeberPageid,
        MemberProfileData,
        billboardstate,
        reg,
        imageThumb,
    } = useSelector((state: RootStateReducerImage) => ({
        ...state.UserdataReducer,
    }));

    const idReducer = id;

    const [Datall, setDatall] = useState({
        topic: 'Explain It',
        caption: promptx,
        id: idReducer,
        all: '',
        I1x: 0,
        I1y: 0,
        I1bx: 0,
        I1by: 0,
        I2x: 0,
        I2y: 0,
        I2bx: 0,
        I2by: 0,
        I3x: 0,
        I3y: 0,
        I3bx: 0,
        I3by: 0,
        rad1: 0,
        rad2: 0,
        vid1: '',
        vid2: '',
        vid1backup: '',
        vid2backup: '',
        interacttype1: 0,
        interacttype2: 0,

        im2: '',

        mode: 1,
        x1: "",
        xt1: sanitizedSteps[0],
        x2: "",
        xt2: sanitizedSteps[1],
        x3: "",
        xt3: sanitizedSteps[2],
        x4: "",
        xt4: sanitizedSteps[3],
        x5: "",
        xt5: sanitizedSteps[4],
        x6: "",
        xt6: sanitizedSteps[5],
    });

    // Ref to hold blobs
    const hdBlobsRef = useRef<Blob[]>([]); // Using useRef to hold the blobs

    // Refs to hold image elements
    const imageRefs = useRef<HTMLImageElement[]>([]); // Create an array of refs

    // Function to split text into chunks
    const splitText = (text: string, chunkSize: number = 600) => {
        const sentences = text.split(". ");
        const chunks = [];
        let currentChunk = "";

        sentences.forEach((sentence) => {
            if ((currentChunk + sentence).length > chunkSize) {
                chunks.push(currentChunk.trim());
                currentChunk = sentence;
            } else {
                currentChunk += sentence + ". ";
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
    }, [initialSteps]);

    useEffect(() => {
        setshowPla(false);
        if (Timervv3.current) {
            clearTimeout(Timervv3.current);
        }
        Timervv3.current = setTimeout(() => {
            setshowPla(true);
        }, 3000);

        // Sanitize initialSteps and set the sanitizedSteps state
        setSanitizedSteps(initialSteps.map((step) => step.replace(/\*/g, "")));
    }, [initialSteps, isPlaying]);

    const synthesizeSpeech = useCallback(
        (textx: any, index: any) => {
            var text = textx;

            text = text.replace(/\*\*.*?\*\*:/, "").trim();
            text = text.replace(/[^a-zA-Z0-9\s]/g, ""); // Retain letters, numbers, and spaces

            if ("speechSynthesis" in window) {
                const chunks = splitText(text, 600);
                let chunkIndex = 0;

                const speakNextChunk = (currentIndexx: any) => {
                    if (chunkIndex < chunks.length) {
                        const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex]);
                        utterance.lang = "en-GB";
                        utterance.rate = 0.83; // Set the speech rate to 0.75

                        const setVoice = () => {
                            const voices = window.speechSynthesis.getVoices();
                            const femaleVoice = voices.find(
                                (voice) => voice.lang === "en-GB" && voice.name.includes("Female")
                            );

                            if (femaleVoice) {
                                utterance.voice = femaleVoice;
                            } else {
                                console.warn("No female voice found for en-GB. Using default voice.");
                            }

                            utterance.onend = () => {
                                console.log("Speech synthesis complete");
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
                                            /// handleNext(currentIndexx);
                                        }
                                    }, 1000);
                                }
                            };

                            utterance.onerror = (event) => {
                                console.error("Speech synthesis error:", event.error);
                            };

                            utterance.onpause = () => {
                                console.log("Speech synthesis paused");
                            };

                            utterance.onresume = () => {
                                console.log("Speech synthesis resumed");
                            };

                            utterance.onstart = () => {
                                console.log("Speech synthesis started");
                            };

                            utterance.onboundary = (event) => {
                                console.log("Speech synthesis boundary reached:", event.name);
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
                console.error("Web Speech API is not supported in this browser.");
            }
        },
        [currentIndex, initialSteps, audioURLs]
    );

    const handleNext = useCallback(
        (currentIndexxx: any) => {
            if (matchMobile) {
            } else {
                setstopObserve(true);
            }

            if (Timervv2.current) {
                clearTimeout(Timervv2.current);
            }
            Timervv2.current = setTimeout(() => {
                setstopObserve(false);
            }, 400);

            if (sanitizedSteps.length - 1 === currentIndexxx) {
                setIsPlaying(false);
                window.speechSynthesis.cancel();

                // Detect when all images are generated
                ///  if (ExplainItLoaded.every((status) => status === 1)) {

            } else {
                if (currentIndexxx !== null && currentIndexxx < sanitizedSteps.length - 1) {
                    const nextIndex = currentIndexxx + 1;
                    setCurrentIndex(nextIndex);

                    if (audioURLs[nextIndex]) {
                        synthesizeSpeech(audioURLs[nextIndex], nextIndex);
                    }

                    document
                        .querySelector(`[data-index='${nextIndex}']`)
                        ?.scrollIntoView({ behavior: "smooth" });
                }
            }
        },
        [sanitizedSteps, audioURLs, ExplainItLoaded]
    );

    const CallImageDesign = async (
        x: number,
        pp: any,
        index: number,
        prompt: any
    ) => {
        if (index === initialSteps.length) {
            setIsPlayingBlock(false);
        }

        try {
            let response;
            if (x === 2) {
                response = await Axios.post(
                    `${REACT_APP_SUPERSTARZ_URL}/ChatGPTApiDesign3`,
                    { pp, prompt }
                );
            } else {
                response = await Axios.post(
                    `${REACT_APP_SUPERSTARZ_URL}/ChatGPTApiDesign4`,
                    { pp, prompt }
                );
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

            setAudioURLs((prevState) => {
                const newState = [...prevState];
                newState[index] = pp;
                return newState;
            });
        } catch (error: any) {
            console.error("Error:", error.message);
        }
    };

    const Save = useCallback((index: number) => {
        if (initialSteps.length - 1 === index) {
            uploadImagesToS3();
        }
    }, [initialSteps]);

    const GenerateImageGpt = useCallback(
        async (i: number, pp: any) => {
            const par = { prompt: pp, n: Total, size: pxResolution };
            console.log("go to backend dalle");

            try {
                const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/DalleApi`, {
                    values: par,
                });
                if (response.data.message === "Done") {
                    const imageD = response.data.payload.data[0].url;
                    setLoader(false);
                    setExplainItIMG((prevState) => {
                        const newState = [...prevState];
                        newState[i] = imageD;
                        return newState;
                    });
                    setExplainItLoaded((prevState) => {
                        const newState = [...prevState];
                        newState[i] = 1;
                        return newState;
                    });

                    Save(i);
                }
            } catch (error) {
                setLoader(false);
                console.log(error);
            }
        },
        [Total, pxResolution]
    );


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

            Save(i);

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

    const handleGenerateImageSDXLHUGG = (i: any, pp: any) => {
        const model = "stable-diffusion-3-medium";
        const height = 512;
        const width = 512;
        GenerateImageStableSDXLHUGG(i, pp, model, height, width);
    };

    const GenerateImageStableSDXLHUGG = useCallback(
        async (i, pp, model, height, width) => {
            setLoader(true);
            const params = {
                prompt: pp,
                model,
                height,
                width,
                steps: 40,
                high_noise_frac: 0.8
            };

            console.log("Sending request with params:", params); // Log the params

            const maxRetries = 3;
            let attempt = 0;

            while (attempt < maxRetries) {
                try {
                    const response = await Axios.post(
                        `http://192.168.0.39:8000/generate`,
                        params,
                        {
                            timeout: 120000,
                            withCredentials: true,  // Include credentials in the request
                            headers: {
                                'Content-Type': 'application/json',  // Ensure the content type is set
                            }
                        }
                    );

                    console.log("Image response:", response.data); // Log the response data

                    const url = `data:image/png;base64,${response.data.image}`;
                    setExplainItIMG((prevState) => {
                        const newState = [...prevState];
                        newState[i] = url;
                        return newState;
                    });
                    setExplainItLoaded((prevState) => {
                        const newState = [...prevState];
                        newState[i] = 1;
                        return newState;
                    });

                    break; // Exit loop on success

                } catch (error) {
                    console.error("Error generating image:", error);
                    attempt += 1;

                    if (attempt >= maxRetries) {
                        console.error("Max retries reached, could not generate image.");
                    }
                } finally {
                    setLoader(false);
                }
            }
        },
        []
    );

    const GenerateImageStable3 = useCallback(
        async (i: number, pp: any) => {
            setLoader(true);
            const par = { prompt: pp };

            try {
                const response = await Axios.post(
                    `${REACT_APP_SUPERSTARZ_URL}/StableDiffusionApi`,
                    { values: par },
                    { responseType: "blob" }
                );
                const url = URL.createObjectURL(new Blob([response.data]));
                setExplainItIMG((prevState) => {
                    const newState = [...prevState];
                    newState[i] = url;
                    return newState;
                });
                setExplainItLoaded((prevState) => {
                    const newState = [...prevState];
                    newState[i] = 1;
                    return newState;

                });

                Save(i);

            } catch (error) {
                console.error("Error generating image:", error);
            } finally {
                setLoader(false);
            }
        },
        []
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        if (isPlaying && audioURLs[index]) {
                            window.speechSynthesis.cancel();
                            synthesizeSpeech(audioURLs[index], index);
                        }
                    }
                });
            },
            { threshold: 1.0 } // Adjusted threshold to 1.0 to ensure full image is in view
        );

        const imageElements = document.querySelectorAll(".explain-it-img");
        imageElements.forEach((img) => observer.observe(img));

        return () => {
            imageElements.forEach((img) => observer.unobserve(img));
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
        if (IsPlayingBlock) {
        } else {
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
        }
    };

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

    ///
    const uploadImagesToS3 = async () => {
        try {
            console.log("All images are generated, uploading to S3...");
            hdBlobsRef.current = []; // Reset the ref to collect new blobs

            // Create blobs for each image from the refs
            const blobPromises = imageRefs.current.map((img, index) => {
                if (!img) {
                    console.error(`Image ref at index ${index} is null.`);
                    return null;
                }

                return fetch(img.src)
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`Failed to fetch image ${index}: ${res.statusText}`);
                        }
                        return res.blob();
                    })
                    .then((blob) => {
                        if (blob.size === 0) {
                            throw new Error(`Blob is empty for image ${index}`);
                        }
                        hdBlobsRef.current[index] = blob; // Store the blob in the ref
                        return blob;
                    })
                    .catch((err) => {
                        console.error("Error creating blob:", err);
                        return null; // Return null for failed fetches
                    });
            });

            // Wait for all blob promises to resolve
            const hdBlobs = await Promise.all(blobPromises);

            // Filter out any failed blobs (null) using a type guard
            const validBlobs = hdBlobs.filter((blob): blob is Blob => blob !== null);

            if (validBlobs.length === imageRefs.current.length) {
                // All blobs are ready
                await GetSecureURL(validBlobs); // Pass blobs to GetSecureURL
            } else {
                console.error("Some images failed to fetch.");
            }
        } catch (error) {
            console.error("Error during image upload process:", error);
        }
    };

    const GetSecureURL = async (hdBlobs: Blob[]) => {
        try {
            const response = await Axios.post(
                `${REACT_APP_SUPERSTARZ_URL}/get_signed_url_4upload_Explain`,
                {
                    values: { count: hdBlobs.length },
                }
            );

            const holder = response.data.holder;

            // Verify the holder contains the correct number of URLs
            if (!holder || holder.length !== hdBlobs.length) {
                console.error("Mismatch between blobs and signed URLs.");
                return;
            }

            // Upload images using obtained URLs
            hdBlobs.forEach((blob, index) => {
                PutImageInS3WithURL(holder, blob, index);
            });
        } catch (error) {
            console.error("Error getting signed URLs:", error);
        }
    };

    const PutImageInS3WithURL = useCallback(
        (holder: any, blob: Blob, index: number) => {
            try {
                const urlx = holder[index].urlHD; // Use the appropriate URL for your needs

                console.log(`Uploading image ${index + 1} to ${urlx} with content type ${blob.type}`);

                Axios.put(urlx, blob, {
                    headers: {
                        "Content-Type": blob.type || 'application/octet-stream', // Fallback to generic binary if type is undefined
                    },
                })
                    .then((response) => {
                        console.log(`Image ${index + 1} uploaded successfully.`);

                        // Check if the response status is 200
                        if (response.status === 200) {
                            // Extract the image URL from the urlx
                            let imagelink = urlx.split("?")[0];
                            let imagelinkjj = imagelink.split("/").pop();

                            // Update state with image URLs based on index
                            setDatall((prevState) => {
                                const newState = { ...prevState };

                                switch (index) {
                                    case 0:
                                        newState.x1 = imagelink;
                                        newState.xt1 = initialSteps[index];
                                        newState.im2 = imagelinkjj;
                                        break;
                                    case 1:
                                        newState.x2 = imagelink;
                                        newState.xt2 = initialSteps[index];
                                        break;
                                    case 2:
                                        newState.x3 = imagelink;
                                        newState.xt3 = initialSteps[index];
                                        break;
                                    case 3:
                                        newState.x4 = imagelink;
                                        newState.xt4 = initialSteps[index];
                                        break;
                                    case 4:
                                        newState.x5 = imagelink;
                                        newState.xt5 = initialSteps[index];
                                        break;
                                    case 5:
                                        newState.x6 = imagelink;
                                        newState.xt6 = initialSteps[index];
                                        break;
                                    default:
                                        break;
                                }

                                return newState;
                            });
                        } else {
                            console.error(`Upload failed for image ${index + 1}:`, response.statusText);
                        }
                    })
                    .catch((error) => {
                        console.error(`Error uploading image ${index + 1} to S3:`, error);
                    });
            } catch (error) {
                console.error(`Error in PutImageInS3WithURL for image ${index + 1}:`, error);
            }
        },
        [Datall, sanitizedSteps, setDatall, initialSteps] // Add dependencies here if needed
    );


    const calldatabase = useCallback(() => {
        Axios.post(`${process.env.REACT_APP_SUPERSTARZ_URL}/post_upload_dataX`, {
            values: Datall,
        })
            .then((response) => {
                console.log(response);
                //alert('Data saved successfully!');
            })
            .catch((error) => {
                console.log(error);
            });
    }, [Datall]);

    // Use effect to check if all image links are updated
    useEffect(() => {
        // Check if all images have been uploaded
        if (
            Datall.x1 &&
            Datall.x2 &&
            Datall.x3 &&
            Datall.x4 &&
            Datall.x5 &&
            Datall.x6
        ) {
            // Call the database function if all images are uploaded
            setTimeout(() => {
                calldatabase();
            }, 200);
        }
    }, [Datall, calldatabase]); // Include dependencies

    return (
        <>
            {isPlaying ? (
                <PlayArrowIcon
                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                        fontSize: matchMobile ? "8vh" : "4.2vw",
                        position: "relative",
                        top: matchMobile ? "22vh" : "17vh",
                        left: "5vw",
                        zIndex: 50,
                        visibility: showPla ? "hidden" : "visible",
                    }}
                />
            ) : (
                <PauseIcon
                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                        fontSize: matchMobile ? "8vh" : "4.2vw",
                        position: "relative",
                        top: matchMobile ? "22vh" : "17vh",
                        left: "5vw",
                        zIndex: 50,
                        visibility: showPla ? "hidden" : "visible",
                    }}
                />
            )}

            <Grid
                item
                xs={12}
                style={{
                    padding: "0px",
                    height: "auto",
                    margin: "auto",
                    backgroundColor: "",
                    overflowX: "scroll",
                    overflowY: "hidden",
                    display: "flex",
                    scrollSnapType: "x mandatory",
                    marginTop: matchMobile ? "10vh" : "0px",
                    paddingRight: matchMobile ? "0px" : "10%",
                }}
            >
                {dummyImages.map((src, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={matchMobile ? (stopObserve ? "" : "explain-it-img") : ""}
                        style={{
                            minWidth: matchMobile ? "90vw" : "40vw",
                            height: matchMobile ? "auto" : "auto",
                            position: "relative",
                            scrollSnapAlign: "start",
                            marginRight: matchMobile ? "0px" : "5px",
                        }}
                        onClick={() => handleImageClick(index)}
                    >
                        <img
                            ref={(el) => (imageRefs.current[index] = el!)} // Assign ref to the image element
                            className={loaderx ? "blinkenx" : ""}
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
                                    }, 7000 * index);
                                }
                            }}
                            alt={`Slide ${index + 1}`}
                            style={{
                                marginLeft: matchMobile ? "0px" : "10%",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                cursor: "pointer",
                                filter: loaderx ? "grayscale(100%)" : "",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: matchMobile ? "1vh" : "10px",
                                left: "55%",
                                transform: "translateX(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                padding: "10px",
                                borderRadius: "5px",
                                textAlign: "center",
                                width: "90%",
                                fontSize: matchMobile ? "0.9rem" : "1.6rem",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                display: loaderx ? "none" : "block",
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
