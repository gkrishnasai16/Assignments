class Employee{
	constructor(name,id){
		this.name=name;
		this.id=id;
	}

	get (){
		console.log(`Welcome ${this.name} ${this.id} to Node and React\n`);
		console.log(this.props);
	}
	}


const emp  = new Employee("krish",101);
emp.get();
