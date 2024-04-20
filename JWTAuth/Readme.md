## Express + JWT Authentication
Case creating application

#### Roles
1. SUPERUSER, create cases (JWT authenticated)
2. USER, read cases or edit case info (simple autheticated)

#### Database
- postgres

#### Apis

- Super User

1. login superuser
2. create case
3. close case
4. get token for superuser. ---
5. refresh token for user.---
6. remove case user from case and assign another
7. enable/disable case user

- case User

1. login user
2. get case
3. update case
4. logout user
5. close case


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
