import { NumeralConfig, PositionTransform, DigitPaths } from '../types/numeralTypes';

export const NUMERAL_CONFIG: NumeralConfig = {
  MAX_VALUE: 9999,
  MIN_VALUE: 0,
  DIGIT_COUNT: 4,
  SVG_VIEWBOX: '0 0 300 300',
  NUMERAL_POSITION: { dx: 90, dy: 70, scale: 60 }
};

const createPositionTransforms = (): PositionTransform[] => [
  (x, y) => [x, y],
  (x, y) => [2 - x, y],
  (x, y) => [x, 3 - y],
  (x, y) => [2 - x, 3 - y],
];

const generateBaseDigits = () => ({
  1: [[1, 0], [2, 0]],
  2: [[1, 1], [2, 1]],
  3: [[1, 0], [2, 1]],
  4: [[1, 1], [2, 0]],
  5: [[1, 1], [2, 0], [1, 0]],
  6: [[2, 0], [2, 1]],
  7: [[1, 0], [2, 0], [2, 1]],
  8: [[1, 1], [2, 1], [2, 0]],
  9: [[1, 1], [2, 1], [2, 0], [1, 0]],
});

export const createDigitPaths = (): DigitPaths => {
  const transforms = createPositionTransforms();
  return Object.entries(generateBaseDigits()).reduce((acc, [digit, points]) => {
    transforms.forEach((transform, position) => {
      acc[position] ??= {};
      acc[position][parseInt(digit)] = points.map(([x, y]) => transform(x, y));
    });
    return acc;
  }, {} as DigitPaths);
};