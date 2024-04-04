import { ADD_SONG, DELETE_SONG } from "./actions";

const initialState = {
    songs: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_SONG:
            return{
                ...state,
                songs:[...state.songs, action.payload]
            };
        case DELETE_SONG:
            return{
                ...state, 
                songs: state.songs.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
}

export default rootReducer;