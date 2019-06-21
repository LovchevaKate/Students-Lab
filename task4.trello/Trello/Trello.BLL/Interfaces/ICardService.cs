using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface ICardService
    {
        void CreateCard(CardBLL card);
        CardBLL GetCard(int id);
        List<CardBLL> GetCards(int listId);
        void UpdateCard(CardBLL card);
        void DeleteCard(int id);
    }
}
