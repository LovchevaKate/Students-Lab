using Trello.DAL.Entities;

namespace Trello.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<User> Users { get; }
        IRepository<List> Lists { get; }
        IRepository<Card> Cards { get; }
        IRepository<Comment> Comments { get; }

        void Save();
    }
}
