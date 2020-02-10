import { createContext } from 'react';
import CanvasService from './Service';

const CanvasServiceContext = createContext(new CanvasService());

export default CanvasServiceContext;

export const getCanvasService = () => new CanvasService();
