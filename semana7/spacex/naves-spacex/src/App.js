import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 10px;
  background-color: lightblue;
  height: 100vh;
  width: 100vw;
`;

const ShipSelect = styled.select`
  width: 30%;
`;

const InfoShip = styled.div`
  color: darkblue;
`;

const ShipImage = styled.img`
  max-width: 60vw;
  max-height: 60vh;
  border-radius: 5%;

`;

class App extends React.Component {
  state = {
    shiplist: [],
    showedShip: []
  };

  componentDidMount() {
    this.getAllShips();
  }

  getAllShips = () => {
    const apiUrl = "https://api.spacexdata.com/v3/ships";
    axios.get(apiUrl).then((response) => {
      // handle success
      this.setState({ shiplist: response.data });
    });
  };

  onChangeSelect = (event) => {
    //console.log("SELECIONOU ALGO", event.target.value);
    const shipId = this.state.shiplist.filter((ship) => {
      if (event.target.value === ship.ship_name) {
        return true
      } else {
        this.getAllShips();
      }
    });
    //let selectId = shipId[0].ship_id
    let showShip = shipId[0]
    this.setState({ showedShip: showShip })
    //console.log("Array Escolhido:", shipId[0]);
  };

  render() {
    //console.log("Nome Escolhido:", this.state.showedShip);
    //console.log(this.state.shiplist);
    const optionList = this.state.shiplist.map((ship) => {
      return <option key={ship.ship_name}>{ship.ship_name}</option>;
    });

    return (
      <MainContainer>
        <ShipSelect onChange={this.onChangeSelect}>
          {optionList}
        </ShipSelect>
        <InfoShip>
          <h1>{this.state.showedShip.ship_name}</h1>
          <p>{this.state.showedShip.home_port}</p>
          <ShipImage src= {this.state.showedShip.image}></ShipImage>
        </InfoShip>
      </MainContainer>
    );
  }
}

export default App;
