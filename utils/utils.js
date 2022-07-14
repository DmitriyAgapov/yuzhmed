
import {useEffect, useState} from "react";

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const range = [
        320, 768, 1024, 1440, 1920
    ]

    const [viewPort, setViewport ] = useState({
        mobile: undefined, tablet: undefined, desktop: undefined, wideDesktop: undefined
    })
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });

                setViewport({
                    mobile:  range[1] > window.innerWidth &&  window.innerWidth >= range[0],
                    tablet:  range[2] > window.innerWidth && window.innerWidth > range[1],
                    desktop:  range[3] > window.innerWidth && window.innerWidth > range[2],
                    wideDesktop:  window.innerWidth > range[3]
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // window.addEventListener("resize", handleView);

            // Call handler right away so state gets updated with initial window size
            handleResize();
            // handleView();

            // Remove event listener on cleanup
            return () => {
                window.removeEventListener("resize", handleResize);
                // window.removeEventListener("resize", handleView);
            }
        }
    }, []); // Empty array ensures that effect is only run on mount
    return (
        {
            windowSize, viewPort
        })

}
