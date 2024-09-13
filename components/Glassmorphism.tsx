
import {useState} from 'react';
import { BlurView, BlurTint } from 'expo-blur';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export function BlurCard({ children, varient, onPress }: { children: React.ReactNode, varient: 'wide' | 'medium', onPress: () => void }) {
    const [tint, setTint] = useState<BlurTint>("systemThickMaterialLight");
    const [intensity, setIntensity] = useState< number | undefined>(30);
  
    function handleTouchStart() {
      setTint("systemThickMaterialLight");
      setIntensity(40);
    }
  
    function handleTouchEnd() {
      setTint("systemThickMaterialLight");
      setIntensity(30);
    }
  
    return (
        <View style={varient === 'wide' ? styles.shadowContainerWide : styles.shadowContainer } onTouchEnd={onPress}>
          <BlurView
            intensity={intensity}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tint={tint}
            style={styles.blurContainer}
          >
            {children}
          </BlurView>
      </View>
    );
}

export function BlurPill({ children, dropdownTitle, onPress }: { children: React.ReactNode, dropdownTitle: string, onPress: () => void }) {
  const [tint, setTint] = useState<BlurTint>("systemThickMaterialLight");
  const [intensity, setIntensity] = useState< number | undefined>(40);

  function handleTouchStart() {
    setTint("systemThickMaterialLight");
    setIntensity(60);
  }

  function handleTouchEnd() {
    setTint("systemThickMaterialLight");
    setIntensity(40);
  }

  return (
      <View style={styles.shadowContainerPill } onTouchEnd={onPress}>
        <View style={styles.subPillContainer}>
          <Text style={{color: 'white'}}>{dropdownTitle}</Text>
          <Ionicons name="chevron-down" size={12} color="white" />
        </View>
        <BlurView
          intensity={intensity}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tint={tint}
          style={styles.pillBlurContainer}
        >
          {children}
        </BlurView>
        
     </View>
  );
}

const styles = StyleSheet.create({
    shadowContainer: {
      width: '47.90%',
      height: 200, // Adjust height as needed
      shadowColor: '#ffffff',
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.45,
      shadowRadius: 3.84,
      elevation: 5,
    },
    shadowContainerWide: {
      width: '100%',
      height: 75,
      shadowColor: '#ffffff',
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      elevation: 5,
    },
    shadowContainerPill: {
      alignSelf: 'flex-start',
      minWidth: 700,
      height: 65,
      borderRadius: 50,
      shadowColor: '#ffffff',
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex: 1
    },
    subPillContainer: {
      // ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignSelf: 'flex-start',
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: 'black',
      borderRadius: 20,
      borderWidth: .65,
      borderColor: '#ff494b',
      left: 22,
      top: 14,
      zIndex: 2,
    },
    pillBlurContainer: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      borderColor: '#ff494b',
      borderWidth: .65,
      overflow: 'hidden', // fix to border raidus; documented in expo-blur
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 5
      },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5,
    },
    blurContainer: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: .65,
      overflow: 'hidden', // fix to border raidus; documented in expo-blur
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 5
      },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5,
    },

});
  