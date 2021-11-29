import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as DEPLOYMENT from "./cards/deployment";
import * as PERILS from "./cards/perils";
import * as OBJECTIVES from "./cards/objectives";
import * as LOOT from "./cards/loot";
import * as INSTRUCTIONS from "./cards/instructions";
import "./App.css";

function generate() {}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deployment: 0,
      perils: 0,
      objective: 0,
      lootA: 0,
      lootB: 0,
    };
  }

  randNumb = () => {
    // chooses number randomly between 1 and 12
    return Math.floor(Math.random() * 12) + 1;
  };

  generate = () => {
    // chooses numbers randomly (1 -> 12) and displays them. Players can then mulligan.
    this.setState(
      {
        deployment: this.randNumb(),
        perils: this.randNumb(),
        objective: this.randNumb(),
        lootA: this.randNumb(),
        lootB: this.randNumb(),
      },
      () => console.log(this.state)
    );
  };

  mulligan = (cardType) => {
    this.setState({
      [cardType]: this.randNumb(),
    });
  };

  instructions = () => {
    return (
      <Row className="card-row">
        <Image
          className="card"
          id="instruction"
          src={INSTRUCTIONS.default.card1}
        />
        <Image
          className="card"
          id="instruction"
          src={INSTRUCTIONS.default.card2}
        />
        <Image
          className="card"
          id="instruction"
          src={INSTRUCTIONS.default.card3}
        />
      </Row>
    );
  };

  objective = () => {
    if (!this.state.objective) return;
    const card = `card${this.state.objective}`;
    return (
      <Col className="card-col">
        <h3>Objective</h3>
        <Image className="card" id="objective" src={OBJECTIVES.default[card]} />
        <Button onClick={() => this.mulligan("objective")}>Mulligan</Button>
      </Col>
    );
  };

  deployment = () => {
    if (!this.state.deployment) return;
    const card = `card${this.state.deployment}`;
    return (
      <Col className="card-col">
        <h3>Deployment</h3>
        <Image
          className="card"
          id="deployment"
          src={DEPLOYMENT.default[card]}
        />
        <Button onClick={() => this.mulligan("deployment")}>Mulligan</Button>
      </Col>
    );
  };

  perils = () => {
    if (!this.state.perils) return;
    const card = `card${this.state.perils}`;
    return (
      <Col className="card-col">
        <h3>Perils</h3>
        <Image className="card" id="perils" src={PERILS.default[card]} />
        <Button onClick={() => this.mulligan("perils")}>Mulligan</Button>
      </Col>
    );
  };

  lootA = () => {
    if (!this.state.lootA) return;
    const card = `card${this.state.lootA}`;
    return (
      <Col className="card-col">
        <h3>Loot A</h3>
        <Image className="card" id="loot" src={LOOT.default[card]} />
        <Button onClick={() => this.mulligan("lootA")}>Mulligan</Button>
      </Col>
    );
  };

  lootB = () => {
    if (!this.state.lootB) return;
    const card = `card${this.state.lootB}`;
    return (
      <Col className="card-col">
        <h3>Loot B</h3>
        <Image className="card" id="loot" src={LOOT.default[card]} />
        <Button onClick={() => this.mulligan("lootB")}>Mulligan</Button>
      </Col>
    );
  };

  renderCard = (card) => {
    return <Image className="card" src={card} />;
  };

  render() {
    return (
      <div className="App">
        <h1>Necromunda Mission Generator</h1>
        <Button onClick={this.generate}>Generate Mission</Button>
        {this.instructions()}
        <Row className="card-row">
          {this.deployment()}
          {this.objective()}
          {this.perils()}
          {this.lootA()}
          {this.lootB()}
        </Row>
      </div>
    );
  }
}

export default App;
