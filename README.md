# Qwixxboard! (using React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is Qwixx?

Qwixx is a dice-rolling game my family and friends like to play. Unfortunately, the scoreboards that came with the game get permanent marks too easily, and the only app I could find on Google Play is in another language. So, here I am making a version in English!

## The end-goal

The end-product will need to look something like this:

![Qwixx board](board.jpg)

Eventually, it would be fun to add "advanced" versions of the board, like this:

![Qwixx alternate board](board-alt-1.jpg)

## The rules

Basically, as dice get rolled, the player has the option to click squares, which then get marked "X" and add to score depending on how many "X"s there are in each row.

The detailed rules can be found [here](https://www.ultraboardgames.com/qwixx/deluxe.php).

## React Components

With the above images in mind, this is a list of components I will probably need to create:

- The background/board as a whole
- Rows for each color
- Boxes to be filled with numbers, then covered with an "X"
- The "lock" circle for the end of each row (or possibly just use the same or similar component as the numbers)
- An extra row to summarize scoring (no functionality required--this could just be an image possibly)
- Boxes for totals
- Boxes for "penalties"

## Game logic

Essentially, every time a player marks off a box with an "X" (in our case, clicking a box), it should make every box to the left of that "X" unclickable. Each row will need a counter to stand for "How many boxes have an 'X' in this row".

The second part of the game logic is that the box all the way on the right is not allowed to be clicked on until there are at least 5 other "X"s in the row. If someone is able to mark the last box, the "lock" symbol at the very end also gets an "X" and counts for scoring.