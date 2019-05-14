import {Types} from './types'

export const calculateWinner = (squares: Types.Squares) => {
  const lines = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //縦
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //斜め
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
