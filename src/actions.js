
export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';

export const addSong = (song) => ({
    type: ADD_SONG,
    payload: song
});

export const deleteSong = (index) => ({
    type: DELETE_SONG,
    payload: index
});