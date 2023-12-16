export const authEndpoint = "https://accounts.spotify.com/authorize"
const clientID = "7688a6b3229d4defa73a8003e368134e"
const redirect_uri = "http://localhost:5173/"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenfromApi = ()=>{
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((intial,item)=>{
    let parts = item.split("=")
    intial[parts[0]] = decodeURIComponent(parts[1])
    return intial
  },{})
}

export const access_url = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;