import { WarningCircle } from '@strapi/icons';
import { EmptyState } from '../components/ui/EmptyState';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const ErrorPage = ({
  content = 'Whoops! An error happened. Please try again.',
}: {
  content?: string;
}) => {
  return (
    <LandingContentLayout>
      <EmptyState
        content={content}
        hideAction
        icon={<WarningCircle width="10rem" height="10rem" />}
      />
    </LandingContentLayout>
  );
};
