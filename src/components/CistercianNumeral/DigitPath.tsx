import React, { FC, useMemo } from 'react';
import { PositionProps, Coordinate } from '../../types/numeralTypes';

interface DigitPathProps extends PositionProps {
  points?: [number, number][];
  strokeWidth: number;
}

const transformCoordinate = (
  x: number,
  y: number,
  dx: number,
  dy: number,
  scale: number
): Coordinate => ({
  x: x * scale + dx,
  y: y * scale + dy,
});

const DigitPath: FC<DigitPathProps> = ({ points, dx, dy, scale, strokeWidth }) => {
  const pathData = useMemo(() => 
    points?.map(([x, y], i) => {
      const { x: tx, y: ty } = transformCoordinate(x, y, dx, dy, scale);
      return `${i === 0 ? 'M' : 'L'}${tx},${ty}`;
    }).join(' ') || '', 
  [points, dx, dy, scale]);

  return (
    <path
      d={pathData}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      fill="none"
    />
  );
};

export default DigitPath;