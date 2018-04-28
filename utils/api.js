import { AsyncStorage } from 'react-native'
const DECK_NAME = 'MobileFlashcard:deckname'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECK_NAME)
}

export function getQuestionsInOneDeck (key) {
    return AsyncStorage.getItem(DECK_NAME).then((results)=>{
        const data = JSON.parse(results)
        return data[key]['questions']
    })
}

export function submitDeck (key) {
    return AsyncStorage.mergeItem(DECK_NAME, JSON.stringify({
        [key]: {title:key, questions:[]}
    }))
}

export function submitCard ( entry, key ) {
    return AsyncStorage.getItem(DECK_NAME)
        .then((results) => {
            const data = JSON.parse(results)
            console.log(key, entry);
            data[key]['questions'].push(entry)
            AsyncStorage.setItem(DECK_NAME, JSON.stringify(data))
        })
}
