import './about.module.css';
import { GetStaticProps } from 'next';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export const getStaticProps: GetStaticProps<AboutProps> = async (ctx) => {
  return {
    props: {
      name: 'Tyyagoo',
    },
  };
};

export function About({ name }: AboutProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default About;
