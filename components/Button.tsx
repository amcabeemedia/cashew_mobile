import React, { useRef } from 'react';
import { View, Text, Pressable,PressableProps, Animated } from 'react-native';
import { Link, Href } from 'expo-router';

export default function NavButton({ children, href, ...props }: { children: React.ReactNode, href: Href } & PressableProps) {
  const colorAnim = useRef(new Animated.Value(0)).current; // Initial value of 0

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
    <Link href="/home" style={{ zIndex: 99 }}>
        <Pressable
          {...props}
          onPressIn={() => startColorAnimation(1)}
          onPressOut={() => startColorAnimation(0)}
        //   style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
            <Animated.View
                style={{
                    margin: 5,
                    zIndex: 99,
                    backgroundColor,
                    borderRadius: 9999, // Equivalent to 'rounded-full'
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 16, // Equivalent to py-4
                    paddingHorizontal: 24, // Equivalent to px-6
                    height: 50,
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
        </Pressable>
    </Link>
  );
}
