import React,{Component} from "react";


class LifecycleComponentDidUpdate extends Component {
    constructor(props){
        Super(props);
        this.state = {count:0}
    }

componentDidUpdate(prevProps,prevState) {
    // check if state change
    if (prevState.count !== this.state.count){
        console.log(
            "count update from",
            prevState.count,
            "to",
            this.state.count
        );
        
    }
}


increment = ()=>{
    this.setState({count: this.state.count +1});
};

render(){
    return(
        <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}Increase></button>
        </div>
    );
}

}
export default LifecycleComponentDidUpdate
