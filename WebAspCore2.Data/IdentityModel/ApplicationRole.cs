using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using WebAspCore2.Data.IdentityModel;

namespace WebAspCore2.Data.IdentityModel
{
    public class ApplicationRole : IdentityRole<Guid>
    {
        public static string Admin
        {
            get
            {
                return "Admin";
                //return new ApplicationRole()
                //{
                //     Id = new Guid("12508CF0-4808-42CE-93F8-15EC2C453382"),
                //     Name = "Admin",
                //};
            }
        }
        public static string User
        {
            get
            {
                return "User";
                //return new ApplicationRole()
                //{
                //    Id = new Guid("68D3D575-E11C-4033-A28F-557F78361527"),
                //    Name = "User",
                //};
            }
        }
    }
}
