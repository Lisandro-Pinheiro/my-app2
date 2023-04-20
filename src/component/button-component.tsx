import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalComponent from "./modal-component";


interface Props {
    showModal: boolean;
    handleOpenCloseModal: any;
    setOperation: any;
    calculate: any;
    buttonLabels: string[];
    handleButtonClick: (buttonLabel: string) => void;
}

interface State {

}

export default class ButtonComponent extends React.Component<Props, State> {


    render() {
        
        return (

            <div>
                <Button variant="outline-primary" onClick={() => this.props.handleOpenCloseModal()} >Primary</Button>
                <ModalComponent
                    showModal={this.props.showModal}
                    handleOpenCloseModal={() => this.props.handleOpenCloseModal()}
                    setOperation={(operation: string) => this.props.setOperation(operation)}
                    calculate={() => this.props.calculate()}
                    buttonLabels={this.props.buttonLabels} 
                    handleButtonClick={(buttonLabel: string) => this.props.handleButtonClick(buttonLabel)}
                />
            </div>
        );
    }
}