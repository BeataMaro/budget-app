import { useState, useEffect } from 'react';

export default function useLocalStorage<T>(key: string, initialVal: T):
[T, (value: T) => void] {
  // getting data from localstorage or creating initial mock data
  const [storedValue, setStoredValue] = useState<T>(() => JSON.parse(localStorage.getItem(key)
      || JSON.stringify(initialVal)));

  useEffect(() => {
    // setting data in localStorage
  localStorage.setItem(key, JSON.stringify(storedValue))!;
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
