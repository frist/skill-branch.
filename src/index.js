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
    console.log(names)
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

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
