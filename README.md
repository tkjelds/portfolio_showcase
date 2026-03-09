## Introduction

Hi, this is an ongoing project. The purpose of which is to develop my front-end skills and practice solid development principles.
The site is structured in such a way that adding additional menu items and pages is easy and doesn't involve changing current code.
I also decided not to use plaintext directyly in the HTML, instead relegating it to my translation module, so adding additional languages to my site would only adding an additional .json file.
Through github Actions I perform CI/CD, wherein I build and upload a new docker image to DockerHub. SSH into my nginx server; close and remove the current image, pull and start the new one.


## Future work 
- Currently I use splid for the carousel. It has some functionality that I dislike, and I would like to write my own module for it.
- Testing library to prevent faulty commits affecting the site. This would also become a part of the CI/CD pipeline.
