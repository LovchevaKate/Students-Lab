using System.Collections.Generic;
using System.Linq;
using Trello.DAL.Context;
using Trello.DAL.Entities;
using Trello.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Trello.DAL.Repositories
{
    public class CardRepository : IRepository<Card>
    {
        private readonly ContextDB db;

        public CardRepository(ContextDB context)
        {
            db = context;
        }

        public IEnumerable<Card> GetAll()
        {
            return db.Cards.ToList();
        }

        public Card Get(int id)
        {
            return db.Cards.FirstOrDefault(x => x.Id == id);
        }

        public void Create(Card card)
        {
            db.Cards.Add(card);
        }

        public void Update(Card card)
        {
            db.Cards.Update(card);
        }

        public void Delete(int id)
        {
            Card card = db.Cards.Find(id);
            if (card != null)
                db.Cards.Remove(card);
        }
    }
}