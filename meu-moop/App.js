import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import TeladeRosto from "./components/TeladeRosto";
import TelaLogin from "./components/TelaLogin";
import Teladetrans from "./components/Teladetrans";


export default function App() {
  return (
    <View >
      <Teladetrans />
    </View>
  );
}

