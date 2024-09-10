const Player = require('../src/Player');

const Arena = require('../src/arena');

test('Battle simulation',()=>{
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new Arena(playerA , playerB);
    arena.startBattle();
    expect(playerA.isAlive() || playerB.isAlive()).toBe(true);
});
