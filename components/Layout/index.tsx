import 'antd/dist/antd.css';
import type { ReactNode } from 'react';

interface ApplicationLayoutProps{
  children: ReactNode,
}

export default function ApplicationLayout({ 
  children,
}: ApplicationLayoutProps): JSX.Element {
  return (
    <div>
      {children}
    </div>
  )
}
