import { useEffect, useState } from "react";

// Credits: https://www.30secondsofcode.org/react/s/use-script
const useScript = ({ src, type }) => {
  const [status, setStatus] = useState(src ? "loading" : "idle");
  // status: idle or loading or ready or error

  useEffect(() => {
    if (!src) {
      setStatus("idle");
      return;
    }

    let script = document.querySelector(`script[src=${src}]`);
    if (!script) {
      script = document.createElement("script");
      script.src = src;
      if (type) script.type = type;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      const setDataStatus = e => {
        script.setAttribute("data-status", e.type === "load" ? "ready" : "error");
      };

      script.addEventListener("load", setDataStatus);
      script.addEventListener("error", setDataStatus);
    } else {
      setStatus(script.getAttribute("data-status"));
    }

    const setStateStatus = e => {
      setStatus(e.type === "load" ? "ready" : "error");
    };
    script.addEventListener("load", setStateStatus);
    script.addEventListener("error", setStateStatus);

    return () => {
      if (script) {
        script.removeEventListener("load", setStateStatus);
        script.removeEventListener("error", setStateStatus);
      }
      script.remove();
    };
  }, [src, type]);

  return status;
};

export default useScript;
