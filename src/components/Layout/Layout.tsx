import 'antd/dist/antd.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globals';
import theme from '../../styles/theme';
import { Navbar } from './Navbar/NavBar';

interface ApplicationLayoutProps {
  children: ReactNode;
}

export function ApplicationLayout({
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>{children}</Navbar>
      <GlobalStyle />
    </ThemeProvider>
  );
}
