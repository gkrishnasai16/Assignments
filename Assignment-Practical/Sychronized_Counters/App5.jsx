import React, { Component } from 'react';
import { render } from 'react-dom';
export default class App5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0 
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

   

    onIncrement(){
        const n = this.state.value+1;
        this.setState({
            value:n
        });
       
    }


    onDecrement(){
        const n = this.state.value-1;
        this.setState({
            value:n
        });
    }
     
    

    render(){
        return(
        <div>
            
        <p>Current Count :</p><p>{this.state.value}</p>
            <br/>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
             <Component2 value={this.state.value} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
             <Component3 value={this.state.value} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
        </div>
        );
    };
}

class Component2 extends React.Component{
    constructor(props){
        super(props);
       
        
    }
     
    

    render(){
        return(
        <div>
            
        <p>Current Count :</p><p>{this.props.value}</p>
            <br/>
            <button onClick={()=>this.props.onIncrement()}>Increment</button>
            <button onClick={()=>this.props.onDecrement()}>Decrement</button>
             
        </div>
        );
    };
}

class Component3 extends React.Component{
    constructor(props){
        super(props);
       
        
    }
     
    

    render(){
        return(
        <div>
            
        <p>Current Count :</p><p>{this.props.value}</p>
            <br/>
            <button onClick={()=>this.props.onIncrement()}>Increment</button>
            <button onClick={()=>this.props.onDecrement()}>Decrement</button>
             
        </div>
        );
    };
}