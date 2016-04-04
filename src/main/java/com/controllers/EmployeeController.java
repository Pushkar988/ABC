package com.controllers;

import com.models.Employee;
import com.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * Created by pushkar on 28/3/16.
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {


    EmployeeService employeeService=new EmployeeService();

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public @ResponseBody Employee  createEmp(@RequestBody Employee emp){
        Integer employeeID = null;
        Employee user=null;
        try {
            employeeID = (Integer) employeeService.addUser(emp);
            user= employeeService.findEmployeeById(employeeID);
        } catch (Exception e) {
            e.printStackTrace();

        }
        return user;
    }

    @RequestMapping(value = "/isEmail",method =  RequestMethod.POST)

    public @ResponseBody boolean findEmpByEmail(@RequestBody String email){
        return employeeService.findEmpByEmail(email);
    }

}
