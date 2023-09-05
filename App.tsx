import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return(
  <>
  <StatusBar barStyle='light-content'/>
   <Home />
   </>
  )
    
}

