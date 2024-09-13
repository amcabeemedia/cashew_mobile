import React, { useRef, useCallback, useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '@/assets/images/logo_no_color.svg';
import MaskedView from '@react-native-masked-view/masked-view';
import BottomSheet from '@/components/BottomSheet';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { BlurCard, BlurPill } from '@/components/Glassmorphism';
import { ScrollView } from 'react-native';
import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';


function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}


export default function Index() {
  
  const [bottomSheetContentType, setBottomSheetContentType] = useState<string | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBottomSheet = () => {

    switch (bottomSheetContentType) {
      case 'settings':
        handlePresentModalPress();
        return <Settings />;
      case 'activitySummary':
        handlePresentModalPress();
        return <ActivitySummary />;
      case 'feeding':
        handlePresentModalPress();
        return <Feeding />;
      case 'social':
        handlePresentModalPress();
        return <Social />;
      case 'sleep':
        handlePresentModalPress();
        return <Sleep />;
      case 'diaper':
        handlePresentModalPress();
        return <Diaper />;
      case 'pumping':
        handlePresentModalPress();
        return <Pumping />;
      case 'growth':
        handlePresentModalPress();
        return <Growth />;
      case 'medications':
        handlePresentModalPress();
        return <Medications />;
      case 'careGuide':
        handlePresentModalPress();
        return <CareGiude />;
      case 'doctorNotes':
        handlePresentModalPress();
        return <DoctorNotes />;
    }
  };


  const Settings = () => {
    return (
      <View className='flex-1 justify-start'>
        <View className='mb-10'>
          <Text className='text-black text-2xl tracking-tighter font-bold'>Settings</Text>
        </View>

        <View>
          <View className='mb-8'>
            <Link href="/settings/family" className='flex-row items-center gap-x-2'>
              <Text>+ <Text className='text-black text-lg tracking-tighter font-bold'>Family(s)</Text></Text>
            </Link>
            <View className='h-[.25px] w-full mt-4 bg-black'/>
          </View>

          <View className='mb-8'>
            <Link href="/settings/profile" className='flex-row items-center gap-x-2'>
              <Text>+ <Text className='text-black text-lg tracking-tighter font-bold'>Profile</Text></Text>
            </Link>
            <View className='h-[.25px] w-full mt-4 bg-black'/>

          </View>

          <View className='mb-8'>
            <Link href="/settings/help" className='flex-row items-center gap-x-2'>
              <Text>+ <Text className='text-black text-lg tracking-tighter font-bold'>Help</Text></Text>
            </Link>
          </View>

          <View className='mb-8'>
            <Text className='text-white text-lg tracking-tighter font-bold '>Share & Social</Text>
            <View className='flex-row items-center gap-x-2'>
              <Ionicons name="logo-instagram" size={25} color="white"/>
              <Ionicons name="logo-twitter" size={25} color="white"/>
              <Ionicons name="logo-youtube" size={25} color="white"/>
            </View>
          </View>

        </View>
      </View>
    )
  }

  const ActivitySummary = () => {
    return (
      <View>
        <Text>Activity Summary</Text>
      </View>
    )
  }

  const Feeding = () => {
    return (
      <View>
        <Text>Feeding</Text>
      </View>
    )
  }

  const Social = () => {
    return (
      <View>
        <Text>Social</Text>
      </View>
    )
  }

  const Sleep = () => {
    return (
      <View>
        <Text>Sleep</Text>
      </View>
    )
  }

  const Diaper = () => {
    return (
      <View>
        <Text>Diaper</Text>
      </View>
    )
  }

  const Pumping = () => {
    return (
      <View>
        <Text>Pumping</Text>
      </View>
    )
  }

  const Growth = () => {
    return (
      <View>
        <Text>Growth</Text>
      </View>
    )
  }

  const Medications = () => {
    return (
      <View>
        <Text>Medications</Text>
      </View>
    )
  }

  const CareGiude = () => {
    return (
      <View>
        <Text>Care Giude</Text>
      </View>
    )
  }

  const DoctorNotes = () => {
    return (
      <View>
        <Text>Doctor Notes</Text>
      </View>
    )
  }

  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={['#f1f1f1', '#d4d0d0']}
        style={styles.gradientBackground}
      >
        <View style={{ width: '100%', height: '100%', position: 'absolute'}}>
          <View style={styles.circleOne} />
          <View style={styles.circleTwo} />
          <BlurView intensity={5} tint='light' style={styles.blurBG} />
        </View> 

        <Container>
          {/* header */}
          <View style={styles.header}>
            <View>
              <Image
                style={styles.image}
                source={Logo}
                contentFit="contain"
                transition={1000}
              />
              <Text style={styles.title}>
                Cashew.
              </Text>
            </View>

            <Ionicons name="settings" size={32} color="black"  onPress={() => setBottomSheetContentType('settings')}/>
          </View>

          {/* body */}
          <View style={styles.body}>
            {/* active baby */}
            <View style={styles.activeBaby}>
              <BlurPill dropdownTitle="baby" onPress={() => setBottomSheetContentType('activitySummary')}>
                <View className='py-4 px-4 flex-row'>
                  <View>
                    <Text className='font-medium tracking-tighter text-white'>Everett Reid McAbee </Text>
                    <Text className='font-light tracking-tighter text-white'>DOB: 8/10/2024</Text>
                  </View>
                  <View className='flex-row justify-center items-center gap-1' style={{marginLeft: 28}}>
                    <Ionicons name="expand" size={20} color="black" />
                    <Text>Activity</Text>
                  </View>
                </View>
              </BlurPill>
            </View>

            <MaskedView
              style={{ flex: 1, flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center'}}
              maskElement={
                  <LinearGradient
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 0
                    }}
                    colors={[ 'transparent', 'white','white','white','white','white','white', 'white', 'white','transparent', 'transparent' ]}
                    locations={[0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  />
                }
                >
                {/* actions */}
                  <ScrollView showsVerticalScrollIndicator={false} style={styles.actions}>
                    <View style={{marginTop: 37, marginBottom: 115}}>
                    {/* primary action */}
                    <View style={styles.actionContainer && {marginBottom: 8}}>
                      <BlurCard varient="wide" onPress={() => setBottomSheetContentType('social')}>
                        <Text>Social</Text>
                      </BlurCard>
                    </View>

                    {/* secondary actions */}
                    <View style={styles.actionContainer}>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('feeding')}>
                        <Text>Feeding</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('sleep')}>
                        <Text>Sleep</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('diaper')}>
                        <Text>Diaper</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('pumping')}>
                        <Text>Pumping</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('growth')}>
                        <Text>Growth</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('medications')}>
                        <Text>Medications</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('careGuide')}>
                        <Text>Create Care Guide</Text>
                      </BlurCard>
                      <BlurCard varient='medium' onPress={() => setBottomSheetContentType('doctorNotes')}>
                        <Text>Doctor Notes</Text>
                      </BlurCard>
                    </View>
                  </View>
                </ScrollView>
            </MaskedView>
          </View>
            <BottomSheet ref={bottomSheetModalRef} onDismiss={() => setBottomSheetContentType(null)}>
              {renderBottomSheet()}
            </BottomSheet>
        </Container>
      </LinearGradient>

    </View>
  );
}

