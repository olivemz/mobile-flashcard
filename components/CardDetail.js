import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'


class CardDetail extends Component{
    state ={
        type:'Question'
    }
    correct =() =>{
    }
    incorrect =() =>{

    }
    flipCard=(type) =>{
        this.setState(()=>({
            type:(type==='Question')?'Answer':'Question'
        }))
    }
    nextCard=() =>{

    }

    render(){
        const {type} = this.state
        const {question, answer} = this.props
        return(
            <View>
                <Text style={styles.deckName}>
                    {(type==='Question')? question: answer}
                </Text>
                <TextButton style={{margin: 20}} onPress={(type) => this.flipCard(type)}>
                    {type}
                </TextButton>
                <TextButton style={{margin: 20}} onPress={this.correct}>
                    Correct
                </TextButton>
                <TextButton style={{margin: 20}} onPress={this.incorrect}>
                    Incorrect
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


export default CardDetail