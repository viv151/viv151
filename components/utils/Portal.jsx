import React from 'react';
import ReactDOM from 'react-dom';
import { X } from 'react-feather';

const Portal = ({ show, onClose, children, title = 'none' }) => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30">
      <div className="p-4">
        <a href="#" onClick={handleCloseClick} className=" text-white top-0 right-0 absolute z-50">
          <X className="w-12 h-12 m-4" />
        </a>

        <div className="z-40">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

export default Portal;
