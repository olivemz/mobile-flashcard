import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import {submitDeck}  from '../utils/api'


class NewDeck extends Component{
    state ={
        deckName:''
    }
    submit =() =>{
        console.log('this deck is', this.state.deckName);
        let name = this.state.deckName;
        let cardsNumbers = 0;
        (this.state.deckName) && submitDeck(this.state.deckName).then(
            this.setState({deckName:''})
        ).then(this.props.navigation.navigate(
            'DeckEntry',
            {name, cardsNumbers}
        ))
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