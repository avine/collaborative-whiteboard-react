/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { CutRange } from '../../models';
import CwServiceContext from '../../serviceContext';

export interface CutProps {}

const Cut: React.FC<CutProps> = () => {
  const service = useContext(CwServiceContext);

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

  const getCutRange = (_index = index, _spread = spread): CutRange => [
    _index,
    _index + _spread - 1
  ];

  useEffect(() => {
    const subscription = service.historyCutLength$.subscribe(cutLength => {
      setLastIndex(Math.max(0, cutLength - 1));
      setMaxSpread(Math.max(1, cutLength));
    });
    service.setCutRange(getCutRange());
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = +event.target.value;
    service.setCutRange(getCutRange(newIndex, spread));
    setIndex(newIndex);
  };

  const spreadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpread = +event.target.value;
    service.setCutRange(getCutRange(index, newSpread));
    setSpread(newSpread);
  };

  const cutHandler = () => {
    service.cutByRange(getCutRange());
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
