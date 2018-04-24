import React from 'react';
import { StyleSheet, Text, View, Platform , StatusBar} from 'react-native';
import DeckList from './components/DeckList'
import { TabNavigator, StackNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import { white, purple } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import CardDetail from './components/CardDetail'
import DeckEntry from "./components/DeckEntry";
import NewCard from "./components/NewCard";


function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}
const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',

        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    CardDetail: {
        screen: CardDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    DeckEntry: {
        screen: DeckEntry,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
      </View>
    );
  }
}
