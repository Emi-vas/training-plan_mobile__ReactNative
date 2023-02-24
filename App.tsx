//react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//compo
import DayTraining from './screens/DayTraining/DayTraining';
import AllTraining from './screens/AllTraining/AllTraining';
//icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
//firebase
import SignIn from './screens/Auth/SignIn';
import UserContextCompo, { useAuth } from './auth/UserContext';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './auth/firebase';

const tab = createBottomTabNavigator()

export default function App() {
    return (
      <UserContextCompo>
        <Main />
      </UserContextCompo>
    )
}


const Main = () => {
  const {user, logOut} = useAuth()

  //logOut()

  if(!user) return <SignIn />

  return <MainLogged />
}

const MainLogged = () => {
    return (
      <NavigationContainer>
      <StatusBar />
      <tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => { // les icones
                      let iconName;
                
                      if (route.name == "Entrainements du jour") {
                        return <Entypo name="clock" size={24} color={focused ? "orange" : "white"} />
                      } else if (route.name == "Tous les entrainements") {
                        return <AntDesign name="bars" size={33} color={focused ? "orange" : "white"} />
                      }
                    },
                    tabBarActiveTintColor: 'orange', //text
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: {
                      fontSize: 13
                    },
                    
                    tabBarStyle: { // style additionnel
                        height : 90,
                        paddingVertical: 7,
                        backgroundColor: "black",
                        position: 'absolute',
                        borderTopWidth: 0,
                        paddingBottom:30
                    },
    
                    headerShown: true //show or not header
                })}
           
           >
              <tab.Screen name="Entrainements du jour" component={DayTraining}/>
              <tab.Screen name="Tous les entrainements" component={AllTraining} />
           </tab.Navigator>
      </NavigationContainer>
    )
}