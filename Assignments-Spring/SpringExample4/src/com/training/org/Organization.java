package com.training.org;

import java.util.List;


public class Organization {
	
	private String orgName;
	private String location;
	private int noOfEmployee;
	private List<String> projects;
	private List<Project> projectList;
	
	public List<String> getProjects() {
		return projects;
	}

	public void setProjects(List<String> projects) {
		this.projects = projects;
	}

	public Organization() {
		super();
		System.out.println("Org Default is called");
	}
	
	public Organization(String orgName, String location, int noOfEmployee) {
		super();
		System.out.println("Org parameterised constructor is called");
		this.orgName = orgName;
		this.location = location;
		this.noOfEmployee = noOfEmployee;
	}

	public List<Project> getProjectList() {
		return projectList;
	}

	public void setProjectList(List<Project> projectList) {
		this.projectList = projectList;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getNoOfEmployee() {
		return noOfEmployee;
	}

	public void setNoOfEmployee(int noOfEmployee) {
		this.noOfEmployee = noOfEmployee;
	}

	@Override
	public String toString() {
		return "Organization [orgName=" + orgName + ", location=" + location + ", noOfEmployee=" + noOfEmployee
				+ ", projects=" + projects + ", projectList=" + projectList + "]";
	}
}