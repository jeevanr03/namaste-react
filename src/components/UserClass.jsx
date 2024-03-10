import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      githubData: {
        name: "dummy", location: "Somewhere", imgUrl: ""
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jeevanr03")
    const jsonData = await data.json()
    this.setState({
      githubData: {
        name: jsonData?.name,
        location: jsonData?.location,
        imgUrl: jsonData?.avatar_url
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // prevState - Get the previous iteration of state before update happened 
    if(prevState.count !== this.state?.count) {
      console.log("updated count");
    }
  }

  render() {
    return (
      <div>
        <div>Hi {this.props?.name} from {this.props?.location}</div>
        <div>
          <span>{this.state?.count}</span>
          <button onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}>Increment</button>
        </div>
        <div>
          <div>Github Data</div>
          <img src={this.state?.githubData?.imgUrl} alt="" />
          <div>Hi {this.state?.githubData?.name} - {this.state?.githubData?.location}</div>
        </div>
      </div>
    )
  }
}

export default UserClass