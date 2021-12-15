import {useEffect, useState} from "react";
import AlbumCard from "../AlbumCards/AlbumCard";
import "./albumPage.style.css"

const AlbumsPage = ({songs}) => {
    const [albums , setAlbums] = useState([])
    const getAlbums = (songs) => {
        const arr = []
        songs.forEach(song => {
            if(arr.filter(item => item.name === song.album).length === 0)
            {
                arr.push({name: song.album, img: song.img})
            }
        })
        return arr
    }

    useEffect(() => {
        setAlbums(getAlbums(songs))
    } , [songs])
    return (
        <div className="album-page">
            {albums.map(album => (
                <AlbumCard album={album}/>
            ))}
        </div>
    )
}

export default AlbumsPage