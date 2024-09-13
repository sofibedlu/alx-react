import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontSize: '1rem',
    fontStyle: 'italic',
    padding: '2rem',
    position: 'relative',
    bottom: '0',
    width: '100%',
    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid red',
  }
})

function Footer() {
  return (
    <div className={css(styles.footer)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}

export default Footer;