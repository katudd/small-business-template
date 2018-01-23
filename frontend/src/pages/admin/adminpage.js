import React from "react"

import "./style.css"

export default class Adminpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: "",
      shortText: "",
      longText: "",
      image: ""
    }
  }

handleHeading = event => {
  this.setState({
    heading: event.target.value
  })
}

handleShortText = event => {
  this.setState({
    shortText: event.target.value
  })
}

handleLongText = event => {
  this.setState({
    longText: event.target.value
  })
}

handleImage = event => {
  this.setState({
    image: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  fetch("http://localhost:8080/adminstory", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  }).then(response => (
    this.setState({
      heading: "",
      shortText: "",
      longText: "",
      image: ""
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

render() {
  return (
    <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <input typ="text" placeholder="Write heading here..." value={this.state.heading} onChange={this.handleHeading} />
        <input typ="text" placeholder="Write short text here..." value={this.state.shortText} onChange={this.handleShortText} />
        <input typ="text" placeholder="Write long text here..." value={this.state.longText} onChange={this.handleLongText} />
        <input typ="text" placeholder="Put image url here" value={this.state.image} onChange={this.handleImage} />
        <button>Publish</button>
      </form>
    </div>
  )
}

}
