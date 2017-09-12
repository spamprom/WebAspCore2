using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAspCore2.BL.ViewData.Moneys;
using WebAspCore2.Data;

namespace WebAspCore2.BL
{
    public class MoneyService
    {
        private readonly ConvertMoneyContext context;
        public MoneyService(ConvertMoneyContext _context)
        {
            context = _context;
        }

        public async Task<List<TMoney>> GetAll()
        {
            return await context.Moneys.ToMoney().ToListAsync();//AsNoTracking
        }

        public async Task<TMoney> GetById(Guid id)
        {
            return await context.Moneys.Where(r => r.MoneyID == id).ToMoney().FirstOrDefaultAsync();
        }
    }
}
