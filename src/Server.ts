import * as express from 'express';
import * as mongoose from 'mongoose';

import UserRouter from './routers/UserRouter';
import VideoRouter  from './routers/VideoRouter';

var bodyParser = require('body-parser');

export class Server{

  public app: express.Application = express();

  constructor() {
    this.setConfiguration();
    this.routers();    
    this.error404Handler();
  }

   setConfiguration() {
     this.setmangoose();
     
     this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  setmangoose() {
       const url = 'mongodb+srv://mogodbuser:mogodbuser@mogodb-k7siz.mongodb.net/test?retryWrites=true&w=majority';
       mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

        console.log("Connected successfully to server");

        });
    
  }

  routers() {
    this.app.use('/api/user/singup', UserRouter);
    this.app.use('/api/video/add', VideoRouter);
  }

  error404Handler() {
    this.app.use(function(req,res){
      res.status(404).json('404.jade');
    });
  }

}