import "./songPreview.styles.css"
const SongPreview = ({song , songs , setSongs ,setSong, setPreview}) => {
    const handleDelete = (id) => {
        setSongs(songs.filter(user => user.id !== id))
        setPreview(songs[0])
    }
    return(
        <div className="song-preview">
            <div className="preview-actions">
                <button onClick={() => {
                    let form = document.getElementById("song-form")
                    if(form.className === "closed")
                        form.className = "opened"
                    setSong(song) }}><span className="material-icons top-buttons">edit</span></button>
                <button onClick={() => handleDelete(song.id)}><span className="material-icons top-buttons">delete</span></button>
            </div>

            <img className="song-img" src={song.img} alt="music"/>
            <h2 id="song-preview-name">{song.name}</h2>
            <h3 className="song-preview-subtext">{song.album}</h3>
            <h3 className="song-preview-subtext">{song.artist}</h3>
            <div id="song-progress"> </div>
            <div id="song-timer">
                <div>0:00</div>
                <div>{Math.floor(Number(song.length)/60).toString() + ":" + Math.floor((Number(song.length)%60)/10).toFixed(1).toString().replace("." , "")}</div>
            </div>
            <div id="player-buttons">
                <div>
                    <span className="material-icons player-icons">fast_rewind</span>
                </div>
                <div>
                    <span className="material-icons player-icons">play_arrow</span>
                </div>
                <div>
                    <span className="material-icons player-icons">fast_forward</span>
                </div>

            </div>
        </div>
    )
}

export default SongPreview