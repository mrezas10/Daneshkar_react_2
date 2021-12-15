import {useState , useEffect} from 'react'
import './App.css';
import {SongForm, SongPreview, SortSongs, SongsTable, AlbumsPage, ArtistsPage, AlbumSongs, ArtistSongs} from "./Components"
import {Outlet , Route , BrowserRouter , Routes , Link} from "react-router-dom";

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
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>
                        <SongPreview song={preview} setSongs={setSongs} songs={songs} setSong={setSong} setPreview={setPreview}/>
                        <SongForm song={song} setSong={setSong} setSongs={setSongs} songs={songs}/>
                        <Menu/>
                        <Outlet/>
                    </div>
                    }>
                        <Route index element={<div>
                            <SortSongs songs={songs} setSongs={setSongs}/>
                            <SongsTable song={song} setSong={setSong} setSongs={setSong} songs={songs} setPreview={setPreview}/>
                        </div>
                        }/>
                        <Route path="/albums">
                            <Route index element={<AlbumsPage songs={songs}/>}/>
                            <Route path=":Album" element={<AlbumSongs songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>}/>
                        </Route>
                        <Route path="/artists">
                            <Route index element={<ArtistsPage songs={songs}/>}/>
                            <Route path=":Artist" element={<ArtistSongs songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>}/>
                        </Route>
                    </Route>
                </Routes>
                </BrowserRouter>
            </div>

  );
}

const Menu = () => {
  return (
          <div className="app-menu">
              <div>
                  <Link className="app-links" to="/">Music</Link>
              </div>
              <div>
                  <Link className="app-links" to="/albums">Albums</Link>
              </div>
              <div>
                  <Link className="app-links" to="/artists">Artists</Link>
              </div>
          </div>
  )

}

export default App;
