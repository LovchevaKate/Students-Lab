using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/list/{listId}/[controller]")]
    [ApiController]
    public class CardAPIController : ControllerBase
    {
        readonly CardService cardService;
        public CardAPIController(CardService serv)
        {
            cardService = serv;
        }

        // GET: api/CardAPI
        [HttpGet]
        public IActionResult GetCards([FromRoute] int listId)
        {
            try
            {
                List<CardBLL> cards = cardService.GetCards(listId);

                if (cards == null)
                {
                    throw new Exception("cards don't found");
                }

                return Ok(cards);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/CardAPI/5
        //[Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult GetCard([FromRoute] int id)
        {
            try
            {
                var card = cardService.GetCard(id);

                if (card == null)
                {
                    throw new Exception("card doesn't found");
                }

                return Ok(card);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/CardAPI
        //[Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult PutCard([FromBody]CardBLL card)
        {
            try
            {
                if (card == null)
                {
                    throw new Exception("card==null");
                }

                if (cardService.GetCard(card.Id) == null)
                {
                    throw new Exception("card doesn't found");
                }

                cardService.UpdateCard(card);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/CardAPI
        //[Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult PostCard([FromBody]CardBLL card)
        {
            try
            {
                cardService.CreateCard(card);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/CardAPI/5
        //[Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteCard([FromRoute] int id)
        {
            try
            {
                if (cardService.GetCard(id) == null)
                {
                    throw new Exception("Error. card doesn't found");
                }
                else
                {
                    cardService.DeleteCard(id);

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