import { useAppDispatch } from "@/redux/hooks";
import {
  browserAnimateOn,
  browserAnimateOff,
} from "@/redux/slices/browserAnimateSlice";
import { AppTitle } from "@/redux/slices/openAppSlice";

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
