import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 300) {
  const [valueDebounced, setValueDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValueDebounced(value);
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay]);

  return valueDebounced;

}