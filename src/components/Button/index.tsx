import { FC } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ children, fullWidth, ...props }) => {
  return (
    <button
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
