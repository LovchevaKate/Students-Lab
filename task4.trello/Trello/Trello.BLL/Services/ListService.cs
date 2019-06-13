using AutoMapper;
using System;
using System.Collections.Generic;
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

        public void CreateList(ListBLL listBLL)
        {
            if (listBLL == null)
            {
                throw new Exception("Error. list == null");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<ListBLL, List>());
            List list = Mapper.Map<ListBLL, List>(listBLL);

            Database.Lists.Create(list);
            Database.Save();
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

            Mapper.Initialize(cfg => cfg.CreateMap<List, ListBLL>());
            ListBLL listBLL = Mapper.Map<List, ListBLL>(list);

            return listBLL;
        }

        public IEnumerable<ListBLL> GetLists()
        {
            var lists = Database.Lists.GetAll();
            List<ListBLL> listsBLL = new List<ListBLL>();

            if (lists == null)
            {
                throw new Exception("Error create list of lists");
            }

            foreach (var l in lists)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<List, ListBLL>());
                ListBLL listBLL = Mapper.Map<List, ListBLL>(l);

                listsBLL.Add(listBLL);
            }

            return listsBLL;
        }

        public void UpdateList(ListBLL listBLL)
        {
            if (listBLL == null)
            {
                throw new Exception("error. update list bll");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<ListBLL, List>());
            List list = Mapper.Map<ListBLL, List>(listBLL);

            Database.Lists.Update(list);
            Database.Save();
        }
    }
}