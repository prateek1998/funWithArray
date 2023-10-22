import React from "react";
import "./App.css";
import CreateArray from "./components/ArrayCreate";
import Result from "./components/Result";
import YourArray from "./components/YourArray";
import ArrayMethods from "./components/ArrayMethods";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["React", "ReactNative", "Javascript", "TypeScript"],
      resultArray: [],
      concatArray: [],
      resultString: "",
      showMode: false,
      modeType: "",
      modeValue: "",
    };
  }

  handleChangeInput(event) {
    let arrayInput = event.target.value.split(",");
    this.setState({ array: arrayInput });
    this.setState({ resultArray: arrayInput });
  }
  componentDidMount() {
    const { array } = this.state;
    this.setState({ resultArray: [...array] });
  }
  pushArray = () => {
    this.setState({ modeType: "Push" });
    this.setState({ showMode: true });
  };

  popArray = () => {
    alert("Last element will be gone");
    const { resultArray } = this.state;
    let newResult = [...resultArray];
    newResult.pop();
    this.setState({ resultArray: newResult });
  };

  shiftArray = () => {
    alert("Remove the first element of array");
    const { resultArray } = this.state;
    let newResult = [...resultArray];
    newResult.shift();
    this.setState({ resultArray: newResult });
  };

  unShiftArray = () => {
    this.setState({ showMode: true, modeType: "Unshift" });
  };

  toStringArray = () => {
    alert("Convert Array to a String");
    const { resultArray } = this.state;
    let stringArr = resultArray.toString();
    this.setState({ resultString: stringArr });
  };

  getArrayLength = () => {
    alert("Get the Length of Array");
    const { resultArray } = this.state;
    console.log(resultArray);
    let lengthArr = "Array Length:" + resultArray.length;
    this.setState({ resultString: lengthArr });
  };

  concatingArray = () => {
    this.setState({ showMode: true, modeType: "Concat" });
  };
  findIndexArray = () => {
    this.setState({ showMode: true, modeType: "FindIndex" });
  };

  modeonChange = ({ target }) => {
    let inputedValue = target.value;
    this.setState({
      modeValue: inputedValue,
      concatArray: inputedValue.split(","),
    });
  };
  btnModalHandler = (type) => {
    let newResult = [...this.state.resultArray];
    switch (type.toLowerCase()) {
      case "concat":
        const { concatArray, resultArray } = this.state;
        console.log(concatArray);
        console.log(resultArray);
        let concatedArray = resultArray.concat(concatArray);
        this.setState({
          resultArray: concatedArray,
          showMode: false,
        });
        break;
      case "findindex":
        const { modeValue } = this.state;
        let indexonArr = this.state.resultArray.findIndex((arr) => {
          return arr === modeValue;
        });
        if (indexonArr === "-1") {
          this.setState({
            resultString: `No index found for this ${modeValue} elements`,
            showMode: false,
          });
        }
        this.setState({
          resultString: `Index of ${modeValue} is ${indexonArr} `,
          showMode: false,
        });
        break;
      case "unshift":
        newResult.unshift(this.state.modeValue);
        this.setState({ resultArray: newResult, showMode: false });
        break;
      case "push":
        newResult.push(this.state.modeValue);
        // console.log(newResult);
        this.setState({ resultArray: newResult, showMode: false });
        break;
      default:
        return null;
    }
  };

  render() {
    const {
      array,
      resultArray,
      resultString,
      showMode,
      modeType,
      modeValue,
    } = this.state;

    return (
      <div className="App">
        <Modal
          show={showMode}
          type={modeType}
          modalValue={modeValue}
          handleModalInputChange={this.modeonChange}
          btnModalHandler={() => this.btnModalHandler(modeType)}
        />
        <Backdrop
          show={showMode}
          clickBackdrop={() =>
            this.setState((prevState) => ({
              showMode: !prevState.showMode,
            }))
          }
        />
        <div className="container">
          <h1>Fun Way To Learn Array Methods</h1>
          <CreateArray
            value={array.toString()}
            onChange={(event) => {
              this.handleChangeInput(event);
            }}
          />
          <YourArray ShowArray={array} />
          <ArrayMethods
            pushArray={this.pushArray}
            popArray={this.popArray}
            shiftArray={this.shiftArray}
            unShiftArray={this.unShiftArray}
            toStringArray={this.toStringArray}
            getArrayLength={this.getArrayLength}
            concatingArray={this.concatingArray}
            findIndexArray={this.findIndexArray}
          />
          <Result resultArr={resultArray} resultString={resultString} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
