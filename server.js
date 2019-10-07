const express = require('express');
const app = express();
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Seasons';
app.locals.seasons = [
  {id: 1, name: 'Spring', weather: 'moderate'},
  {id: 2, name: 'Summer', weather: 'hot'},
  {id: 3, name: 'Fall', weather: 'moderate'},
  {id: 4, name: 'Winter', weather: 'cold'}
]

app.use(express.json());
app.use(cors());
app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`);
});

app.get('/', (request, response) => {
  response.send('Seasons are wonderful!')
})

app.get('/api/v1/seasons', (request, response) => {
  const { seasons } = app.locals
  return response.status(200).json({ seasons })
})