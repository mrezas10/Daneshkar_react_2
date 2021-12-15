import {useParams} from "react-router-dom";
import SongCard from "../SongCard/SongCard";
import "./artistSongs.styles.css"

const ArtistSongs = ({songs, setSong , setSongs , setPreview}) => {
    const params = useParams()
    return (
        <div className="artist-table">
            <div className="artist-desc">
                <div className="artist-desc-text">
                    <p>Name: {songs.filter(song => song.artist === params.Artist)[0].artist}</p>
                    <p>Songs: {songs.filter(song => song.artist === params.Artist).length}</p>
                </div>
            </div>
            <table>
                <tbody>
                {songs.filter(song => song.artist === params.Artist).map(item => (
                    <SongCard key={item.id} item={item} songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default ArtistSongs