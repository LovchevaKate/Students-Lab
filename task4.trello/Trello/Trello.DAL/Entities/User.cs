using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Trello.DAL.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public ICollection<List> Lists { get; set; }
    }
}
