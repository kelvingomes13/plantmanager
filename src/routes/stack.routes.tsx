import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../styles/colors";
import { Welcome } from "../pages/welcome";
import { UserIdentification } from "../pages/Useridentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/Plantselect";


const stackRoutes = createNativeStackNavigator();
const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      },
    }}
  
  >
      <stackRoutes.Screen 
          name="Welcome"
          component= {Welcome}
           
      />
      <stackRoutes.Screen 
          name='UserIdentification'
          component= {UserIdentification}
           
      />
      <stackRoutes.Screen 
          name='Confirmation'
          component= {Confirmation}
           
      />
      <stackRoutes.Screen
      name="PlantSelect"
      component=
      {PlantSelect}
      />


  </stackRoutes.Navigator>


)
export default AppRoutes;

