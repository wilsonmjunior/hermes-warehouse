import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const getStatusBarHeight = Constants.statusBarHeight;
// export const getBottomSpace = Constants.bottomSpace;

export function useStatusBottom() {
    const insets = useSafeAreaInsets();

    return {
        bottomSpace: insets.bottom,
        statusBarHeight: Constants.statusBarHeight,
        top: insets.top,
    }
}
