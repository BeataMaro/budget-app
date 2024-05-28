import React, {
  createContext, useMemo, useState,
} from 'react';

import Data from '../models/data.ts';
import data from '../../data.json';
import useLocalStorage from '../ libs/hooks/useLocalStorage.tsx';

type useStateContextProps = {
  children: React.ReactNode;
};

type StateContext = {
  state: Data;
  setState: React.Dispatch<React.SetStateAction<Data>>;
};

export const StateContext = createContext<StateContext | null>(null);

function StateContextProvider({ children }: useStateContextProps) {
  const [categories] = useLocalStorage('categories', data.categories);
  const [expenses] = useLocalStorage('expenses', data.expenses);
  const [state, setState] = useState<Data>(() => ({
    categories,
    expenses,
  }));

  const memoState = useMemo(() => ({ state, setState }), [state, setState]);
  return <StateContext.Provider value={memoState}>{children}</StateContext.Provider>;
}

export default StateContextProvider;
