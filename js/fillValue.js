
document.getElementById("m1").innerHTML = localStorage.getItem('message1');
document.getElementById("m2").innerHTML = localStorage.getItem('message2');
document.getElementById("m3").innerHTML = localStorage.getItem('message3');
document.getElementById("m4").innerHTML = localStorage.getItem('message4');

if (localStorage.getItem('message1') == undefined) {
    setValueFeedback();
    location.reload();
}

if (localStorage.getItem('message5') == undefined) {
    document.getElementById('customSlide').classList.add("invisible");
}

else {
    document.getElementById('customSlide').classList.remove("invisible");
}

function setValueFeedback() {
    localStorage.setItem('message1', "This site has informative guides and helped me get back on track.");

    localStorage.setItem('message2', "Without this site, it would be hard for me to find information on computer security.");

    localStorage.setItem('message3', "This site made me clear on so many topics as how networks work and how to safeguard them.");

    localStorage.setItem('message4', "ArmedGeniuses has made me more proficient at security and has increased my knowledge in the same.");
}
