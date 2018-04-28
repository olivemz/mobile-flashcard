export const FETCH_DECK = 'FETCH_DECK'

export function fetchDeck (deckList) {
    return {
        type: FETCH_DECK,
        deckList
    }
}
