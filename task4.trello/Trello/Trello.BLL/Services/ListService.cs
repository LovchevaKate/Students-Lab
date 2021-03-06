﻿using System;
using System.Collections.Generic;
using System.Linq;
using Trello.BLL.Interfaces;
using Trello.BLL.Models;
using Trello.DAL.Entities;
using Trello.DAL.Repositories;

namespace Trello.BLL.Services
{
    public class ListService : IListService
    {
        UnitOfWork Database { get; set; }

        public ListService(UnitOfWork uof)
        {
            Database = uof;
        }

        public int CreateList(ListBLL listBLL)
        {
            if (listBLL == null)
            {
                throw new Exception("Error. list == null");
            }

            List list = new List()
            {
                Title = listBLL.Title,
                IdUser = listBLL.User
            };

            Database.Lists.Create(list);

            Database.Save();

            return list.Id;
        }

        public void DeleteList(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            Database.Lists.Delete(id);
            Database.Save();
        }

        public ListBLL GetList(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            var list = Database.Lists.Get(id);

            if (list == null)
                throw new Exception("list don't find");

            ListBLL listBLL = new ListBLL()
            {
                Id = list.Id,
                Title = list.Title,
                User = list.IdUser
            };

            return listBLL;
        }

        public List<ListBLL> GetLists(int userId)
        {
            var lists = Database.Lists.GetAll().Where(x => x.IdUser == userId).ToList();
            List<ListBLL> listsBLL = new List<ListBLL>();

            if (lists == null)
            {
                throw new Exception("Error create list of lists");
            }

            foreach (var l in lists)
            {
                ListBLL list = new ListBLL() { Id = l.Id, Title = l.Title, User = l.IdUser };

                listsBLL.Add(list);
            }

            return listsBLL;
        }

        public void UpdateList(ListBLL listBLL)
        {
            if (listBLL == null)
            {
                throw new Exception("error. update list bll");
            }

            List list = new List()
            {
                Id = listBLL.Id,
                IdUser = listBLL.User,
                Title = listBLL.Title
            };

            Database.Lists.Update(list);
            Database.Save();
        }
    }
}