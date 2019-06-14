using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAPIController : ControllerBase
    {
        readonly UserService userService;
        public UserAPIController(UserService serv)
        {
            userService = serv;
        }

        // GET: api/UserAPI
        [HttpGet]
        public IActionResult GetUsers()
        {
            try
            {
                List<UserBLL> user = userService.GetUsers();

                if (user == null)
                {
                    throw new Exception("users don't found");
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/UserAPI/5
        //[Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult GetUser([FromRoute] int id)
        {
            try
            {
                var user = userService.GetUser(id);

                if (user == null)
                {
                    throw new Exception("user doesn't found");
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/UserAPI
        //[Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult PutUser([FromBody]UserBLL user)
        {
            try
            {
                if (user == null)
                {
                    throw new Exception("user==null");
                }

                if (userService.GetUser(user.Id) == null)
                {
                    throw new Exception("user doesn't found");
                }

                userService.UpdateUser(user);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/UserAPI
        //[Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult PostUser([FromBody]UserBLL user)
        {
            try
            {
                if (user.Login == null || user.Password == null)
                {
                    throw new Exception("Error. Password == null or Login == null");
                }

                else
                {
                    userService.CreateUser(user);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/UserAPI/5
        //[Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteUser([FromRoute] int id)
        {
            try
            {
                if (userService.GetUser(id) == null)
                {
                    throw new Exception("Error. user doesn't found");
                }
                else
                {
                    userService.DeleteUser(id);

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}