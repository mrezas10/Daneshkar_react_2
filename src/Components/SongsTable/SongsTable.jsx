import SongCard from "../SongCard/SongCard";
import "./songsTable.styles.css"
export const SongsTable = ({ songs, setSongs, setSong, setPreview }) => {

    return (
        <div className="songs-table">
            <table>
                <tbody>
                {songs.map(item => (
                    <SongCard key={item.id} item={item} songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default SongsTable
