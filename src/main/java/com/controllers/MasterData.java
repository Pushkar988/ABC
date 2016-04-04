package com.controllers;

import com.dao.MasterDataDao;
import com.models.Designation;
import com.models.Role;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


/**
 * Created by pushkar on 29/3/16.
 */
@RestController
public class MasterData {
    @RequestMapping(value = "/designations",method = RequestMethod.GET)
    public List<Designation> getDesignation(){
        List<Designation> designations= MasterDataDao.getAllDesignations();
        return designations;
    }

    @RequestMapping(value = "/roles",method = RequestMethod.GET)
    public List<Role> getRoles(){
        List<Role> roles= MasterDataDao.getRoles();
        return roles;
    }

}
