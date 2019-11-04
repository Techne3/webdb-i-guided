## WHat we cover
 - an introduction to what relational DB and relational Database Management Systems are.
 - an introduction to structured query langues (SQL)

 ## What we don't cover
- installing a database server.
- database servers administration(totally different career)


# Relation is a Table
 - RElational Databases store data in Tables.
 - A table has a collection of rows (records).
 - A Row has many columns (fields)
 - A table (or a group or tables) is where resources are stored.


 # SQL = structured Query Language
 - mange (CRUD) data << We'll do this >>
 - manage the Database structure /(schema)
 - manage objects inside the database
 - manage the database server (security, monitoring, performance, analysis)

 # Relational DB Management System (RDBMS)
- server software to manage relational databases
- some examples:
    - SQLite
    - PostgreSQL
    - MySQL
    - MS SQL Server
    - Oracle
    - MariaDB

## Using a RDB from a Node.js API

[client] http(= JSON = ) [API] proprietary protocol = SQL= [DBMS Server]  // DataBase Management Server

A **Query Builder (we'll use Knex )** translates between the API language (JS for Node.js) and SQL

[API] == Knex == Database Driver == [RDBMS]

An Object Relational Mapper (ORM, ex. Sequelize and Bookshelf) is another way to connect an API to RDBMS

ORM's are more complex because they do more than a simple Query Builder







