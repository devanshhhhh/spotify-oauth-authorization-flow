const jwt=require("jsonwebtoken");
const spotifyService=require("../services/tokenService");
const spotifyConfig=require("../config/spotifyConfig");
const crypto=require("crypto");


const JWT_SECRET=crypto.randomUUID();

exports.login=(req, res)=>{
    const state=jwt.sign({valid: true}, JWT_SECRET);

    const myScope="user-read-email playlist-modify-public user-read-playback-state user-read-currently-playing";
    const authorizationUrl=`https://accounts.spotify.com/authorize?client_id=${spotifyConfig.clientId}&redirect_uri=${encodeURIComponent(spotifyConfig.redirectUri)}&response_type=code&state=${state}&scope=${myScope}`;

    res.redirect(authorizationUrl);
};

exports.callback=async(req, res)=>{
    try{
        const{code, state}=req.query;
        try{
            const decoded=jwt.verify(state, JWT_SECRET);
            if (!decoded.valid) {
                return res.status(403).json({error: "Invalid state"});
            }
        }
        catch(err){
            return res.status(403).json({error: "Invalid state"});
        }
        const accessToken=await spotifyService.exchangeCodeForToken(code);
        res.redirect(`your-website/app/success?token=${accessToken}`);  //Replace the URL accordingly 
    }
    catch(error){
        res.redirect("your-website/app/fail");  //Replace the URL accordingly
    }
};
