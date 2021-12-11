import "./songCard.styles.css"

const SongCard = ({item, setPreview}) => {
    return (
        <tr className="song-card" onClick={()=>{setPreview(item)}}>
            <td className="song-col">
                <div>
                    <img className="song-card-img" src={item.img} alt="music"/>
                </div>
                <div>
                    <div className="song-name">
                        {item.name}
                    </div>
                    <div className="song-artist">
                        {item.artist}
                    </div>
                </div>
            </td>
            <td className="song-col">
                <div>
                    <div>
                        {item.album}
                    </div>
                    <div>
                        {Math.floor(Number(item.length)/60).toString() + ":" + Math.floor((Number(item.length)%60)/10).toFixed(1).toString().replace("." , "")}
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default SongCard