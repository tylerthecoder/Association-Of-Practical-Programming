Create a function to tell who won a given tic tac toe game. The board can be any size square. Each line of the board will be on a new line. The first line of an input is the size of the board. Someone wins if they have the three of the same piece in a row. An underscore represents a blank space.

For example: <br/>
XOO <br/>
XO_ <br/>
XXO <br/>
Would output "X" <br/>

If there is a tie output tie: <br/>
XXO <br/>
OOX <br/>
XOX <br/>
Would output "Tie" <br/>

The board can also be 4 by 4: <br/>
XOOX <br/>
OX_O <br/>
XOX_ <br/>
O_X_ <br/>
Would output "X"

Also it doesn't have to be "X"s and "O"s: <br/>
T_GT <br/>
G_TG <br/>
T_GT <br/>
\_G_T <br/>
Would output "G"

In the actual input file all of the data will be on one line. I wrote a simple program in javascript to run output it in the actual board structure. Just run `node prettyOutput.js` in your terminal. If you do not have node you can get it [here](https://nodejs.org/en/download/)
