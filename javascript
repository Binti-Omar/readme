# \*JAVA SCRIPT\*



\*JS-is a programming language that interacts with the browser to make pages interactive and dynamic\*







###### \*Uses of js\*



\*1.user interactivity-how the user interacts with a page eg to scroll,clock,hover,typing etc.\*



\*2.reactivity-being able to load data in a page\*





###### \*Where to write js(js is written inside a script tag)\*



\*1.internal(in a html file)\*



\*-script tag is written in the head section\*



\*-inside the body tag(common)\*





\*2.external js\*



\*-used when writing a lot of js\*







###### \*DATA TYPES\*



\*1.string\*



\*2.boolean\*



\*3.number(floats and integers)\*





###### \*Variables\*



\*-are named containers used to store data\*







###### \*keywords used to declare js variables\*



\*1.let-used to declare a variable that can be reassigned\*



\*2.const-used when the value of a variable is constant\*



\*3.var-replaced by let coz its deprecated/outdated\*







###### \*How to output data in js\*



\*-console.log() is used\*



\*-access value in console window in the browser\*



\*-type of()-is a function used to check data types\*







##### \*String methods

\-are special inbuilt function(most methods are accessed using the dot operater (.))\*



\*1) . length-used to know the length of a string\*



\*2) .charAT-()used to know the index of a value\*



\*3) .touppercase-()converts lower strings to upper case\*



\*4) .tolowercase()-converts upper strings to lower case\*



\*5) .indexof()-it finds the index of value in the first occurrence\*



\*6) .slice()-divides a string into substrings using index\*



\*7) .repeat()-replicates a string\*



\*8) .trim()-removes all whitespaces\*



\*9) .search()-returns 1 if the value exists or -1 if its not existing\*



\*10) .split()-splits string data into multiple strings and stores\*



\*11) .startswith()-returns true or false for a value\*



\*12) .endswith()-returns true or false for a value\*



\*13) .includes()\*



\*14) .concate-()combines strings\*



\*15) .replace()-replaces values in a string\*



\*16) .substring()\*

&#x20;

\*17) .escape notation-\\n(for starting a new line ect











##### \*Number methods\*



\*1) .tostring()-converts a number into a string\*



\*2) .parseint()- converts a string into a into an interger\*



\*3) .parsefloat()converts a string into a into a float\*



\*4) .tofixed-fixed no of decimals\*



\*5).math.round,math.floor.math.ceil\*











##### \*Js operators\*



\*-are symbols we use to perform operations on values and variables\*







##### \*categories of operators\*



\*1.comparison operators-less than(<),greater than(>),equality-converts values to be of the same data type(==),less or equal to(<=),greater or equal to(>=),not equal to(!=),strict equality-checks if values are equal in both value and data type(===),strict inequality(!==)\*



\*2.logical operators-logical and-gives true if all conditions are true and false if one condition is false(looks for one false only)(\\\&\\\&)\*



\&nbsp;           \\\*-logical or-returns true if at least one condition is true(looks for one true condition only)(||)\\\*



&#x20;           \\\*-not-it reverses the result: if answer is true then not gives the answer as false(!)\\\*





