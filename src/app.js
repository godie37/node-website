import express from "express";
import colors from "colors";

const app = express();



app.get('/', (req, res) => {  
  res.send('<h1>Hello World!</h1>');
  res.end();
});

app.get('/about', (req, res) => {  
  res.send('h1>About - Hello World!</h1>');
  res.end();
});


//server configuration
app.listen(3000, () => {
  console.log('================================'.rainbow);
  console.log('Server is running on port 3000');
  console.log('***__________________________***'.rainbow);
});