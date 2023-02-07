import React, {  useCallback } from 'react'

import { View } from "react-native";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';


import * as SplashScreen from 'expo-splash-screen';


import AccordionComponent from './Accordion';


SplashScreen.preventAutoHideAsync();


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <>
      <View onLayout={onLayoutRootView} />
      <AccordionComponent />


    </>


  );
}
