using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Trello.DAL.Entities
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public int? IdCard { get; set; }
        [ForeignKey("IdCard")]
        public Card Card { get; set; }
    }
}
