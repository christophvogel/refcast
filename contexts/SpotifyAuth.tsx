export const authEndpoint = process.env.SPOTIFY_AUTHORIZE_URL;

let redirectUri;
if (process.env.MODE_REVIEW) {
  redirectUri = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;
} else {
  redirectUri = process.env.SPOTIFY_REDIRECT_URI;
}
const clientId = process.env.SPOTIFY_CLIENT_ID;

const scopes = [
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-read-private",
  "user-read-email",
  "streaming",
  "user-read-currently-playing",
];

type URLParts = {
  [key: string]: string;
};
export const getTokenFromUrl = () => {
  const parts = window.location.hash
    .substring(1)
    .split("&")
    .reduce<URLParts>((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
  return parts.access_token;
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
