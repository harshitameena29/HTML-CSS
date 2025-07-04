console.log('Lets write JavaScript');
async function main(){
    let a = await fetch("http://127.0.0.1:5500/Spotify%20Clone/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;

}
main()
