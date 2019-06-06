using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Trello.DAL.Entities
{
    public class Card
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }

        public int? IdList { get; set; }
        [ForeignKey("IdList")]
        public List List { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
