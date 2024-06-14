import { useEffect } from "react";
import { View } from "react-native";
import { Portal } from "react-native-paper";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated";
import { Spinner } from "phosphor-react-native";

import { theme } from "@/config/theme";

export function Loading() {
  const spin = useSharedValue(0);
  
  const spinAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${spin.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    spin.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear
      }),
      -1
    )
  }, [])

  return (
    <Portal>
      <View
        style={{
          position: "absolute",
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: theme.colors.primary[60],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={[{
            width: 50,
            height: 50,
            marginTop: 36,
          }, spinAnimatedStyle]}
        >
          <Spinner size={48} color={theme.colors.primary[600]} weight="bold" />
        </Animated.View>
      </View>
    </Portal>
  );
}
