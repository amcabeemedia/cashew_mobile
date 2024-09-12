import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '@/assets/images/logo_no_color.svg';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { BlurCard, BlurPill } from '@/components/Glassmorphism';
import { ScrollView } from 'react-native';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}


export default function Index() {
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

            <Ionicons name="settings" size={32} color="black" />
          </View>

          {/* body */}
          <View style={styles.body}>
            {/* active baby */}
            <View style={styles.activeBaby}>
              <BlurPill dropdownTitle="Baby">
                <View className='p-4'>
                  <Text className='font-medium tracking-tighter text-black'>Everett Reid McAbee </Text>
                  <Text className='font-light tracking-tighter text-black'>DOB: 8/10/2024</Text>
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
                      <BlurCard varient="wide">
                        <Text>Social</Text>
                      </BlurCard>
                    </View>

                    {/* secondary actions */}
                    <View style={styles.actionContainer}>
                      <BlurCard varient='medium'>
                        <Text>Feeding</Text>
                      </BlurCard>
                      <BlurCard varient='medium'>
                        <Text>Sleep</Text>
                      </BlurCard>
                      <BlurCard varient='medium'>
                        <Text>Diapers</Text>
                      </BlurCard>
                      <BlurCard varient='medium'>
                        <Text>Pumping</Text>
                      </BlurCard>
                      <BlurCard varient='medium'>
                        <Text>Medications</Text>
                      </BlurCard>
                      <BlurCard varient='medium'>
                        <Text>Notes</Text>
                      </BlurCard>
                    </View>
                    </View>
                  </ScrollView>
            </MaskedView>
          </View>

        </Container>
      </LinearGradient>
    </View>
  );
}

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
  circleOne: {
    position: 'absolute',
    top: 400,
    left: 250,
    width: 350,
    height: 350,
    borderRadius: 400,
    backgroundColor: '#e23942',
    zIndex: -1,
    overflow: 'hidden',
  },
  circleTwo: {
    position: 'absolute',
    top: 200,
    left: -288,
    width: 500,
    height: 500,
    borderRadius: 400,
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
});
