import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/button-component';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {

}

interface State {
  showModal: boolean;
  result: number;
  operation: string;
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      result: 0,
      operation: ''
    };
  }

  setOperation(operation: string): void {
    this.setState({ operation });
  }

  calculate(): void {
    const { operation, result } = this.state;
    let newResult = result;
    switch (operation) {
      case 'soma':
        newResult += 1;
        break;
      case 'subtracao':
        newResult -= 1;
        break;
      default:
        break;
    }
    this.setState({ result: newResult });
  }

  handleOpenCloseModal(): void {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
      operation: ''
    });
  }

  handleButtonClick(buttonLabel: string): void {
    const { result } = this.state;
    let newResult = result;

    switch (buttonLabel) {
      case 'soma':
        newResult += 1;
        break;
      case 'subtracao':
        newResult -= 1;
        break;
      default:
        break;
    }

    this.setState({ result: newResult });
  }

  render() {
    const { showModal } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonComponent
            showModal={showModal}
            handleOpenCloseModal={() => this.handleOpenCloseModal()}
            setOperation={(operation: string) => this.setOperation(operation)}
            calculate={() => this.calculate()}
            buttonLabels={['soma', 'subtracao']} // Adicione a propriedade buttonLabels e defina os rótulos dos botões
            handleButtonClick={(buttonLabel: string) => this.handleButtonClick(buttonLabel)} // Atualize para this.handleButtonClick
          />
        </header>
      </div>
    );
  }
}