import express from "express";
import { router } from "./app/routes/routes"
import "reflect-metadata"
import cors from "cors";

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: [
      '*',
    ],
  preflightContinue: false,
};

//use cors middleware
router.use(cors(options));

//add your routes

//enable pre-flight
router.options('*', cors(options));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3009;



app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});


app.use(router);