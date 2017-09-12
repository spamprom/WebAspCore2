using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WebAspCore2.Data.Models;

namespace WebAspCore2.Data
{
    public class ConvertMoneyContext : DbContext
    {
        public ConvertMoneyContext(DbContextOptions<ConvertMoneyContext> options) : base(options)
        {
        }

        public DbSet<Money> Moneys { get; set; }
        public DbSet<ExchangeRate> ExchangeRates { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //    //modelBuilder.Entity<Moneys>().ToTable("Moneys");
            //    //modelBuilder.Entity<ExchangeRates>().ToTable("ExchangeRates");

            // modelBuilder.Entity<Department>()
            //.HasOne(d => d.Administrator)
            //.WithMany()
            //.OnDelete(DeleteBehavior.Restrict);


            //modelBuilder.Entity<CourseAssignment>()
            //   .HasKey(c => new { c.CourseID, c.InstructorID });

        }
    }
}
