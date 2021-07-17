let team = {
    _players: [{ _firstName: 'Diego', _lastName: 'Lainez', _age: 21 },
    { _firstName: 'Hirving', _lastName: 'Lozano', _age: 25 },
    { _firstName: 'Guillermo', _lastName: 'Ochoa', _age: 35 }
    ],
    _games: [{ _opponent: 'Brazil', _teamPoints: 8, _opponentPoints: 6 },
    { _opponent: 'France', _teamPoints: 5, _opponentPoints: 1 },
    { _opponent: 'Belgium', _teamPoints: 5, _opponentPoints: 3 }
    ],
    addPlayer: function (firstName, lastName, age) {
        this._players.push({
            _firstName: firstName,
            _lastName: lastName,
            _age: age
        })
    },
    addGame: function (opponent, teamPoints, opponentPoints) {
        this._games.push({
            _opponent: opponent,
            _teamPoints: teamPoints,
            _opponentPoints: opponentPoints
        })
    },
    get getPlayers() {
        return this._players;
    },
    get getGames() {
        return this._games;
    }
};

team.addPlayer('Raúl', 'Jiménez', 11);
team.addGame('England', 9, 2);

console.log(team.getGames);
console.log(team.getPlayers);