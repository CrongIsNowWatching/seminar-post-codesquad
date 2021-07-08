var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const ACCESS_KEY = "rqa7HLS0aVzdaScw_qn1vAEN41LniPjMXQlqCKL-_Ig";
const URL = "https://api.unsplash.com";

router.get("/images", async function (req, res, next) {
  const arr = [];

  const randomPage = parseInt(Math.random() * 10);
  arr.push(
    fetch(`${URL}/photos/?client_id=${ACCESS_KEY}&page=${randomPage}`).then((res) => res.json())
  );

  const result = await Promise.all(arr).then((p) =>
    p.reduce((acc, val) => {
      acc.push(...val.map((item) => ({ id: item.id, url: item.urls.regular })));
      return acc;
    }, [])
  );

  res.send(result);
});

module.exports = router;
