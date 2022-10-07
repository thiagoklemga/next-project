import 'antd/dist/antd.css';
import type { ReactNode } from 'react';
import * as S from './Layout.styles';

interface ApplicationLayoutProps {
  children: ReactNode;
}

export function ApplicationLayout({
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <S.ApplicationLayoutContainer>{children}</S.ApplicationLayoutContainer>
  );
}
