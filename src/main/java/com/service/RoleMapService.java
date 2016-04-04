package com.service;

import com.dao.RoleMapDao;
import com.models.RoleMap;

/**
 * Created by pushkar on 3/4/16.
 */
public class RoleMapService {
    RoleMapDao roleMapDao = new RoleMapDao();
    public int createRoleMap(RoleMap roleMap){
        return roleMapDao.createRoleMap(roleMap);
    }
}
