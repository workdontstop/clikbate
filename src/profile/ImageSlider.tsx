import React, { useState, useRef, useEffect } from 'react';
import './GptCss.css';
import { useSelector } from 'react-redux';
import { matchMobile } from '../DetectDevice';

interface ImageSliderProps {
    RandomColor: string;
    FeedType: number
    setFeedType: any;
    Explainx: any;
    callPaginationx: any;
    ActualpostDataAll: any

}




const ImageSlider: React.FC<ImageSliderProps> = ({ RandomColor, FeedType, setFeedType, Explainx, callPaginationx, ActualpostDataAll }) => {


    const { REACT_APP_CLOUNDFRONT } = process.env;

    interface RootStateReducerImage {
        UserdataReducer: {
            billboard1: string;
            memeberPageid: number;
        };
    }

    const {
        billboard1, memeberPageid
    } = useSelector((state: RootStateReducerImage) => ({
        ...state.UserdataReducer,
    }));







    const images = [
        `${REACT_APP_CLOUNDFRONT}lisa-blackpink-v0-vat3v3pubew91.webp`,
        `${REACT_APP_CLOUNDFRONT}elon-musk-collecting-signatures-to-stop-ai-development-v0-5clnkr98nisa1.webp`,
        `${REACT_APP_CLOUNDFRONT}yj1odjcejc451.jpg`,
        `${REACT_APP_CLOUNDFRONT}2f61783767acb1d7823de5891ac01211.jpg`,
        `${REACT_APP_CLOUNDFRONT}0b5b23f942c2a6fa3cd88a77c5666bc2.jpg`,
    ];



    const textArray = memeberPageid ?
        ['Posts', 'Explain IT', 'Friends', 'Discover', 'Topics']
        : [' Feeds', 'Explain IT', 'Friends', 'Discover', 'Topics'];

    const [activeIndex, setActiveIndex] = useState<number | null>(FeedType);

    const [activeIndex2, setActiveIndex2] = useState<number>(0);

    const refs = useRef<(HTMLDivElement | null)[]>([]);


    const [imagedatapost, setimagedatapost] = useState('');

    const [imagedatapost2, setimagedatapost2] = useState('');



    useEffect(() => {

        setimagedatapost('');
        setimagedatapost2('');

    }, [memeberPageid])



    useEffect(() => {

        setActiveIndex(FeedType)

        if (ActualpostDataAll && ActualpostDataAll.length > 0) {
            // Generate a random number between 0 and ActualpostDataAll.length - 1
            const randomIndex = Math.floor(Math.random() * ActualpostDataAll.length);

            // Set the data with the randomly selected item
            if (FeedType === 0) {
                setimagedatapost(ActualpostDataAll[randomIndex].item2);
            }

            if (FeedType === 1) {
                setimagedatapost2(ActualpostDataAll[randomIndex].item2);
            }


        }



    }, [FeedType, ActualpostDataAll])

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



    function hexToRgb(hex: any) {
        hex = hex.replace('#', '');
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return [r, g, b];
    }

    function rgbToHex(r: any, g: any, b: any) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    function blendColors(color1: any, color2: any) {
        var rgb1 = hexToRgb(color1);
        var rgb2 = hexToRgb(color2);
        var blendedRgb = [
            Math.round((rgb1[0] + rgb2[0]) / 2),
            Math.round((rgb1[1] + rgb2[1]) / 2),
            Math.round((rgb1[2] + rgb2[2]) / 2)
        ];
        return rgbToHex(blendedRgb[0], blendedRgb[1], blendedRgb[2]);
    }




    var color1 = RandomColor;
    var color2 = colorReducer;
    var blendedColor = blendColors(color1, color2);



    const handleImageClick = (index: number) => {

        console.log(`Image ${index + 1} clicked again`);
        setActiveIndex(index);
        setFeedType(index);


        if (index === 0) {

            callPaginationx();
        }
        else if (index === 1) {



            Explainx();

        } else {


        }


        const imageContainer = refs.current[index];
        if (imageContainer) {
            const parent = imageContainer.parentElement;
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const childRect = imageContainer.getBoundingClientRect();
                const offset = childRect.left - parentRect.left - (parentRect.width / 2) + (childRect.width / 2);
                parent.scrollTo({
                    left: parent.scrollLeft + offset,
                    behavior: 'smooth'
                });
            }
        }






    };

    return (
        <div className={matchMobile ? "parent-containerx" : "parent-container"}>
            <div className="image-slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={matchMobile ? "image-containerx" : "image-container"}
                        onClick={() => handleImageClick(index)}
                        ref={(el) => (refs.current[index] = el)}
                        style={{
                            // borderColor: activeIndex === index ? blendedColor : 'transparent',
                            opacity: index === 0 || index === 1 ? 1 : '0.7',

                        }}>


                        <img


                            src={

                                imagedatapost && ActualpostDataAll.length > 0 && index === 0 ?
                                    `${REACT_APP_CLOUNDFRONT}${imagedatapost}`
                                    :
                                    imagedatapost2 && ActualpostDataAll.length > 0 && index === 1 ?
                                        `${REACT_APP_CLOUNDFRONT}${imagedatapost2}`
                                        :
                                        image}


                            alt={`Slide ${index + 1}`} className="image"
                            style={{
                                transform: activeIndex === index ? 'scale(1)' : 'scale(0.8)',
                                transition: "transform 0.09s",


                            }} />

                        <div className={matchMobile ? "overlay-textx" : "overlay-text"} style={{
                            fontSize: activeIndex === index ?
                                matchMobile ? '1rem' : '1.4rem' : matchMobile ? '0.76rem' : '0.92rem'
                        }}>

                            {index === 1 ?
                                <>
                                    <span style={{ color: 'white' }}>
                                        Explain
                                    </span>

                                    <span style={{ visibility: 'hidden' }}>
                                        .
                                    </span>

                                    <span style={{ color: '#00ccff', fontSize: '1rem' }}>
                                        IT
                                    </span> </> : textArray[index]}




                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(ImageSlider);
