using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using WebAspCore2.Data.IdentityModel;

namespace WebAspCore2.Controllers
{
    [AllowAnonymous]
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;
        public UserController(UserManager<ApplicationUser> _userManager)
        {
            userManager = _userManager;
        }
        public async Task<IActionResult> Index()
        {
            var curentUser = await userManager.GetUserAsync(HttpContext.User);

            if (curentUser != null)
                return RedirectToAction("Index", "Home");

            return View();
        }
    }
}
