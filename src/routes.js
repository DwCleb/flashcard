import React from 'react'
import { Platform, AsyncStorage } from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  TabBarTop,
} from 'react-navigation'

import Decks from 'pages/decks'
import NewDeck from 'pages/newDeck'
import DeckDetail from 'pages/deckDetail'
import AddCard from 'pages/addCard'
import Quiz from 'pages/quiz'
import { colors, metrics } from 'theme'
import { scale } from 'theme/metrics'

const MainTab = TabNavigator({
  Decks: { screen: Decks, },
  NewDeck: { screen: NewDeck, },
}, {
    tabBarComponent: TabBarTop,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: false,
      showLabel: true,
      activeTintColor: colors.secondary,
      inactiveTintiColor: colors.white,
      style: {
        backgroundColor: colors.primary,
        height: scale(60),
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: scale(15)
      },
      indicatorStyle: {
        backgroundColor: colors.secondary,
        height: scale(5),
      },
    },
  })

MainTab.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
  };
}
const Screens = StackNavigator({
  DeckDetail: { screen: DeckDetail },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz },
})

const Main = StackNavigator({
  Tab: { screen: MainTab },
  DeckDetail: { screen: DeckDetail },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz },
}, {
    initialRouteName: 'Tab',
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.primary,
        height: scale(80),
      },
      headerTitleStyle: {
        color: colors.white,
        fontSize: scale(22),
        flex: 1,
        textAlign: 'center',
      },
      headerTintColor: colors.white,
      title: 'Main',
    }),
  })

const MainNavigator = StackNavigator({
  Main,
}, {
    initialRouteName: 'Main',
    navigationOptions: () => ({
      header: null,
    }),
  })

const Routes = MainNavigator
export default Routes