\*3.arithmetic operators-are used to perform arithmetic operation(+,-,/,\\\*,\\\*\\\*,%,++,--,//)\*



\*4.assignment operators-used to assign values to variables (=,+=,-=,\\\\\\\*=)\*







\*Conditional statements\*



\*1.if else\*



\*syntax:\*



\&nbsp;    \\\*if(condition){\\\*



&#x20;         \\\*what happens if condition is true\\\*



&#x20;    \\\*}else{\\\*



&#x20;        \\\*what happens if condition is false}\\\*



&#x20;   \\\*}\\\*







\*Multiple conditions\*



\&nbsp;   \\\*if(condition1){\\\*



&#x20;         \\\*what happens if condition1 is true\\\*



&#x20;    \\\*}else if(condition2){\\\*



&#x20;        \\\*what happens if condition2 is true\\\*



&#x20;    \\\*}else if(condition3){\\\*



&#x20;        \\\*what happens if condition2 is true}\\\*



&#x20;   \\\*}else\\\*



&#x09;\\\*what happens if all conditions are false\\\*



&#x20;   \\\*}\\\*



&#x20;



##### \*DATA STRUCTURES(containers used to store complex and multiple data)\*



\*1.ARRAYS  -> a data structure that can hold more than one value at a time\*



\*--Its equivalent to lists in Python\*







##### \*characteristics\*



\*-> They are ordered - can be accessed via index\*



\*-> They are mutable - can be changed\*



\*-> Can hold values of different data types\*



\*-> Can hold multiple values\*



\*-> Values are comma-separated\*



\*-> JS arrays don't support -ve indexing directly -> use .at(-2)\*







\*syntax for creating an array\*



\*let arr = \\\[1,2,"dog",true,\\\["Mike"]]\*







##### \*Array Operations\*



\*1.Accessing items in an array -> indexing\*



\*2.Update or modify values in an array -> indexing\*



\*3.Determine the size of an array -> array.length -> shows no of items in an array\*



\*4. Adding items to an array\*



\&nbsp;   \\\*array.push() - add at the end\\\*



&#x20;   \\\*array.unshift() - add at the beginning\\\*





\*5. Removing array elements\*



\&nbsp;   \\\*array.pop() - removes last element of an array\\\*



&#x20;   \\\*array.shift - remove first element of an array\\\*





\*6. array.at() - access elements at a specified index -> supports -ve indexing\*



\*7  array.concat() -  creates a new array by merging existing arrays\*



\*8. array.includes() - checks whether an element is contained in an array - returns boolean\*



\*9. array.sort() - arranges array elements in ascending order\*



\*10. array.slice()- creating/slicing a portion of an array using indexing (start,end)\*



\*11.splice()-1. add elements to an array\*



\&nbsp;              \\\*array.splice(starting point, elements to be removed, elements to be added)\\\*



&#x20;           \\\*2. remove elements from an array\\\*



&#x20;              \\\*array.splice(starting point, how many to remove)\\\*



&#x20;           \\\*3. replace elements in an array\\\*

&#x09;	\\\*array.splice(starting point, how many to replace,elements to replace)\\\*





##### \*.OBJECTS\*



\*An object is a container / data structure that stores data in key-value pairs\*



\*-> Equivalent to a dictionary in Python\*







###### \*Xtics of Objects\*



\*->Store data in key value pairs\*



\*->Mutable\*



\*->Enclosed in {}\*



\*->Values are accessed using keys\*



\*->Keys are strings\*



\*->Values can be of any data type\*



\*->They have methods\*







##### \*Why we use Objects\*



\*1.To store correlated data\*



\*2.To store complex structured data\*



\*3. To represent real world entities\*







\*e.g let car = {\*



\&nbsp;   \\\*"make":"Volvo",\\\*



&#x20;   \\\*"Yom":2015,\\\*



&#x20;   \\\*"com":"Sweden",\\\*



&#x20;   \\\*"new":false\\\*





\*}\*







\*let student ={\*



\&nbsp;   \\\*"name":"Jake",\\\*



&#x20;   \\\*"sid":37774,\\\*



&#x20;   \\\*"school":"Techcamp Africa"\\\*





\*}\*







\*let laptop ={\*



\&nbsp;   \\\*"make:"Mac",\\\*



&#x20;   \\\*"year":2018,\\\*



&#x20;   \\\*"Processor":"M2",\\\*





\*}\*



\*"make":"Volvo", -> property -> key + value = property\*







##### \*Accessing Values in an Object\*



\*1. dot notation (.) -> works only when the key names are valid identifiers\*



\*-cant access values that have spaces\*



\*2. bracket notation \\\["key"] - can access keys that have spaces\*











\*Object  methods\*



\*1) .keys\*



\*2) .values\*



\*3) .entities\*





#### template literals

