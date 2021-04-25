import { useCallback } from 'react';
import { RomanNumerals } from '../utils';

export const useConverter = () => {
  const toRoman = useCallback((value) => {
    return RomanNumerals.toRoman(value);
  }, []);
  const fromRoman = useCallback((value) => {
    return RomanNumerals.fromRoman(value);
  }, []);

  return [toRoman, fromRoman];
}
