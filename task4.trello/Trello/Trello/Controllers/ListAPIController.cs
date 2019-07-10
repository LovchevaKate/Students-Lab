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
    [Authorize]
    public class ListAPIController : ControllerBase
    {
        readonly ListService listService;
        public ListAPIController(ListService serv)
        {
            listService = serv;
        }

        // GET: api/ListAPI        
        [HttpGet]
        public IActionResult GetLists([FromRoute] int userId)
        {
            try
            {
                var lists = listService.GetLists(userId);

                if (lists == null)
                {
                    throw new Exception("Error. Lists not found");
                }

                return Ok(lists);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/ListAPI/5
        [HttpGet("{id}")]
        public IActionResult GetList([FromRoute] int id)
        {
            try
            {
                var list = listService.GetList(id);

                if (list == null)
                {
                    throw new Exception("Error. List not found");
                }

                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/ListAPI
        [HttpPut]
        public IActionResult PutList([FromBody]ListBLL list)
        {
            try
            {
                if (list == null)
                {
                    throw new Exception("Error. List in request is null");
                }

                if (listService.GetList(list.Id) == null)
                {
                    throw new Exception("Error. List not found");
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
        [HttpDelete("{id}")]
        public IActionResult DeleteList([FromRoute] int id, [FromRoute] int userId)
        {
            try
            {
                if (listService.GetList(id) == null)
                {
                    throw new Exception("Error. List not found");
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