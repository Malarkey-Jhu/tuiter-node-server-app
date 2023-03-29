import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'
import cors from 'cors'
import HelloController from './controllers/hello/hello-controller.js'
import UserController from './controllers/users/users-controller.js'
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

dotenv.config()

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://root:123456@localhost:27017/tuiter?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

// controllers
HelloController(app)
UserController(app)
TuitsController(app)

app.listen(process.env.PORT || 4000)

