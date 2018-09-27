import React from "react";
import Tile from "./tile";
import getRandomInt from "../utils/random-number";
// import some funcationality some utils

class Board extends React.Component {
  state = {
    boardArray: this.createBoardArray(16, 30),
    revealedTiles: 0
  };

  createBoardArray(x, y) {
    let newArray = [];
    let id = 0;
    for (let i = 0; i < x; i++) {
      newArray.push([]);
      for (let j = 0; j < y; j++) {
        newArray[i].push({ value: 0, displayed: false, id });
        id++;
      }
    }
    newArray = this.initialiseBoard(newArray);
    return newArray;
  }

  initialiseBoard(board) {
    let mines = 0;
    while (mines < 99) {
      let x = getRandomInt(16),
        y = getRandomInt(30);
      if (board[x][y].value !== "M") {
        mines++;
        board = this.addMine(board, x, y);
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let row = x + i,
              col = y + j;
            if (row < 0 || row > 15) break;
            if (col < 0 || col > 29) break;
            if (board[row][col].value !== "M") {
              board[row][col].value += 1;
            }
          }
        }
      }
    }
    return board;
  }

  addMine(boardArray, x, y) {
    const newBoard = boardArray;
    newBoard[x][y].value = "M";
    return newBoard;
  }

  revealTile(tileId) {
    this.setState(prevState => {
      for (let i = 0; i < prevState.boardArray.length; i++) {
        for (let j = 0; j < prevState.boardArray[i].length; j++) {
          if (prevState.boardArray[i][j].id === tileId) {
            prevState.boardArray[i][j].displayed = true;
          }
        }
      }
      return {
        boardArray: prevState.boardArray,
        revealedTiles: prevState.revealedTiles + 1
      };
    });
  }

  endGame(win) {
    // if (true) {
    this.setState(prevState => {
      prevState.boardArray.forEach(row =>
        row.forEach(tile => {
          tile.displayed = true;
        })
      );
      return {
        boardArray: prevState.boardArray
      };
    });
    // );
    //    reveal everything
    //    add some fun UI
    // } else {
    //    reveal everything
    //    add some anger UI
    // }
  }

  render() {
    return (
      <div>
        <div id="grid">
          {this.state.boardArray.map(row =>
            row.map(tile => (
              <Tile
                value={tile.value}
                displayed={tile.displayed}
                id={tile.id}
                parentBoard={this}
                key={tile.id}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Board;
