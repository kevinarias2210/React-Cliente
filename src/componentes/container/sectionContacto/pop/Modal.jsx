import { Dialog } from '@headlessui/react'
import './modal.css';

const Modal = ({
    isOpen = false,
    setIsOpen
}) => {

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="Modal"
        >
            <Dialog.Panel className="ModalPanel">
                <button
                    className="buttonClosed"
                    type="button"
                    onClick={() => setIsOpen(false)}
                >X</button>
                <h2>Numero de <br/> nequi</h2>
                <p>304 4457342</p>
                <div className='ModalButtons'>
                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
};

export default Modal;