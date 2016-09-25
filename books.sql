drop database if exists bookapi;
create database bookapi;

\c bookapi;

create table books(
    id serial primary key,
    name varchar,
    author varchar,
    publishedYear integer
);

insert into books(name, author, publishedYear)
values('Book 1', 'Author 1', 2010);