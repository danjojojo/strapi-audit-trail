import { Flex } from '@strapi/design-system';
import { HomepageHeader } from '../components/home/Header';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  const sampleLinks = [
    {
      path: 'article-1',
      label: 'article 1',
    },
    {
      path: 'article-2',
      label: 'article 2',
    },
    {
      path: 'article-3',
      label: 'article 3',
    },
  ];

  return (
    <Flex direction="column" gap="4px" alignItems="flex-start">
      <HomepageHeader />
      <ul>
        {sampleLinks.map((link, idx) => (
          <li key={idx} onClick={() => navigate(link.path)}>
            {link.label}
          </li>
        ))}
      </ul>
    </Flex>
  );
};
