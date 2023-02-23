//react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//compo
import DayTraining from './screens/DayTraining/DayTraining';
import AllTraining from './screens/AllTraining/AllTraining';

const tab = createBottomTabNavigator()

export default function App() {


  return (
    <NavigationContainer>
      <tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => { // les icones
                      let iconName;
                
                      if (route.name == "DayTraining") {
                        return <View><Text>DayTrainin</Text></View>
                      } else if (route.name == "AllTraining") {
                        return <View><Text>AllTrainin</Text></View>
                      }
                    },
                    tabBarActiveTintColor: 'white', //text
                    tabBarInactiveTintColor: 'gray',
                    
                    tabBarStyle: { // style additionnel
                        height : 50,
                        paddingVertical: 5,
                        backgroundColor: "black",
                        position: 'absolute',
                        borderTopWidth: 0,
                        paddingBottom: 5
                    },

                    headerShown: false //show or not header
                })}
           
           >
              <tab.Screen name="DayTraining" component={DayTraining} />
              <tab.Screen name="AllTraining" component={AllTraining} />
           </tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