\-It's like use formatted strings in python:print(f' the largest number is {result}')

\-in js its:return `Hello, ${name}!`

\-` : backticks - Starts and ends a template literal

\-${ } :interpolation  -${ -Start inserting a variable or expression

&#x09;	      -} -End the inserted expression

\-! :Just an exclamation mark in the tex



Compare the syntax



| Python                 | JavaScript               |

| ---------------------- | ------------------------ |

| f"Hello, {name}!"    | `` `Hello, ${name}!`  |

| Uses `f` before quotes | Uses backticks `|

| `{name}`               | `${name}`                |





\*Loops\*



\*Repetitive action / task\*



\*Types of Loops\*



\*1. For - has to have a starting point, condition to be met, update\*



\*2. While - always executes as long the specified condition is true\*



\*3. Do while - will execute at least once before even checking if the condition is met\*







\*syntax -> for(starting point;condition;update){\*



\&nbsp;     \\\*// iteration\\\*





\*}\*



\*starting point -> where is my iteration starting from e.g output numbers from 0 to 100 -> s.point -> 0\*



\*condition -> condition to be met so that the loop keeps running\*



\*update -> increment or decrement\*







\*e.g.\*



\*//output numbers from 0 to 100\*



\*for(i=0; i<=100; i++){\*



\*console.log(i)\*



\*}\*



\*0 -> 1 ->2 -> 3\*







\*Looping Through a data structure e.g arrays\*







\*let fruits = \\\["mango","orange","banana","apple","peach"]\*







\*i> 5\*







\*Backwards Loop\*



\*-> Update from increment to decrement\*















\*LOOPS TASK -> slide 79\*



\*Use a while and for loop to write a program that checks for a user's password\*



\*and lets them input  password 4 times .Upon failure display "User is blocked"\*















##### \*Functions\*



\*-a function is a reusable block of code used to perform a specific task\*







##### \*Types of functions\*



\*1.inbuilt function-like print,console.log,charat\*



\*2.user define function\*







##### \*uses of functions\*



\*1.Reusability of codes\*



\*2.Modularity(breaking large codes into smaller pieces)\*



\*3.Organisation of codes\*



\*4.easier debugging and code management\*



\*5.readability\*





\*global variable-a variable that is accessible in the entire program\*



\*local variable-a variable that is accessible only within its local scope\*





\*Parameter-a placeholder/temporary  value when defining a function\*



\*arguments-are exact values passed in a function\*







\*functions use return keyword to signify the end of a function\*







\*syntax\*



\*function function\\\_name(){\*



\*function body\*



\*}\*







\*function function\\\_name(x,y){\*



\*return x + y\*



\*}\*







\*function\\\_name()\*







\*TASK\*



\*slide 80\*



\*questions 1 -20\*











\*INTERMEDIARY TASKS\*



\*-> EXTERNAL JS -> script tag with an src attribute\*



\*-> src -> an attribute containing the path to an external JS file\*







\*JS -> passing a variable inside a string\*



\*-> template literals -> backticks\*







\*``-> backticks\*











\*CREATE A NEW PROJECT CAALLED TAX\\\_CALCULATOR\*



\*-tax.html\*



\*-tax.js\*











\*FORM INPUT\*



\*-User Friendly -> Form -> 2 inputs (basic salary, allowances)\*



\*-> Html and JS are linked via script -src\*



\*-> Process\*



\*--- Take user input - FORM\*



\*---Submit input to JS\*



\*---- Process that input\*



\*--- Use JS for tax computation\*



\*---- Pass output back to html -- TABLE\*



\*----> document.getElementById() -> JS method used to identify an element by its unique id attribute\*







\*class -> attribute used by css to identify elements uniquely for styling\*



\*id -> attribute used by js to uniquely identify elements\*











\*addEventListener()-> a method used to listen for events\*



\*event.preventDefault() -> prevents the default behaviour of the browser after submission\*



\*document.getElementById("basic\\\_salary").value - getting uer input from form elements only\*



