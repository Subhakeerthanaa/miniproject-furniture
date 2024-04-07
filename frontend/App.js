import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/components/landing';
import RegisterScreen  from './src/components/UserRegister';
import AdminRegister from './src/components/AdminRegister';
import LoginScreen from './src/components/UserLogin';
import Create from './src/components/Create';
import ViewScreen from './src/components/View';
import AdminLogin from './src/components/AdminLogin';
import UpdateScreen from './src/components/Update';
import DeleteScreen from './src/components/Delete';
import UserRegister from './src/components/UserRegister';
import AdminView from './src/components/AdminView';
import Techreg from './src/components/techreg';
import Techlogin from './src/components/techlogin';
 import TechScreen from './src/components/techscreen';
 import TechView from './src/components/Techview';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} /> 
      
        <Stack.Screen name="UserRegister" component={UserRegister } /> 
        <Stack.Screen name="AdminRegister" component={AdminRegister} /> 
       
       
      <Stack.Screen name="UserLogin" component={LoginScreen} />  
      <Stack.Screen name="AdminLogin" component={AdminLogin} />

       <Stack.Screen name="Create" component={Create} /> 
      <Stack.Screen name="View" component={ViewScreen} /> 
        
      <Stack.Screen name='Update' component={UpdateScreen}/>
      <Stack.Screen name='Delete' component={DeleteScreen}/>

      <Stack.Screen name="AdminView" component={AdminView} /> 
      <Stack.Screen name="techreg" component={Techreg} /> 
      <Stack.Screen name="techlogin" component={Techlogin} /> 
      <Stack.Screen name='Techscreen' component={TechScreen}/>
      <Stack.Screen name='Techview' component={TechView} />
      
          </Stack.Navigator>
      
    </NavigationContainer>
   
  );
};

export default App;



