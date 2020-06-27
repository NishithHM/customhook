import { useState, useEffect, useCallback } from "react";

const useResizeHook = (multiple) => {
  const [innerWidth, setWidth] = useState(window.innerWidth);
  const resizeListener = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);
  return innerWidth * multiple
};

export default useResizeHook
