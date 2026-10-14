import { useState } from 'react';
import { normalizeMediaEntries } from '../helpers/document-view/field-value';

export function useCarouselInput(value: any) {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const entries = normalizeMediaEntries(value);
  const current = entries[selectedSlide];

  const onNext = () => {
    setSelectedSlide((prev) =>
      Math.min(prev + 1, prev === entries.length - 1 ? 0 : entries.length - 1)
    );
  };

  const onPrevious = () => {
    setSelectedSlide((prev) => Math.max(prev - 1, prev === 0 ? entries.length - 1 : 0));
  };

  return {
    current,
    entries,
    onNext,
    onPrevious,
    selectedSlide,
  };
}
