import React, { Fragment } from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      <Backdrop onConfirm={onConfirm} />
      <ModalOverlay title={title} message={message} onConfirm={onConfirm} />
    </Fragment>
  );
};

export default ErrorModal;
