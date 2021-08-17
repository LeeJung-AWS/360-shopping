import LoginModal from "../LoginModal";

interface ModalWrapperProps{
    isModalVisible: boolean;
    onBackdropClick: () => void;

}

const ModalWrapper: React.FC<ModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {

    if(!isModalVisible){
        return null;
    }

    return (<LoginModal onBackdropClick={onBackdropClick}/>);
};

export default ModalWrapper;