import { useState, useEffect } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    const setValue = (value: T) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    };

    if (storedValue) {
      setValue(storedValue);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};