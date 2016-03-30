package com.controllers;

import com.dao.EmployeeDao;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.models.Employee;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * Created by pushkar on 28/3/16.
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    ObjectMapper objectMapper = new ObjectMapper();
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public @ResponseBody String  createEmp(@RequestBody Employee emp){
        EmployeeDao obj=new EmployeeDao();
        Integer employeeID=null;
        try {
            employeeID = (Integer) obj.addUser(emp);
           if(employeeID!=null)
            return "Successfully created";
            else
               return "Employee Not Successfully created";
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

}
