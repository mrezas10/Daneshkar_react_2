import "./albumCard.style.css"
import {Link} from "react-router-dom";

const AlbumCard = ({album}) => {
    return (
        <Link className="album-card" to={"/albums/"+album.name}>
                <img className="album-image" src={album.img} alt="album"/>
                <p className="album-name">{album.name}</p>
        </Link>

    )
}

export default AlbumCard