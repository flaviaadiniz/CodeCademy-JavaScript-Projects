/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
*/

const team = {
    _players: [ 
      {firstName: 'Lionel', lastName: 'Messi', age: 34},
      {firstName: 'Kylian', lastName: 'Mbappé', age: 23},
      {firstName: 'Richarlison', lastName: 'de Andrade', age: 25}
      ],
    _games: [
      {opponent: 'Brazil', teamPoints: 2, opponentPoints: 5},
      {opponent: 'France', teamPoints: 3, opponentPoints: 1},
      {opponent: 'Argentina', teamPoints: 7, opponentPoints: 2}
      ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
    
    addPlayer(newFirstName, newLastName, newAge) {
      let newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
      }
      team._players.push(newPlayer);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      team._games.push(game);
    } 
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 4, 4);
  
  console.log(team.players);
  console.log(team.games);