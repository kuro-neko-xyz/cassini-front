import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
