import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import { colors } from '@constants/colors';

const { white, skyblue } = colors;

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator initialRouteName="LIBRARY">
      <StackNavigator.Screen
        name={Routes.LIBRARY}
        component={Library}
        options={{
          title: 'LIBRARY',
          headerTintColor: white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: skyblue
          }
        }}
      />
      <StackNavigator.Screen
        name={Routes.BOOKDETAIL}
        component={BookDetail}
        options={{
          title: 'LIBRARY',
          headerTintColor: white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: skyblue
          }
        }}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
