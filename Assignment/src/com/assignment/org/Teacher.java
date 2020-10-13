package com.assignment.org;

import java.util.ArrayList;
import java.util.List;

public class Teacher extends Person{

	int numCourses = 0;
	List<String> courses = new ArrayList<String>();
	
	public Teacher(String name, String address) {
		super(name, address);
	}
	
	public void addCourse(String course)
	{
		courses.add(course);
		numCourses++;
	}
	public void removeCourse(String course)
	{
		courses.remove(course);
		numCourses--;
	}

	@Override
	public String toString() {
		return "Teacher [numCourses=" + numCourses + ", courses=" + courses + ", name=" + name + ", address=" + address
				+ "]";
	}
	
}
