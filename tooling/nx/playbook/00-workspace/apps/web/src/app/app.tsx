import React, { useState, useEffect } from 'react';
import styles from './app.module.css';

import { API_URL } from '@00-workspace/config';
import { MessageResponse } from '@00-workspace/types';

export function App() {
  const [res, setRes] = useState<MessageResponse>({ message: 'Loading...' });

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((data) => setRes(data));
  }, []);

  return <div className={styles.app}>{res && res.message}</div>;
}

export default App;