const DefaultContent = () => {
  return <Text>Oops. Something probably went wrong </Text>;
};

const CustomContent = () => {
  return <Text>This is the custom content</Text>;
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradientBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  glassContainer: {
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure it appears above other content
  },
  image: {
    width: 50, 
    height: 50, 
    zIndex: 1, // Ensure it appears above the gradient
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24, // Equivalent to text-3xl
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: -0.5, // Equivalent to tracking-tighter
    zIndex: 2, // Higher zIndex to be on top of the image
  },
  blurBG: {
    flex : 1,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure it appears above other content
  },
  circleTwo: {
    position: 'absolute',
    top: 400,
    left: 250,
    width: 350,
    height: 350,
    borderRadius: 400,
    // backgroundColor: '#2d2d2d',
    backgroundColor: '#e23942',
    zIndex: -1,
    overflow: 'hidden',
  },
  circleOne: {
    position: 'absolute',
    top: 200,
    left: -200,
    width: 500,
    height: 500,
    borderRadius: 400,
    // backgroundColor: '#000000',
    backgroundColor: '#fc7077',
    zIndex: -1,
    overflow: 'hidden',
  },
  body: {
    flex: 1,
    marginTop: 30,
    alignItems: 'flex-start',
  },
  activeBaby: {
    marginBottom: 12,
    width: '100%',
    height: 100,
  },
  actions: {
    gap: 12,
    width: '100%',
    height: "100%",
    marginTop: 5,
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Higher zIndex to be on top of the image
    gap: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
