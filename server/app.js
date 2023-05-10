// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });

// get all of the artists
app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.send(artists);
});

// post a new artist
app.post('/artists', (req, res) => {
  res.statusCode = 201;
  const newArtist = req.body;
  res.send(addArtist(newArtist));
});

// Get the latest artist added
app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist();
  res.send(latestArtist);
});

// Get all albums of latest artist
app.get('/artists/latest/albums', (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res.send(latestArtistAlbums);
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
