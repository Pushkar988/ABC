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

    @Autowired EmployeeService employeeService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public @ResponseBody String  createEmp(@RequestBody Employee emp){
        Integer employeeID = null;
        try {
            employeeID = (Integer) employeeService.addUser(emp);
           if(employeeID != null)
            return "Successfully created";
            else
               return "Employee Not Successfully created";
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    @RequestMapping(value = "/isEmail",method =  RequestMethod.POST)
    public @ResponseBody boolean findEmpByEmail(@RequestBody String email){
        return employeeService.findEmpByEmail(email);
    }

}
