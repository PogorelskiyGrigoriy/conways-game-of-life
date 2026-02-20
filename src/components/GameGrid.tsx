import React from "react";
import { Cell } from "../models/MatrixData"; // Импортируем тип для ячейки
import { DEFAULT_COLS } from "../utils/config"; // Понадобится для стилей сетки

interface GameGridProps {
  matrix: Cell[][];
}

export const GameGrid: React.FC<GameGridProps> = ({ matrix }) => {
  return (
    <div 
      className="grid-container" 
      style={{ 
        display: 'grid', 
        // Здесь мы говорим CSS сделать столько колонок, сколько у нас в конфиге
        gridTemplateColumns: `repeat(${DEFAULT_COLS}, 20px)` 
      }}
    >
      {matrix.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <div
            // Уникальный ключ для каждой ячейки
            key={`${rowIndex}-${colIndex}`}
            // Выбираем класс в зависимости от того, 1 там или 0
            className={`cell ${cell ? 'cell-alive' : 'cell-dead'}`}
          />
        ))
      )}
    </div>
  );
};