\*document.getElementById("basic\\\_salary").innerHTML - used with all elements\*











\*\\\*\\\*event.preventDefault()\\\*\\\*\*







\*How js runs in the browers(js engine)\*



\*Arrow functions\*























\*WEB APPLICATION\*



\*1.Internet-is a network of networks-global network that connects all computers\*



\*2.Web/www-is a service running on the internet that gives us access to the internet\*



\*3.Server-is a computer that provides resources and data to other computers (clients) over a network\*



\*4.Hosting-is moving your application resources to a server and making it available for all to view online\*



\*5.IP Address-is a number used to uniquely identify a device on a network eg 111.141.82.34\*



\*6.Domain name-is a user friendly name attached to an ip address used to access an application\*



\*7.http \\\& https(are called transfer protocal)-are used for communication between a client and a server\*







\*http (Hypertext Transfer Protocol)-transfers data on the web-data is sent as plain text-anyone intercepting the connection can read \\\& modify the data\*







\*https (Hypertext Transfer Protocol Secure)-is a secure transfer of data through encryption\*







\*URL-uniform resource location\*







\*Build your application\*



\*Host it on a server\*



\*Ip address is assigned to that application\*







\*Ip address is a number used to uniquely identify a device on a network e.g 142.111.12.82\*



\*Domain - user friendly name attached to an ip aaddress used to identify devices / applications\*







\*Safaricom - build application - safaricom.co.ke\*



\*-host it on a server\*



\*-ip address assigned to application e.g  142.111.12.82\*



\*-attach a domain name to ip address -> www.google.com\*



\*DNS\*







\*Find an ip address using domain -> ping\*















\*PSYCOPG2\*
\*Is a PostgreSQL adapater for Python . A driver - connects your Python code to a Postgres database\*
\*psycopg2.connect(). - creates a connection between Python and a Postgres database\*
\*create database myduka\\\_db;\*
\*\\\\c myduka\\\_db\*



\*insert into products(name,buying\\\_price,selling\\\_price)values('bread',50,60);\*







\*host -> where is my db located\*



\*\\\*\\\*localhost -> your computer/device  127.0.0.1\*







\*port -> where exactly on my device is the Postgres service running\*



\*\\\*\\\*5432 -> default Postgres port\*1:44 PM 10/19/2025







\*user \\\& password -> used to authenticte a postgres user and grant them access to a Postgres database\*







\*dbname - Postgres database you're connecting to\*







\*cur -> object used to execute sql queries or perform db operations\*



\*cur.execute() -> executes an sql query\*







\*Insert 2 sales and view them using psycopg2\*







\*N/B:- List of tuples\*







CREATE TABLE products(id SERIAL PRIMARY KEY,product\_name VARCHAR(100) NOT NULL,buying\_price NUMERIC(20, 2) NOT NULL CHECK (buying\_price >= 0),selling\_price NUMERIC(20, 2) NOT NULL CHECK (selling\_price >= 0));



CREATE TABLE sales(id SERIAL PRIMARY KEY,pid int NOT NULL,quantity int not null default 0,created\_at timestamp not null default current\_timestamp,constraint myproduct foreign key(pid) references products(id) on update cascade on delete restrict);



CREATE TABLE stock (id SERIAL PRIMARY KEY,pid INT NOT NULL,stock\_quantity INT NOT NULL DEFAULT 0,created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,updated\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,FOREIGN KEY (pid) REFERENCES products(id) ON UPDATE CASCADE ON DELETE RESTRICT);

CREATE TABLE users (id SERIAL PRIMARY KEY,fullname VARCHAR(100) NOT NULL,email VARCHAR(100) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,role VARCHAR(20) NOT NULL DEFAULT 'cashier',created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP);

When someone logs in, your application checks their role and decides which pages or actions they can access. This helps keep the system secure by ensuring users only perform tasks they're authorized to do.



\*CRUD\*



\*C-Create  - Insert\*



\*R-Read.   - Select\*



