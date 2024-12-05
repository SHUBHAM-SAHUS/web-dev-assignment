import dynamic from 'next/dynamic';
import React from 'react';

const HomeListTemplate = dynamic(
  () => import('@/design-system/Template/HomeListTemplate'),
  {
    ssr: false,
  },
);

const Home: React.FC = () => {
  return <HomeListTemplate />;
};

export default Home;

// For SEO
export function generateMetadata(): { title: string; description: string } {
  return {
    title: 'Repo List',
    description:
      'Browse a list of repositories, including their details such as name, language, and more.',
  };
}
