import React, { FC, useMemo } from 'react';
import { DigitPaths, PositionProps } from '../../types/numeralTypes';
import Stave from './Stave';
import DigitPath from './DigitPath';
import { NUMERAL_CONFIG } from '../../config/numeralConfig';
import { createDigitPaths } from '../../config/numeralConfig';

const DIGIT_PATHS: DigitPaths = createDigitPaths();

const CistercianNumeral: FC<PositionProps & { number: number }> = ({ number, ...positionProps }) => {
  const digits = useMemo(() => 
    String(Math.min(NUMERAL_CONFIG.MAX_VALUE, Math.max(NUMERAL_CONFIG.MIN_VALUE, number)))
      .padStart(NUMERAL_CONFIG.DIGIT_COUNT, '0')
      .split('')
      .reverse()
      .map(Number),
    [number]
  );

  const strokeWidth = useMemo(
    () => Math.max(1.5, positionProps.scale / 5),
    [positionProps.scale]
  );

  return (
    <g className="numeral-glow">
      <Stave {...positionProps} strokeWidth={strokeWidth} />
      {digits.map((digit, position) => 
        digit !== 0 && (
          <DigitPath
            key={`${position}-${digit}`}
            points={DIGIT_PATHS[position][digit]}
            {...positionProps}
            strokeWidth={strokeWidth}
          />
        )
      )}
    </g>
  );
};

export default CistercianNumeral;