using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface IUserService
    {
        void CreateUser(UserBLL user);
        UserBLL GetUser(int id);
        List<UserBLL> GetUsers();
        void UpdateUser(UserBLL user);
        void DeleteUser(int id);
    }
}
