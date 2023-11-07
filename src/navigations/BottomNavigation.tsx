import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  LeaderBoard,
  LeaguesScreen,
  ProfileScreen,
  ResearchScreen,
} from '../screens/index';
import {slickWidth, slickHeight, slickFontSize} from 'slick-sizer-ui';
import Home from 'react-native-vector-icons/FontAwesome';
import Leagues from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/AntDesign';
import BarChart from 'react-native-vector-icons/MaterialIcons';
import Person from 'react-native-vector-icons/Ionicons';
import {
  BottomTabActiveiconColor,
  BottomTabInActiveiconColor,
  PrimaryWhite,
} from '../constants/colorsConstant';

type Props = {};

const Tab = createBottomTabNavigator();
export const BottomNavigation = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: PrimaryWhite,
          height: slickWidth(13),
        },
        tabBarLabelStyle: {
          fontSize: slickFontSize(4),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Home
                name="home"
                size={slickWidth(8)}
                color={
                  focused
                    ? BottomTabActiveiconColor
                    : BottomTabInActiveiconColor
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeaguesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Leagues
                name="trophy"
                size={slickWidth(8)}
                color={
                  focused
                    ? BottomTabActiveiconColor
                    : BottomTabInActiveiconColor
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Research"
        component={ResearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Search
                name="search1"
                size={slickWidth(8)}
                color={
                  focused
                    ? BottomTabActiveiconColor
                    : BottomTabInActiveiconColor
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leader"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <BarChart
                name="bar-chart"
                size={slickWidth(8)}
                color={
                  focused
                    ? BottomTabActiveiconColor
                    : BottomTabInActiveiconColor
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Person
                name="person"
                size={slickWidth(8)}
                color={
                  focused
                    ? BottomTabActiveiconColor
                    : BottomTabInActiveiconColor
                }
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
