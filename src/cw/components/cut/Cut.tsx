/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { CutRange } from '../../Model';
import CanvasService from '../../Service';

export interface ColorPickerProps {
  // FIXME: Perhaps, component should not depend on this!
  // Instead expose some `service` properties as component props...
  service: CanvasService;
}

const Cut: React.FC<ColorPickerProps> = ({ service }) => {
  const [lastIndex, setLastIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [maxSpread, setMaxSpread] = useState(1);
  const [spread, setSpread] = useState(1);

  if (index > lastIndex) {
    setIndex(lastIndex);
  }
  if (spread > maxSpread) {
    setSpread(maxSpread);
  }

  const cutRange: CutRange = [index, index + spread - 1];

  service.setCutRange(cutRange); // FIXME: Not sure of the position of this call...!?!

  useEffect(() => {
    const subscription = service.historyCutLength$.subscribe(cutLength => {
      setLastIndex(Math.max(0, cutLength - 1));
      setMaxSpread(Math.max(1, cutLength));
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [service]);

  const indexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(+event.target.value);
  };

  const spreadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpread(+event.target.value);
  };

  const cutHandler = () => {
    service.cutByRange(cutRange);
  };

  return (
    <>
      <div className="cw-cut__controller">
        <input
          className="cw-cut__field"
          type="range"
          min="0"
          max={lastIndex}
          value={index}
          onChange={indexHandler}
        />
        <span className="cw-cut__number">{index}</span>

        <br />

        <input
          className="cw-cut__field"
          type="range"
          min="1"
          max={maxSpread}
          value={spread}
          onChange={spreadHandler}
        />
        <span className="cw-cut__number">{spread}</span>
      </div>

      <div className="cw-cut__controller">
        <button type="button" className="cw-cut__button" onClick={cutHandler}>
          Cut
        </button>
      </div>
    </>
  );
};

export default Cut;
