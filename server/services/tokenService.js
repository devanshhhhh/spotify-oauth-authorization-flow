const axios=require("axios");
const querystring=require("querystring");
const spotifyConfig=require("../config/spotifyConfig");


async function exchangeCodeForToken(code){
    try{
        const tokenResponse=await axios.post("https://accounts.spotify.com/api/token", querystring.stringify({
                grant_type: "authorization_code",
                code: code,
                redirect_uri: spotifyConfig.redirectUri,
                client_id: spotifyConfig.clientId,
                client_secret: spotifyConfig.clientSecret,
            }),
            {
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        const accessToken=tokenResponse.data.access_token;        
        return accessToken;
    }
    catch(err){
        throw err;
    }
};

module.exports={
    exchangeCodeForToken
};
