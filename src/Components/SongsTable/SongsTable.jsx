import SongCard from "../SongCard/SongCard";
import "./songsTable.styles.css"
import {useState} from "react";
import {InputGroup , FormControl} from "react-bootstrap";

export const SongsTable = ({ songs, setSongs, setSong, setPreview }) => {
    const [filter, setFilter] = useState('')
    return (
        <div className="songs-table">
            <InputGroup className="search-input">
                <FormControl
                    placeholder="Search in Music..."
                    aria-label="Music Search"
                    onChange={e => setFilter(e.target.value)}
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <table>
                <tbody>
                {songs.filter(song => song.name.toLowerCase().includes(filter.toLowerCase()) || song.album.toLowerCase().includes(filter.toLowerCase()) || song.artist.toLowerCase().includes(filter.toLowerCase())).length === 0 ?
                    <span className='text-center'>no music with this description exists.</span>
                    :
                    songs.filter(song => song.name.toLowerCase().includes(filter.toLowerCase()) || song.album.toLowerCase().includes(filter.toLowerCase()) || song.artist.toLowerCase().includes(filter.toLowerCase())).map(item => (
                    <SongCard key={item.id} item={item} songs={songs} setSongs={setSongs} setSong={setSong} setPreview={setPreview}/>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default SongsTable
