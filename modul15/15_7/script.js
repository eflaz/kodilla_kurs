class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
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

	reset = () => {
		this.setState({
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		});
	};

	render() {
		const timesList = this.state.resultsList.map((theResult, i) => 
			<li key={i}>{theResult}</li>
		);
		return (
			<div>
				<nav className="controls">
					<a href="#" className="button" onClick={this.start}>
						Start
					</a>
					<a href="#" className="button" onClick={this.stop}>
						Stop
					</a>
					<a href="#" className="button" onClick={this.reset}>
						Reset
					</a>
					<a href="#" className="button" onClick={this.saveResult}>
						Save results
					</a>
					<a
						href="#"
						className="button"
						onClick={this.resetResultsList}
					>
						Reset result list
					</a>
				</nav>
				<div className="stopwatch">
					<div>{this.getFormattedTime()}</div>
				</div>
				<div>
					Results list:
					<ul className="results">{timesList}</ul>
				</div>
			</div>
		);
	}

	getFormattedTime() {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(
			this.state.times.seconds
		)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	}

	start = () => {
		if (!this.state.running) {
			this.setState({
				running: true
			});
			this.watch = setInterval(() => this.step(), 10);
		}
	};

	step = () => {
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

	stop = () => {
		this.setState({
			running: false
		});
		clearInterval(this.watch);
	};

	saveResult = () => {
		this.setState({
			resultsList: [...this.state.resultsList, this.getFormattedTime()]
		});
	};

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = "0" + result;
		}
		return result;
	}

	resetResultsList = () => {
		this.setState({
			resultsList: []
		});
	};
}

ReactDOM.render(<Stopwatch />, document.getElementById("stopwatch"));