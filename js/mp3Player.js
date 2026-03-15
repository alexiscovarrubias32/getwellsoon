$(document).ready(function(){

    const songs = [
        {title:"Will He", file: "mp3/Intongues/01 Will He.mp3", image: "img/intongues.jpg"},
        {title:"Pills", file: "mp3/Intongues/02 Pills.mp3", image: "img/intongues.jpg"},
        {title:"Demons", file: "mp3/Intongues/03 Demons.mp3", image: "img/intongues.jpg"},
        {title:"Window", file: "mp3/Intongues/04 Window.mp3", image: "img/intongues.jpg"},
        {title:"Bitter Fuck", file: "mp3/Intongues/05 Bitter Fuck.mp3", image: "img/intongues.jpg"},
        {title:"Worldstar Money", file: "mp3/Intongues/06 Worldstar Money (Interlude).mp3", image: "img/intongues.jpg"},
        {title:"Plastic Taste", file: "mp3/Intongues/07 Plastic Taste.mp3", image: "img/intongues.jpg"},
        {title:"I Don't Wanna Waste My Time", file: "mp3/Intongues/08 I Don't Wanna Waste My Time.mp3", image: "img/intongues.jpg"},



        
        {title:"ATTENTION", file: "mp3/Ballads1/01 ATTENTION.mp3", image: "img/ballads_1.jpg"},
        {title:"SLOW DANCING IN THE DARK", file: "mp3/Ballads1/02 SLOW DANCING IN THE DARK.mp3", image: "img/ballads_1.jpg"},
        {title:"TEST DRIVE", file: "mp3/Ballads1/03 TEST DRIVE.mp3", image: "img/ballads_1.jpg"},
        {title:"WANTED U", file: "mp3/Ballads1/04 WANTED U.mp3", image: "img/ballads_1.jpg"},
        {title:"CAN'T GET OVER YOU", file: "mp3/Ballads1/05 CAN_T GET OVER YOU (feat. Clams Casino).mp3", image: "img/ballads_1.jpg"},
        {title:"YEAH RIGHT", file: "mp3/Ballads1/06 YEAH RIGHT.mp3", image: "img/ballads_1.jpg"},
        {title:"WHY AM I STILL IN LA", file: "mp3/Ballads1/07 WHY AM I STILL IN LA (feat. Shlohmo _ D33J).mp3", image: "img/ballads_1.jpg"},
        {title:"NO FUN", file: "mp3/Ballads1/08 NO FUN.mp3", image: "img/ballads_1.jpg"},
        {title:"COME THRU", file: "mp3/Ballads1/09 COME THRU.mp3", image: "img/ballads_1.jpg"},
        {title:"R.I.P.", file: "mp3/Ballads1/10 R.I.P. (feat. Trippie Redd).mp3", image: "img/ballads_1.jpg"},
        {title:"XNXX", file: "mp3/Ballads1/11 XNXX.mp3", image: "img/ballads_1.jpg"},
        {title:"I'll SEE YOU IN 40", file: "mp3/Ballads1/12 I_LL SEE YOU IN 40.mp3", image: "img/ballads_1.jpg" },




        {title:"EW", file: "mp3/Nectar/01 Ew.mp3", image: "img/nectar.jpg"},
        {title:"MODUS", file: "mp3/Nectar/02 MODUS.mp3", image: "img/nectar.jpg"},
        {title:"Tick Tock", file: "mp3/Nectar/03 Tick Tock.mp3", image: "img/nectar.jpg"},
        {title:"Daylight", file: "mp3/Nectar/04 Daylight.mp3", image: "img/nectar.jpg"},
        {title:"Upgrade", file: "mp3/Nectar/05 Upgrade.mp3", image: "img/nectar.jpg"},
        {title:"Gimme Love", file: "mp3/Nectar/06 Gimme Love.mp3", image: "img/nectar.jpg"},
        {title:"Run", file: "mp3/Nectar/07 Run.mp3", image: "img/nectar.jpg"},
        {title:"Sanctuary", file: "mp3/Nectar/08 Sanctuary.mp3", image: "img/nectar.jpg"},
        {title:"High Hopes", file: "mp3/Nectar/09 High Hopes.mp3", image: "img/nectar.jpg"},
        {title:"Nitrous", file: "mp3/Nectar/10 Nitrous.mp3", image: "img/nectar.jpg"},
        {title:"Pretty Boy", file: "mp3/Nectar/11 Pretty Boy.mp3", image: "img/nectar.jpg"},
        {title:"Normal People", file: "mp3/Nectar/12 Normal People.mp3", image: "img/nectar.jpg"},
        {title:"Afterthought", file: "mp3/Nectar/13 Afterthought.mp3", image: "img/nectar.jpg"},
        {title:"Mr. Hollywood", file: "mp3/Nectar/14 Mr. Hollywood.mp3", image: "img/nectar.jpg"},
        {title:"777", file: "mp3/Nectar/15 777.mp3", image: "img/nectar.jpg"},
        {title:"Reanimator", file: "mp3/Nectar/16 Reanimator.mp3", image: "img/nectar.jpg"},
        {title:"Like You Do", file: "mp3/Nectar/17 Like You Do.mp3", image: "img/nectar.jpg"},
        {title:"Your Man", file: "mp3/Nectar/18 Your Man.mp3", image: "img/nectar.jpg"},




        {title:"Glimpse of Us", file: "mp3/Smithereens/01. Glimpse of Us.mp3", image: "img/smithereens.png"},
        {title:"Feeling Like The End", file: "mp3/Smithereens/02. Feeling Like The End.mp3", image: "img/smithereens.png"},
        {title:"Die For You", file: "mp3/Smithereens/03. Die For You.mp3", image: "img/smithereens.png"},
        {title:"Before The Day is Over", file: "mp3/Smithereens/04. Before The Day Is Over.mp3", image: "img/smithereens.png"},
        {title:"Dissolve", file: "mp3/Smithereens/05. Dissolve.mp3", image: "img/smithereens.png"},
        {title:"NIGHT RIDER", file: "mp3/Smithereens/06. NIGHT RIDER.mp3", image: "img/smithereens.png"},
        {title:"BLAHBLAHBLAH DEMO", file: "mp3/Smithereens/07. BLAHBLAHBLAH DEMO.mp3", image: "img/smithereens.png"},
        {title:"YUKON", file: "mp3/Smithereens/08. YUKON (INTERLUDE).mp3", image: "img/smithereens.png"},
        {title:"1AM FREESTYLE", file: "mp3/Smithereens/09. 1AM FREESTYLE.mp3", image: "img/smithereens.png"},




        {title:"PIXELATED KISSES", file: "mp3/Pissinthewind/01 PIXELATED KISSES.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Cigarette", file: "mp3/Pissinthewind/02 Cigarette.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Last of a Dying Breed", file: "mp3/Pissinthewind/03 Last of a Dying Breed.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"LOVE YOU LESS", file: "mp3/Pissinthewind/04 LOVE YOU LESS.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"If It Only Gets Better", file: "mp3/Pissinthewind/05 If It Only Gets Better.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Love Me Better", file: "mp3/Pissinthewind/06 Love Me Better.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Piece of You", file: "mp3/Pissinthewind/07 Piece of You.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Hotel California", file: "mp3/Pissinthewind/08 Hotel California.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Tarmac", file: "mp3/Pissinthewind/09 Tarmac.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Forehead Touch the Ground", file: "mp3/Pissinthewind/10 Forehead Touch the Ground.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Past Won't Leave My Bed", file: "mp3/Pissinthewind/11 Past Won't Leave My Bed.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Fade to Black", file: "mp3/Pissinthewind/12 Fade to Black.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"CAN'T SEE SH*T IN THE CLUB", file: "mp3/Pissinthewind/13 CAN'T SEE SHIT IN THE CLUB.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Sojourn", file: "mp3/Pissinthewind/14 Sojourn.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"DYKILY", file: "mp3/Pissinthewind/15 DYKILY.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Rose Colored", file: "mp3/Pissinthewind/16 Rose Colored.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Silhouette Man", file: "mp3/Pissinthewind/17 Silhouette Man.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Fragments", file: "mp3/Pissinthewind/18 Fragments.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Horses to Water", file: "mp3/Pissinthewind/19 Horses to Water.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Strange Home", file: "mp3/Pissinthewind/20 Strange Home.mp3", image: "img/piss-in-the-wind.jpg"},
        {title:"Dior", file: "mp3/Pissinthewind/21 Dior.mp3", image: "img/piss-in-the-wind.jpg"}
    ];

    let currentIndex = 0;
    let audio = $("#audioPlayer")[0];

    // Shuffle mode flag
    let shuffleMode = false;

    function loadSong(index){
        audio.src = songs[index].file;
        $("#albumArt").attr("src", songs[index].image);
        $("#songTitle").text(songs[index].title);
    }

    $("#playpause").click(function(){
        if(audio.paused){
            audio.play();
            $(this).text("Pause");
        } else{
            audio.pause();
            $(this).text("Play");
        }
    });

    $("#next").click(function(){
        if(shuffleMode){
            currentIndex = Math.floor(Math.random() * songs.length);
        } else{
            currentIndex = (currentIndex + 1) % songs.length;
        }
        loadSong(currentIndex);
        audio.play();
    });

    $("#prev").click(function(){
        if(shuffleMode){
            currentIndex = Math.floor(Math.random() * songs.length);
        } else{
            currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        }
        loadSong(currentIndex);
        audio.play();
    });

    // Toggle shuffle mode (highlight only)
    $("#shuffle").click(function(){
        shuffleMode = !shuffleMode;
        $(this).toggleClass("active-shuffle");
    });

    // Update progress bar
    audio.addEventListener("timeupdate", function(){
        let progress = (audio.currentTime / audio.duration) * 100;
        $("#progressBar").val(progress);
    });

    // Seek song
    $("#progressBar").on("input", function(){
        let seekTime = (audio.duration * $(this).val()) / 100;
        audio.currentTime = seekTime;
    });

    // Time display
    audio.addEventListener("timeupdate", function(){
        let current = audio.currentTime;
        let total = audio.duration;
        if(!isNaN(total)){
            let currentMinutes = Math.floor(current / 60);
            let currentSeconds = Math.floor(current % 60);
            if(currentSeconds < 10){ currentSeconds = "0" + currentSeconds; }
            let totalMinutes = Math.floor(total / 60);
            let totalSeconds = Math.floor(total % 60);
            if(totalSeconds < 10){ totalSeconds = "0" + totalSeconds; }

            $("#currentTime").text(currentMinutes + ":" + currentSeconds);
            $("#duration").text(totalMinutes + ":" + totalSeconds);
        }
    });

    // Auto next / shuffle
    audio.addEventListener("ended", function(){
        if(shuffleMode){
            currentIndex = Math.floor(Math.random() * songs.length);
        } else{
            currentIndex = (currentIndex + 1) % songs.length;
        }
        loadSong(currentIndex);
        audio.play();
    });

    loadSong(currentIndex);
});