
import React from "react"
import ReactDOM from "react-dom"



// my first component
function HelloWorld () {

	return <h1> Hello World </h1>

}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));