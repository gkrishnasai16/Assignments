import React,{Component} from 'react'

 class App3 extends Component{

    constructor(props){
        super(props);
        this.state = {
            names:['EShan','Tanish','James','Paul','George','Esha'],
  people:[
    {
        name:"Eshan",
        age:10
    },
    {
        name:"Tanish",
        age:20
    },
    {
        name:"Manish",
        age:30
    },
    {
        name:"CHiku",
        age:40
    }
]
        }
    }

    render() {
    return (
        <div>
            
            {this.state.people.filter(person=>person.age>=30).map(filteredPerson=>(
                <li key={filteredPerson.name}>
                    {filteredPerson.name}
                </li>
            ))}
            
            {
                this.state.names.filter(item=>item.includes('E')).map(item_filtered=>(
                    <li key={item_filtered}>
                        {item_filtered}
                    </li>
                ))
            } 

        </div>
    )
        }
}

export default App3;
        