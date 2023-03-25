import React from "react";
import UseDocumentTitleDemo from "./examples/UseDocumentTitleDemo";
import UseElementSizeDemo from "./examples/UseElementSizeDemo";
import UseIntersectionObserverDemo from "./examples/UseIntersectionObserverDemo";
import UseIsHoverDemo from "./examples/UseIsHoverDemo";
import UseIsVisibleXYDemo from "./examples/UseIsVisibleXYDemo";
import UseLocalStorageDemo from "./examples/UseLocalStorageDemo";
import UseMediaQueryDemo from "./examples/UseMediaQueryDemo";
import UseOnClickOutsideDemo from "./examples/UseOnClickOutsideDemo";
import UseOnlineStatusDemo from "./examples/UseOnlineStatusDemo";
import UseScrollPositionDemo from "./examples/UseScrollPositionDemo";
import UseWindowDimensionsDemo from "./examples/UseWindowDimensionsDemo";

function App() {
  return (
    <>
      <UseWindowDimensionsDemo />
      <UseDocumentTitleDemo />
      <UseMediaQueryDemo />
      <UseScrollPositionDemo />
      <UseLocalStorageDemo />
      <UseIsHoverDemo />
      <UseElementSizeDemo />
      <UseOnClickOutsideDemo />
      <UseOnlineStatusDemo />
      <UseIsVisibleXYDemo />
      <UseIntersectionObserverDemo />
    </>
  );
}

export default App;
