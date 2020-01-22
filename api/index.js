const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const cors = require('cors');
const { parseHeaderLink } = require('./helpers/linkParser');

const port = 5000;
const gitURL = 'https://api.github.com/users'
const options = { 
    method: 'GET',
    headers: { 
        'User-Agent': 'mbeghe-app' ,
    } 
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', function(req, res) {
    options.url = gitURL + '?since='+ req.query.since;
    request(options, function (error, response, body) {
      if (error) {
        res.status(500).send(error)
      }else{
          var parsedBody = JSON.parse(body);
          var result = {
              users: [],
              next: parseHeaderLink(response.headers.link)
          }
          parsedBody.forEach(element => {
            result.users.push({
              id: element.id,
              login: element.login
            }) 
          });

        res.status(response.statusCode).send(result)
      }
    });
});

app.get('/api/users/:username/details', function(req, res) {
    options.url = gitURL + '/'+ req.params.username;
    request(options, function (error, response, body) {
      if (error) {
        res.status(500).send(error)
      }else{
        var parsedBody = JSON.parse(body);
          var result = {
              id: parsedBody.id,
              login: parsedBody.login,
              profile_url: parsedBody.html_url,
              created: parsedBody.created_at
          }

        res.status(response.statusCode).send(result)
      }
    });
});

app.get('/api/users/:username/repos', function(req, res) {
    options.url = gitURL + '/' + req.params.username + '/repos';
    request(options, function (error, response, body) {
      if (error) {
        res.status(500).send(error)
      }else{
        var parsedBody = JSON.parse(body);
          var result = {
              repositories: []
          }
          parsedBody.forEach(element => {
            result.repositories.push({
              id: element.id,
              name: element.name,
              URL: element.html_url
            }) 
          });

        res.status(response.statusCode).send(result)
      }
    });
});

app.listen(process.env.PORT || port, () => {
    console.log("Up and running on port: ", port);
});