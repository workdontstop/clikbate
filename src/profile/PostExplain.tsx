import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import { matchMobile } from "../DetectDevice";

function PostExplainx({ post, postDivRef, pey, minimise, setMaximisefromcanvas, setminimiseSpecificScroll, setminimise }: any): JSX.Element {

    const { REACT_APP_CLOUNDFRONT } = process.env;

    // State to hold the images array
    const [images, setImages] = useState<string[]>([]);
    const [imageActive, setImageActive] = useState<boolean>(false);
    const [currentImage, setCurrentImage] = useState<number>(0);

    // Ref to store the interval ID
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // useEffect to detect when the post prop updates and update the images array
    useEffect(() => {
        const updatedImages = [post.x1, post.x2, post.x3, post.x4, post.x5, post.x6];
        setImages(updatedImages);
        setCurrentImage(0); // Reset to the first image when post updates
    }, [post]);


    const [hid, sethid] = useState(false);

    // useEffect to handle auto-play functionality
    useEffect(() => {
        if (!imageActive) {
            autoPlayRef.current = setInterval(() => {
                if (currentImage === 5) {
                    setCurrentImage((prev) => (prev + 1));


                    setTimeout(() => {
                        sethid(true);
                        setCurrentImage((prev) => (0));
                        setImageActive(true);
                    }, 500);


                    setTimeout(() => {
                        sethid(false);
                    }, 1000);

                } else {
                    setCurrentImage((prev) => (prev + 1));
                }

            }, 2800); // Change image every 4 seconds
        } else if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [imageActive, images.length, currentImage]);

    const wa = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );


    const wa22 = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );

    // Handler for image click to stop auto-play and set the clicked image as active
    const handleImageClick = (index: number) => {

        if (minimise) {
            if (matchMobile) {

                setMaximisefromcanvas(true);
                if (wa22.current) {
                    clearTimeout(wa22.current);
                }
                wa22.current = setTimeout(() => {
                    setMaximisefromcanvas(false);
                }, 4000)

            }


            else {
                setminimiseSpecificScroll(true);
                setminimise(false);
                if (wa.current) {
                    clearTimeout(wa.current);
                }
                wa.current = setTimeout(() => {
                    postDivRef.current[pey].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 1000)

            }

        } else {

            if (imageActive) {


            } else {
                setCurrentImage(0);
                setImageActive(true);

            }

        }
    };

    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
            style={{
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                overflowY: "hidden",
                width: "100%",
                height: matchMobile ? "100%" : "102%",
                position: 'absolute',
                top: '0vh',
                zIndex: 10,
                visibility: hid ? 'hidden' : 'visible',
            }}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    style={{
                        minWidth: "100%",
                        height: "100%",
                        scrollSnapAlign: "start",
                        position: "relative",
                        backgroundColor: "#000",
                        transform: `translateX(-${currentImage * 100}%)`, // Move the slider to the current image
                        transition: "transform 0.5s ease-in-out", // Smooth transition
                        cursor: 'pointer'
                    }}
                    onClick={() => handleImageClick(index)} // Handle click on the image
                >
                    <img
                        src={`${REACT_APP_CLOUNDFRONT}${src}`}
                        alt={`Image ${src}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}


        </Grid>
    );
}

export const PostExplain = React.memo(PostExplainx);
