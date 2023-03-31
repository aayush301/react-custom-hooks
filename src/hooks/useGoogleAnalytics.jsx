import { useEffect } from "react";
import useScript from "./useScript";

// Credits: https://github.com/kitze/react-hanger/blob/master/src/useGoogleAnalytics.ts
const useGoogleAnalytics = id => {
  useScript({ src: `https://www.googletagmanager.com/gtag/js?id=${id}`, type: "text/javascript" });
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", id, {
      anonymize_ip: true,
      cookie_express: 0,
    });
  }, [id]);
};

export default useGoogleAnalytics;
