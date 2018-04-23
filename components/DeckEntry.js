import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'


class NewDeck extends Component{
    state ={
        name:'asdf',
        cardsNumbers: 123
    }
    addCard =() =>{
        (this.state.deckName) && flashCardApi.submitDeck(this.state.deckName)
    }
    startQuiz =() =>{

    }
    render(){
        const {name, cardsNumbers} = this.state
        return(
            <View>
                <Text style={styles.deckName}>
                    {name}
                </Text>
                <Text style={styles.deckCardNumber}>
                    cards number: {cardsNumbers}
                </Text>
                <TextButton style={{margin: 20}} onPress={this.addCard}>
                    Add Card
                </TextButton>
                <TextButton style={{margin: 20}} onPress={this.startQuiz}>
                    Start Quiz
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckName: {
        fontSize: 50,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    deckCardNumber:{
        fontSize: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    }
})


export default NewDeck