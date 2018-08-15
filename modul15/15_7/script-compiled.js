class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.reset = () => {
			this.setState({
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			});
		};

		this.start = () => {
			if (!this.state.running) {
				this.setState({
					running: true
				});
				this.watch = setInterval(() => this.step(), 10);
			}
		};

		this.step = () => {
			let ms = this.state.times.miliseconds;
			let sec = this.state.times.seconds;
			let min = this.state.times.minutes;

			ms += 1;
			if (ms >= 100) {
				sec += 1;
				ms = 0;
			}
			if (sec >= 60) {
				min++;
				sec = 0;
			}
			this.setState({
				times: {
					minutes: min,
					seconds: sec,
					miliseconds: ms
				}
			});
		};

		this.stop = () => {
			this.setState({
				running: false
			});
			clearInterval(this.watch);
		};

		this.saveResult = () => {
			this.setState({
				resultsList: [...this.state.resultsList, this.getFormattedTime()]
			});
		};

		this.resetResultsList = () => {
			this.setState({
				resultsList: []
			});
		};

		this.state = {
			running: false,
			resultsList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};
	}

	render() {
		const timesList = this.state.resultsList.map((theResult, i) => React.createElement(
			"li",
			{ key: i },
			theResult
		));
		return React.createElement(
			"div",
			null,
			React.createElement(
				"nav",
				{ className: "controls" },
				React.createElement(
					"a",
					{ href: "#", className: "button", onClick: this.start },
					"Start"
				),
				React.createElement(
					"a",
					{ href: "#", className: "button", onClick: this.stop },
					"Stop"
				),
				React.createElement(
					"a",
					{ href: "#", className: "button", onClick: this.reset },
					"Reset"
				),
				React.createElement(
					"a",
					{ href: "#", className: "button", onClick: this.saveResult },
					"Save results"
				),
				React.createElement(
					"a",
					{
						href: "#",
						className: "button",
						onClick: this.resetResultsList
					},
					"Reset result list"
				)
			),
			React.createElement(
				"div",
				{ className: "stopwatch" },
				React.createElement(
					"div",
					null,
					this.getFormattedTime()
				)
			),
			React.createElement(
				"div",
				null,
				"Results list:",
				React.createElement(
					"ul",
					{ className: "results" },
					timesList
				)
			)
		);
	}

	getFormattedTime() {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	}

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = "0" + result;
		}
		return result;
	}

}

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById("stopwatch"));