\*U-Update. -Update\*



\*D-Delete. -Delete\*







\*double quote query\*







\*Object Oriented Programming - OOP\*







\*Data Types -\*



\*1.Inbuilt data types -> come with the programming language\*



\*-> int , float , str, boolean -primitive\*



\*-> lists, sets , tuples , dicts\*







\*2.user defined data types - created by the programmer\*



\*-> create classes (blueprints) then create objects from it\*



\*e.g. Create a data type called Person (class) then create Alvin(object) from Person\*



\*-classes are created using the class keyword\*







\*Class - a blueprint for creating objects\*







\*Classes contain the following 2 things:\*



\*1.Attributes - data / variables -> what does a class have? e.g name, age\*



\*2.Behaviour  - functions (methods) - what a class can do? - walk, eat, talk\*







\*Method - a function inside a class\*







\*Constructor - a special method used to create and initialize objects\*







\*class - blueprint\*



\*object - an instance of a class\*







\*self - represents the current object / instance of the class\*











\*Task\*



\*Create a BankAccount class\*



\*Have a constructor to initalize the account with account number , balance , owner\\\_name\*



\*Have the methods:\*



\*1. deposit()\*



\*2. withdraw()\*



\*3. display\\\_info()\*



\*create 2 BankAccounts that can deposit, withdraw and display info\*











\*Task2\*



\*Create a Student class\*



\*It should have the following attributes:\*



\*-student\\\_id -name -email -course\*



\*It should have the following methods:\*



\*- enroll\\\_course()\*



\*- drop\\\_course()\*



\*- set\\\_grade()\*



\*-  display\\\_info()\*



\*Create 2 student objects who can do all of the above\*











\*#inheritance\*











\*Task3\*



\*Create a Car Class\*



\*Have the following attributes\*



\*- brand - model - year -fuel\\\_capcity - fuel\\\_level -is\\\_running(boolen value)\*



\*Have the methods\*



\*- start()\*



\*- stop()\*



\*- refuel()\*



\*- drive()\*



\*- display\\\_car\\\_info()\*







\*1.Inheritance\*



\*2.Encapsulation\*



\*3.Abstraction ->\*



\*4.Polymorphism -> Method Overriding\*



\*\\\*Method overriding, method overloading, operator overloding , aggregation , association\*











\*FLASK\*



\*A python framework used to build web applications\*







\*Pip is a command that is used to install python libraries to your environment.\*



install -pip install Flask











\*Framework vs Library?\*







\*Concept -Building A House\*



\*Scenario 1 - Framework\*



\*Feisal wants to build a house.he recognizes that he isnt an expert in building / construction. He decides to enlist\*



\*the help of construction professionals (architect, engineer, pm , construction workers). These professionals each play a role in building the house and they make the process easier since they have experience. But for successful construction, Feisal has to follow the strict guidelines as laid out by these professionals e.g the house has to have a strong foundation / walls must be built using bricks\*



\*Note -> easier process but strict guidelines\*











\*Scenario 2 - Library\*



\*Stephen wants to build a house. He decides he doesnt need the help of construction professionals,instead he decides to build the house\*



\*from sratch himself. He has to to design , correct, know and purchase all materials himself. Since he oversees the entire process he doesnt need to follow ny guideline or timeline. He's solely in charge of everything.\*



\*Note-> The process is flexible but very hard\*











\*Framework -> prebuilt structure of code ,tools, libraies that provides a foundation for building applications. It provided prebuilt and reusable code so that developers dont have to build from scratch\*



\*-> Has very strict guidelines on usage\*







\*Examples:\*



\*Python -> Flask, FastAPI, Django\*



\*Java -> Spring\*



\*C# -> .NET\*



\*NodeJS -> Express\*



\*Ruby -> Ruby on Rails\*



\*Golang -> Gin\*







\*FLASK\*



\*1.Routing\*



\*-> A mechanism to map / connect URLs to Python functions -> system for resource navigation -> connects a URL to a function in your Flask app\*







