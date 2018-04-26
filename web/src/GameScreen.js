const React = require('react')

class GameScreen extends React.Component {
    render() {
        return (
            <div>
                <h1>Wrong Title</h1>
                <label>Player 1<input name="p1Throw"/></label><br/>
                <label>Player 2<input name="p2Throw"/></label><br/>
                <button>play</button>
                <div>Result:</div>
            </div>
        )
    }
}

module.exports = GameScreen