import useLocalStorage from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";
import useUpdateEffect from "./useUpdateEffect";

// Credits: https://usehooks-ts.com/react-hook/use-dark-mode
const useDarkMode = defaultValue => {
  const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-mode", defaultValue ?? isDarkOS ?? false);

  useUpdateEffect(() => {
    setIsDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle: () => setIsDarkMode(prev => !prev),
    enableDarkMode: () => setIsDarkMode(true),
    disableDarkMode: () => setIsDarkMode(false),
  };
};

export default useDarkMode;
