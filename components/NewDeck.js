import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'


class NewDeck extends Component{
    state ={
        deckName:''
    }
    submit =() =>{
        (this.state.deckName) && flashCardApi.submitDeck(this.state.deckName)
    }
    render(){
        return(
            <View>
                <Text style={{fontSize: 20}}>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(deckName) => this.setState({deckName})}
                    value={this.state.deckName}
                    placeholder='Deck title'
                />
                <TextButton style={{margin: 20}} onPress={this.submit}>
                    Submit
                </TextButton>
            </View>
        )
    }
}
export default NewDeck