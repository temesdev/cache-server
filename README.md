# Temes cache server

Cache server built for internal use at Temes.

**While `wrapper.js` provides a way to interact with the cache server, it is highly reccommended you write your own wrapper**

## Usage

Start the cache server with `node server.js -k authorizationkey -p port`

Endpoints of cache server:

- GET `/` - If the cache server is functioning properly, will return the object `{status: "online", message: "Cache server online"}`

**ALL REQUESTS AFTERWARDS REQUIRE AN `AUTHORIZATION` HEADER, WHICH NEEDS TO BE THE SAME AS THE AUTHORIZATION KEY YOU SET WHEN STARTING THE SERVER**

- POST `/set/:value` Headers: `content`: Whatever you want to set `:value` to.

- GET `/get/:value` - Returns the value of `:value`

- DELETE `/del/:value` - Deletes `:value` from the cache server entirely

## Project structure

`server.js` - The main server

`wrapper.js` - Example wrapper

`test/test.js` - Demonstration of the wrapper and server

