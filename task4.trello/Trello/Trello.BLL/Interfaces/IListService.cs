using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface IListService
    {
        int CreateList(ListBLL list);
        ListBLL GetList(int id);
        List<ListBLL> GetLists(int userId);
        void UpdateList(ListBLL list);
        void DeleteList(int id);
    }
}
