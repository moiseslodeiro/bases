/**
 * This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

First character of next word must match last character of previous word.
The word must not have already been said.
Below is an example of a Shiritori game:

["word", "dowry", "yodel", "leader", "righteous", "serpent"]  // valid!

["motive", "beach"]  // invalid! - beach should start with "e"

["hive", "eh", "hive"]  // invalid! - "hive" has already been said
Write a Shiritori class that has two instance properties:

words: an array of words already said.
game_over: a boolean that is true if the game is over.
and two instance methods:

play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).

If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".
 */
class Shiritori {
	
}

module.exports = Shiritori;
