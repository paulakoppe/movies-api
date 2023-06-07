<h1 align="center"> movies api 🎬 </h1>

## 💻 Project

This project was developed with the following technologies:

- JavaScript
- Node.js
- Express
- SQLite
- Knex


## Setup and run

```shell
$ npm run migrate
$ npm run dev
```
## Creating a user

In the "Users" folder, in the "Create" request, insert the information **name**, **email**, and **password**, then press **send**

![image](https://github.com/paulakoppe/movies-api/assets/125672956/e9a42ec0-19f6-48e5-9c3d-4441def7f288)

The result is an object with all the information from the "users" table, including the encrypted password, along with a success message.

![image](https://github.com/paulakoppe/movies-api/assets/125672956/a622e7db-2747-4ebd-a403-c5afb6dae820)

In the database, it will be stored as follows:

![image](https://github.com/paulakoppe/movies-api/assets/125672956/f5fe7ad3-d2ac-4ddd-a150-c315196c864e)

### Updating a user

In the "Users" folder, in the "Update" request, insert the information you want to change, then press **send**

![image](https://github.com/paulakoppe/movies-api/assets/125672956/3246920f-c594-47b4-b7d8-ea850db1f79b)

### To change the password

![image](https://github.com/paulakoppe/movies-api/assets/125672956/417675e4-ecc3-4a09-b134-2b095096892e)

If you enter the wrong old password:

![image](https://github.com/paulakoppe/movies-api/assets/125672956/0d61c942-051e-4d29-9eba-5f2f81de603b)

If you don't provide the old password:

![image](https://github.com/paulakoppe/movies-api/assets/125672956/add6d971-1bcb-41bd-bd84-4ba0aed4d439)

### To change the email

If you insert a email already registered 

![image](https://github.com/paulakoppe/movies-api/assets/125672956/7e049328-39fd-4d83-97ff-b40c799800aa)

### User does not exist

If you ty do update a user with a inexistent id

![image](https://github.com/paulakoppe/movies-api/assets/125672956/e3230d9e-0377-4936-9129-5396f68a38cd)

## Creating notes:

In the "Notes" folder, in the "Create" request, insert the information **title**, **description**, **rating**, **movie_tags**, **movie_links** then press **send**

![image](https://github.com/paulakoppe/movies-api/assets/125672956/51e6d01b-07a3-470e-b46e-25833964ee7b)

The result is an object with the **id** from the "notes" table, one from the "links" table, and one from the "tag" table, along with a success message at the end.

![image](https://github.com/paulakoppe/movies-api/assets/125672956/fad9da1a-c182-443f-9027-c40bc961f0a2)

### Listing the notes.

To list the notes created by the user, you need to access them directly by their ID, in the "Show" request.

![image](https://github.com/paulakoppe/movies-api/assets/125672956/792af83d-da38-4227-b0c9-bec53d0bc4fd)

### Deleting the notes

To delete the notes created by the user, you need to access them directly by their ID, in the "Delete" request. A success message will be displayed.

![image](https://github.com/paulakoppe/movies-api/assets/125672956/7203865d-e669-4dbb-811c-605c60a7e1ab)

### Showing all the tags

This one is using the **request.query** method instead of **request.param**. When executed with the desired information, all the involved tags will be displayed.

![image](https://github.com/paulakoppe/movies-api/assets/125672956/24a75779-d098-4043-b808-52e68bc94978)

---
made with ♥ by paula koppe



