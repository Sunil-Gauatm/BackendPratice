import express from 'express'
import ytdl from "ytdl-core";


const Router = express.Router()

Router.get("/getvideo", async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).json({ error: "No URL provided" });

    try {
        const info = await ytdl.getInfo(videoURL);
        const format = ytdl.chooseFormat(info.formats, { quality: "highestvideo" });
        res.json({ directUrl: format.url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not extract video info" });
    }

})


export default Router