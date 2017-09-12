using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAspCore2.Data;
using WebAspCore2.BL;
using WebAspCore2.BL.ViewData.Moneys;

namespace WebAspCore2.Controllers
{
    [Route("api/[controller]")]
    public class MoneyController : Controller
    {
        private readonly MoneyService moneyService;
        public MoneyController(MoneyService _moneyService)
        {
            moneyService = _moneyService;
        }

        [HttpGet]
        public async Task<IEnumerable<TMoney>> GetAll()
        {
            return await moneyService.GetAll();
        }

        //[HttpGet("[action]")]
        //public IEnumerable<WeatherForecast> WeatherForecasts()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    });
        //}

        [HttpGet("{id}", Name = "GetOne")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var item = await moneyService.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }


        //public async Task<IActionResult> Index()
        //{
        //    return View(await _context.Students.ToListAsync());
        //}
        //[HttpPut("{id}")]
        //public IActionResult Update(long id, [FromBody] TodoItem item)
        //{
        //    if (item == null || item.Id != id)
        //    {
        //        return BadRequest();
        //    }

        //    var todo = _context.TodoItems.FirstOrDefault(t => t.Id == id);
        //    if (todo == null)
        //    {
        //        return NotFound();
        //    }

        //    todo.IsComplete = item.IsComplete;
        //    todo.Name = item.Name;

        //    _context.TodoItems.Update(todo);
        //    _context.SaveChanges();
        //    return new NoContentResult();
        //}


    }
}