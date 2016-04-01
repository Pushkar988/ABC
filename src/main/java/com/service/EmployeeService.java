package com.service;

import com.dao.EmployeeDao;
import com.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by pushkar on 31/3/16.
 */
public class EmployeeService {
    @Autowired EmployeeDao employeeDao;

    public int addUser(Employee employee){
        return employeeDao.addUser(employee);
    }

    public boolean findEmpByEmail(String email){
        Employee user = employeeDao.findEmpByEmail(email);
        if(user!=null){
            return true;
        }else{
            return false;
        }
    }
}
