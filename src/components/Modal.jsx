import ReactDom from "react-dom";

import { IoCloseSharp } from "react-icons/io5";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-full h-full  bg-black opacity-60 z-40" />
  );
};

const ModalOverlay = ({ children, closeModal }) => {
  return (
    <div className="flex items-center justify-center w-full h-full fixed top-0 left-0 z-50">
      <div className="relative bg-white p-4 rounded-md w-[90%] md:w-[60%] lg:w-[50%] max-w-3xl">
        <button
          onClick={closeModal}
          className="absolute w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 ease-out text-white flex items-center justify-center top-1 right-1"
        >
          <IoCloseSharp />
        </button>
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = ({ children, closeModal }) => {
  return (
    <>
      {ReactDom.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay closeModal={closeModal}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
