document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        console.log("loaded");
        setTimeout(() => {
            loadend();
        }, 11300);
    } else {
        console.log("not loaded");
        setTimeout(() => {
            loadend();
        }, 11300);
    }
};

function loadend() {
    document.getElementById('three-container').style.display= "none";
    // document.getElementById('gallery').style.display= "flex";
    document.getElementById('welcome-section').style.display= "flex";
}