package com.swiggy.assignment;

import java.util.Random;

class Player {
	int health;
	int strength;
	int attack;
	Random randomNumber;

	public Player(int health, int strength, int attack) {
		this.health = health;
		this.strength = strength;
		this.attack = attack;
		this.randomNumber = new Random();
	}

	public int getHealth() {
		int getHealth = health;
		return getHealth;
	}

	public int attack() {
		int attackValue = randomNumber.nextInt(6) + 1;
		return attackValue;
	}

	public int defend() {
		int defendValue = randomNumber.nextInt(6) + 1;
		return defendValue;
	}

	public void reduceHealth(int damage) {
		health -= damage;
	}

	public boolean isAlive() {
		return health > 0;
	}
}

class MagicalArena {
	Player playerA;
	Player playerB;

	public MagicalArena(Player playerA, Player playerB) {
		this.playerA = playerA;
		this.playerB = playerB;
	}

	void fight() {
		Player attacker = playerA.health < playerB.health ? playerA : playerB;
		Player defender = attacker == playerA ? playerB : playerA;

		while (playerA.isAlive() && playerB.isAlive()) {
			int attackRoll = attacker.attack();
			int defenseRoll = defender.defend();

			int damage = attackRoll * attacker.attack - defenseRoll * defender.strength;

			if (damage > 0) {
				defender.reduceHealth(damage);
				System.out
						.println("Attacker dealt" + damage + "damage." + " Defender's health:" + defender.getHealth());
			} else {
				System.out.println("Defender defended successfully.");
			}

			Player temp = attacker;
			attacker = defender;
			defender = temp;
		}

		if (playerA.isAlive()) {
			System.out.println("Player A wins!");
		} else {
			System.out.println("Player B wins!");
		}
	}
}

public class Main {

	public static void main(String[] args) {
		Player playerA = new Player(50, 5, 10);
		Player playerB = new Player(100, 10, 5);

		MagicalArena arena = new MagicalArena(playerA, playerB);

		arena.fight();

	}

}
