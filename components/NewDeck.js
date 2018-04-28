import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import {submitDeck}  from '../utils/api'
import DeckEntry from "./DeckEntry";
import { connect } from 'react-redux'
import {fetchDeck} from "../actions";

class NewDeck extends Component{
    state ={
        deckName:''
    }
    submit =(name) =>{
        (name) && submitDeck(name).then((items)=>{items = JSON.parse(items)
            let deckList = []
            Object.entries(items).map(
                (item) => {
                    (1 in item ) && ('title' in item[1])&&(deckList.push({name:item[1].title, cardsNumbers:item[1].questions.length}))
                }
            )
            this.props.fetchDeck(deckList)}).then(this.props.navigation.navigate(
            'DeckEntry',
            {name}
        ))
    }
    render(){
        let deckNameProps = '';
        return(
            <View>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.content}
                    onChangeText={(deckName) => {deckNameProps = deckName}}
                    placeholder='Deck title'
                />
                <TextButton style={{margin: 20}} onPress={() =>this.submit(deckNameProps)}>
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
)(NewDeck)
