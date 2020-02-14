/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { combineLatest } from 'rxjs';
import { CutRange } from '../../models';
import CwServiceContext from '../../serviceContext';

export interface CutProps {}

const Cut: React.FC<CutProps> = () => {
  const service = useContext(CwServiceContext);

  const [lastPosition, setLastPosition] = useState(1);
  const [position, setPosition] = useState(1);
  const [spread, setSpread] = useState(1);

  const getCutRange = (_position: number, _spread: number): CutRange => {
    const from = _position - 1;
    const to = from + _spread - 1;
    return [from, to];
  };

  useEffect(() => {
    const subscription = combineLatest([
      service.historyCutLength$,
      service.cutRange$
    ]).subscribe(([cutLength, [from, to]]) => {
      setLastPosition(Math.max(1, cutLength));
      setPosition(from + 1);
      setSpread(to - from + 1);
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const positionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = +event.target.value;
    service.setCutRange(getCutRange(newPosition, spread));
    setPosition(newPosition);
  };

  const spreadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpread = +event.target.value;
    service.setCutRange(getCutRange(position, newSpread));
    setSpread(newSpread);
  };

  const cutHandler = () => {
    service.cutByRange(getCutRange(position, spread));
  };

  return (
    <>
      <div className="cw-cut__controller">
        <input
          className="cw-cut__field"
          type="range"
          min="1"
          max={lastPosition}
          value={position}
          onChange={positionHandler}
        />
        <span className="cw-cut__number">{position}</span>
        <br />
        <input
          className="cw-cut__field"
          type="range"
          min="1"
          max={lastPosition}
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
