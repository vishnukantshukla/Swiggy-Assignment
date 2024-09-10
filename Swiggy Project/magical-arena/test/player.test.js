const Player = require('../src/Player.js');


test('Player initialization',()=>{
    const player = new Player(50, 5, 10);
    expect(player.getHealth()).toBe(50);
    expect(player.isAlive()).toBe(true);
});

test('Player takes damage',()=>{
    const player = new Player(50, 5, 10);
    player.takeDamage(20);
    expect(player.getHealth()).toBe(30);
});

test('Player dies',()=>{
    const player = new Player(50, 5, 10);
    player.takeDamage(60);
    expect(player.isAlive()).toBe(false);
    expect(player.getHealth()).toBe(0);
});