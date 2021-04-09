import { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [state, setstate] = useState(1);
  return (
    <div>
      <h1 className={styles.title} onClick={() => setstate(2)}>
        Page index, {state}
      </h1>
      123
    </div>
  );
}
