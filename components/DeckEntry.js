import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'
import {fetchDeck} from "../actions";
import {connect} from "react-redux";


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
        const {deckList} = this.props
        const cardsNumbers = (deckList.filter((deck) => deck.name === name).length > 0)
            ? deckList.filter((deck) => deck.name === name)[0].cardsNumbers
            : 0

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
)(DeckEntry)