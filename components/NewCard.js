import React, { Component } from 'react'
import {View,ListView, Text, StyleSheet, Platform, TouchableOpacity,TextInput } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'

class NewCard extends Component{
    state ={
        question:'',
        answer:''
    }
    submit =(name,cardsNumbers) =>{
        cardsNumbers = cardsNumbers+1;
        (this.state.question && this.state.answer) &&
        flashCardApi.submitCard({question: this.state.question, answer: this.state.answer},name).then(
           this.setState({question:'',answer:''})
        )

    }
    render(){
        const params = this.props.navigation.state.params
        const name =  params ? params.name : ''
        const cardsNumbers =  params ? params.cardsNumbers : ''
        return(
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    placeholder='Enter Question here'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                    placeholder='Enter Answer here'
                />
                <TextButton style={{margin: 20}} onPress={() => this.submit(name,cardsNumbers)}>
                    Submit
                </TextButton>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {height: 40, borderColor: 'gray', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,}
})
export default NewCard