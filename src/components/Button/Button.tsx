import { Button as ButtonAnt } from 'antd';

interface ButtonProps {
  onClick?: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <ButtonAnt data-testid="button" type="primary" onClick={onClick}>
      Primary
    </ButtonAnt>
  );
}
