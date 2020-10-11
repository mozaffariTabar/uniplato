# Uniplato Book API

**An RESTFUL API which you can do**

- **Login** with **email** and **password**.
- **Get** the **Authenticate Bearer token** and perform your next operation with it.
- **Create** or **delete** the desired **admin** user.
- **Create** book **categories** or **edit** existing category titles.
- **Read** the **categories** in general or with the desired ID.
- **Create** a new **book**, or **edit** any of the existing books, or **delete** an specific book with the ISBN attribute. You can also **read** all the books in general or just a specific book or a certain number of books.
- **Rate and reviews number** will **Auto Scrap** when book loading with ISBN

## Setup and Initialization

1. Install **MySQL server** on your machine
2. import **./uniplato.sql** into the mysql server
3. Edit MYSQL connection props in **.env** file
4. move to the project directory like `> cd C:/uniplato` then run this `npm run devStart`
5. Now, start to talk with API. **Enjoy!**

## Login

- Login with your added admin or with main-admin -> (email: admin@admin.com, password:admin123)
- After login you have to send other requests with given token with Bearer authentication in header of the request

> Method: **POST**  
> End-point: `http://<host_name>:<port_number>/api/login`  
> Params: email, password

## ADMIN

**Add**

> Method: **POST**  
> End-point: `http://<host_name>:<port_number>/api/admin`  
> Params: email, password

**Remove**

> Method: **DELETE**  
> End-point: `http://<host_name>:<port_number>/api/admin`  
> Params: email, password

## CATEGORY

**Read all**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/category`

**Read special id**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/category/<id>`  
> Params: id

**Add**

> Method: **POST**  
> End-point: `http://<host_name>:<port_number>/api/category`  
> Params: name

**Update**

> Method: **PUT**  
> End-point: `http://<host_name>:<port_number>/api/category`  
> Params: id, name

## BOOK

**Read all**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/book`

**Read special book with ISBN**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/book/isbn/<isbn>`  
> Params: isbn
> **Note**: when this route trigger, automaticly rate and reviews scrap from amazon.com and save to database. and you can see this two values in next request

**Read special book with title**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/book/title/<title>`  
> Params: title

**Read A certain number of books**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/book/limit/<number>`  
> Params: number

**Read all books with certain category**

> Method: **GET**  
> End-point: `http://<host_name>:<port_number>/api/book/category/<name>`  
> Params: name

**Add**

> Method: **POST**  
> End-point: `http://<host_name>:<port_number>/api/book`  
> Params: isbn, title, subtitle, categories, author, publisher, published, pages, description, website

**Update**

> Method: **PUT**  
> End-point: `http://<host_name>:<port_number>/api/book`  
> Params: isbn, title, subtitle, categories, author, publisher, published, pages, description, website  
> **Note**: You can send part or all of this params to update

**Delete**

> Method: **DELETE**  
> End-point: `http://<host_name>:<port_number>/api/book`  
> Params: isbn

## DataBase Structure

**Admins table**  
  - id : [int] foreign key  
  - email: [string]  
  - password: [string]  

**Authors table**  
  - id: [int] foreign key  
  - name: [string]  

**Publishers table**  
  - id: [int] foreign key  
  - name: [string]  

**Categories table**  
  - id: [int] foreign key  
  - name: [string]  

**Books table**  
  - Isbn: [string] foreign key  
  - Title: [string]  
  - Subtitle: [string]  
  - categories: [string]  
  - Author: [int]  
  - Published: [date]  
  - Publisher: [int]  
  - Pages: [int]  
  - Description: [string]  
  - Website: [string]  
  - rate: [float]  
  - review: [int]  
