using System;
using System.Collections.Generic;
using System.Text;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface IUserService
    {
        void CreateUser(UserBLL user);
        UserBLL GetUser(int id);
        IEnumerable<UserBLL> GetUsers();
        void UpdateUser(UserBLL user);
        void DeleteUser(int id);
    }
}
