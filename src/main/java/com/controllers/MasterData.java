package com.controllers;

import com.dao.MasterDataDao;
import com.models.Designation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by pushkar on 29/3/16.
 */
@RestController
public class MasterData {
    @RequestMapping(value = "/allDesignation",method = RequestMethod.GET)
    public List<Designation> getDesignation(){
        System.out.println("=== allDesignation ===");
        List<Designation> designations= MasterDataDao.getAllDesignations();
        System.out.println("=== allDesignation: "+designations);
        return designations;
    }

}
