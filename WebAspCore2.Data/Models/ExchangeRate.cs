using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAspCore2.Data.Models
{
    public class ExchangeRate
    {
        public int ExchangeRateID { get; set; }
        public Guid MoneyID { get; set; }
        [Column(TypeName = "money")]
        public decimal Value { get; set; }
        public ExchangeRateTypeEnum ExchangeRateType { get; set; }
        public Money Money { get; set; }
        public DateTime Day { get; set; }
    }

    public enum ExchangeRateTypeEnum
    {
        General = 1,
        Holiday = 2,
    }
}
