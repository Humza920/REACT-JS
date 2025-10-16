import { createContext, useContext, useState } from "react";
const ModalContext = createContext({
  modalStatus: false,
  modalType: null,
  toggleModal: () => {},
});

export const ModalProvider = ({ children }) => {
    const [modalType, setmodalType] = useState(null)
    const [modalStatus, setmodalStatus] = useState(false)
    const toggleModal = (param , log_sign)=>{
        if (param) {
            setmodalStatus(true)
            setmodalType(log_sign)
        } else {
            setmodalStatus(false)
            setmodalType(null)
        }
    }
  return (
    <ModalContext.Provider value={{ modalType, toggleModal , modalStatus}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = ()=>{
    return useContext(ModalContext)
}