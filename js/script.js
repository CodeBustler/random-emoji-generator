
function randomEmojiFunc() {
    // Random Emoji
    let emojiNumber = Math.floor(Math.random() * 36) + 1;
    var randomEmoji = "./img/emoji/emoji-" + emojiNumber + ".png";
    let emoji = document.querySelectorAll("img")[1];
    emoji.setAttribute("src", randomEmoji);

    // Download Emoji
    let downloadEmoji = document.querySelectorAll("a")[0];
    downloadEmoji.setAttribute("href", randomEmoji)
}



