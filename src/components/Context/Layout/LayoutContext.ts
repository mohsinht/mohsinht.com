import { createContext, useContext } from 'react';

export type LayoutContextType = {
  isProfileExpanded: boolean;
  expandProfile: () => void;
};

export const LayoutContext = createContext<LayoutContextType>({
  isProfileExpanded: true,
  expandProfile: () => console.warn('no layout provider')
});

export const useLayout = () => useContext(LayoutContext);
