import { memo } from 'react';
import { Link } from '@strapi/icons';
import { useCarouselInput } from '../../hooks/useCarouselInput';
import {
  CarouselInput,
  CarouselSlide,
  CarouselImage,
  Typography,
  CarouselActions,
  IconButton,
} from '@strapi/design-system';
import { useNotification } from '@strapi/strapi/admin';
import type { MediaProps } from '../../types/fields.types';

function MediaBase({ label, value, schema }: MediaProps) {
  const { selectedSlide, entries, current, currentUrl, onNext, onPrevious } = useCarouselInput(value);
  const { toggleNotification } = useNotification();

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
      actions={
        current?.url && (
          <CarouselActions>
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(currentUrl ?? '');
                toggleNotification({
                  type: 'success',
                  message: 'Link copied to clipboard',
                });
              }}
              label="Copy link"
              id="copy-link"
            >
              <Link />
            </IconButton>
          </CarouselActions>
        )
      }
    >
      {entries.length > 0 ? (
        entries.map((entry, idx) => (
          <CarouselSlide key={entry.id ?? idx} label={`${idx + 1} of ${entries.length}) slides`}>
            <CarouselImage src={entry.url ?? ''} alt={entry.name ?? label} />
          </CarouselSlide>
        ))
      ) : (
        <CarouselSlide label="No media uploaded.">
          <Typography textColor="neutral400">No media uploaded.</Typography>
        </CarouselSlide>
      )}
    </CarouselInput>
  );
}

export const Media = memo(MediaBase);
