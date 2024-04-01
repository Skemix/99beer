var lyricsContainer = document.getElementById("lyrics-container");
var lyrics = beer(); // Call the beer function to generate the lyrics

// Update the lyrics-container element with the generated lyrics
lyricsContainer.innerHTML = lyrics;

function beer() {
    var msg = "";

    for (var i = 99; i >= 0; i--) {
        if (i > 2) {
            msg += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>" +
                "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br><br>";
        } else if (i === 2) {
            msg += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>" +
                "Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.<br><br>";
        } else if (i === 1) {
            msg += i + " bottle of beer on the wall, " + i + " bottle of beer.<br>" +
                "Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
        } else if (i === 0) {
            msg += "No more bottles of beer on the wall, no more bottles of beer.<br>" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }

    return msg;
}