using System.Collections.Generic;
using System.Linq;
using Trello.DAL.Context;
using Trello.DAL.Entities;
using Trello.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Trello.DAL.Repositories
{
    public class CommentRepository : IRepository<Comment>
    {
        private readonly ContextDB db;

        public CommentRepository(ContextDB context)
        {
            db = context;
        }

        public IEnumerable<Comment> GetAll()
        {
            return db.Comments.ToList();
        }

        public Comment Get(int id)
        {
            return db.Comments.FirstOrDefault(x => x.Id == id);
        }

        public void Create(Comment comment)
        {
            db.Comments.Add(comment);
        }

        public void Update(Comment comment)
        {
            db.Comments.Update(comment);
        }

        public void Delete(int id)
        {
            Comment comment = db.Comments.Find(id);
            if (comment != null)
                db.Comments.Remove(comment);
        }
    }
}