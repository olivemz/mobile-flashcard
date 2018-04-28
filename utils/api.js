import { AsyncStorage } from 'react-native'
const DECK_NAME = 'MobileFlashcard:deckname'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECK_NAME)
}

export function getOneDeck (key) {
    return AsyncStorage.getItem(DECK_NAME).filter((deck)=>deck.title===key)
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
            console.log(data);
            AsyncStorage.setItem(DECK_NAME, JSON.stringify(data))
        })
}
