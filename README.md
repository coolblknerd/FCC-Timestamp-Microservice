TIMESTAMP MICROSERVICE
---------------------------
Create a timestamp microservice that returns a JSON-formatted unix timestamp and natural language timestamp

USER STORIES
------------

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

* If it does, it returns both the Unix timestamp and the natural language form of that date.

* If it does not contain a date or Unix timestamp, it returns null for those properties.


NOTES 
------

12-7-16

First thing is to figure out how to render a html page with express.