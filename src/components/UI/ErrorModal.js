import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import style from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose}></div>;
}

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = ({title, message, onClose}) => {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={onClose} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onClose={onClose} title={title} message={message}/>,
          document.getElementById('overlay-root')
        )}
      </React.Fragment>
    );
}

export default ErrorModal;