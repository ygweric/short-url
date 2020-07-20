// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import { User } from "./entity/User";
// import { Url } from './entities/url'


// console.log(`create and insert data to db ${User}` )
// console.log(`create and insert data to db ${Url}` )

// createConnection().then(async connection => {

//   const url = new Url();
//   url.shortUrl = "xxx";
//   url.longUrl = "xxxmslfknslf";
//   await connection.manager.save(url);


//   console.log("Inserting a new user into the database...");
//   const user = new User();
//   user.firstName = "Timber";
//   user.lastName = "Saw";
//   user.age = 25;
//   await connection.manager.save(user);
//   console.log("Saved a new user with id: " + user.id);

//   console.log("Loading users from the database...");
//   const users = await connection.manager.find(User);
//   console.log("Loaded users: ", users);

//   console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
