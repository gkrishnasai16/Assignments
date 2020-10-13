package com.assignment.org;

import java.util.ArrayList;
import java.util.List;

public class Student extends Person {
	int numCourses = 0;
	List<String> courses = new ArrayList<String>();
	List<Integer> grades = new ArrayList<Integer>();
	
	public void addCourseGrade(String course,int grade)
	{
		courses.add(course);
		grades.add(grade);
		numCourses++;
	}
	
	public Student(String name, String address) {
		super(name, address);
	}
	public int getNumCourses() {
		return numCourses;
	}
	public List<String> getCourses() {
		return courses;
	}
	public List<Integer> getGrades() {
		return grades;
	}
	
	@Override
	public String toString() {
		return "Student [numCourses=" + numCourses + ", courses=" + courses + ", grades=" + grades + ", name=" + name
				+ ", address=" + address + "]";
	}
	
	
}
