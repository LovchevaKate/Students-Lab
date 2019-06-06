using System.Collections.Generic;
using System.Linq;
using Trello.DAL.Context;
using Trello.DAL.Entities;
using Trello.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Trello.DAL.Repositories
{
    public class ListRepository : IRepository<List>
    {
        private readonly ContextDB db;

        public ListRepository(ContextDB context)
        {
            db = context;
        }

        public IEnumerable<List> GetAll()
        {
            return db.Lists.ToList();
        }

        public List Get(int id)
        {
            return db.Lists.FirstOrDefault(x => x.Id == id);
        }

        public void Create(List list)
        {
            db.Lists.Add(list);
        }

        public void Update(List list)
        {
            db.Lists.Update(list);
        }

        public void Delete(int id)
        {
            List list = db.Lists.Find(id);
            if (list != null)
                db.Lists.Remove(list);
        }
    }
}