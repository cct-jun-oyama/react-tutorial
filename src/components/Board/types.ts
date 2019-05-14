import { Types } from '../../common/types'

export type Props = {
  squares: Types.Squares;
  onClick: (i: number) => void;
}