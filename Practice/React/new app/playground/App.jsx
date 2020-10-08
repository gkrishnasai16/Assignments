import React from "react"
class App extends React.Component{
    render(){
        return(
            <div>
                        <td><h1>{this.props.id}</h1></td>
                        <td><h1>{this.props.name}</h1></td>
                        <td><h1>{this.props.salary}</h1></td>

                
           </div>
        );
    }
}

export default App;