package com.assignment.org.main;

import com.assignment.org.Student;
import com.assignment.org.Teacher;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Student student = new Student("Sai","Hyderabad");
		student.addCourseGrade("Math", 100);
		student.addCourseGrade("Physics", 90);
		System.out.println(student);
		Teacher teacher = new Teacher("Faculty","Hyd");
		teacher.addCourse("Math");
		teacher.addCourse("Physics");
		System.out.println(teacher);
	}

}
