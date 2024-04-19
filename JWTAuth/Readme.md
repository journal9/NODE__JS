## Express + JWT Authentication
Case creating application

#### Roles
1. SUPERUSER, create cases (JWT authenticated)
2. USER, read cases or edit case info (simple autheticated)

#### Database
- postgres

#### Apis

1. login superuser
2. login user
3. create case
4. get case
5. edit case
6. delete case
7. logout user
8. get token for superuser
9. refresh token for user.
10. enable/disable case user
11. remove case user

## following are the postgresql commands that I always forget

- service postgresql status
- sudo -i -u postgres or psql
- postgres=# \conninfo
- postgres=# \l, list of all databases
- postgres=# \du, list of all users
- postgres=# CREATE DATABASE cases;, create database
- postgres=# CREATE USER superuser WITH ENCRYPTED PASSWORD 'rootuser'; , create user
- postgres=# GRANT ALL PRIVILEGES ON DATABASE cases TO superuser;, grant permission to superuser
- postgres=# CREATE DATABASE CaseManager;
- postgres=# \c casemanager, connect to database casemanager as current user
- casemanager-# \dt, list of all tables
