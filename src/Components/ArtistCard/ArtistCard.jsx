import "./artistCard.styles.css"
import {Link} from "react-router-dom";

const ArtistCard = ({artist}) => {
    return (
        <Link className="artist-card" to={"/artists/"+artist}>
            {artist}
        </Link>
    )
}

export default ArtistCard