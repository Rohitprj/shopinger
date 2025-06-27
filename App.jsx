// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Text style={{color:"white"}}>Hello</Text>
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:"red"
  },
});

export default App;


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View style={{backgroundColor:"white", height:"100%",width:"100%", justifyContent:"center", alignItems:"center"}}>
//           <Text style={{color:"red"}}>App</Text>
//         </View>
//   )
// }

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GetStarted from './src/GetStarted';
// import LoginScreen from './src/LoginScreen';
// const Stack = createNativeStackNavigator()
// const StackNavigator = ()=>{
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name="GetStarted" component={GetStarted}  />
//       <Stack.Screen name="LoginScreen" component={LoginScreen}  />
//       </Stack.Navigator>
//   )
// }

// export default function App() {
//   return (
//     // <NavigationContainer>
//     //   <StackNavigator />
//     // </NavigationContainer>
//     <View>
//       <GetStarted />
//     </View>
//   );
// }
