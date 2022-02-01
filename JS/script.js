function img(){
    for(let i = 1; i <= 6; i++){
        document.getElementById('content').innerHTML += `<img id="img" src="../IMG/insta${i}.png">`
    }
}

img();