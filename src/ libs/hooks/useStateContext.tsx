import { useContext } from 'react';
import { StateContext } from '../../contexts/stateContext.tsx';

function useStateContext() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
}

export default useStateContext;
