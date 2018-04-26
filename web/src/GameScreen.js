const React = require('react')

class GameScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    playButtonWasClicked() {
        if (this.props.game === undefined) { return }
        const result = this.props.game.play(this.state.p1Throw, this.state.p2Throw)
        this.setState({result: result})
    }

    inputWasChanged(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>RPS App</h1>
                <label>Player 1<input name="p1Throw" onChange={this.inputWasChanged.bind(this)}/></label><br/>
                <label>Player 2<input name="p2Throw" onChange={this.inputWasChanged.bind(this)}/></label><br/>
                <button onClick={this.playButtonWasClicked.bind(this)}>play</button>
                <div>Result: {this.state.result} </div>
            </div>
        )
    }
}

module.exports = GameScreen