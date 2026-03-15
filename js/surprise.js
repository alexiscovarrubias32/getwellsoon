$(document).ready(function() {
    const surprise = $("#surpriseContainer");
    const rightCol = $(".right-column"); // Kept from your previous version
    let isOpen = false;

    // 1. Create the audio object
    const surpriseSong = document.createElement("audio");
    surpriseSong.src = "mp3/Nectar/14 Mr. Hollywood.mp3";
    surpriseSong.currentTime = 32000;
    surpriseSong.loop = true;

    /** * 2. INITIAL SETUP 
     * We wrap the initial text in a span so we can hide/show it.
     * We also append the hidden content immediately so it's ready in the DOM.
     */
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
            // FIX: Hide the prompt instead of removing it
            $("#surprisePrompt").hide();

            surprise.addClass("surprise-open");

            setTimeout(() => {
                // Ensure content fades in and stays centered
                $("#surpriseContent").fadeIn(300).css("display", "flex");
            }, 500); // matches your CSS transition

            surpriseSong.play();
            isOpen = true;
        }
    });

    // --- CLOSE SURPRISE ---
    $(document).on("click", "#closeSurprise", function(e) {
        // Prevents the click from "bubbling" up and re-opening the box
        e.stopPropagation();

        $("#surpriseContent").fadeOut(300, function() {
            surprise.removeClass("surprise-open");

            // FIX: Bring the prompt back when the box shrinks
            $("#surprisePrompt").show();

            surpriseSong.pause();
            surpriseSong.currentTime = 30; // Resets to your preferred start point
            isOpen = false;
        });
    });
});