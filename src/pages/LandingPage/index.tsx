import { useState } from 'react';
import Button from '../../components/Button';
import styles from './styles.module.scss';

const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.logo} ${isActive ? styles.isActive : ''}`}>
        <h1>Cassini</h1>
        <p>
          A space to publish your thoughts and share your <strong>style</strong>
          .
        </p>
        <Button onClick={() => setIsActive(true)} fullWidth>
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default LandingPage;
