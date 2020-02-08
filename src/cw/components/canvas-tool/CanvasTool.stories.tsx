import React, { useState } from 'react';

import CanvasTool from './CanvasTool';
import { getDefaultDrawOptions } from '../../Operator';
import CanvasService from '../../Service';

export default {
  title: 'CanvasTool',
  component: CanvasTool
};

export const Default = () => {
  const [service] = useState(new CanvasService());
  const [drawOptions, setDrawOptions] = useState(getDefaultDrawOptions());
  const [showCut, setShowCut] = useState(false);
  const [showGuides, setShowGuides] = useState(true);

  return (
    <CanvasTool
      service={service}
      drawOptions={drawOptions}
      drawOptionsHandler={setDrawOptions}
      showCut={showCut}
      showCutHandler={setShowCut}
      showGuides={showGuides}
      showGuidesHandler={setShowGuides}
    />
  );
};
