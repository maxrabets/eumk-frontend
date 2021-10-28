import { useEffect, useState } from "react";

const breakpoints = {
    // Extra small screen / phone
    xs: 0,
    // Small screen / phone
    sm: 576,
    // Medium screen / tablet
    md: 768,
    // Large screen / desktop
    lg: 992,
    // Large / Extra large screen
    xlg: 1024,
};

const useScreen = () => {
    const [ screen, setScreen ] = useState({
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xlg: false,
        mobile: false,
    });

    const calculateScreen = () => {
        let width = window.innerWidth;

        let xs = false;
        let sm = false;
        let md = false;
        let lg = false;
        let xlg = false;

        if (width < breakpoints.sm) {
            xs = true;
        } else if ((width >= breakpoints.sm) && (width < breakpoints.md)) {
            sm = true;
        } else if ((width >= breakpoints.md) && (width < breakpoints.lg)) {
            md = true;
        } else if ((width >= breakpoints.lg) && (width < breakpoints.xlg)) {
            lg = true;
        } else if (width >= breakpoints.xlg) {
            xlg = true;
        }

        let mobile = xs || sm;
        setScreen({ xs, sm, md, lg, xlg, mobile });
    };

    useEffect(() => {
        calculateScreen();
        window.addEventListener("resize", calculateScreen);

        return () => window.removeEventListener("resize", calculateScreen);
    }, []);

    return screen;
};

export default useScreen;
