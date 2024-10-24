import { useLocation } from "react-router-dom"; //allows you to get the current location(URL) in your app
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    //Destructuring the object returned by useLocation
    //extract pathname from the object
    //assign value of pathname to new pathname variable

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname])

    return null;
}

export default ScrollToTop;
