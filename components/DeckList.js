import React, { Component } from 'react'
import {View,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'

class DeckList extends Component {

    state = {
        deckList: [{name:'test1', cardsNumbers:11},{name:'test2', cardsNumbers:3}]
    }

    renderDeck = ({name, cardsNumbers}) =>(
        <View style ={styles.item}>
            <Text style={styles.deckName}>
                {name}
            </Text>
            <Text style={styles.deckCardNumber}>
                cards number: {cardsNumbers}
            </Text>
        </View>
    )
    render (){
        const {deckList} = this.state
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <ListView
                dataSource={ds.cloneWithRows(deckList)}
                renderRow={(rowData) => this.renderDeck(rowData)}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    deckName: {
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 20
    },
    deckCardNumber:{
        fontSize: 15,
    }
})

export default DeckList
