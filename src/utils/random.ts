import { Cell } from '../models/MatrixData';
import { PROBABILITY } from '../utils/config';



/**
 * Создает двумерный массив (сетку) заданного размера,
 * заполненный случайными 0 и 1.
 */

export const generateInitialMatrix = (rows: number, cols: number): Cell[][] => {
  // Теперь TS знает, что массив может содержать ТОЛЬКО 0 или 1
  return Array.from({ length: rows }, (): Cell[] => 
    Array.from({ length: cols }, (): Cell => (Math.random() > PROBABILITY ? 1 : 0))
  );
};