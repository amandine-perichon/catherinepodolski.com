import React from 'react'
import styles from './page.module.css';

const PageContent: React.FC = ({ children }) =>
  <div className={styles['page-content']}>{children}</div>

export default PageContent