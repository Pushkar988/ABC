angular.module('templates-app', ['about/about.tpl.html', 'employee/create/templates/employeeForm.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    CodeBreakers Team: Pushkar, Parteek and Gaurav.\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    Code Geek Challenges\n" +
    "  </p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("employee/create/templates/employeeForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("employee/create/templates/employeeForm.tpl.html",
    "\n" +
    "<div class=\"container candidateform-container\">\n" +
    "    <div class=\"row centered-form\">\n" +
    "       <br>\n" +
    "\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8 col-md-offset2\">\n" +
    "                            <form name=\"employeeForm\" class=\"form\" novalidate>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"firstName\">First name: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"firstName\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.firstName\" name=\"firstName\"\n" +
    "                                                   placeholder=\"First name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4 middle-name\">\n" +
    "                                        <label class=\"control-label\" for=\"middleName\">Middle Name:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "\n" +
    "                                            <input id=\"middleName\" type=\"text\" class=\"form-control input-sm\"  ng-model=\"user.middleName\" name=\"middleName\"\n" +
    "\n" +
    "                                                   placeholder=\"Middle name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"lastName\">Last Name: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"lastName\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.lastName\" name=\"lastName\"\n" +
    "                                                   placeholder=\"Last name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"email\">Email: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <input id=\"email\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                               name=\"email\"\n" +
    "                                               required ng-model=\"user.email\" placeholder=\"Email\">\n" +
    "\n" +
    "                                        <p class=\"red\"></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"empCode\">Employee Code: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"empCode\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.empCode\" name=\"empCode\"\n" +
    "                                                   placeholder=\"Employee Code\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"designation\">Designation: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <input id=\"designation\" type=\"text\" name=\"designation\" class=\"form-control input-sm\" required ng-model=\"user.designation\" placeholder=\"Designation\">\n" +
    "                                        <p class=\"red\"></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"joiningDate\">Joining Date: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"joiningDate\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.joiningDate\" name=\"joiningDate\"\n" +
    "                                                   placeholder=\"Joining Date\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label class=\"control-label\" for=\"address\">Address:</label>\n" +
    "                                    <input id=\"address\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                           name=\"address\"\n" +
    "\n" +
    "                                           ng-model=\"user.address\" placeholder=\"Address\">\n" +
    "\n" +
    "                                    <p class=\"red\"></p>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"postalCode\">Postal Code:</label>\n" +
    "                                        <div class=\"form-group\" >\n" +
    "\n" +
    "                                            <input id=\"postalCode\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"postalCode\"\n" +
    "                                                   ng-model=\"user.postalCode\"\n" +
    "                                                   placeholder=\"Postal Code\"><span class=\"hint\"></span>\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"mobilNumber\">Mobile Number:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"mobilNumber\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"mobileNo\"\n" +
    "                                                   ng-model=\"user.mobileNumber\"\n" +
    "                                                   placeholder=\"Mobile Number\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"homeNumber\">Phone Number:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"homeNumber\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"homeNo\"\n" +
    "                                                   ng-model=\"user.homeNumber\"\n" +
    "                                                   placeholder=\"Phone Number\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                 <br>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\"></div>\n" +
    "                                    <div class=\"col-md-4 col-md-offset-4\">\n" +
    "                                        <button class=\"btn btn-primary\" type=\"submit\" style=\"width:49%;\" ng-click=\"createEmployee()\" >Submit</button>\n" +
    "                                        <button class=\"btn btn-danger\"  type=\"button\" ng-click=\"resetAll()\" style=\"width:48%;\">Reset</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <br><br>\n" +
    "                            </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>CodeBreakers</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    ​\n" +
    "    ​    Every single bluepiEmployee _i​​;\n" +
    "    for ( _i = GEEK ; _i < Till the Proj​ect succesfully Ends; _i never quits) {\n" +
    "    works on POC's;\n" +
    "    works on the architecture design;\n" +
    "    works on the database modelling;\n" +
    "    works on different technology;\n" +
    "    works on fullstack;\n" +
    "    does unit testing;\n" +
    "    }\n" +
    "\n" +
    "    if(! everything goes well){\n" +
    "    _i  = fixes all the bugs, implements any adhoc changes from client;\n" +
    "    }\n" +
    "\n" +
    "    _i = delivers the current project, parties a little and starts with new project;\n" +
    "\n" +
    "    _i = EACH _i ROCKS;\n" +
    "    ​\n" +
    "    System.exit(0);​\n" +
    "\n" +
    "\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"container login-container\">\n" +
    "    <div class=\"row centered-form\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <center><h1> <span>Login Into the account</span></h1></center>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4 col-md-offset-4 main-signin-box\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 login-box-left\">\n" +
    "                            <form  ng-submit=\"login()\" name=\"loginForm\" novalidate>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input  class=\"form-control input-sm\" ng-model=\"credentials.email\"  name=\"email\"\n" +
    "                                            required>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input class=\"form-control input-sm \" type=\"password\" ng-model=\"credentials.password\"  name=\"password\"\n" +
    "                                           required>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"for_pass\">\n" +
    "                                    <a href=\"#/forgetPassword\">Reset Password?</a>\n" +
    "                                    <button class=\"btn pull-right\" ng-class=\"{'btn-primary':loginBtnLabel == 'Login','btn-success':loginBtnLabel != 'Login'}\" type=\"submit\" style=\"width:48%\">\n" +
    "                                        <i class=\"fa\" ng-class=\"{'fa-sign-in':loginBtnLabel == 'Login','fa-spinner fa-spin fa-1x':loginBtnLabel != 'Login'}\"></i>\n" +
    "                                       Login\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>  <br><br><br>\n" +
    "\n" +
    "");
}]);
