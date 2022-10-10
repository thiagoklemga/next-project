import 'antd/dist/antd.css';
import { ReactNode } from 'react';
import GlobalStyle from '../../styles/globals';
import { Navbar } from './Navbar/NavBar';

interface ApplicationLayoutProps {
  children: ReactNode;
}

export function ApplicationLayout({
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <>
      <Navbar>{children}</Navbar>
      <GlobalStyle />
    </>
  );
}
