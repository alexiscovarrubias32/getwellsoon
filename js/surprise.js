$(document).ready(function() {
    const surprise = $("#surpriseContainer");
    let isOpen = false;

    // --- CREATE AUDIO ---
    const surpriseSong = document.createElement("audio");
    surpriseSong.src = "mp3/Nectar/14 Mr. Hollywood.mp3";
    surpriseSong.loop = true;
    surpriseSong.volume = 1; // start at full volume

    // Ensure metadata is loaded before seeking
    surpriseSong.addEventListener("loadedmetadata", function() {
        surpriseSong.currentTime = 32;
    });

    // --- INITIAL UI SETUP ---
    surprise.html('<span id="surprisePrompt">Click for a surprise!!!!</span>');

    surprise.append(`
        <div id="surpriseContent" style="display: none;">
            <img src="/img/joji.jpg" alt="Surprise Image">
            <h3>What do you think Ms. Hollywood?</h3>
            <p>📍 Location: Moody Center ATX - Austin, TX <br> Date: July 6, 2026</p>
            <p>Won't you?</p>
            <button id="closeSurprise">Close</button>
        </div>
    `);

    // --- OPEN SURPRISE ---
    surprise.click(function() {
        if (!isOpen) {
            $("#surprisePrompt").hide();
            surprise.addClass("surprise-open");

            setTimeout(() => {
                $("#surpriseContent").fadeIn(300).css("display", "flex");
            }, 500);

            // Always restart at 32s
            surpriseSong.pause();
            surpriseSong.currentTime = 32;
            surpriseSong.volume = 1; // reset volume in case it was faded out
            surpriseSong.play();

            isOpen = true;
        }
    });

    // --- FADE OUT FUNCTION ---
    function fadeOutAudio(audio, duration = 800) {
        const steps = 20;
        const stepTime = duration / steps;
        const volumeStep = audio.volume / steps;

        let fade = setInterval(() => {
            if (audio.volume > volumeStep) {
                audio.volume -= volumeStep;
            } else {
                audio.volume = 0;
                audio.pause();
                clearInterval(fade);
            }
        }, stepTime);
    }

    // --- CLOSE SURPRISE ---
    $(document).on("click", "#closeSurprise", function(e) {
        e.stopPropagation();

        $("#surpriseContent").fadeOut(300, function() {
            surprise.removeClass("surprise-open");
            $("#surprisePrompt").show();

            // 🎧 Smooth fade out instead of instant stop
            fadeOutAudio(surpriseSong, 800);

            isOpen = false;
        });
    });
});