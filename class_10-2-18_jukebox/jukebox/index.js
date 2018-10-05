let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let skipButton = document.getElementById('skipButton')
let previousButton = document.getElementById('previousButton')

class Song{
  constructor(song, url, artist, date){
    this.song = song;
    this.url = url;
    this.artist = artist;
    this.date = date;
  }
}

var song1 = new Song('Carousel', 'audioFile/ariels.mp3', 'Aries',  '10-12-18')
var song2 = new Song('Paranoia', 'audioFile/Paranoia.mp3', 'chance the rapper', '10-13-18')
var song3 = new Song('Sayonara', 'audioFile/Sayonara.mp3', 'Aries', '10-14-18')
var song4 = new Song('Summertime Magic', 'audioFile/Summertime_Magic.mp3', 'Childish gambino', '10-15-18')
var song5 = new Song('Smooth Criminal', 'audioFile/Smooth_Criminal.mp3', 'Haywyre', '10-15-18')
var song6 = new Song('Less than friends', 'audioFile/Less_Than_Friends.mp3', 'Aries', '10-16-18')


var songs = [song1, song2, song3, song4, song5, song6]

var currentSong = 0

var myAudio = new Audio();


  function playSong(){
    myAudio.src = songs[currentSong].url;
    myAudio.play()
    myAudio.onended = function(){
      skipSong()
    }
  }

  function pauseSong(){
    myAudio.src = songs[currentSong].url;
    myAudio.pause()
    songs.currentTime;
  }

  function skipSong(){
    if(currentSong == songs.length - 1){
      currentSong = 0
      playSong()
    }
    else{
      currentSong++;
      playSong()
      }
    }

  function previousSong(){
    if(currentSong < songs.length){
      currentSong--
      playSong()
    }
    else{
      songs[currentSong]
    }
  }


playButton.addEventListener('click', playSong)
pauseButton.addEventListener('click', pauseSong)
skipButton.addEventListener('click', skipSong)
previousButton.addEventListener('click', previousSong)
