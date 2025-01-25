import React, { FC } from 'react';
import { PositionProps, Coordinate } from '../../types/numeralTypes';

interface StaveProps extends PositionProps {
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

const Stave: FC<StaveProps> = ({ dx, dy, scale, strokeWidth }) => {
  const start = transformCoordinate(1, 0, dx, dy, scale);
  const end = transformCoordinate(1, 3, dx, dy, scale);

  return (
    <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  );
};

export default Stave;