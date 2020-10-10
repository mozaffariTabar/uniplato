# Uniplato Books API


## LOGIN

### Login with your added admin or with main-admin -> (email: admin@admin.com, pass:admin123)

### After login you have to send other requests with given token with bearer auth in header of the request

> *** POST http://<host_name>:<port_number>/login *** 
_ Params [email, password]



## ADMIN

### Add admin

> *** POST http://<host_name>:<port_number>/admin *** 
_ Params [email, password]

### Remove admin

> *** DELETE http://<host_name>:<port_number>/admin *** 
_ Params [email, password]


## CATEGORY

### Read category

> *** GET http://<host_name>:<port_number>/category/:id ***
_ Note: id is optional

### Add category

> *** POST http://<host_name>:<port_number>/category *** 
_ Params [email, password]

### Update category

> **_ PUT http://<host_name>:<port_number>/category _** 
_ Params [email, password]


## BOOK

### Read book

> *** GET http://<host_name>:<port_number>/book/:isbn ***
_ Note: isbn is optional

### Add book

> *** POST http://<host_name>:<port_number>/book *** 
_ Params [isbn, title, subtitle, categories, author, publisher, published, pages, description, website]

### Update book

> *** PUT http://<host_name>:<port_number>/book ***
_ Params [isbn, title, subtitle, categories, author, publisher, published, pages, description, website]
_ You can send part or all of this data to update

### Delete book

> *** PUT http://<host_name>:<port_number>/book ***
_ Params [isbn]
_ You can send part or all of this params to update
