using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAspCore2.BL;
using Microsoft.AspNetCore.Authorization;

namespace WebAspCore2.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly MoneyService moneyService;
        public HomeController(MoneyService _moneyService)
        {
            moneyService = _moneyService;
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
