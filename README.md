# ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website
Last Updated : 10/1/21

My Github Page: https://balqiskinanti.github.io/IDAssignment2/

This is a website for drivers to check condition on the road. It aims to be a all-in-one platform for drivers to get the necessary information to make the decision on their travels(e.g. Avoid what lanes? Bring jacket? ). It hopes to help them save time on the road and ensure their safety as much as possible.

## Table Of Contents
* [Design Process](#design-process)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployement](#deployement)
* [Credits](#credits)


### Design Process
*UX* : 
As a driver, I would want a platform where I can see my plans for the day and see the all the traffic conditions and weather without having to switch apps. This ensures that I will not miss any important events (meetings, dinner with family,etc) and be able to plan my timing way ahead based on the traffic condition and weather.

This app is also customised for each individuals as they will be greeted on the landing page of the website with the time(morning, afternoon/evening/night), and also the weather at the place they have inputted during the sign up. More of the weather forecast is on the seperate weather page. User can click on the link in the navigation bar.

Considering there are also very few apps that offer traffic information, it's also important for the website to be as informative and give as much needed and necessary data as possible. Yet, considering there might be overwhelming amount of data, the search function (for carpark and incident) is also there to filter out the information for convinience. 

*UI* : 
I decided to go for a more simple colour scheme and font as it's a website that must cater to all individual's taste, especially grown-ups. I use the same colours at the header and footer for all pages for consistency. The main color scheme of this website is purple and blue. Blue symbolizes reliability and purple symbolizes wisdom which is my goal. Fonts used are the default from bootstrap. I figured that adding too complicated of a font will be distracting. All of these is to ensure that the website looks professional.

My XD Wireframe :art: :
[Wireframe File](https://github.com/Balqiskinanti/ID_S10204973G_BalqisKinantiHaldiHeryputri_Assg2_website/tree/main/xd)

Click on the four boxes on the top left hand corner to show all pages.

Mobile: https://xd.adobe.com/view/a86b6bb0-00ca-4265-8181-49cad2bb989f-fd38/?fullscreen&hints=off

Desktop: https://xd.adobe.com/view/8bc0afb3-5362-4be2-81b4-719075701d7c-de93/?fullscreen&hints=off

### Features
#### Existing Features: 
* Sign up
  - allows user to sign up with unique email each time.
  - It also checks if:
      -  password is more than 8 characters long ,
      -  email is valid, 
      -  and if user has sign up before. 
* Login 
  - allows user to login.
  - It checks if user enters matching email and password. 
  - When the user logged in, they will be greeted good morning/ afternoon/ evening/ night depending on the time along with the weather forecast in their area.
* Reminders : 
  - allows users to :
      - Add new reminders
      - Show today's reminders
      - Show all reminders
* Weather Forecast
  -  allows user to see the overview of the weather across Singapore.
* Carpark Slots: 
  - allows user to see how many parking slots are left by inputting the carpark number in.
* Traffic images 
  - allows user to see at real time pictures on the traffic currently by clicking on the interactive map.
* Traffic Incidents: 
  - allows user to check on the current incidents happening on the road, 
  - filter the output by inputting their location on the seach bar.
* Logout 
  - allows user to reset their reminders and login with different credentials.
* Website is responsive (Collapsible hamburger menu when screen size is small).

#### Potential Features: 
* CSS transition using Scrollreveal : https://scrollrevealjs.org/
* Use firebase for login/signup authentication : https://firebase.google.com/docs/auth

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
* [Paint 3D](https://www.microsoft.com/en-us/p/paint-3d/9nblggh5fv99)
  * This was used to crop images and see the pixels dimensions
* Validators
   * [HTML validator](https://validator.w3.org/#validate_by_upload) was used to validate HTML
   * [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_upload) was used to validate HTML
   * [Javascript validator](https://jshint.com/) was used to validate HTML
   * [Spelling checker](https://typosaur.us/) was used to check spelling
   * [alt checker](https://rushax.com/tools/alt-tag-checker/) was used to check alt for images


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
6. Carpark API might return error 500: Internal server error. Hence, alert will be shown.

*Manual user Testing*

https://docs.google.com/spreadsheets/d/1_c4GJOmfPdjJ_WTYawrUgJB0f33cxqqzzZo0tmk5N-U/edit?usp=sharing
### Deployement
My Github Page: https://balqiskinanti.github.io/IDAssignment2/
#### How to clone this project for your own use? 
1. Download an IDE (e.g. Visual Studio Code) with the necessary extensions. 
   
   [Download visual studio code here](https://code.visualstudio.com/)

   [Check out what extensions to download here](https://scotch.io/bar-talk/22-best-visual-studio-code-extensions-for-web-development)

   [Check out how to use visual studio code here](https://www.youtube.com/watch?v=VqCgcpAypFQ)

2. Set up a github account.
   
   - Go to https://github.com/join 
   - Type a user name, your email address, and a password.
   - Choose Sign up for GitHub, and then follow the instructions. 
   [Video : how to use github on visual studio code](https://www.youtube.com/watch?v=Fk12ELJ9Bww)
   
   [Setting up user.name and user.email in git](https://www.codegrepper.com/code-examples/delphi/vscode+make+sure+you+configure+your+%27user.name%27+and+%27user.email%27+in+git)
3. Clone project / Download project.
   * Clone : 
      - navigate to the main page of the repository
      - click down arrow on Code
      - under "Clone with HTTPS", click the copy icon to copy link
      - Open Git Bash
      - Change the current working directory to the location where you want the cloned directory
      - Type git clone, and then paste the URL you copied earlier
      - Press Enter to create your local clone
   Reference / more info : https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository
   * Download :
      - navigate to the main page of the repository
      - click down arrow on Code
      - click 'download as zip'
4. Open the folder in your IDE.
5. Go to traffic-incident-script.js under js folder -> on line 11 , change the account key to your own. [click here for full docs on how to set up account key](https://www.mytransport.sg/content/mytransport/home/dataMall.html)
6. To check on the API, download and sign up for postman [here](https://www.postman.com/)
   - on top left corner, click 'new' 
   - click 'collection' 
   - enter name of the collection 'Drive Safe App'
   - click 'create'
   - on top left corner, click 'new' 
   - click 'request'
   - enter request name (e.g. 'carpark')
   - select the collection 'Drive Safe App' 
   - click 'save'
   - click on the request name made ('carpark')
   - make sure it is set to 'GET' and enter the web API link 
   - under headers, enter the AccountKey if needed (read documentation for each API used for more info)
   - click 'Send'
7. You are all set up!
   

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
3. People that helped me in the process:
   - User testing : 
      - Parents 
      - Maryam Saniya Hanum, for also giving me design feedbacks
      - Tan Gin Han, for also giving me design feedbacks
   - Zechariah, for introducing me on how to use API and inspiring me to code
   - My lecturer, Mr.Andy, for helping me throughout this process
#### APIs Used :sun_with_face:
* [Data.gov.sg](https://data.gov.sg/dataset/)
  * Traffic Images: https://data.gov.sg/dataset/traffic-images?view_id=a0e54baf-6ef7-4bca-9aa2-8c6ca37a0a0e&resource_id=e127e29a-bd48-47e2-a0a7-e89ce31f10c7
  * Carpark : https://data.gov.sg/dataset/carpark-availability
  * Weather : https://api.data.gov.sg/v1/environment/2-hour-weather-forecast
* [mytransport.sg](https://www.mytransport.sg/content/mytransport/home/dataMall.html)
  * Traffic incidents: https://www.mytransport.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf
* Email validator : https://www.gmass.co/blog/email-verification-service/
* Cors-anywhere : https://github.com/Rob--W/cors-anywhere 

