import React from "react";
import UseAsyncStateDemo from "./examples/UseAsyncStateDemo";
import UseDocumentTitleDemo from "./examples/UseDocumentTitleDemo";
import UseEffectIfDemo from "./examples/UseEffectIfDemo";
import UseElementSizeDemo from "./examples/UseElementSizeDemo";
import UseForceUpdateDemo from "./examples/UseForceUpdateDemo";
import UseGeolocationDemo from "./examples/UseGeolocationDemo";
import UseIntersectionObserverDemo from "./examples/UseIntersectionObserverDemo";
import UseIsHoverDemo from "./examples/UseIsHoverDemo";
import UseIsKeyPressedDemo from "./examples/UseIsKeyPressedDemo";
import UseIsTypingDemo from "./examples/UseIsTypingDemo";
import UseIsVisibleXYDemo from "./examples/UseIsVisibleXYDemo";
import UseKeyListenerDemo from "./examples/UseKeyListenerDemo";
import UseLocalStorageDemo from "./examples/UseLocalStorageDemo";
import UseLongPressListenerDemo from "./examples/UseLongPressListenerDemo";
import UseMediaQueryDemo from "./examples/UseMediaQueryDemo";
import UseMousePositionDemo from "./examples/UseMousePositionDemo";
import UseOnClickOutsideDemo from "./examples/UseOnClickOutsideDemo";
import UseOnlineStatusDemo from "./examples/UseOnlineStatusDemo";
import UsePressedKeysDemo from "./examples/UsePressedKeysDemo";
import UseScrollPositionDemo from "./examples/UseScrollPositionDemo";
import UseUnmountDemo from "./examples/UseUnmountDemo";
import UseWindowDimensionsDemo from "./examples/UseWindowDimensionsDemo";

function App() {
  return (
    <>
      <UseAsyncStateDemo />
      <UseEffectIfDemo />
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
      <UseGeolocationDemo />
      <UseForceUpdateDemo />
      <UseUnmountDemo />
      <UseMousePositionDemo />
      <UseKeyListenerDemo />
      <UsePressedKeysDemo />
      <UseIsKeyPressedDemo />
      <UseLongPressListenerDemo />
      <UseIsTypingDemo />
    </>
  );
}

export default App;
