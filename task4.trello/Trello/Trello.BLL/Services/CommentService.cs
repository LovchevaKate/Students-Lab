using AutoMapper;
using System;
using System.Collections.Generic;
using Trello.BLL.Interfaces;
using Trello.BLL.Models;
using Trello.DAL.Entities;
using Trello.DAL.Repositories;

namespace Trello.BLL.Services
{
    public class CommentService : ICommentService
    {
        UnitOfWork Database { get; set; }

        public CommentService(UnitOfWork uof)
        {
            Database = uof;
        }

        public void CreateComment(CommentBLL commentBLL)
        {
            if (commentBLL == null)
            {
                throw new Exception("Error. comment == null");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<CommentBLL, Comment>());
            Comment comment = Mapper.Map<CommentBLL, Comment>(commentBLL);

            Database.Comments.Create(comment);
            Database.Save();
        }

        public void DeleteComment(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            Database.Comments.Delete(id);
            Database.Save();
        }

        public CommentBLL GetComment(int id)
        {
            if (id == 0)
                throw new Exception("id == null");

            var comment = Database.Comments.Get(id);

            if (comment == null)
                throw new Exception("comment don't find");

            Mapper.Initialize(cfg => cfg.CreateMap<Comment, CommentBLL>());
            CommentBLL commentBLL = Mapper.Map<Comment, CommentBLL>(comment);

            return commentBLL;
        }

        public List<CommentBLL> GetComments()
        {
            var comments = Database.Comments.GetAll();
            List<CommentBLL> commentsBLL = new List<CommentBLL>();

            if (comments == null)
            {
                throw new Exception("Error create list of comments");
            }

            foreach (var c in comments)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<Comment, CommentBLL>());
                CommentBLL commentBLL = Mapper.Map<Comment, CommentBLL>(c);

                commentsBLL.Add(commentBLL);
            }

            return commentsBLL;
        }

        public void UpdateComment(CommentBLL commentBLL)
        {
            if (commentBLL == null)
            {
                throw new Exception("error. update comment bll");
            }

            Mapper.Initialize(cfg => cfg.CreateMap<CommentBLL, Comment>());
            Comment comment = Mapper.Map<CommentBLL, Comment>(commentBLL);

            Database.Comments.Update(comment);
            Database.Save();
        }
    }
}