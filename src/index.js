import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0)
  res.send(sum.toString())
});

app.get('/task2B', (req, res) => {
  console.log(req.query.fullname)
  try {
    const fullname = req.query.fullname
    if(!fullname)
      throw 'Invalid fullname'

    const reg = /\S+/g

    const names = fullname.match(reg);

    if(names.length > 3 || names.length == 0)
      throw 'Invalid fullname'

    let fio = names[names.length - 1]
    for(let i = 0; i < names.length -1; i++)
      fio += " " + names[i].substr(0,1) + "."

    res.send(fio)
  } catch(e) {
    res.send(e)
  }
});

app.get('/task2C', (req, res) => {
  try {
    let username = req.query.username
    if(!username)
      throw 'Invalid username'
    const reg = /([a-zA-Z]+$)|([a-zA-Z]+[\?])/g
    const reg1 = /[a-zA-Z]+/g;

    const matches = username.match(reg)
    if(!matches)
      throw "Invalid username"

    res.send("@"+(""+matches).match(reg1))

  } catch(e) {
    res.send(e)
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
