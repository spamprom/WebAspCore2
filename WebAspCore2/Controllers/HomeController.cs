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
    //[AllowAnonymous]
    [Authorize]
    public class HomeController : Controller
    {
        private readonly MoneyService moneyService;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IAuthorizationService authorizationService;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly RoleManager<ApplicationRole> roleManager;
        public HomeController(MoneyService _moneyService, IAuthorizationService _authorizationService, UserManager<ApplicationUser> _userManager
            , SignInManager<ApplicationUser> _signInManager, RoleManager<ApplicationRole> _roleManager)
        {
            moneyService = _moneyService;
            userManager = _userManager;
            authorizationService = _authorizationService;
            signInManager = _signInManager;
            roleManager = _roleManager;
        }
        public async Task<IActionResult> Index()
        {
            //var userID = userManager.GetUserId(User);

            //var rr = await roleManager.CreateAsync(new ApplicationRole()
            //{
            //    Id = Guid.NewGuid(),
            //    Name = "User",
            //    //NormalizedName = "user",
            //});

            //if(rr.Succeeded)
            //{

            //}

            //var curentUser = await userManager.GetUserAsync(HttpContext.User);


            //var deleUser = await userManager.FindByIdAsync("C998ADD8-4F14-401D-D195-08D4FF675896");
            //var rrrrr = await userManager.DeleteAsync(deleUser);


            //var user = new ApplicationUser()
            //{
            //    Email = "asdsd@bgf.sd",
            //    UserName = "asdsd@bgf.sd",
            //};
            //var rr = await userManager.CreateAsync(user, "asdsd@bgf.sd");
            //if(rr.Succeeded)
            //{
            //    var ddd = await userManager.AddToRoleAsync(user, ApplicationRole.Admin);
            //}


            //var user = await userManager.FindByIdAsync("D117FABF-846D-470D-2B8A-08D4FF69F083");
            //await signInManager.SignInAsync(user, isPersistent: true);



            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true
            //var result = await _signInManager.PasswordSignInAsync(model.Email,
            //    model.Password, model.RememberMe, lockoutOnFailure: false);
            //if (result.Succeeded)

            //await signInManager.SignOutAsync();
            //return RedirectToAction("Login", "User");
            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Login", "User");
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
