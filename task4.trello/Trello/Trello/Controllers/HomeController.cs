using Microsoft.AspNetCore.Mvc;

namespace Trello.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}