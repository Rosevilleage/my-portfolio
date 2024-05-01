import { AppTitle } from "@/components/desktop/config";
import { useAppDispatch } from "@/redux/hooks";
import {
  browserAnimateOn,
  browserAnimateOff,
} from "@/redux/slices/browserAnimateSlice";

export default function useBrowserAnimateTrigger(
  title: AppTitle,
  utilFunc: () => void
) {
  const dispatch = useAppDispatch();
  return {
    onClick: () => {
      dispatch(browserAnimateOn(title));
      utilFunc();
      setTimeout(() => {
        dispatch(browserAnimateOff(title));
      }, 100);
    },
  };
}
