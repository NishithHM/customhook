import React from "react";
import useResizeHook from "../hooks/resizeHook";

const Page2 = (props) => {
  return (
    <div>
      hey I am page 2 Inner width is multiplied by 2
      <p>Change Inner width to see updates</p>
      <p>Inner width is multiplied by 2  {useResizeHook(2)}</p>
    </div>
  );
};

export default Page2;
