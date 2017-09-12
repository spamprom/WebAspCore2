using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAspCore2.Data.Models
{
    public class Money
    {
        [Key]
        public Guid MoneyID { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }

        public ICollection<ExchangeRate> ExchangeRates { get; set; }
    }
}
