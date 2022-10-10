import { Button as ButtonAnt } from 'antd';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({ onClick, className, href }: ButtonProps) {
  return (
    <ButtonAnt
      data-testid="button"
      type="primary"
      onClick={onClick}
      className={className}
      href={href}
    >
      Primary
    </ButtonAnt>
  );
}
