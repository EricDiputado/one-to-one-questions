import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Logo from "./Logo.jpg";
import "./Animations.scss";

class App extends Component {
	state = {
		isStarted: false,
		questions: (() => {
			const questions = [];
			var request = new XMLHttpRequest();
			request.open("GET", "https://docs.google.com/document/d/1CjiR97piLL1sX-RDEW4XZpfOM9j8dpGPZLJSt8bbsuk/edit", true);
			request.responseType = "blob";
			request.onload = () => {
				var reader = new FileReader();
				reader.readAsText(request.response);
				reader.onload = e => {
					console.log(
						"DataURL:",
						questions.push(
							...e.target.result
								.match(/QUESTIONS\\n(.)+\?/g)
								.join()
								.replace(/\\u0027/g, "'")
								.split(/\\n/g)
								.splice(1),
						),
					);
				};
			};
			request.send();
			return questions;
		})(),
		currentIndex: 0,
	};

	render() {
		console.log(this.state.questions);
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
							<Col xs="auto" className={`${this.state.isStarted ? "fade-in-delayed" : "d-none"}`} style={{ marginTop: "40vh" }}>
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
