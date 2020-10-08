import React from 'react';
export default class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            items:[],
        }
    }

    onInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    }

    addItems(){
        let items=this.state.items;
        items.push(this.state.inputValue);
        this.setState({
            items
        })
    }

    listItems(){
        let items=this.state.items;
        console.log(items)
        return(
            <ul>
            {
                items.map((val,index)=>{
                    return(
                        <li key={index}>
                            {val}
                        </li>
                    );
                })
            }
            </ul>
        )
    }

    render(){
        return(
        <div>
            <input type="text" onChange={(e)=>this.onInputChange(e)}/>
            <button onClick={()=>this.addItems()}> Add Items</button>
            {this.listItems()}
        </div>)
    };
}