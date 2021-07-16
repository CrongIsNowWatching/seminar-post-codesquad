const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const fetch = require('./src/util/read');

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

const ERROR_PERCENT = 10;
const MAXIMUM_DELAY_TIME = 3000;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getError = () => getRandomNumber(0, 100) <= ERROR_PERCENT;


app.get('/api/recommended-movies', (req, res) => {
  setTimeout(() => {
    if (getError()) {
      return res.status(500).send({
        message: "This is an intentional error."
      });
    }
    const response = fetch('./backend/src/data/recommended-movies.json');
    return res.status(200).send(response.result);  
  }, getRandomNumber(0, MAXIMUM_DELAY_TIME));
});

app.get('/api/movies-by-ids', (req, res) => {

  setTimeout(() => {
    if (getError()) {
      return res.status(500).send({
        message: "This is an intentional error."
      });
    }
    const { ids } = req.query;
    const messageByUserRequest = `요청된 ids: ${ids}`
    
    if (!ids) {
      const message = "ids는 필수입니다.";
      return res.status(500).send(
        `${message} ${messageByUserRequest}`
      )
    }

    if (ids.split(",").length > 8) {
      const message = "id는 최대 8개까지만 요청할 수 있습니다.";
      return res.status(500).send(
        `${message} ${messageByUserRequest}`
      )
    }

    const response = fetch('./backend/src/data/movies-by-ids.json');
    const result = ids.split(",").map((id) => {
      return response.result.find((movie) => {
        return movie.id === Number(id)
      });
    })

    res.status(200).send(result);

  }, getRandomNumber(0, MAXIMUM_DELAY_TIME));
});

app.get('/api/movies/:id', (req, res) => {

  setTimeout(() => {
    if (getError()) {
      return res.status(500).send({
        message: "This is an intentional error."
      });
    }

    const { id } = req.params;
    const response = fetch('./backend/src/data/movies.json');
    
    const result = response.result.find((movie) => {
      return movie.id === Number(id);
    });
    
    if (!result) {
      const message = `${id}에 해당하는 영화 정보가 없습니다.`;
      return res.status(500).send(message);
    }
    return res.status(200).send(result);


  }, getRandomNumber(0, MAXIMUM_DELAY_TIME));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})