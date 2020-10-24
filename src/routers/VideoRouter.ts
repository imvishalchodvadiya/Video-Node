import { Router } from 'express';

import { VideoCotroller } from "../controllers/VideoCotroller";

class VideoRouter{

  public router: Router;

  constructor() {

    this.router = Router();

    this.postRouter();
  }

  postRouter() {
    this.router.post('/', VideoCotroller.add);
  }

}

export default new VideoRouter().router;