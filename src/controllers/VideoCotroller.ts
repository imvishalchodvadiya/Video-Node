import Video from "../models/Video";

export class VideoCotroller{

  static async add(req,res,next) {

    const video = req.body.video;
    const title = req.body.title;

    const data = {
      video: video,
      title: title
    }

    try {
      
      let video = await new Video(data).save();
      res.send(video);

    } catch (error) {
      next(error);
    }

  }

} 