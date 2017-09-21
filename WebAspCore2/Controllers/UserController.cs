﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace WebAspCore2.Controllers
{
    [AllowAnonymous]
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Home/Index.cshtml");
        }
        //public IActionResult Login()
        //{
        //    return View("~/Views/Home/Index.cshtml");
        //}
    }
}
