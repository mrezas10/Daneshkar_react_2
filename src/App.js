import {useState , useEffect} from 'react'
import './App.css';
import SongsTable from "./Components/SongsTable/SongsTable";
import SongForm from "./Components/SongForm/SongForm";
import SongPreview from "./Components/SongPreview/SongPreview";
import SortSongs from "./Components/SortSongs/SortSongs";
const songsList = [
  { id: 1, img: "https://images.saymedia-content.com/.image/t_share/MTc4NzcyMTMzODg1NzgxNTEx/10-reasons-why-i-love-music.jpg", name: "Teary Hope", album: "Crowd control", artist: 'Bee Gees', length: '279' },
  { id: 2, img: "https://images.saymedia-content.com/.image/t_share/MTc4NzcyMTMzODg1NzgxNTEx/10-reasons-why-i-love-music.jpg", name: "Adorable Dream", album: "Crowd control", artist: 'Bee Gees', length: '212' },
  { id: 3, img: "https://images.saymedia-content.com/.image/t_share/MTc4NzcyMTMzODg1NzgxNTEx/10-reasons-why-i-love-music.jpg", name: "Dispiriting Chance", album: "Crowd control", artist: 'Bee Gees', length: '196' },
  { id: 4, img: "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE", name: "Deep Place", album: "Baseless", artist: 'Madonna', length: '206' },
  { id: 5, img: "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE", name: "Grief Eyes", album: "Baseless", artist: 'Madonna', length: '254' },
  { id: 6, img: "https://i1.sndcdn.com/avatars-000606604806-j6ghpm-t500x500.jpg", name: "Forever Solo", album: "Animals", artist: 'Paul McCartney', length: '180' },
  { id: 7, img: "https://i1.sndcdn.com/avatars-000606604806-j6ghpm-t500x500.jpg", name: "Cardio Storm", album: "Animals", artist: 'Paul McCartney', length: '187' },
]


function App() {
  const [songs, setSongs] = useState(songsList)
  const [song, setSong] = useState({ name: '', img:'', artist: '', album: '', length: '' })
  const [preview, setPreview] = useState(songs[0])
  useEffect(() => {
        setPreview(songs[0])
  } , [songs])

    return (
    <div className="app">
      <SongPreview song={preview} setSongs={setSongs} songs={songs} setSong={setSong} setPreview={setPreview}/>
      <SongForm song={song} setSong={setSong} setSongs={setSongs} songs={songs}/>
      <h1>Music</h1>
      <SortSongs songs={songs} setSongs={setSongs}/>
      <SongsTable song={song} setSong={setSong} setSongs={setSong} songs={songs} setPreview={setPreview}/>
    </div>
  );
}

export default App;
