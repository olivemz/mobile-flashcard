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
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.content}
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

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        paddingTop: 50,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    content:{
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    }
})
export default NewDeck