import {useEffect, useState} from "react";
import "./artistpage.styles.css"
import ArtistCard from "../ArtistCard/ArtistCard";

const ArtistsPage = ({songs}) => {
    const [artists , setArtists] = useState([])
    const getArtists = (songs) => {
        const arr = []
        songs.forEach(song => {
            if(arr.filter(item => item === song.artist).length === 0)
            {
                arr.push(song.artist)
            }
        })
        return arr
    }

    useEffect(() => {
        setArtists(getArtists(songs))
    } , [songs])
    return (
        <div className="artist-page">
            {artists.map(artist => (
                <ArtistCard artist={artist}/>
            ))}
        </div>
    )
}

export default ArtistsPage