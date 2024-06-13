import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

import { theme } from "@/config/theme";

type ProfileImageUploaderProps = {
  pressBehavior?: "close" | "collapse" | "none";
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  children: React.ReactNode;
};

export function BottomModal({
  bottomSheetModalRef,
  pressBehavior = "close",
  children,
}: ProfileImageUploaderProps) {
  const snapPoints = useMemo(() => ["25%", "25%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={pressBehavior}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        handleComponent={() => null}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={false}
        style={styles.container}
      >
        <BottomSheetView style={styles.content}>{children}</BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary[50] + 90,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 24,
  },
});
