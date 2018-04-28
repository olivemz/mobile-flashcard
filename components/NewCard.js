import React, { Component } from 'react'
import {View,ListView, Text, StyleSheet, Platform, TouchableOpacity,TextInput } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'
import {fetchDeck} from "../actions";
import {connect} from "react-redux";

class NewCard extends Component{
    state ={
        question:'',
        answer:''
    }
    submit =(name,question,answer) =>{
        const {goBack} = this.props.navigation;
        (question && answer) &&
        flashCardApi.submitCard({question: question, answer: answer},name).then((items)=>{items = JSON.parse(items)
            let deckList = []
            Object.entries(items).map(
                (item) => {
                    (1 in item ) && ('title' in item[1])&&(deckList.push({name:item[1].title, cardsNumbers:item[1].questions.length}))
                }
            )
            this.props.fetchDeck(deckList)}).then(()=>{goBack()})
    }
    render(){
        const params = this.props.navigation.state.params
        const name =  params ? params.name : ''
        const cardsNumbers =  params ? params.cardsNumbers : ''
        let thisAnswer = ''
        let thisQuestion = ''
        return(
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(question) => thisQuestion = question }
                    placeholder='Enter Question here'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(answer) => thisAnswer = answer}
                    placeholder='Enter Answer here'
                />
                <TextButton style={{margin: 20}} onPress={() => this.submit(name,thisQuestion,thisAnswer)}>
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

function mapStateToProps({deckList}){
    return {'deckList': deckList}
}

function mapDispatchToProps (dispatch) {
    return {
        fetchDeck: (deckList) => dispatch(fetchDeck(deckList)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCard)