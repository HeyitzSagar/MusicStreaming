import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, deleteSong } from '../../actions';

function SongAdd() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const audioRef = useRef(null);
  const songs = useSelector(state => state.songs);
  const dispatch = useDispatch();

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const songName = file.name;
      dispatch(addSong({ name: songName, url: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  

  const handleDeleteSong = (index) => {
    dispatch(deleteSong(index));
  };

  const handlePlayPause = (index) => {
    if (index === currentSong && isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setCurrentSong(index);
      setIsPlaying(true);
      audioRef.current.src = songs[index].url;
      audioRef.current.play();
    }
  };

  const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className='bg-blue-900 p-5 items-center text-center justify-center'>
      <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='text-center p-2 font-mono font-bold' type='text' placeholder='Search Songs here' />
      <h1 className='text-white font-mono font-bold underline text-3xl p-5'>Song List</h1>
      <input className='text-white bg-gray-500 p-3' type="file" onChange={handleFileChange} accept=".mp3" />
      <ul className='flex flex-col mt-5 bg-gray-200 p-2'>
        {filteredSongs.map((song, index) => (
          <li key={index}>
            <h1 className='text-red-900 font-bold font-mono'>{song.name}</h1>
            <button className='bg-red-600 p-2 text-center m-2 text-white font-bold font-mono' onClick={() => handleDeleteSong(index)}>Delete</button>
            <button className='bg-green-700 p-2 text-center m-2 text-white font-bold font-mono' onClick={() => handlePlayPause(index)}>
              {isPlaying && index === currentSong ? 'Pause' : 'Play'}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} />
    </div>
  );
}

export default SongAdd;
