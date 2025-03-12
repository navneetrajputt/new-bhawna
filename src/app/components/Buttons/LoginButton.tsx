import React from 'react';
import styles from './LoginButton.module.css';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const LoginButton = ({ children, ...rest }: LoginButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default LoginButton;