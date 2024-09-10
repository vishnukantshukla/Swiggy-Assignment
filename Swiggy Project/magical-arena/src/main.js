const Player = require('./Player.js');
const Arena = require('./arena.js');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const arena = new Arena(playerA,playerB);
arena.startBattle();