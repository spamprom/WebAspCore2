using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAspCore2.BL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using WebAspCore2.Data.IdentityModel;

namespace WebAspCore2.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly MoneyService moneyService;
        private readonly UserManager<ApplicationUser> userManager;
        public HomeController(MoneyService _moneyService, UserManager<ApplicationUser> _userManager)
        {
            moneyService = _moneyService;
            userManager = _userManager;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
