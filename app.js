const getSearchedSong = () => {
    const songName = document.getElementById('search-input').value;
    console.log(songName);
    fetch(`https://api.lyrics.ovh/suggest/:${songName}`)
    .then(res => res.json())
    .then(data =>displaySong(data.data))
}

const displaySong = songs =>{
    console.log(songs);
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
                
                    <div class="col-md-9">
                        <h3 id="song-name" class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
                
                `
        const songContainer = document.getElementById('song-container');
        songContainer.appendChild(songDiv)
    });
}

const showLyrics = () =>{
    
}