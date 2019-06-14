using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentAPIController : ControllerBase
    {
        readonly CommentService commentService;
        public CommentAPIController(CommentService serv)
        {
            commentService = serv;
        }

        // GET: api/CommentAPI
        [HttpGet]
        public IActionResult GetComments()
        {
            try
            {
                List<CommentBLL> comments = commentService.GetComments();

                if (comments == null)
                {
                    throw new Exception("comments don't found");
                }

                return Ok(comments);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/CardAPI/5
        //[Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult GetComment([FromRoute] int id)
        {
            try
            {
                var comment = commentService.GetComment(id);

                if (comment == null)
                {
                    throw new Exception("comment doesn't found");
                }

                return Ok(comment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/CommentAPI
        //[Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult PutComment([FromBody]CommentBLL comment)
        {
            try
            {
                if (comment == null)
                {
                    throw new Exception("comment==null");
                }

                if (commentService.GetComment(comment.Id) == null)
                {
                    throw new Exception("comment doesn't found");
                }

                commentService.UpdateComment(comment);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/CommentAPI
        //[Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult PostComment([FromBody]CommentBLL comment)
        {
            try
            {
                commentService.CreateComment(comment);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/CommentAPI/5
        //[Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteComment([FromRoute] int id)
        {
            try
            {
                if (commentService.GetComment(id) == null)
                {
                    throw new Exception("Error. comment doesn't found");
                }
                else
                {
                    commentService.DeleteComment(id);

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