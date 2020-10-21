package com.training.org.main;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.training.org.Organization;  

public class MainClass {  
	public static void main(String[] args) {  
		Resource resource=new ClassPathResource("applicationContext.xml");  
		BeanFactory factory=new XmlBeanFactory(resource);  

		Organization organization=(Organization)factory.getBean("orgbean");  
		System.out.println(organization);  
	}  
} 