import React from 'react';
export default class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            EmpId:"",
            items:[],
            display:false
        }
    }

    displayEmp() {
        this.setState((prev)=>({ 
            display:!prev.display 
        }))
    }

    onInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    }
    onEmpIdChange(e){
        this.setState({
            EmpId:e.target.value
        });
    }

    addItems(){
        let items=this.state.items;
        items.push({name:this.state.inputValue,id:this.state.EmpId});
        this.setState({
            items,
            inputValue:"",
            EmpId:""
        })
        
    }

     listItems(){
        const items=this.state.items;
        console.log(items)
        return(
            <table border="4px">
                <tr>
                    <th>Emp Name</th>
                    <th>Emp ID</th>
                </tr>
            
            {
                items.map((val,index)=>{
                    return(
                        <tr><td>
                            {val.name}
                        </td>
                        <td>
                            {val.id}
                            </td></tr>
                    );
                })
            }
            
            </table>
        )
    }
    

    render(){
        return(
        <div>
            
            <p>Employee Name</p><input type="text" id="username" onChange={(e)=>this.onInputChange(e)} value={this.state.inputValue}/>
            <br/><p>Employee ID</p><input type="text" onChange={(e)=>this.onEmpIdChange(e)} value={this.state.EmpId}/>
            <br/><button onClick={()=>this.addItems()}> Add Employee</button>
            <button onClick={()=>this.displayEmp()}>Display</button>
            {(this.state.display) && this.listItems()}
             
        </div>
        );
    };
}