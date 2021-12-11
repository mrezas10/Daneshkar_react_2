import "./sortSongs.styles.css"

const SortSongs = ({songs , setSongs}) => {
    const shuffle = () => {
        setSongs([...songs.sort((a,b) => {
            return 0.5 - Math.random()
        })])
    }
    const sortBy = (attr) =>  {
        setSongs([...songs.sort((a,b) => {
            if(a[attr] < b[attr])
                return -1
            else if (a[attr]> b[attr])
                return 1
            return 0
        })])
    }
    return (
        <div className="sort-songs">
            <ul className="sort-by">
                <li className="sort-title">Sort By:</li>
                <li className="sort-buttons" onClick={() => sortBy("name")}>
                    Name
                </li>
                <li className="sort-buttons" onClick={() => sortBy("album")}>
                    Album
                </li>
                <li className="sort-buttons" onClick={() => sortBy("artist")}>
                    Artist
                </li>
            </ul>
            <div className="action-buttons">
                <div onClick={shuffle}>
                    <span className="material-icons">shuffle</span>
                </div>
                <div onClick={() => {
                    let form = document.getElementById("song-form")
                    if(form.className === "closed")
                        form.className = "opened"
                    else
                        form.className = "closed"
                }}>
                    <span className="material-icons">add</span>
                </div>
            </div>


        </div>

    )
}

export default SortSongs