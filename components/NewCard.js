import React, { Component } from 'react'
import {View,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'


class NewCard extends Component{
    state ={
        question:'',
        answer:''
    }
    submit =() =>{
        (this.state.question && this.state.answer) &&
        flashCardApi.submitCard({question: this.state.deckName,answer: this.state.answer},this.props.deckName)
    }
    render(){
        return(
            <View>
                <TextInput
                    style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    placeholder='Enter Question here'
                />
                <TextInput
                    style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                    placeholder='Enter Answer here'
                />
                <TextButton style={{margin: 20}} onPress={this.submit}>
                    Submit
                </TextButton>
            </View>
        )
    }
}

export default NewCard