﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Trello.DAL.Context;

namespace Trello.Migrations
{
    [DbContext(typeof(ContextDB))]
    [Migration("20190704192909_t2")]
    partial class t2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Trello.DAL.Entities.Card", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IdList");

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.HasIndex("IdList");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("Trello.DAL.Entities.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IdCard");

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.HasIndex("IdCard");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Trello.DAL.Entities.List", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IdUser");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("IdUser");

                    b.ToTable("Lists");
                });

            modelBuilder.Entity("Trello.DAL.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Trello.DAL.Entities.Card", b =>
                {
                    b.HasOne("Trello.DAL.Entities.List", "List")
                        .WithMany("Cards")
                        .HasForeignKey("IdList")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Trello.DAL.Entities.Comment", b =>
                {
                    b.HasOne("Trello.DAL.Entities.Card", "Card")
                        .WithMany("Comments")
                        .HasForeignKey("IdCard")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Trello.DAL.Entities.List", b =>
                {
                    b.HasOne("Trello.DAL.Entities.User", "User")
                        .WithMany("Lists")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
