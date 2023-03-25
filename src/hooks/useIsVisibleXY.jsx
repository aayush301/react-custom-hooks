import { useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const checkVisiblilityRelativeToWindow = (element, minPercentX, minPercentY) => {
  const elRect = element.getBoundingClientRect();
  if ((elRect.bottom / elRect.height) * 100 < minPercentY) return false;
  if (((document.documentElement.clientHeight - elRect.top) / elRect.height) * 100 < minPercentY)
    return false;
  if ((elRect.right / elRect.width) * 100 < minPercentX) return false;
  if (((document.documentElement.clientWidth - elRect.left) / elRect.width) * 100 < minPercentX) return false;
  return true;
};

const checkVisiblility = (element, minPercentX, minPercentY) => {
  if (!element) return false;
  if (!checkVisiblilityRelativeToWindow(element, minPercentX, minPercentY)) return false;

  const elRect = element.getBoundingClientRect();
  let parent = element;
  do {
    parent = parent.parentNode;
    const parentRect = parent.getBoundingClientRect();
    const visibleX = Math.min(elRect.right, parentRect.right) - Math.max(elRect.left, parentRect.left);
    const visibleY = Math.min(elRect.bottom, parentRect.bottom) - Math.max(elRect.top, parentRect.top);
    const visiblePercentageX = (visibleX / elRect.width) * 100;
    const visiblePercentageY = (visibleY / elRect.height) * 100;
    if (visiblePercentageX < minPercentX || visiblePercentageY < minPercentY) return false;
  } while (parent !== document.body);
  return true;
};

const useIsVisibleXY = (elementRef, minPercentX = 0.1, minPercentY = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  useIsomorphicLayoutEffect(() => {
    const isVisible = checkVisiblility(elementRef?.current, minPercentX, minPercentY);
    setIsVisible(isVisible);
  }, []);

  useEventListener("scroll", () => {
    const isVisible = checkVisiblility(elementRef?.current, minPercentX, minPercentY);
    setIsVisible(isVisible);
  });

  return isVisible;
};

export default useIsVisibleXY;
