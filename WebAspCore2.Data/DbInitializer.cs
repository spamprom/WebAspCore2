using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebAspCore2.Data.Models;

namespace WebAspCore2.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ConvertMoneyContext context)
        {
            var rrr = context.Database.EnsureCreated();

            // Look for any students.
            if (context.Moneys.Any())
            {
                return;   // DB has been seeded
            }

            var moneys = new Money[]
            {
                new Money{Name="dollar", ShortName="$", MoneyID=new Guid("{4F01F03F-3F89-4740-BE57-AC421C2FC638}")},
            new Money{Name="euro",ShortName="€",MoneyID=new Guid("{03DED897-19D8-4245-8AC2-201353952952}")},
            new Money{Name="hryvna",ShortName="₴",MoneyID=new Guid("{35A1AC8A-D826-49EC-A4CF-2E7FFA11BDFB}")},
            };
            foreach (var s in moneys)
            {
                context.Moneys.Add(s);
            }
            context.SaveChanges();
        }
    }
}
