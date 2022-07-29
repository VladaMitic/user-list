import React from 'react';
import Card from './Card';
import Button from './Button';
import style from './ErrorModal.module.css';

const ErrorModal = ({title, message, onClose}) => {
    return (
      <div>
        <div className={style.backdrop} onClick={onClose}></div>
        <Card className={style.modal}>
          <header className={style.header}>
            <h2>{title}</h2>
          </header>
          <div className={style.content}>
            <p>{message}</p>
          </div>
          <footer className={style.actions}>
            <Button onClick={onClose}>Close</Button>
          </footer>
        </Card>
      </div>
    );
}

export default ErrorModal;