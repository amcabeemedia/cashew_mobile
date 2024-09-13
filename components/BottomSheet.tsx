import React, { forwardRef, useMemo, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackgroundProps
} from '@gorhom/bottom-sheet';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { BlurView } from 'expo-blur';

type  BottomSheetProps = {
    children: React.ReactNode
    onDismiss: () => void
}

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(function BottomSheet(props, ref: React.Ref<BottomSheetModal>) {
  const snapPoints = useMemo(() => ['50%', '85%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          backgroundComponent={CustomBackground}
          onChange={handleSheetChanges}
          onDismiss={() => props.onDismiss()}
        >
          <BottomSheetView style={{ flex: 1, paddingHorizontal: 24 }}>
            {props.children}
          </BottomSheetView>
        </BottomSheetModal>

    </BottomSheetModalProvider>
  );
});

export default BottomSheet;
  
const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
    style,
    animatedIndex,
  }) => {
    //#region styles
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      // @ts-ignore
    //   backgroundColor: '#ff494b',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      
    }));
    const containerStyle = useMemo(
      () => [style, containerAnimatedStyle],
      [style, containerAnimatedStyle]
    );
    //#endregion
  
    // render
    return <Animated.View pointerEvents="none" style={containerStyle}>
        <BlurView
          intensity={50}
          tint={'light'}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 35,
            borderColor: 'white',
            borderWidth: .65,
            overflow: 'hidden', // fix to border raidus; documented in expo-blur
          }}
        >

        </BlurView>
    </Animated.View>;
  };


