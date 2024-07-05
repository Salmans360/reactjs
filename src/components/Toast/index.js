import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = (
  type = 'success',
  message,
  promise,
  promisData,
  autoClose,
  onClose = () => {},
  posCenter,
) => {
  if (type === 'promise') {
    toast.promise(promise, promisData);
  } else {
    toast[type](message, {
      autoClose: autoClose ? false : posCenter ? 10000 : 3000,
      onClose: onClose,
    });
  }
};

export const ContainerToast = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
