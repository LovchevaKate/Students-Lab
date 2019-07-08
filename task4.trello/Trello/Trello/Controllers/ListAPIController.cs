using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/user/{userId}/[controller]")]
    [ApiController]
    public class ListAPIController : ControllerBase
    {
        readonly ListService listService;
        public ListAPIController(ListService serv)
        {
            listService = serv;
        }

        // GET: api/ListAPI
        [Authorize]
        [HttpGet]
        public IActionResult GetLists([FromRoute] int userId)
        {
            try
            {
                var lists = listService.GetLists(userId);

                if (lists == null)
                {
                    throw new Exception("users don't found");
                }

                return Ok(lists);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/ListAPI/5
        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetList([FromRoute] int id)
        {
            try
            {
                var list = listService.GetList(id);

                if (list == null)
                {
                    throw new Exception("list doesn't found");
                }

                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/ListAPI
        [Authorize]
        [HttpPut]
        public IActionResult PutList([FromBody]ListBLL list)
        {
            try
            {
                if (list == null)
                {
                    throw new Exception("list==null");
                }

                if (listService.GetList(list.Id) == null)
                {
                    throw new Exception("list doesn't found");
                }

                listService.UpdateList(list);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/ListAPI
        [Authorize]
        [HttpPost]
        public IActionResult PostList([FromBody]ListBLL list, [FromRoute]int userId)
        {
            try
            {
                if (list.Title==null)
                {
                    return BadRequest();
                }
                list.User = userId;
                list.Id = listService.CreateList(list);

                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/ListAPI/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteList([FromRoute] int id, [FromRoute] int userId)
        {
            try
            {
                if (listService.GetList(id) == null)
                {
                    throw new Exception("Error. list doesn't found");
                }
                else
                {
                    listService.DeleteList(id);
                    var l = listService.GetLists(userId);
                    return Ok(l);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}