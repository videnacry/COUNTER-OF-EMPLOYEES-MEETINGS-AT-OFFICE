# (ACME) COUNTER OF EMPLOYEES MEETINGS AT OFFICE
This project is made to create a web page, wich can count by a text file with days and time ranges per employee, the number of times a employee in that file was in the office while other of the employees in the file was there too!

This project is made with typescript to get strict types, uses OOP and is test driven (even though because i wanted the page to work without a server i have to made a copy of each typescript file, the one that is going to be part of the final bundle and the one that is a module for the testing), for the database uses a interface and the class wich in this case uses a large string to create the database.

You would find that server folder contains employee folder, wich contains the database, models and controller.
# Prerequisites
To be able to run this page in local, you'll need:

- [NODE](https://nodejs.org/es/)

# Installing
1. After getting [NODE](https://nodejs.org/es/) you have two ways to get the project, one of them is to use github, so you can make a clone of the project, the other one is to download the ZIP, anyway you would use the same link of github [COUNTER OF EMPLOYEES MEETINGS AT OFFICE](https://github.com/videnacry/COUNTER-OF-EMPLOYEES-MEETINGS-AT-OFFICE.git).
2. Once the project is in your computer, you must use the console, open the project folder on it (if you are using windows should be with the command ```cd```), after you are inside the folder (in the console) you must use the command ```npm run install-with-tests``` this is going to install the dependencies of the project and of the **tests** folder, the dependencies are:
    - [TYPESCRIPT](https://www.typescriptlang.org/id/download)
    - [TS-NODE](https://www.npmjs.com/package/ts-node)
    - [MOCHA](https://mochajs.org/)
    - [@TYPES/MOCHA](https://www.npmjs.com/package/@types/mocha)

    Otherwise you can just execute ```npm i```, then move in the console to the folder **tests** and run again ```npm i```
3. After the dependencies installation you may compile the typescript files to get them as one js bundle (file) to do that you must execute in the root folder of the project ```npm tsc```
# Running the project
To run the web page you must simply open the index.html file of the main project folder in your browser.
# Testing
All the testing files are in the project **tests** folder, to run the tests you can execute ```npm test``` in the **root folder or in the tests folder**
