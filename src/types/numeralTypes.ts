export type Coordinate = { x: number; y: number };
export type PositionTransform = (x: number, y: number) => [number, number];
export type DigitPaths = Record<number, Record<number, [number, number][]>>;

export interface NumeralConfig {
  MAX_VALUE: number;
  MIN_VALUE: number;
  DIGIT_COUNT: number;
  SVG_VIEWBOX: string;
  NUMERAL_POSITION: PositionProps;
}

export interface PositionProps {
  dx: number;
  dy: number;
  scale: number;
}