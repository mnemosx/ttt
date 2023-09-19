
import { getCells, getTurn, getWinner, isTie, onClick, restart } from './game';

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restart");
    const message = document.getElementById("message");

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            onClick(index);
            render();
        });
    });

    restartButton.addEventListener("click", () => {
        restart();
        render();
    });

    function render() {
        const board = getCells();
        cells.forEach((cell, index) => {
            cell.textContent = board[index] === "-" ? "" : board[index];
        });
        
        if (getWinner() !== "-") {
            message.textContent = `${getWinner()} wins!`;
        } else if (isTie()) {
            message.textContent = "It's a tie!";
        } else {
            message.textContent = `${getTurn()}'s turn`;
        }
    }

    render();
});
