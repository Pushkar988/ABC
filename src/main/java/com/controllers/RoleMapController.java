package com.controllers;

import com.models.RoleMap;
import com.service.RoleMapService;
import org.springframework.web.bind.annotation.*;


/**
 * Created by pushkar on 3/4/16.
 */
@RestController
public class RoleMapController {
    RoleMapService roleMapService = new RoleMapService();

    @RequestMapping(value = "/roleMap/create", method = RequestMethod.POST)
    public @ResponseBody int createRoleMap(@RequestBody RoleMap roleMap){
        return roleMapService.createRoleMap(roleMap);
    }
}
