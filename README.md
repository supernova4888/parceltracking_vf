# Package Tracker Web App

@Author: Diana Bao

## General information

> Description: This package tracker web app was developed by Diana in order to simulate the exercise of a case for a job interview. The main purpose of the app is simulate a customer facing parcel tracker.

    ### Functionalities
    > Search using User Name (that can be easily adapted to parcel ID)
    > Fetch parcel data from API mockaroo
    > Display all parcels details

> How the app works: The user (customer) enter his/her name and lastname, which triggers the API to fetch and load all parcels and its details connected to that user. Parcel details include: sender name, ETA, pick up location and status.

> Project setup: Assumptions were made based on the information received. Project was conducted with React, JS, HTML and CSS. A sketch of the app was made to guide the development of the functional requirements.

> Improvements and limitations: The data provided contained some limitation such as 1) it did not contain an unique parcel ID for each parcel 2) The data pertained only one user. Potential improvement suggestions include developing a login or key for the user so that the parcel information can be saved accordingly, integrating automatic language conversion based on the IP of the app visitor and improve the data by implementing control parameters such as unique parcel ID.

> External dependencies: API mockaroo and React.

## Testing strategy and approach
> In connection to the suggested improvements above a testing strategy should be in place. Testing should include unit testing with Jest as well as user testing so that vulnerabilities and critical features can be identified.


## How to deploy the app
1. Download or clone the project from GitHub
2. Open the project in the IDE/editor of your choice
3. Confirm that npm/npx and relevant packages are installed
4. Run the program by typing "npm start" in the terminal

## Credits
> Eduardo Alvarez - Lecturer/TA - KTH
> Abdul Aziz Alkathiri - TA - KTH
> Novare Potential
> Images credits: Freepik from flaticon.com and background image from Instabox's website.