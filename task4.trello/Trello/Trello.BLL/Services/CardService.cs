using AutoMapper;
using System;
using System.Collections.Generic;
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

        public void CreateCard(CardBLL cardBLL)
        {
            if (cardBLL == null)
            {
                throw new Exception("Error. card == null");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<CardBLL, Card>());
            Card card = Mapper.Map<CardBLL, Card>(cardBLL);

            Database.Cards.Create(card);
            Database.Save();
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

            Mapper.Initialize(cfg => cfg.CreateMap<Card, CardBLL>());
            CardBLL cardBLL = Mapper.Map<Card, CardBLL>(card);

            return cardBLL;
        }

        public List<CardBLL> GetCards()
        {
            var cards = Database.Cards.GetAll();
            List<CardBLL> cardsBLL = new List<CardBLL>();

            if (cards == null)
            {
                throw new Exception("Error create list of cards");
            }

            foreach (var c in cards)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<Card, CardBLL>());
                CardBLL cardBLL = Mapper.Map<Card, CardBLL>(c);

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

            Mapper.Initialize(cfg => cfg.CreateMap<CardBLL, Card>());
            Card card = Mapper.Map<CardBLL, Card>(cardBLL);

            Database.Cards.Update(card);
            Database.Save();
        }
    }
}