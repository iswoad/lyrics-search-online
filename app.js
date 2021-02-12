const getSearchedSong = async () => {
    const songName = document.getElementById('search-input').value;
    console.log(songName);
    // const url = `https://api.lyrics.ovh/suggest/:${songName}`
    // const res = await fetch(url);
    // const data = await res.json();
    // getSearchedSong(data.data)
    fetch(`https://api.lyrics.ovh/suggest/:${songName}`)
    .then(res => res.json())
    .then(data =>displaySong(data.data))
    .catch(error => displayError('Something Went Wrong! Please Try Again'));
}

const displaySong = songs =>{
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML ='';
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
                        <button onclick="getLyrics('${song.title}', '${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                
                `        
            songContainer.appendChild(songDiv)
    });
}

const getLyrics = async (title, name) => {
        
        const url = `https://api.lyrics.ovh/v15/:${name}/:${title}`
        try{
            const res = await fetch(url);
            const data = await res.json();
            displayLyrics(data.lyrics)
        }
        catch (error){
            displayError('Sorry I failed to load the lyrics! Try Again Later!!')
    }
}
//         fetch(`https://api.lyrics.ovh/v1/:${name}/:${title}`)
//         .then(res => res.json())
//         .then(data => displayLyrics(data.lyrics))
// }

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('lyrics-container');
    lyricsDiv.innerText = lyrics;
}

const displayError = error => {
    const errorTag = document.getElementById('error-msg')
    errorTag.innerText = error;
}