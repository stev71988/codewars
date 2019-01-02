const songDecoder = (song) => {
    let songTitle = song.replace(/WUB/g, ' ').trim().split('');
    return  songTitle.map((char, index) => {
        if (/[a-z]/gi.test(char)) return char;
        if (char === ' ' && /[a-z]/gi.test(songTitle[index-1]) ) return char;
    }).join('');
}