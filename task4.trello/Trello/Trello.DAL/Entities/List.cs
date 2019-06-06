using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Trello.DAL.Entities
{
    public class List
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public int? IdUser { get; set; }
        [ForeignKey("IdUser")]
        public User User { get; set; }
        public ICollection<Card> Cards { get; set; }
    }
}
