using System;
using System.Collections.Generic;
using System.Linq;
using Trello.BLL.Interfaces;
using Trello.BLL.Models;
using Trello.DAL.Entities;
using Trello.DAL.Repositories;

namespace Trello.BLL.Services
{
    public class CardService : ICardService
    {
        UnitOfWork Database { get; set; }

        public CardService(UnitOfWork uof)
        {
            Database = uof;
        }

        public int CreateCard(CardBLL cardBLL)
        {
            if (cardBLL == null)
            {
                throw new Exception("Error. card == null");
            }

            var card = new Card() { Text = cardBLL.Text, IdList = cardBLL.List };

            Database.Cards.Create(card);
            Database.Save();
            return card.Id;
        }

        public void DeleteCard(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            Database.Cards.Delete(id);
            Database.Save();
        }

        public CardBLL GetCard(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            var card = Database.Cards.Get(id);

            if (card == null)
                throw new Exception("card don't find");

            CardBLL cardBLL = new CardBLL()
            {
                Id = card.Id,
                List = card.IdList,
                Text = card.Text
            };

            return cardBLL;
        }

        public List<CardBLL> GetCards(int listId)
        {
            var cards = Database.Cards.GetAll().Where(x => x.IdList == listId);
            var cardsBLL = new List<CardBLL>();

            if (cards == null)
            {
                throw new Exception("Error create list of cards");
            }

            foreach (var c in cards)
            {
                var cardBLL = new CardBLL() { Id = c.Id, List = c.IdList, Text = c.Text };

                cardsBLL.Add(cardBLL);
            }

            return cardsBLL;
        }

        public void UpdateCard(CardBLL cardBLL)
        {
            if (cardBLL == null)
            {
                throw new Exception("error. update card bll");
            }

            Card card = new Card()
            {
                Id = cardBLL.Id,
                IdList = cardBLL.List,
                Text = cardBLL.Text
            };

            Database.Cards.Update(card);
            Database.Save();
        }
    }
}