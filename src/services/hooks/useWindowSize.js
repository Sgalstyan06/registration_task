import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [window_With, setWindowSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return window_With < 780;
}
