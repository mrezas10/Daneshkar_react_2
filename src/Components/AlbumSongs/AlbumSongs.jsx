import {useParams} from "react-router-dom";
import SongCard from "../SongCard/SongCard";
import "./albumSongs.styles.css"

const AlbumSongs = ({songs, setSong , setSongs , setPreview}) => {
    const params = useParams()
    return (
        <div className="album-table">
            <div className="album-desc">
                <img className="album-desc-img" src={songs.filter(song => song.album === params.Album)[0].img} alt=""/>
                <div className="album-desc-text">
                    <p>Name: {songs.filter(song => song.album === params.Album)[0].album}</p>
                    <p>Artist: {songs.filter(song => song.album === params.Album)[0].artist}</p>
                    <p>Songs: {songs.filter(song => song.album === params.Album).length}</p>
                </div>
            </div>
            <table>
                <tbody>
                {songs.filter(song => song.album === params.Album).map(item => (
                        <SongCard key={item.id} item={item} songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default AlbumSongs