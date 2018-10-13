import React from "react";
import Tile from "./tile";
import cloneBoard from "../utils/clone-board";
// import addMine from "../utils/add-mine";
// import getRandomInt from "../utils/random-number";
import getSurroundingTiles from "../utils/get-surrounding-tiles";
import initialiseBoard from "../utils/initialise-board";
import markTile from "../utils/mark-tile";

class Board extends React.Component {
  state = {
    boardWidth: 30,
    boardHeight: 16,
    difficulty: null,
    board: this.createBoard(30, 16),
    revealedTiles: 0
  };

  createBoard(width, height) {
    let board = [];
    for (let i = 0; i < width * height; i++) {
      board.push({ value: 0, displayed: false, marked: false });
    }
    return initialiseBoard(board, width, height, 99);
  }

  revealZeroNeighbours(board, tile) {
    const surroundingTiles = getSurroundingTiles(tile, this.state.boardWidth);
    surroundingTiles.forEach(tile => {
      if (tile > 0 && tile < this.state.boardWidth * this.state.boardHeight) {
        if (!board[tile].displayed) {
          board[tile].displayed = true;
          board[tile].marked = false;
          if (board[tile].value == 0) {
            this.revealZeroNeighbours(board, tile);
          }
        }
      }
    });
  }

  revealTile(tile) {
    this.setState(prevState => {
      const board = cloneBoard(prevState.board);
      board[tile].displayed = true;
      board[tile].marked = false;
      if (board[tile].value == 0) {
        this.revealZeroNeighbours(board, tile);
      }
      return {
        board,
        revealedTiles: prevState.revealedTiles + 1
      };
    });
  }

  markTile(tile) {
    this.setState(prevState => markTile(tile, prevState));
  }

  endGame(win) {
    if (win) {
      this.setState(prevState => {
        const endGameBoard = prevState.board.map(tile => ({
          value: tile.value,
          displayed: true,
          id: tile.id,
          marked: false
        }));
        return {
          board: endGameBoard
        };
      });
      //    add some fun UI
    } else {
      this.setState(prevState => {
        const endGameBoard = prevState.board.map(tile => ({
          value: tile.value,
          displayed: tile.value == "M" ? true : tile.displayed,
          id: tile.id,
          marked: false
        }));
        return {
          board: endGameBoard
        };
      });
      //    add some anger UI
    }
  }

  render() {
    return (
      <div id="board">
        <div id="board--header">
          <h1>Lose Your MindSweeper </h1>
          <p>
            Try to make it through all exercises of this FAC morning challenge
            without losing your mind in frustration
          </p>
        </div>
        <div id="grid">
          {this.state.board.map((tile, index) => (
            <Tile
              value={tile.value}
              displayed={tile.displayed}
              marked={tile.marked}
              id={index}
              parentBoard={this}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
