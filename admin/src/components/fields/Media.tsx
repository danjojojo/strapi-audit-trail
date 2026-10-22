import { useCarouselInput } from '../../hooks/useCarouselInput';
import { CarouselInput, CarouselSlide, CarouselImage, Typography } from '@strapi/design-system';
import type { MediaProps } from '../../types/fields.types';

export function Media({ label, value, schema }: MediaProps) {
  const { selectedSlide, entries, current, onNext, onPrevious } = useCarouselInput(value);

  return (
    <CarouselInput
      label={`${label}${entries.length > 1 ? ` (${selectedSlide + 1}/${entries.length})` : ''}`}
      selectedSlide={selectedSlide}
      secondaryLabel={current?.name ?? ''}
      previousLabel="Previous slide"
      nextLabel="Next slide"
      onNext={onNext}
      onPrevious={onPrevious}
      style={{ width: '100%' }}
      required={schema.required}
    >
      {entries.length > 0 ? (
        entries.map((entry, idx) => (
          <CarouselSlide key={entry.id ?? idx} label={`${idx + 1} of ${entries.length}) slides`}>
            <CarouselImage src={entry.url ?? ''} alt={entry.name ?? label} />
          </CarouselSlide>
        ))
      ) : (
        <CarouselSlide>
          <Typography textColor="neutral400">No media uploaded.</Typography>
        </CarouselSlide>
      )}
    </CarouselInput>
  );
}
