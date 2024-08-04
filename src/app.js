import express from "express";
import {fileURLToPath} from 'url';
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/routerIndex.js";
import colors from "colors";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('port', process.env.PORT || 3000);
// para motor de plantilla
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', router);

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

//server configuration
app.listen( app.get('port'), () => {
  console.log('================================'.rainbow);
  console.log(`Server is running on port ${app.get('port')}`);
  console.log('***__________________________***'.rainbow);
});
