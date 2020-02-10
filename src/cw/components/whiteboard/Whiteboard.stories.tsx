import React from 'react';
import CanvasServiceContext, { getCanvasService } from '../../ServiceContext';
import Whiteboard from './Whiteboard';
import Whiteboard2 from './Whiteboard2';

export default {
  title: 'Whiteboard',
  component: Whiteboard
};

export const Default = () => {
  return <Whiteboard />;
};

export const Default2 = () => {
  return (
    <>
      <CanvasServiceContext.Provider value={getCanvasService()}>
        <Whiteboard2 />
      </CanvasServiceContext.Provider>

      <CanvasServiceContext.Provider value={getCanvasService()}>
        <Whiteboard2 />
      </CanvasServiceContext.Provider>
    </>
  );
};
