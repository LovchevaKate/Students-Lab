using Microsoft.EntityFrameworkCore;
using Trello.DAL.Entities;

namespace Trello.DAL.Context
{
    public class ContextDB : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<List> Lists { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public ContextDB(DbContextOptions<ContextDB> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Comment>()
                .HasOne(i => i.Card)
                .WithMany(i => i.Comments)
                .HasForeignKey(i => i.IdCard)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Card>()
                .HasOne(i => i.List)
                .WithMany(i => i.Cards)
                .HasForeignKey(i => i.IdList)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<List>()
                .HasOne(i => i.User)
                .WithMany(i => i.Lists)
                .HasForeignKey(i => i.IdUser)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
