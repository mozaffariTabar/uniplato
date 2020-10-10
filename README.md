# Uniplato Books API

## LOGIN

### Login with your added admin or with main-admin -> (email: admin@admin.com, pass:admin123)

### After login you have to send other requests with given token with bearer auth in header of the request

> **_ POST http://<host_name>:<port_number>/login _**
> \_ Params [email, password]

## ADMIN

### Add admin

> **_ POST http://<host_name>:<port_number>/admin _**
> \_ Params [email, password]

### Remove admin

> **_ DELETE http://<host_name>:<port_number>/admin _**
> \_ Params [email, password]

## CATEGORY

### Read category

> **_ GET http://<host_name>:<port_number>/category/:id _**
> \_ Note: id is optional

### Add category

> **_ POST http://<host_name>:<port_number>/category _**
> \_ Params [email, password]

### Update category

> **_ PUT http://<host_name>:<port_number>/category _**
> \_ Params [email, password]

## BOOK

### Read book

> **_ GET http://<host_name>:<port_number>/book/:isbn _**
> \_ Note: isbn is optional

### Add book

> **_ POST http://<host_name>:<port_number>/book _**
> \_ Params [isbn, title, subtitle, categories, author, publisher, published, pages, description, website]

### Update book

> **_ PUT http://<host_name>:<port_number>/book _**
> _ Params [isbn, title, subtitle, categories, author, publisher, published, pages, description, website]
> _ You can send part or all of this data to update

### Delete book

> **_ PUT http://<host_name>:<port_number>/book _**
> _ Params [isbn]
> _ You can send part or all of this params to update
