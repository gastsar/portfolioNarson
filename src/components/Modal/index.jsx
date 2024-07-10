import PropTypes from 'prop-types';
import { MdCloseFullscreen } from "react-icons/md";

const Modal = ({ children, onClose }) => {

  return (
    <div className="fixed  inset-0 z-30 flex items-center justify-center bg-slate-800/60">
      <div role="dialog" aria-label='Details de projet' className="relative mx-2  w-3/4  rounded-lg bg-slate-900 p-6 max-md:mx-6 max-md:w-full">
        <MdCloseFullscreen tabIndex={0} title='Fermer le modal'  onClick={onClose} className="absolute -right-3 -top-3  cursor-pointer rounded-lg bg-slate-900/50 p-1 text-3xl text-zinc-200"/>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
