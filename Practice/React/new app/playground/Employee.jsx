import React from "react"
import axios from 'axios'
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            person:[],
            display:false,
            inputValue:''
        }
    }
    componentDidMount(){
        //const apiUrl="https://api.github.com/users/hacktivist123/repos";
        // fetch(apiUrl)
        // .then((response)=>response.json())
        // .then((data)=>console.log('RECORDS ARE',this.state.person))

       axios.get("http://jsonplaceholder.typicode.com/users")
       .then(res=>{
           console.log(res.data)
           const persons=res.data;

           this.setState({persons})
       })
        
       console.log(this.state.person)
    }

    display() {
        this.setState((prev)=>({ 
            display:!prev.display 
        }))
    }
    onInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    }


    listItems(){
        const items=this.state.persons;
        return(
            <table border="4px">
                <tr>
                    <th>Emp ID</th>
                    <th>Emp Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                
                </tr>
            
            {
                items.map((val,index)=>{
                    return(
                        <tr><td>
                            {val.id}
                        </td>
                        <td>
                            {val.name}
                            </td>
                            <td>
                            {val.username}
                            </td>
                            <td>
                            {val.email}
                            </td>
                            
                            </tr>
                    );
                })
            }
            
            </table>
        )
    }

    find(){

        const items=this.state.persons;
        const findId = this.state.inputValue;
        return(
            <table border="4px">
                <tr>
                    <th>Emp ID</th>
                    <th>Emp Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                
                </tr>
            
            {
                items.filter(person=>person.id==findId).map((val)=>{
                    return(
                        <tr><td>
                            {val.id}
                        </td>
                        <td>
                            {val.name}
                            </td>
                            <td>
                            {val.username}
                            </td>
                            <td>
                            {val.email}
                            </td>
                            
                            </tr>
                    );
                })
            }
            
            </table>
        )
    
    }

    render(){
        return(

            <div>
                     <h1>HEllo</h1>
                     <p>Enter Employee ID</p><input type="text" onChange={(e)=>this.onInputChange(e)} value={this.state.inputValue}/>
            {(this.state.display)? <button onClick={()=>this.display()}>Clear</button>:
                                    <button onClick={()=>this.display()}>Display</button>}
            {(this.state.display&&this.state.inputValue==='') && this.listItems()}
            {(this.state.display&&this.state.inputValue!='') && this.find()}
            </div>
        );
    }
}

export default Employee;