import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../logo.svg';
import '../App.css';



interface Props {
    showModal: boolean;
    handleOpenCloseModal: any;
    setOperation: any;
    calculate: any;
    buttonLabels: any;
    handleButtonClick: (buttonLabel: string) => void;

}
interface State {

}

export default class ModalComponent extends React.Component<Props, State> {
    doAction(operation: string) {
        this.props.setOperation(operation);
        this.props.calculate();
        this.props.handleOpenCloseModal
    }
    render() {
        const { showModal, buttonLabels } = this.props;
        return (
            <Modal show={showModal} onHide={this.props.handleOpenCloseModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={logo} className="App-logo" alt="logo" />
                </Modal.Body>

                <Modal.Footer >
                    <Button className="modal-buttons">
                        {buttonLabels.map((label) => ( 
                            <button key={label} onClick={() => this.handleButtonClick(label)}>
                                {label}
                            </button>
                        ))}
                    </Button>
                </Modal.Footer>

            </Modal>

        );
    }
}