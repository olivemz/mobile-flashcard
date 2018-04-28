import React, { Component } from 'react'
import {View, TextInput,ListView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import * as flashCardApi  from '../utils/api'
import {getQuestionsInOneDeck} from "../utils/api";


class CardDetail extends Component{
    state ={
        type:'question',
        currentQuestId:0,
        score:0,
        questions:[],
        finish: false
    }
    correct =() =>{
        let score = this.state.score + 100/this.state.questions.length
        let currentQuestId = (this.state.currentQuestId < this.state.questions.length) && this.state.currentQuestId + 1
        let finish = (currentQuestId === this.state.questions.length) ? true : false
        this.setState({score,currentQuestId,finish,type:'question'})
    }

    incorrect =() =>{
        let currentQuestId = (this.state.currentQuestId< this.state.questions.length) && this.state.currentQuestId + 1
        let finish = (currentQuestId === this.state.questions.length) ? true: false
        this.setState({currentQuestId,finish,type:'question'})
    }
    flipCard = (type) =>{
        this.setState(()=>({
            type:(type==='question')?'answer':'question'
        }))
    }
    startOver = () => {
        this.setState({
            type:'question',
            currentQuestId:0,
            score:0,
            finish: false
        })
    }

    componentDidMount() {
        const params = this.props.navigation.state.params
        const name =  params ? params.name : ''
        getQuestionsInOneDeck(name).then(
            (arrReturn) => {
                this.setState({questions:arrReturn})
            }
        )
    }

    render(){
        const {type,
            currentQuestId,
            score,
            questions} = this.state
        const {goBack} = this.props.navigation;

        return(
            <View>
                {!this.state.finish && this.state.questions.length > 0
                    &&
                <View>
                    <Text style={styles.progress}>
                        {currentQuestId+1}/{questions.length}
                    </Text>
                    <Text style={styles.deckName}>
                        {(questions.length > 0) && questions[currentQuestId][type]}
                        </Text>
                    <TextButton style={{margin: 20}} onPress={() => this.flipCard(type)}>
                        {(type==='question')?'Answer':'Question'}
                    </TextButton>
                    <TextButton style={{margin: 20}} onPress={this.correct}>
                        Correct
                    </TextButton>
                    <TextButton style={{margin: 20}} onPress={this.incorrect}>
                        Incorrect
                    </TextButton>
                </View>}
                {this.state.finish && this.state.questions.length > 0
                    &&<View>
                        <Text style={styles.deckName}>Finish</Text>
                        <Text style={styles.score}>Your score is {Math.round(this.state.score,0)}</Text>
                        <TextButton style={{margin: 20}} onPress={this.startOver}>
                            Restart Quiz
                        </TextButton>
                        <TextButton style={{margin: 20}} onPress={()=> goBack()}>
                            Back to Deck
                        </TextButton>
                    </View>
                }
                {this.state.questions.length == 0
                && <View>
                    <Text style={styles.deckName}> Please Add Card first</Text>
                </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    progress: {
        fontSize: 20,
        paddingTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    deckName: {
        fontSize: 50,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    score: {
        fontSize: 20,
        paddingTop: 20,
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