\*URl -> full address used to access resources on the web\*



\*https://meet.google.com/dsh-idtb-oqb\*



\*->In flask routing is defined using a decorator function -> @app.route()\*



\*-> Decorator is a function that allows you to modify the behaviour of another function -> usually have the @ prefix\*



\*-> @app.route() has some parameters:\*



\*1.rule or path -> the path a user accesses on the browser\*



\*2. methods\*







\*https://meet.google.com/dsh-idtb-oqb\*







\*https://techcamp.co.ke/\*



\*https://techcamp.co.ke/contact-us\*



\*https://techcamp.co.ke/certifications\*



\*default route -> index route -> /\*















\*@app.route('/') -> decorator function\*



\*def home():   -> view function\*



\&nbsp;   \\\*return "My index route"\\\*





















\*Render or return a full html page\*



\*To render Html pages with Flask we use a function: render\\\_template() which is imported from flask\*



\*To return a html page with render\\\_template() you MUST have the following structure:\*







\*MYDUKA\*



\*templates\*



\&nbsp;   \\\*-> all html files must be here\\\*



&#x20;   \\\*-index.html\\\*



&#x20;   \\\*-products.html\\\*



&#x20;   \\\*-sales.html\\\*



&#x20;   \\\*-stock.html\\\*



&#x20;   \\\*-dashboard.html\\\*



&#x20;   \\\*-register.html\\\*



&#x20;   \\\*-login.html\\\*





\*static\*



\&nbsp;   \\\*-> all css , js and all static files\\\*



&#x20;   \\\*-> static files - images , videos , favicons, icons\\\*





\*database.py\*



\*main.py\*











\*To pass data from Python to html we use Jinja\*







\*Jinja - a syntax inbuilt with Flask used to render Python data\*



\*- Is a templating engine integrated with Flask to render dynamic html pages\*











\*Key features of Jinja\*



\*1.Variables - {{}}\*



\*2.Control structures - {% %}\*



\*Control Structures\*



\*1.Sequence\*



\*-> programs execute top to bottom and left to right\*



\*2.Selection\*



\*-> Decision making\*



\*-> Conditional statements -> if...else\*



\*3.Repitition\*



\*-> Looping -> for ,while\*







\*{% for ....%} - initialization\*







\*.....\*







\*{% endfor %} - termination\*











\*{% if ....%}\*







\*....\*











\*{% endif %}\*







\*Task ->\*



\*1.Import get\\\_sales() and display sales in sales.html using Jinja\*



\*2.Disply both sales and products data in tables\*



\*---Hint Use for loop and indexing\*











\*Jinja\*



\*A templating engine integrated with Flask to render dynamic html pages\*



\*-> Use it to pass data from Python to html\*



\*1.Variables - {{}}\*



\*2.Control Structures - {% %}\*







\*Control Structures\*



\*1.Sequence - top to bottom --> left to right\*



\*2.Selection - conditional statements -> if\*



\*3.Repitition - Looping - for and while loop\*







\*{% for i in products%}\*







\&nbsp;       \\\*{{i}}\\\*





















\*{% endfor %}\*







\*{% if i%2 == 0%}\*







\*....\*







\*{% endif %}\*







\*Displaying Data In Client\*



\*1.Bootstrap Tables\*



\*2.Datatables - search, paginations, excel, print\*











\*#Task\*



\*1. Redo the products display using datatables\*



\*2. In  the sales table in created at column limit datetime data to year, month, day , hour and minute\*







\*TEMPLATE INHERITANCE\*



\*ONE COMMON FILE CALLED A PARENT / BASE TEMPLATE CONTAINING ALL FEATURES THT ARE COMMON ACROSS ALL PAGES e.g footer \\\& navbar\*







\*Base -has all common features\*



\*-> Leaves a block for unique features\*







\*{% block title %} {% endblock %} - define a unique title for each template\*



\*{% block content %} {% endblock %} -> define unique content  for each template\*







\*Have the children templates inherit from the base - extends\*















