import React from "react";

export default class ComponentDidMountMethod extends Component {
  constructor(props){
    super(props)
    this.state = {name: 'Hi'}
  }
  componentDidMount(){
    setTimeout(() => {this.setState ({ name:"Wwlcome to Abs"}) },4000)
  }

  render(){
    return(
     <div>
        <h2>componentDidMount</h2>
        <p>{this.state.name}</p><hr/>

     </div>

    )

    
  }

}