
import React from 'react'

class Nameform extends React.Component{
    constructor (props){
        super (props)
        this.state={name:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({name:event.target.value})
        
    }
    handleSubmit(event){
        alert("A name was Submitted " +this.state.name)
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <input type='submit' value="submit"/> 
                 {/* {this.state.name}  */}
            </form>
        )
    }
}
export default Nameform
