import type { NextPage } from 'next';

import { Button } from '../components/index';

const Home: NextPage = () => {
  return (
    <nav>
      {/* <Link href="/about">
        <a>About</a>
      </Link> */}

      <Button className="test" href="/about" />
    </nav>
  );
};

export default Home;
