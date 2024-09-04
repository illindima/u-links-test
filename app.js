const express = require('express');
const app = express();


app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.json({
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "U2ZRSZ98YG.com.dillin.test",
          "paths": ["*"]
        }
      ]
    }
  }
  )
});


module.exports = app;
