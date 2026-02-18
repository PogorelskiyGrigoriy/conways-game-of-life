import matrixConfig from "../config/matrixConfig";
import React, { type ReactNode } from "react";
import LifeGameMatrix from "../services/lifeGameLogic";
import { getRandomMatrix } from "../utils/random";

function Matrix() {
  const { rows, cols, tickInterval } = matrixConfig;

  const [matrix, setMatrix] = React.useState<number[][]>([]);
  React.useEffect(() => {
    const lifeGame = new LifeGameMatrix(getRandomMatrix(rows, cols, 0, 1));
    setMatrix(lifeGame.matrix);
  }, [rows, cols]);

  function getCells(matrix: number[][]): ReactNode {
    return matrix.map((row, rowIndex) =>
      row.map((cellValue, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className={`cell ${cellValue ? "cell-alive" : "cell-dead"}`}
        />
      )),
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "1px",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: "80vh",
        height: "80vh",
      }}
    ></div>
  );
}

export default Matrix;
