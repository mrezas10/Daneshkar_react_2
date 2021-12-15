import React from 'react'
import "./songForm.styles.css"
const makeUniqueID = () => {
    return Math.floor(100000 * Math.random())
}

const SongForm = ({songs , setSongs , song , setSong}) => {
    const handleAdd = (e) => {
        e.preventDefault()
        if (song.id) {

            console.log(song)
            setSongs(songs.map(oldUser => {
                if(oldUser.id === song.id)
                {
                    return song
                }
                else return oldUser
            }))
        } else {
            console.log(song.id)
            setSongs([...songs, { id: makeUniqueID(), ...song }])
        }
        setSong({ name: '', img:'', artist: '', album: '', length: '' })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setSong({ ...song, [name]: value })
        console.log(song)
    }
    return (
        <div>
            <form id="song-form" className="closed" onSubmit={handleAdd}>
                <div onClick={() => {
                    let form = document.getElementById("song-form")
                    if(form.className === "opened") {
                        form.className = "closed"
                        setSong({ name: '', img:'', artist: '', album: '', length: '' })
                    }

                }} id="close-button">
                    <span className="material-icons">close</span>
                </div>
                <div>
                    <label htmlFor="input1">Name:</label>
                    <input onChange={handleChange} id={"input1"} type="text" name={'name'} value={song.name} />
                </div>
                <div>
                    <label htmlFor="input5">Image:</label>
                    <input onChange={handleChange} id={"input5"} type="text" name={'img'} value={song.img} />
                </div>
                <div>
                    <label htmlFor="input2">Album:</label>
                    <input onChange={handleChange} id={"input2"} type="text" name={'album'} value={song.album} />
                </div>
                <div>
                    <label htmlFor="input3">Artist:</label>
                    <input onChange={handleChange} id={"input3"} type="text" name={'artist'} value={song.artist} />
                </div>
                <div>
                    <label htmlFor="input4">Length(s):</label>
                    <input onChange={handleChange} id={"input4"} type="text" name={'length'} value={song.length} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SongForm
