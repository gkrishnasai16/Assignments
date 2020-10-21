package com.training.org;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

@ConfigurationProperties(prefix = "mail")
public class MySpringApplication {
	/*@Value("${spring.application.name}")
	private String appName;
	
    @GetMapping ("/")
    public String getDetails() {
    	return appName;
    }*/
	
	
	/*private String hostname;
	private int port;
	private String from;
	private List<String> mailCollection;
	private DatabaseProperties dbProp;*/
	private User user ;

	@GetMapping("/")
	public String getDetails() {
		//	email="abc";
		return user.toString();
	}
	
	

	/*public List<String> getMailCollection() {
		return mailCollection;
	}

	public void setMailCollection(List<String> mailCollection) {
		this.mailCollection = mailCollection;
	}

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public int getPort() {
		return port;
	}

	public void setPort(int port) {
		this.port = port;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	@GetMapping("/")
	public String getDetails() {
		//	email="abc";
		return " "+ hostname+" "+port+" "+from+" "+mailCollection;
	}*/

	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@GetMapping("/employee")
	public List<Employee> getAllEmployee(){
		Scanner in = new Scanner(System.in);
		List<Employee> employeesList = new ArrayList<Employee>();
		employeesList.add(new Employee(1, "Krishna", "Sai", 10000));
		employeesList.add(new Employee(2, "Vishnu", "Priya", 9000));
		int id,sal,ch;
		String fName,lName;
		
		while(true) {
		System.out.println("1.Add Employee\n2.Update Existing Employee info\n3.Delete Employee\n4.Display All\n Enter choice : ");
		
		ch=in.nextInt();
		switch(ch) {
		case 1:
		System.out.println("Enter:- ID FirstName LastName Salary :\n");
		id =in.nextInt();
		fName = in.next();
		lName = in.next();
		sal = in.nextInt();
		 employeesList.add(new Employee(id, fName, lName, sal));
		break;
		case 2:
			int index=0;
			System.out.println("Enter:- ID : ");
			int s_id = in.nextInt();
			//Optional<Employee> s_emp = new Employee();
			//s_emp = employeesList.stream().filter(emp-> emp.getEmpId()==s_id ).findFirst();
			
		case 4:
		return employeesList;
		}
		}
	}
		
	

	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(1,"WELCOME");
	}

	//public static void main(String[] args) {
	//	SpringApplication.run(MySpringApplication.class, args);
//	}
	public static void main(String[] args) {
		ApplicationContext ctx=SpringApplication.run(MySpringApplication.class, args);
       /* String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames){
            System.out.println(beanName);
        }*/
	}

}


class Greeting {

	private final long id;
	private final String content;

	public Greeting(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}
