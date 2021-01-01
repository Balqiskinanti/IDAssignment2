# ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website
This is a website for drivers to check condition on the road. It aims to be a all-in-one platform for drivers to get the necessary information to make the decision on their travels(e.g. Avoid what lanes? Bring jacket? ). It also allows saving of users data: place of stay, reminders to display information such as the current weather and today's To-Dos so it can further aid their decision making.

## Table Of Contents
* [Design Process](#design-process)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Credits](#credits)


### Design Process
*UX* : 
As a driver, I would want a platform where I can see my plans for the day and see the traffic condition without having to switch screens. This ensures that I will not miss any important events (meetings, dinner with family,etc) and be able to plan my timing way ahead based on the traffic condition and weather.

This app is also customised for each individuals as they will be greeted on the landing page of the website with the time(morning, afternoon/evening/night), and also the weather at the place they have inputted during the sign up.

Considering there are also very few apps that offer traffic information, it's also important for the website to be as informative and give as much needed and necessary data as possible. Yet, considering there might be overwhelming amount of data, the search function is also there to filter out the information for convinience. 

*UI* : 
I decided to go for a more simple colour scheme and font as it's a website that must cater to all individual's taste. I added colours at the header and footer on all pages for consistency. To spice it up, I made the placements of content different for each div so it does not get too repetitive and boring. 

My XD Wireframe :art: :
[Wireframe](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/tree/main/xd)


### Features
#### Existing Features: 
* Sign up: allows user to sign up with unique email each time. It also checks if password is more than 8 characters long ,email is valid, and if user has sign up before. 
* Login : allows user to login.It checks if user enters matching email and password.
* Reminders : allows users to :
   * Add new reminders
   * Show today's reminders
   * Show all reminders
* Carpark Slots: allows user to see how many parking slots are left by inputting the carpark number in.
* Traffic images: allows user to see at real time pictures on the traffic currently by clicking on the interactive map.
* Traffic Incidents: allows user to check on the current incidents happening on the road. They can also filter the output by inputting their location on the seach bar.
* Logout : allows user to reset their reminders and login with different credentials.

### Technologies Used
* [HTML](https://html.com/)
  * This was used for the basic content structure for the website
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  * this was used for the styling of the website
* [JavaScript/JQuery](https://jquery.com/)
  * [JQuery](https://jquery.com/) was used to simplify the DOM manipulation
  * [AJAX](https://api.jquery.com/jquery.ajax/) was also used to request data from a web server. API links can be found [here](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/blob/main/README.md#credits)
  * [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) was used to store user's login, sign up and reminders information. 
* [Bootstrap](https://getbootstrap.com/)
  * This was used to simplify code for responsive design
* [Adobe Illustrator](https://www.adobe.com/sea/products/illustrator.html)
  * This was used to change the background the SVGs for the social links 
* [Adobe XD](https://www.adobe.com/sea/products/xd.html)
  * This was used to make the wireframe of the Website : desktop and mobile view


### Testing
:pushpin: How my project looks :
![web image desktop](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/blob/main/images/login-signup-screenshot-01.png)
![web image desktop](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/blob/main/images/main-page-screenshot-02.png)
![web image desktop](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/blob/main/images/traffic-incident-screenshot-03.png)

The difference for mobile version is that all rows that have multiple columns will be brought down, so there will only be one column in mobile view. 

### Credits
#### Media :link: 
1. The illustration on all pages were from 
   * [pinterest](https://www.pinterest.com/)
2. The SVGs in the footer were from
   * [iconfinder](www.iconfinder.com)
   * [flaticon](https://www.flaticon.com/)
  
#### Acknowledgements :sun_with_face:
1. I received inspiration from this [website](https://www.grab.com/sg/)
2. Websites that aid my projects :
   * [W3School](https://www.w3schools.com/)
   * [Stack Overflow](https://stackoverflow.com/)
   * [freecodecamp](www.freecodecamp.org)
   * [geeksforgeeks](www.geeksforgeeks.org)
   * [codepen.io](https://codepen.io/)

#### APIs Used :sun_with_face:
* [Data.gov.sg](https://data.gov.sg/dataset/)
  * [Traffic images](https://data.gov.sg/dataset/traffic-images?view_id=a0e54baf-6ef7-4bca-9aa2-8c6ca37a0a0e&resource_id=e127e29a-bd48-47e2-a0a7-e89ce31f10c7)
  * [Carpark](https://data.gov.sg/dataset/carpark-availability)
  * [Weather](https://api.data.gov.sg/v1/environment/2-hour-weather-forecast)
* [mytransport.sg](https://www.mytransport.sg/content/mytransport/home/dataMall.html)
  * [Traffic incidents](https://www.mytransport.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf)
* [Email validator](https://www.gmass.co/blog/email-verification-service/)

