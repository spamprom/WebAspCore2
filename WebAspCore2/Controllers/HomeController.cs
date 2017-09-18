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
        private readonly IAuthorizationService authorizationService;
        private readonly SignInManager<ApplicationUser> signInManager;
        public HomeController(MoneyService _moneyService, IAuthorizationService _authorizationService, UserManager<ApplicationUser> _userManager
            , SignInManager<ApplicationUser> _signInManager)
        {
            moneyService = _moneyService;
            userManager = _userManager;
            authorizationService = _authorizationService;
            signInManager = _signInManager;
        }
        public IActionResult Index()
        {
            //var userID = userManager.GetUserId(User);
            //var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //await userManager.CreateAsync(user, model.Password);
            //await _signInManager.SignInAsync(user, isPersistent: false);


            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true
            //var result = await _signInManager.PasswordSignInAsync(model.Email,
            //    model.Password, model.RememberMe, lockoutOnFailure: false);
            //if (result.Succeeded)

            //await _signInManager.SignOutAsync();

            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
