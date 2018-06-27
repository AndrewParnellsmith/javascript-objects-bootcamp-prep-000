var playlist = { Slowdive: 'Alison', 'My Bloody Valentine': 'Sometimes'}
 function updatePlaylist(playlist, atristName, songTitle) {
  return Object.assign({}, playlist, { artristName: songTitle })
 }