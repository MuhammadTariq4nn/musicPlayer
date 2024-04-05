let songs=[
    {name: "Sexy Red,Get it Sexy",
    duration:"3m",
    artist: "Hellcats SRTs ft.",
    id:0,
    url:"./music/sexyRed.mpeg", 
    image:"https://images.unsplash.com/photo-1574784618880-a1036d310e7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJ1bmslMjBnaXJsfGVufDB8fDB8fHww",
  },
   {name: "Ab Bhi Chaho Dil Na Manay",
    duration:"5m",
    artist: " Shreya Ghoshal, Jacqueline",
    id:1,
    url:"./music/AbBhiChaho.mpeg", 
    image:"https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=2048x2048&w=is&k=20&c=VVh0Pwj2MNN5UwSfdZ1fo8QeKkdFqXs3TjsNEvYGNM8=",
  },
   {name: "Baby Calm Down",
   duration:"5m",
   artist: "The Rock", 
   id:2,
   url:"./music/calmdown.mpeg",
   image:"https://media.istockphoto.com/id/1644741361/photo/portrait-of-beautiful-mature-woman.webp?b=1&s=170667a&w=0&k=20&c=ptg8YRZWILFb_1sBMvnMXqUSWkKNxnghQJFah2Z9P7A=",
    }
];
let selectedSong=0;
let upperSide=document.querySelector('.upperSide');
let part2=document.querySelector('.part2');
let songName=document.querySelector('.songName');
let fav=document.querySelector('.fav');
var favFlag=0
fav.addEventListener('click',()=>{
    if(favFlag==0){
        fav.innerHTML=`<i class="ri-heart-fill"></i>`;
        favFlag=1
    }else{
        fav.innerHTML=`<i class="ri-heart-line"></i>`;
        favFlag=0
    }
})

part2.innerHTML=`<h3>${songs[selectedSong].name}</h3>
<p>${songs[selectedSong].artist}</p>`
songName.innerHTML=`<h2>${songs[selectedSong].name}</h2>`;
upperSide.style.backgroundImage=`url(${songs[selectedSong].image})`;


// let clutter="";
// songs.forEach((song,index)=>{
//     clutter+=song;
//       console.log(song,index)
//       if(index===song.id){
//         console.log("hello")
//       }    
// })
//console.log(songs[clutter])



//console.log(songs[selectedSong].url)

let aaudio=new Audio();
aaudio.src=songs[selectedSong].url;
        //   aaudio.play();
let forwardBtn=document.querySelector('.ri-skip-right-fill');
let backwardBtn=document.querySelector('.ri-skip-left-fill');
forwardBtn.addEventListener('click',()=>{
        // console.log(selectedSong)
         selectedSong++;
         if(selectedSong<=songs.length-1){
            aaudio.src=songs[selectedSong].url;
            upperSide.style.backgroundImage=`url(${songs[selectedSong].image})`;
            songName.innerHTML=`<h2>${songs[selectedSong].name}</h2>`;
            part2.innerHTML=`<h3>${songs[selectedSong].name}</h3>
            <p>${songs[selectedSong].artist}</p>`
            aaudio.play();
            play.innerHTML=`<i class="ri-pause-large-line"></i>`
         }else{
            forwardBtn.style.opacity='0.3';
         }
});


backwardBtn.addEventListener('click',()=>{
    // console.log(selectedSong)
     selectedSong--;
     if(selectedSong!=-1){
        aaudio.src=songs[selectedSong].url;
        upperSide.style.backgroundImage=`url(${songs[selectedSong].image})`;
        songName.innerHTML=`<h2>${songs[selectedSong].name}</h2>`;
        part2.innerHTML=`<h3>${songs[selectedSong].name}</h3>
        <p>${songs[selectedSong].artist}</p>`
        aaudio.play();
        play.innerHTML=`<i class="ri-pause-large-line"></i>`
     }else{
        backwardBtn.style.opacity='0.3';
     }
});




var flag=0;
let audio=document.querySelector('#myAudio');
let play=document.querySelector('.play');
play.addEventListener('click',()=>{
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-large-line"></i>`
        //var audio = new Audio();
        aaudio.play();
        flag=1
    }else{
        play.innerHTML=`<i class="ri-play-large-fill"></i>`
        aaudio.pause();
        flag=0
    }
});
