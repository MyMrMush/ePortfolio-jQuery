# ePortfolio-jQuery
## purpose of the project
This repository contains a presentation on jQuery for the software engineering lecture at the DHBW Karlsruhe.
This project also is implemented using the jQuery library and additionally fulfils the purpose of being a basic demonstration of some
of jQuerys functionalities.

## re-use
You may reuse to project as is, without any warranty for your own purposes.
You may also use the base of this project as a presentation software. For this the presentation slides in the folder `presentation/slides` can be changed to whatever topic you want to present.
Please note, that currently also the `const slides` in `main.js` needs to be adjusted to find the new slides.

## running the project
### npm
To run the project / view the presentation you simply need to clone the project, navigate into the presentation folder (`cd presentation`) and then run `npm i && serve`.

### docker
You can also run the project in a docker environment using
`docker run --rm -it $(docker build -q .)` in the main project directory. Please note, that using this it is way more indirect to do changes and has  no real advantage except deamonization, which I want to use for the temporary live version only.

## live version
For the duration of evaluation I want to make it as easy as possible to see the content of the presentation as it was intended. Therefore temporarily a live, hosted version can be reached [here](https://eportfolio.mush-it.com)! Please note, that this version is not intended to be used for any other purpose than evaluation and will be taken down after evaluation is done.