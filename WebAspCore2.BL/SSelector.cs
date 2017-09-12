using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebAspCore2.BL.ViewData.Moneys;
using WebAspCore2.Data.Models;

namespace WebAspCore2.BL
{
    public static class SSelector
    {
        public static IQueryable<TMoney> ToMoney(this IQueryable<Money> items)
        {
            return items.Select(r => new TMoney()
            {
                MoneyID = r.MoneyID,
                Name = r.Name,
                ShortName = r.ShortName,
            });
        }
    }
}
