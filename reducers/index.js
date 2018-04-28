import { FETCH_DECK } from '../actions'

function deckList (state = {}, action) {
    let arrReturn = {...state};
    switch (action.type) {
        case FETCH_DECK :
            var {deckList} = action
            return {
                deckList
            }
        default :
            return state
    }
}

export default deckList