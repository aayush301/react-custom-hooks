import { useEffect } from "react";

const useDocumentTitle = title => {
  // On unmount, this sets back the document title to the title which was there before this component mounted
  useEffect(() => {
    const prevTitle = document.title;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  // On any change of title, set that title as document title
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
