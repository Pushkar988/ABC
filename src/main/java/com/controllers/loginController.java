package com.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by parteek on 17/3/16.
 */
@Controller
public class loginController {
    @RequestMapping(value = "/view")
    public String getIt()
    {

        return "view";
    }
}
