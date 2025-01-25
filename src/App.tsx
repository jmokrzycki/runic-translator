import React, { useState, useRef, FC } from 'react';
import useSVGDownload from './hooks/useSVGDownload';
import CistercianNumeral from './components/CistercianNumeral';
import { NUMERAL_CONFIG } from './config/numeralConfig';

const App: FC = () => {
  const [number, setNumber] = useState<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const handleDownload = useSVGDownload(svgRef, number);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumber(Math.min(NUMERAL_CONFIG.MAX_VALUE, Math.max(NUMERAL_CONFIG.MIN_VALUE, value)));
  };

  return (
    <div className="app-container">
      <div className="controls">
        <div className="input-group">
          <label htmlFor="number-input" className="glowing-text">
            Enter Number (0-9999)
          </label>
          <input
            id="number-input"
            type="number"
            min={NUMERAL_CONFIG.MIN_VALUE}
            max={NUMERAL_CONFIG.MAX_VALUE}
            value={number}
            onChange={handleNumberChange}
            className="glowing-input"
            placeholder="Enter number"
          />
          <span className="input-hint">Use arrow keys to adjust</span>
        </div>
        <button
          onClick={handleDownload}
          className="glowing-button"
          aria-label={`Download SVG for number ${number}`}
        >
          Download SVG
          <span className="button-glow"></span>
        </button>
      </div>

      <figure className="numeral-container">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={NUMERAL_CONFIG.SVG_VIEWBOX}
          className="glowing-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <CistercianNumeral
            number={number}
            {...NUMERAL_CONFIG.NUMERAL_POSITION}
          />
        </svg>
        <figcaption className="glowing-caption">
          Cistercian Numeral for {number}
        </figcaption>
      </figure>
    </div>
  );
};

export default App;