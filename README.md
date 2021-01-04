# ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website
My Github Page: https://balqiskinanti.github.io/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/

This is a website for drivers to check condition on the road. It aims to be a all-in-one platform for drivers to get the necessary information to make the decision on their travels(e.g. Avoid what lanes? Bring jacket? ). It also allows saving of users data: place of stay, reminders to display information such as the weather forecast and today's To-Dos so it can further aid their decision making.

## Table Of Contents
* [Design Process](#design-process)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Credits](#credits)


### Design Process
*UX* : 
As a driver, I would want a platform where I can see my plans for the day and see the traffic condition without having to switch screens. This ensures that I will not miss any important events (meetings, dinner with family,etc) and be able to plan my timing way ahead based on the traffic condition and weather.

This app is also customised for each individuals as they will be greeted on the landing page of the website with the time(morning, afternoon/evening/night), and also the weather at the place they have inputted during the sign up. More of the weather forecast is on the seperate weather page. User can click on the link in the navigation bar.

Considering there are also very few apps that offer traffic information, it's also important for the website to be as informative and give as much needed and necessary data as possible. Yet, considering there might be overwhelming amount of data, the search function (for carpark and incident) is also there to filter out the information for convinience. 

*UI* : 
I decided to go for a more simple colour scheme and font as it's a website that must cater to all individual's taste. I added colours at the header and footer on all pages for consistency. I've also decided to go with the typical landing page, footer and header of websites. All of these is to ensure that the website looks professional. 

My XD Wireframe :art: :
[Wireframe File](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/tree/main/xd)

Mobile: https://xd.adobe.com/view/a86b6bb0-00ca-4265-8181-49cad2bb989f-fd38/?fullscreen&hints=off 

Desktop: https://xd.adobe.com/view/8bc0afb3-5362-4be2-81b4-719075701d7c-de93/?fullscreen&hints=off 

### Features
#### Existing Features: 
* Sign up: allows user to sign up with unique email each time. It also checks if password is more than 8 characters long ,email is valid, and if user has sign up before. 
* Login : allows user to login.It checks if user enters matching email and password. When the user logged in, they will be greeted good mornig/ afternoon/ evening/ night depending on the time along witht eh weather forecast in their area.
* Reminders : allows users to :
   * Add new reminders
   * Show today's reminders
   * Show all reminders
* Weather Forecast: allows user to see the overview of the weather across Singapore.
* Carpark Slots: allows user to see how many parking slots are left by inputting the carpark number in.
* Traffic images: allows user to see at real time pictures on the traffic currently by clicking on the interactive map.
* Traffic Incidents: allows user to check on the current incidents happening on the road. They can also filter the output by inputting their location on the seach bar.
* Logout : allows user to reset their reminders and login with different credentials.

#### Potential Features: 
* ERP rates API
* Traffic speed bands API
All of these using https://www.mytransport.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf 

Potential drawbacks : all of these api requires using 'https://cors-anywhere.herokuapp.com/' which might raise error 409: too many request.

### Technologies Used
* [HTML](https://html.com/)
  * This was used for the basic content structure for the website
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  * this was used for the styling of the website
* [JavaScript/JQuery](https://jquery.com/)
  * [JQuery](https://jquery.com/) was used to simplify the DOM manipulation
  * [AJAX](https://api.jquery.com/jquery.ajax/) was also used to request data from a web server. API links can be found [here](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/blob/main/README.md#credits)
  * [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) was used to store user's login, sign up and reminders information. 
* [Bootstrap](https://getbootstrap.com/)
  * This was used to simplify code for responsive design
* [Adobe Illustrator](https://www.adobe.com/sea/products/illustrator.html)
  * This was used to change the background the SVGs for the social links 
* [Adobe XD](https://www.adobe.com/sea/products/xd.html)
  * This was used to make the wireframe of the Website : desktop and mobile view


### Testing
[Screenshots of my website](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/tree/main/screenshots)

*Mobile vs Desktop view*

The difference for mobile version is that all rows that have multiple columns will be brought down, so there will only be one column in mobile view. 

*Bugs/Possible problems*

1. Weather forecast in the main page(below greetings) and in weather page will return data of 31/12/2020 when real time data of API gives empty field
2. Logging out will clear the data of reminders 
3. Clearing cache will clear the data of sign up
4. Map of traffic images might not return any data. If it doesn't, an error message will be shown. 
5. Traffic incident page might return error 429:Too many data requests. Hence, alert will be shown.

### Credits
#### Media :link: 
1. The illustration on all pages were from 
   * [pinterest](https://www.pinterest.com/)
      * https://www.ls.graphics/illustrations/bluurp
      * http://www.fubiz.net/wp-content/uploads/2014/11/Clouds-Illustrations-by-Aaron-Campbell_0.jpg
2. The SVGs in the footer were from
   * [iconfinder](www.iconfinder.com)
      * https://www.iconfinder.com/social-media-icons
   * [flaticon](https://www.flaticon.com/)
      * https://www.flaticon.com/free-icon/under-construction_2422166?term=construction&page=1&position=51&related_item_id=2422166
      * https://www.flaticon.com/free-icon/car-parking_1807649
  
#### Acknowledgements :sun_with_face:
1. I received inspiration from these websites: 
   * https://www.grab.com/sg/
   * https://stackoverflow.com/
2. Websites that aid my projects :
   * [W3School](https://www.w3schools.com/)
      - https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
      - https://www.w3schools.com/jsref/jsref_touppercase.asp
      - https://www.w3schools.com/howto/howto_css_responsive_iframes.asp
      - https://www.w3schools.com/jsref/jsref_indexof.asp
   * [Stack Overflow](https://stackoverflow.com/)
      - https://stackoverflow.com/questions/48202607/bootstrap-columns-cause-horizontal-scrollbar
      - https://stackoverflow.com/questions/3838488/html-table-different-number-of-columns-in-different-rows
      - https://stackoverflow.com/questions/46119919/fade-in-and-out-underline-when-hovering
      - https://stackoverflow.com/questions/14519388/can-i-use-an-image-from-my-local-file-system-as-background-in-html/29079542
   * [Freecodecamp](www.freecodecamp.org)
      - https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
   * [Geeksforgeeks](www.geeksforgeeks.org)
      - https://www.geeksforgeeks.org/check-if-an-array-is-empty-or-not-in-javascript/
   * [Codepen.io](https://codepen.io/)
      - https://codepen.io/tutweb/pen/waRYOM
      - https://codepen.io/carl-vega/pen/KbGyYX
      - https://codepen.io/pixelgiant/pen/QKOEdq
#### APIs Used :sun_with_face:
* [Data.gov.sg](https://data.gov.sg/dataset/)
  * Traffic Images: https://data.gov.sg/dataset/traffic-images?view_id=a0e54baf-6ef7-4bca-9aa2-8c6ca37a0a0e&resource_id=e127e29a-bd48-47e2-a0a7-e89ce31f10c7
  * Carpark : https://data.gov.sg/dataset/carpark-availability
  * Weather : https://api.data.gov.sg/v1/environment/2-hour-weather-forecast
* [mytransport.sg](https://www.mytransport.sg/content/mytransport/home/dataMall.html)
  * Traffic incidents: https://www.mytransport.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf
* Email validator : https://www.gmass.co/blog/email-verification-service/
* Cors-anywhere : https://github.com/Rob--W/cors-anywhere 

