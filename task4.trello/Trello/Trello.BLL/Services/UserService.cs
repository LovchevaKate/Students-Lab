using AutoMapper;
using System;
using System.Collections.Generic;
using Trello.BLL.Interfaces;
using Trello.BLL.Models;
using Trello.DAL.Entities;
using Trello.DAL.Repositories;

namespace Trello.BLL.Services
{
    public class UserService : IUserService
    {
        UnitOfWork Database { get; set; }

        public UserService(UnitOfWork uof)
        {
            Database = uof;
        }

        public void CreateUser(UserBLL userBLL)
        {
            if (userBLL == null)
            {
                throw new Exception("Error. user == null");
            }

            //Mapper.Initialize(cfg => cfg.CreateMap<UserBLL, User>());
            //User user = Mapper.Map<UserBLL, User>(userBLL);

            User user = new User
            {
                Password = userBLL.Password,
                Login = userBLL.Login
            };

            Database.Users.Create(user);
            Database.Save();
        }

        public void DeleteUser(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            Database.Users.Delete(id);
            Database.Save();
        }

        public UserBLL GetUser(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            var user = Database.Users.Get(id);

            if (user == null)
                throw new Exception("User don't find");

            Mapper.Initialize(cfg => cfg.CreateMap<User, UserBLL>());
            UserBLL userBLL = Mapper.Map<User, UserBLL>(user);

            return userBLL;
        }

        public List<UserBLL> GetUsers()
        {
            var users = Database.Users.GetAll();
            List<UserBLL> usersBLL = new List<UserBLL>();

            if (users == null)
            {
                throw new Exception("Error create list of users");
            }

            foreach (var u in users)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<User, UserBLL>());
                UserBLL userBLL = Mapper.Map<User, UserBLL>(u);

                usersBLL.Add(userBLL);
            }

            return usersBLL;
        }

        public void UpdateUser(UserBLL userBLL)
        {
            if (userBLL == null)
            {
                throw new Exception("error. update user bll");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<UserBLL, User>());
            User user = Mapper.Map<UserBLL, User>(userBLL);

            Database.Users.Update(user);
            Database.Save();
        }
    }
}