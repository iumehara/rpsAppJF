# Cheatsheet

## Test

#### Click Button
`document.querySelector('button').click()`

#### Fill Input
`const ReactTestUtils = require("react-dom/test-utils")`

`const p1ThrowInput = document.querySelector('input[name="p1Throw"]')`

`p1ThrowInput.value = 'rock'`

`ReactTestUtils.Simulate.change(p1ThrowInput)`




## Implementation

#### click button
```
playButtonWasClicked() {
    const result = this.props.game.play(this.state.p1Throw, this.state.p2Throw)
    this.setState({result: result})
}
```

`<button onClick={this.playButtonWasClicked.bind(this)}>play</button>`


#### input changed
```
inputWasChanged(event) {
    this.setState({[event.target.name]: event.target.value})
}

```

`<label>Player 1<input name="p1Throw" onChange={this.inputWasChanged.bind(this)}/></label><br/>`