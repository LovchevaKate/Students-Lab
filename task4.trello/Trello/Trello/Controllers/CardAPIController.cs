using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/list/{listId}/[controller]")]
    [ApiController]
    [Authorize]
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
                var cards = cardService.GetCards(listId);

                if (cards == null)
                {
                    throw new Exception("Error. Cards not found");
                }

                return Ok(cards);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/CardAPI/5
        [HttpGet("{id}")]
        public IActionResult GetCard([FromRoute] int id)
        {
            try
            {
                var card = cardService.GetCard(id);

                if (card == null)
                {
                    throw new Exception("Error. Card not found");
                }

                return Ok(card);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/CardAPI
        [HttpPut]
        public IActionResult PutCard([FromBody]CardBLL card)
        {
            try
            {
                if (card == null)
                {
                    throw new Exception("Error. Card in request is null");
                }

                if (cardService.GetCard(card.Id) == null)
                {
                    throw new Exception("Error. Card not found");
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
        [HttpPost]
        public IActionResult PostCard([FromBody]CardBLL card)
        {
            try
            {
                if (card.Text == "")
                {
                    throw new Exception("Error. Card in request is null");
                }

                card.Id = cardService.CreateCard(card);

                return Ok(card);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/CardAPI/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCard([FromRoute] int id, [FromRoute] int listId)
        {
            try
            {
                if (cardService.GetCard(id) == null)
                {
                    throw new Exception("Error. Card not found");
                }
                else
                {
                    cardService.DeleteCard(id);
                    var c = cardService.GetCards(listId);
                    return Ok(c);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}