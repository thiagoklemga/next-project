import type { NextPage } from 'next';

import { Button } from '../components/index';

const Home: NextPage = () => {
  return (
    <>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <nav>
        <Button className="test" href="/about" />
      </nav>
    </>
  );
};

export default Home;
