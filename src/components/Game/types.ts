import { Types } from '../../common/types'

type HistoryData = {
  squares: Types.Squares;
}

export type State = {
  history: HistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}
