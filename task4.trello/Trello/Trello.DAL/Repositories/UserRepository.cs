using System.Collections.Generic;
using System.Linq;
using Trello.DAL.Context;
using Trello.DAL.Entities;
using Trello.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Trello.DAL.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly ContextDB db;

        public UserRepository(ContextDB context)
        {
            db = context;
        }

        public IEnumerable<User> GetAll()
        {
            return db.Users.ToList();
        }

        public User Get(int id)
        {
            return db.Users.FirstOrDefault(x => x.Id == id);
        }

        public void Create(User user)
        {
            db.Users.Add(user);
        }

        public void Update(User user)
        {
            db.Users.Update(user);
        }

        public void Delete(int id)
        {
            User user = db.Users.Find(id);
            if (user != null)
                db.Users.Remove(user);
        }
    }
}