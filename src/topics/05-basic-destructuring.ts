
interface AudioPlayer{
    audioVolume : number;
    songDuration : number;
    song: string;
    details: Details;
}

interface Details{
    author : string;
    year: number;
}


const Song = "New Song";



const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 20,
    song: "cansion",
    details: {
        author: `Suir`,
        year:2015
    }
}





const {song:anotherSong, songDuration:duration, details:details} = audioPlayer;
const {author:author}=details;
 


/* console.log(`Song `, anotherSong);
console.log(`Duration`, audioPlayer.songDuration);
console.log(`Author`,author); */


const [p1,p2,trunks,p4 = "undefined"] : string [] = [`Goku`,`Vegeta`,`Trunks`];


console.log(`Personaje 3 =`,p4);

export{};

