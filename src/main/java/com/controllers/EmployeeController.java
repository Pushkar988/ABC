package com.controllers;

import com.dao.EmployeeDao;
import com.models.Employee;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by pushkar on 28/3/16.
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    EmployeeDao obj;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void createEmp(Employee emp){
        obj.addUser(emp);
    }

}
