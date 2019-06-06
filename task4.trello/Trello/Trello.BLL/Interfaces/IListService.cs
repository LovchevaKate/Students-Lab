using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface IListService
    {
        void CreateList(ListBLL list);
        ListBLL GetList(int id);
        IEnumerable<ListBLL> GetLists();
        void UpdateList(ListBLL list);
        void DeleteList(int id);
    }
}
