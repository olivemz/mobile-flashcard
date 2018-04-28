import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'


class DeckEntry extends Component{
    addCard =(name) =>{
        this.props.navigation.navigate(
            'NewCard',
            {name}
        )
    }
    startQuiz =(name) =>{
        this.props.navigation.navigate(
            'CardDetail',
            {name}
        )
    }
    render(){
        const params = this.props.navigation.state.params
        const name =  params ? params.name : ''
        const cardsNumbers = params ? params.cardsNumbers : ''

        return(
            <View>
                <Text style={styles.deckName}>
                    {name}
                </Text>
                <Text style={styles.deckCardNumber}>
                    cards number: {cardsNumbers}
                </Text>
                <TextButton style={{margin: 20}} onPress={() => this.addCard(name)}>
                    Add Card
                </TextButton>
                <TextButton style={{margin: 20}} onPress={() => this.startQuiz(name)}>
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


export default DeckEntry