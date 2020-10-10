# Uniplato Books API

## LOGIN

### Login with your added admin or with main-admin -> (email: admin@admin.com, pass:admin123)

### After login you have to send other requests with given token with bearer auth in header of the request

> **_ POST http://<host_name>:<port>/login _** post[email, password]

## ADMIN

### Add admin

> **_ POST http://<host_name>:<port>/admin _** post[email, password]

### Remove admin

> **_ DELETE http://<host_name>:<port>/admin _** post[email, password]

## CATEGORY

### Read category

> **_ GET http://<host_name>:<port>/category/:id _**
> Note: id is optional

### Add category

> **_ POST http://<host_name>:<port>/category _** post[email, password]

### Update category

> **_ PUT http://<host_name>:<port>/category _** post[email, password]

## BOOK

### Read book

> **_ GET http://<host_name>:<port>/book/:isbn _**
> Note: isbn is optional

### Add book

> **_ POST http://<host_name>:<port>/book _** post[email, password]

### Update book

> **_ PUT http://<host_name>:<port>/book _** post[email, password]
