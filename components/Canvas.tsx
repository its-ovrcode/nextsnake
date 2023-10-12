"use client"
import { validateHeaderValue } from "http"
import { useState } from "react"

const rows = 20
const cells = 30 //each row has 30 cells of 40px each
// Crack open the board
// const rowsArray = new Array(cols).fill("row")
// const cellArray = rowsArray.map(row => new Array(rows).fill("cell"))
// console.log(rowsArray)
// console.log(cellArray)

const baseBoard = new Array(rows)
	.fill(0)
	.map((row, rowIdx) => new Array(cells).fill(1))

// !Canvas
function Canvas() {
	const [board, setBoard] = useState(baseBoard)

	const boardStyle = {
		outline: "2px solid Ruge_Boogie(134,154,109)",
	}

	const rowStyle = {
		height: "40px",
	}

	const cellStyle = {
		width: "40px",
		height: "40px",
		display: "inline-block",
		backgroundColor: "#11CC11", // Default background color
	}
	// const boardColor = (rowIdx + cellIdx) % 2 === 0 ? "" : "bg-[#A0FC7A]"

	return (
		<div style={boardStyle} className="board">
			{board.map((row, rowIdx) => (
				<div className="h-[40px]" key={rowIdx}>
					{row.map((cellColor, cellIdx) => (
						<div
							className={`    ${
								(rowIdx + cellIdx) % 2 === 0 ? "bg-[#11CC11]" : "bg-[#A0FC7A]"
							} ${false ? "snake-cell" : "cell"}
							
							`}
							key={cellIdx}></div>
					))}
				</div>
			))}
		</div>
	)
}

export default Canvas
