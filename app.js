import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {id: "heading"}, 
[React.createElement("h1", {id: "heading1"}, "Hello React1"), React.createElement("h2", {id: "heading2"}, "Hello React2")]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

const head = React.createElement("div", {id: "heading"}, 
[React.createElement("h1", {id: "heading1"}, "Hello React1"), React.createElement("h2", {id: "heading2"}, "Hello React2")]
)
const root1 = ReactDOM.createRoot(document.getElementById("header"))
root1.render(head)