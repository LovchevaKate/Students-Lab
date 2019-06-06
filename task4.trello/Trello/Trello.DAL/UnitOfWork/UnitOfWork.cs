using Microsoft.EntityFrameworkCore;
using Trello.DAL.Context;
using Trello.DAL.Entities;
using Trello.DAL.Interfaces;

namespace Trello.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ContextDB db;
        private readonly DbContextOptionsBuilder context;

        private UserRepository userRepository;
        private ListRepository listRepository;
        private CardRepository cardRepository;
        private CommentRepository commentRepository;

        public UnitOfWork(ContextDB connectionString)
        {
            db = connectionString;
        }
        public UnitOfWork(DbContextOptionsBuilder connectionString)
        {
            context = connectionString;
        }

        public IRepository<User> Users
        {
            get
            {
                if (userRepository == null)
                    userRepository = new UserRepository(db);
                return userRepository;
            }
        }
        public IRepository<List> Lists
        {
            get
            {
                if (listRepository == null)
                    listRepository = new ListRepository(db);
                return listRepository;
            }
        }
        public IRepository<Card> Cards
        {
            get
            {
                if (cardRepository == null)
                    cardRepository = new CardRepository(db);
                return cardRepository;
            }
        }
        public IRepository<Comment> Comments
        {
            get
            {
                if (commentRepository == null)
                    commentRepository = new CommentRepository(db);
                return commentRepository;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}
