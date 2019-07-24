import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Logo from "./Logo.jpg";
import "./Animations.scss";

class App extends Component {
	state = {
		isStarted: false,
		questions: ["How's your prayer life?", "How's the state of your heart?"],
		currentIndex: 0,
	};

	render() {
		const fontSize = "5vh";
		return (
			<Container fluid className="vh-100" style={{ backgroundColor: "rgb(35,58,61" }}>
				<Row className="h-100 align-items-center">
					<Col xs="12">
						<Row className="justify-content-center" style={{ textAlign: "center" }}>
							<Col xs="12" className={this.state.isStarted ? "fade-in-delayed" : "invisible"} style={{ fontSize: fontSize, color: "rgb(200,200,200)" }}>
								{this.state.questions[this.state.currentIndex]}
							</Col>
							<Col xs="auto" className={`mb-3 d-flex ${this.state.isStarted ? "start-animation" : ""}`}>
								<div className={this.state.isStarted ? "shrink-animation-delayed" : ""} style={{ width: "50vh", height: "50vh" }}>
									<img
										src={Logo}
										alt="Logo"
										className={this.state.isStarted ? "shrink-animation-delayed" : ""}
										style={{ width: "100%", borderRadius: "100%", border: "2px white solid" }}
										onClick={() => this.setState({ isStarted: true })}
									/>
								</div>
							</Col>
							<Col xs="12" className={this.state.isStarted ? "fade-out" : ""} style={{ fontSize: fontSize, color: "rgb(200,200,200)" }}>
								Press Logo to Start
							</Col>
							<Col xs="auto" className={`${this.state.isStarted ? "fade-in-delayed" : "invisible"}`} style={{ marginTop: "40vh" }}>
								<div style={{ width: "10vh", height: "10vh" }}>
									<img
										src={Logo}
										alt="Logo"
										style={{ width: "100%", borderRadius: "100%", border: "2px white solid" }}
										onClick={() => this.setState(prevState => ({ ...prevState, currentIndex: prevState.currentIndex === prevState.questions.length - 1 ? 0 : prevState.currentIndex + 1 }))}
									/>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;