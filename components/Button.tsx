import React, { useRef } from 'react';
import { Text, Animated } from 'react-native';
import { Link, Href } from 'expo-router';

export default function NavButton({ children, href, width = 120}: { children: React.ReactNode, href: Href, width: number } ) {
  const colorAnim = useRef(new Animated.Value(0)).current; // Initial value of 0
  const height = 50
  const startColorAnimation = (toValue: number) => {
    Animated.timing(colorAnim, {
      toValue,
      duration: 200, // Duration of the transition
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#5d4848'], // Transition from black to slate-800
  });

  return (
    <Link href={href} style={{ zIndex: 99, height: height}}  onPressIn={() => startColorAnimation(1) } onPressOut={() => startColorAnimation(0)}>

            <Animated.View
                style={{
                    width: width,
                    margin: 5,
                    zIndex: 5,
                    backgroundColor,
                    borderRadius: 9999, // Equivalent to 'rounded-full'
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 16, // Equivalent to py-4
                    paddingHorizontal: 24, // Equivalent to px-6
                    height: height,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.35,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
            >
                <Text className='text-white text-center'>{children}</Text>
            </Animated.View>
    </Link>
  );
}
