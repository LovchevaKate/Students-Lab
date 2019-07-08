using Microsoft.AspNetCore.Authorization;
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
        [Authorize]
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
        [Authorize]
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
        [HttpPost]
        public IActionResult PostUser([FromBody]UserBLL user)
        {
            try
            {
                var users = userService.GetUsers();
                if (user.Login == null || user.Password == null)
                {
                    throw new Exception("Error. Password == null or Login == null");
                }

                foreach (UserBLL u in users)
                {
                    if (u.Login == user.Login)
                        throw new Exception("Error. Login already exists");
                }

                userService.CreateUser(user);


                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/UserAPI/5
        [Authorize]
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