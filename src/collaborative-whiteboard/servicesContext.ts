import { createContext } from 'react';
import CwService from './services';

const CwServiceContext = createContext(new CwService());

export default CwServiceContext;

export const getCwService = () => new CwService();
