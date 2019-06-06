using System.Collections.Generic;
using Trello.BLL.Models;

namespace Trello.BLL.Interfaces
{
    public interface ICardService
    {
        void CreateCard(CardBLL card);
        CardBLL GetCard(int id);
        IEnumerable<CardBLL> GetCards();
        void UpdateCard(CardBLL card);
        void DeleteCard(int id);
    }
}