\*Function in database.py\*



\*import function to main.py\*



\*call it in route\*



\*pass a variable in render\\\_template() containing data from function call\*



\*Use Jinja to display data in the relevant page\*







\*Inserting Data in Flask\*



\*Inserting Products\*



\*CRUD\*







\*WORKFLOW\*



\*1.Provide the user with a form to insert data\*



\*2.User fills the form and submits it - submitted to a Flask route\*



\*N/B: - data coming from the form is sent to the server in key value pairs\*







\&nbsp;       \\\*"product\\\\\\\_name":"eggs"\\\*



&#x20;       \\\*"buying\\\\\\\_price":"15"\\\*



&#x20;       \\\*"selling\\\\\\\_price":"20"\\\*



&#x20;       \\\*N/B:-\\\*



&#x20;       \\\*-> Any data coming from user input will always be a string\\\*





\*3.Flask extracts form data using the key and processes it\*



\&nbsp;   \\\*-> In the decorator ->METHODS THAT CN BE USED\\\*



&#x20;   \\\*-> Extract data from the form using a request object\\\*



&#x20;   \\\*-> request object has 2 methods:\\\*



&#x20;   \\\*a) request.form - method used to access and extract form data\\\*



&#x20;   \\\*b) request.method - method used to determine the method being used by the form\\\*





\*4.Store this data using functions\*



\*5.Redirect the user - redirect-url\\\_for\*



\*redirect(url\\\_for('')) -takes the name of the view function as a parameter\*







##### \*FORM CHECKLIST\*



\*1.action - defines the route where the form data is to be submitted for processing .../add\\\_products\*



\*2.method - what do you want the server to do with the data\*



\*3.name - key used to identify and extract values from the input\*



\*4.input-type -> defining what data type an input takes\*



\*5.button - type submit\*







\*Method - what a server can do with a resource or data\*



\*a) GET - fetching / getting from a server - viewing tweets\*



\*b) POST - sending data to a server - insert products, login\*



\*c) PUT - update data\*



\*d) DELETE - getting rid of data\*







Steps to use while building a project using flask
Day 1
---

\---

1.install flask

&#x09;pip install flask



2.Import Flask class from flask framework

&#x09;from flask import Flask



3.create an app object which is the Instance of the class Flask with argument \_\_name\_\_

&#x09;app=Flask(**name**)



4.create routes for home,products,sales,stock,dashboard,register,login



5.run the app

&#x09;app.run(debug=True)



6.Each Function on a route should return an html file using render\_templete

&#x09;=>In Flask All HTML files must be in a folder called templates

&#x09;=>In Flask ALL css,images and javascript files must be in folder called static

&#x09;=>render\_template function in flask is used to render html files

&#x09;=>you must import render\_template from flask before using it



##### Day2



1.create a database with the following table products,sales,stock,users



* CREATE TABLE products(id SERIAL PRIMARY KEY,product\_name VARCHAR(100) NOT NULL,buying\_price NUMERIC(20, 2) NOT NULL CHECK (buying\_price >= 0),selling\_price NUMERIC(20, 2) NOT NULL CHECK (selling\_price >= 0));
* 
* CREATE TABLE sales(id SERIAL PRIMARY KEY,pid int NOT NULL,quantity int not null default 0,created\_at timestamp not null default current\_timestamp,constraint myproduct foreign key(pid) references products(id) on update cascade on delete restrict);
* 
* CREATE TABLE stock (id SERIAL PRIMARY KEY,pid INT NOT NULL,stock\_quantity INT NOT NULL DEFAULT 0,created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,updated\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,FOREIGN KEY (pid) REFERENCES products(id) ON UPDATE CASCADE ON DELETE RESTRICT);
* 
* CREATE TABLE users (id SERIAL PRIMARY KEY,fullname VARCHAR(100) NOT NULL,email VARCHAR(100) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,role VARCHAR(20) NOT NULL DEFAULT 'cashier',created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP);
* 
* When someone logs in, your application checks their role and decides which pages or actions they can access. This helps keep the system secure by ensuring users only perform tasks they're authorized to do.



