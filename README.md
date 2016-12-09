TIMESTAMP MICROSERVICE
---------------------------
Create a timestamp microservice that returns a JSON-formatted unix timestamp and 
natural language timestamp

USER STORIES
------------

* I can pass a string as a parameter, and it will check to see whether that 
* string contains either a unix timestamp or a natural language date 
* (example: January 1, 2016).

* If it does, it returns both the Unix timestamp and the natural language form 
* of that date.

* If it does not contain a date or Unix timestamp, it returns null for those 
* properties.


NOTES 
------

12-7-16

First thing is to figure out how to render a html page with express.  So I'm 
going to use the 'ejs' module (Embeded JavaScript) to help me render html 
files in the server. First, I set the engine template...

app.engine('html', require('ejs').renderFile);

Then I set the 'view engine' of Express...

app.set('view engine', 'html');

From there I can call 'GET' and render the index.html file.

---

12-8-16

Had a little trouble trying to figure out how to take the info from the params
so I can at least check to see if it is a valid date format.  Express provides
a method which allows you to capture the params which you defined in the route.
Within the callback function of the route the request param uses the 'params'
method to capture any param identied in a json format.

I set the request params to a variable and I checked if the value was 'NaN' or 
not.  If not, the value will be formatted and sent as a json.  Otherwise, we 
take the value, place it in a new Date constructor, then convert it to a string
and check if it equals 'Invalid Date'.  If it does then we'll set the date 
variable to 'null', if not, we set it equal to a new Date with the value as it's 
constructor.

From here, we send out the json.  When setting the values a ternary is used to 
evaluate which value will be outputted.  If the value is 'null' then the output 
will be 'null', otherwise, the value will be formatted and returned.

The 'strftime' module is used to format the natural date.

---

Finished typing up the HTML w/ bootstrap.