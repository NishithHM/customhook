import React from "react";
import useResizeHook from "../hooks/resizeHook";

const Page1 = (props) => {
  return (
    <div>
      hey I am page 1 Inner width is multiplied by 1
      <p>Change Inner width to see updates</p>
      <p>Inner width is {useResizeHook(1)}</p>
    </div>
  );
};

export default Page1;
