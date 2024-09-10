**Magical Arena**

**Introduction**
The Magical Arena is a turn-based battle game where two players engage in combat until one of them loses all their health points.

**Features**
1- Players have attributes such as health, strength, and attack.
2- Players take turns attacking and defending using dice rolls.
3- Damage calculation is based on attack and defense rolls.
4- The game ends when one player's health reaches 0.

**Requirements**
1- Node.js
2- npm (Node Package Manager)
3- Jest (for testing)

**Project Structure**

1-> #src/
    1.1-> main.js: Entry point of the application.
    1.2-> player.js: Contains the Player class definition.
    1.3-> arena.js: Contains the Arena class definition.
2-> test/
    2.1-> player.test.js: Contains unit tests for the Player class.
    2.2-> arena.test.js: Contains unit tests for the Arena class.

3-> package.json: Project configuration file.
4-> jest.config.js: Jest configuration file (optional).

**How to Build and Run**
    Step 1: Install Dependencies
            Navigate to the project directory and run the following command to install the required dependencies: npm install
    Step 2: Run the Application
                To run the game, follow these steps:
                --> Run the main.js file as a Node.js application: node src/main.js

**How to Play**
1-> Two players are created with initial attributes (health, strength, and attack).
2-> Players take turns attacking and defending.
3-> Each player rolls a 6-sided die for attack and defense.
4-> Damage is calculated based on the dice rolls and player attributes.
5-> The game continues until one player's health reaches 0.

**Unit Tests**
Unit tests are provided to ensure the correctness of the code. Jest is used for testing.

    Step 1: Configure Jest
            Make sure the package.json has a script to run Jest. Add the following in the scripts section of your package.json

    Step 2: Run the Tests
            To run the tests, use the following command:npm test


**Steps to Do Unit Testing**
1-> Open a terminal and navigate to the project directory.
2-> Run npm test to execute the unit tests.
3-> Jest will output the results of the test cases to the terminal.