2.import psycopg2 and connect the database



3.call functions for displaying and inserting values in the various tables



4.make all files bootstrap enabled



5.use jinja to loop through values in various tables to display them.



6.create modals with a form to add products ,stock and  sales \\\*



7.style the project and make the home page more appealing





##### Day3

1.Navigation using Navbar
=>we write the routes on the href attribute



2.Posting Data (UI=>server=>Database)



=>You can send data from form on UI to the server-side flask route which then stores it in the database



&#x20;     HTTP Methods



1.GET ->used when fetching data from a resource



2.POST ->used when sending data to a resource(e.g submitting a form)



&#x20; Important Notes



=>Every form input Must have a name attribute ->flask uses this to access the form data



=>In main.py ,Create route that:



\&#x20;   1.checks HTTP method (GET or POST)



\&#x20;   2.Receives form data from the UI



\&#x20;   3.call the insert function to add data to the database







\&#x20;   Request,Redirect,url\_for  in Flask



\&#x20;   1.Request



=>used to receive data from the form(ui->server)





\&#x20;   2.Redirect



=>Redirect redirects the user to another url after perfoming an action



&#x20; 3.url\_for



=>Url\_for takes the function name then redirects to the route

NB=>ON the form element we must have Action attribute with route as the value and method attribute with post as the value





3.Steps to Add Sales

We’ll make the sales form more interactive by fetching all available products and displaying them in a dropdown (select) list instead of manually entering product IDs.



1\\. Fetch Products for the Sales Page



Before making a sale, we need to display all products fetched from the database:



=> create a variable on render\_template e.g(products = products )

2\\. Create the Sales Form in Modal



=>Each form input must have a name attribute.



3.Add the /add\\\_sales Route



=>This route handles form submission and database insertion.



4.=>Do the Same for Stock



Repeat the same logic for the Stock page:



Fetch all products to display in the form.



Use a <select> for product selection.



Add a POST route to handle adding stock.



Redirect to the stock page after submission.




Day4
Datatables,template inheritance,inserting and checking user in the database and in the register route

DataTables is a JavaScript library built on jQuery that enhances HTML tables with:

Pagination
Search and filtering
Sorting and styling
Steps to Implement DataTables
1.Include CSS Link

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">


2.Include jQuery CDN (Must be Above DataTables JS)

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>


3.Include DataTables JS Link

<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

4.Initialize DataTable

<script>
         let table = new DataTable('#table');



5.Ensure the Table ID Matches



<table id="myTable" class="display">

\\\&#x20;   <thead>

\\\&#x20;       <tr>

\\\&#x20;           <th>ID</th>

\\\&#x20;           <th>Name</th>

\\\&#x20;           <th>Price</th>

\\\&#x20;       </tr>

\\\&#x20;   </thead>

\\\&#x20;   <tbody>

\\\&#x20;       <tr>

\\\&#x20;           <td>1</td>

\\\&#x20;           <td>Product A</td>

\\\&#x20;           <td>100</td>

\\\&#x20;       </tr>

\\\&#x20;   </tbody>

</table>



Do the same thing we have done on products table to sales and stock

Expected Outcome

=>By the end of Day 6, you should be able to:

1.Organize your Flask project using a clear folder structure.

2.Link images, CSS, and JavaScript files correctly.

3.Implement DataTables for enhanced table functionality.



Day 5
1.password hashing
-we must import Bcrypt class from flask_bcrypt for password hashing 

2.login route
-getting form input
-import session from flask
-check if user exists
-check if password is correct
-add secret key

3.protecting our pages
-import wraps from functools
-add login required to each page that should be protected
-in the navbar add an if statement in jinja
-add logout route in main.py and in navbar
-import flash from flask add add flash where possible


what is remaining
1.add charts in dashboard
2.calculating profits in database
3.enabling updating of products
4.styling the project

