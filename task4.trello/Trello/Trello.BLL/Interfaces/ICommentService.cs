using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface ICommentService
    {
        void CreateComment(CommentBLL comment);
        CommentBLL GetComment(int id);
        IEnumerable<CommentBLL> GetComments();
        void UpdateComment(CommentBLL comment);
        void DeleteComment(int id);
    }
}
