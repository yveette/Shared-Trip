# Shared Trip

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

#### SoftUni - JS Back-end - Exam 2021

The application allows visitors to browse through the **shared trips catalog**. Users may **register** with an **email**, **password** and **gender** which allows them to **create** their own trips and should be able to **join** trip (if the current user is not the trip creator and if seats available). Trip authors can also **edit** or **delete** their own publications at any time.

## Used in this project:

- Provided HTML & CSS resources 
- You may add attributes (such as class and dataset), but it is forbidden to change existing attributes (such as class and id)
- You may change "href" attributes on links and add/change the method and action attributes of HTML Forms.
- **Express.js** as a back-end framework
- **MongoDB** as a database with **mongoose**
- **Express-handlebars** as a template
- **Bcrypt** for hashing the password
- Application must start from file "index.js" on port 3000
- It is forbidden to use React, Vue, Angular etc.

## Start
- `$ git clone https://github.com/yveette/Shared-Trip`
- `npm install`
- `npm run start`
- open http://localhost:3000
- can use the GUI for MongoDB -> [MongoDB Compass](https://www.mongodb.com/products/compass)
- enjoy

## Users

* Users (Logged In) :
    * Can view **Home page** and all other pages with logged-in navigation.
    * Can view **shared trips**.
    * Can **Create** а new trip [Offer Trip].
    * Can access trip **details** page [Details]
    * Can **Join** some trip (if the current user is not the trip creator and if seats available)
    * Can **Delete** or **Edit** trip depending on user's authentication (only for owner of the current offer for housing)

* Guest (Not Logged In) :
    * Can access **Home** page.
    * Can access **Login** page and functionality.
    * Can access **Register** page and functionality.
    * Can access **Shared Trips page**.
    * Can access **Details** page.

## Database Models

The Database of the Shared Trip application needs to support 2 entities :

### User :

- **Email** - string (required),
- **Password** - string (required),
- **Gender** – string (male or female) required ,
- **Trips** History – a collection of Trips (reference to the Trip Model)

*Note: When a user creates a new trip, a reference to that trip is added to that collection (Trips History).*

### Trip :

- **Start** Point - string (required), 
- **End** Point – string (required),
- **Date** – string (required),
- **Time** – string (required),
- Car **Image** – string (required),
- Car **Brand** – string (required),
- **Seats** – number (required),
- **Price** – number (required),
- **Description** – string (required),
- **Creator** – object Id (reference to the User model),
- **Buddies** – a collection of Users (reference to the User model)

*Note: When a user joined the given trip, a reference to that user is added to that collection (Buddies).*

*Implement the entities with the correct data types.*

## Application Pages

### Home Page (logged out user)

Visualize the **last 3 added housing offers**. Each offer must show information about the **home Image**, the **name**, as well as a page with **details** about the specific housing (the [**Detail**] button will be visible when the mouse cursor reaches the image of the housing).

![Home Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/home_page_1.png)

### Home Page (logged in user)

![Home Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/home_page_2.png)

### Register Page (logged out user)

Register a user inside the database with **email**, **password** and **gender** (male, female). Password inside the database must be **hashed** (use bcrypt) and both passwords must **match**! After successful registration redirect to **Home page**, with already logged in user.

![Register Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/register_page.png)

### Login Page (logged out user) 

Logging an already registered user with correct **email** and **password**. After successful login redirect to **Home page**, with already logged in user.

![Login Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/login_page.png)

### Logout Page (logged in user) 

The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to **Home page**.

### Shared Trips (for logged in users and logged out users)

List **all shared trips**. Each trip should be showing information about trip's **car image**, **destination** (from - to), **date**, **time** and **price**. Like in the picture below:

[**Details**] button should be a link to the **details page** for the current trip.

If there are shared trips in the database, display the following view:

![Catalog Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/catalog_page.png)

If there are no shared trips in the database, display the following view:

![Catalog Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/catalog_non.png)

### Trip Details Page - (for logged in users and logged out users)

All users should be able to view **details** about trip. Clicking the **Details button** in of a trip card should display the **Details page**. If the currently logged-in user is the creator of the trip, the **Edit** and **Delete** buttons should be displayed, otherwise they should not be available.

Information about the trip:

* **Destination** (from - to)
* **Date** and **Time** (date at time)
* Shared Trip **Buddies**
    * If any, separate them with comma and space ", "
    * If not, display "there are no buddies yet..."
    * Below that, the email on the driver should be displayed
* Car **Brand**
* Car **Image**
* **Description**
* **Price**
* **Buttons** (Depending the status of the currently logged in user)

<details>
    <summary>Trip Details (logged out users)</summary>
If there are no logged in user do not show div with class "actions"

![Details Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/details_1.png)
</details>

<details>
    <summary>Trip Details (logged in user and creator of the current trip)</summary>

If the currently logged-in user is the driver (user who's created the trip), he should see the [Delete this trip] and [Edit this trip] buttons.

![Details Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/details_2.png)
</details>

<details>
    <summary>Trip Details (logged in user with available seats)</summary>

If the currently logged-in user is not the driver (user that is not the creator for that trip) and is not already joined for this trip he should see button like [Join now, {available seats} left]. If there is at least 1 seat left

![Details Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/details_3.png)
</details>

<details>
    <summary>Trip details (logged in user and already joined the trip)</summary>

If the currently logged-in user is not the driver and is already joined the current trip, he should see the [Already joined. Don't be late].

![Details Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/details_4.png)
</details>

<details>
    <summary>Trip Details (logged in user with no available seats)</summary>

If the currently logged-in user is not the driver and there are no available seats for the current trip, he should see the [No seats available!].

![Details Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/details_5.png)
</details>

### Join Trip (logged in user which is not the current trip creator)

Every logged-in **user** which is not the current trip creator (driver) should be able to **join** trip (if seats available). If he manages to join successfully to some trip, his **email** should be added to the current trips shared **Trip buddies collection** and the **seats** for the current trip should be **decreased by 1** and redirect the user to the **Details page** for the current trip.

If some user once joined a current trip, he should see the *"Already joined. Don't be late!"*.

If there are no seats available, he should see the *"No seats available!"*.

### Offer New Trip Page (logged in user) 

The Create (Offer trip) page is available to logged-in users. It contains a form for adding new trip. Upon success, redirect the user to the **Shared Trips page**.

![Create Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/create_page.png)

### Delete Trip (logged in user and creator of the current trip) 

Every trip **creator** should be able to click over [**Delete** this trip] button - deleting the current trip from the database and the user should be redirected to **Shared Trips Page**.

### Edit Trip (logged in user and creator of the current trip)

The **Edit page** is available to logged-in users and it allows **authors** to edit their own trip. Clicking the [**Edit** this trip] button of a particular trip on the **Details page** should display the** Edit Trip page**, with all **fields filled** with the data for the trip. It contains a form with input fields for all relevant properties. Upon success, redirect the user to the **Details page** for the current trip.

![Edit Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/edit_page.png)

### Profile page - Bonus

Each logged-in user should be able to view his own **profile** by clicking [**Profile**]. **Email**, **trips count** and **information about the trips** with the data for the current user should be filled. Note that the Gender of the user determines which picture is displayed as their avatar.

If there are trips created by the current user and his **gender** is **male**, the following view should be displayed:

![Profile Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/profile_page.png)

If there are no trips created by the current user and her **gender** is **female**, the following view should be displayed:

![Profile Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/profile_page_2.png)

### 404 Page Not Found

If **Guests** (not logged in) trying to access а page that it should not be able to, you must redirect them to the **Login page**.

If **Users** (logged in) trying to access а page that it should not be able to, you must redirect them to the **Home page**.

Use the following view for invalid paths:

![404 Page View](https://github.com/yveette/Shared-Trip/blob/main/readme_files/not_found_page.png)

## Validation and Error Handling

The application should **notify** the users about result of their actions.

In case of **error**, you should display div with class "**error**".

You can choose to display the **first** error or **all** of them. You have complete freedom to choose the content of the error message you will display.

### Login / Register
- The **email** should be in the following **format** (mailboxname @ domainname) - "username@domain.bg"
- The **password** should be at least **4** characters long
- The **repeat password** should be **equal** to the password

### Trip
- The **Starting** Point and **End** Point should be at least **4** characters long (each).
- The **Seats** should be positive number (from **0** to **4** inclusive).
- The **Description** should be minimum **10** characters long.
- The Car **Image** should be starts with **http://** or **https://**.
- The Car **Brand** should be minimum **4** characters long.
- The **Price** should be positive number (from **1** to **50** inclusive).

## Security Requirements

The Security Requirements are mainly access requirements. Configurations about which users can access specific functionalities and pages.

### Guest (not logged in):
- users can access **Home page**.
- users can access the **Login** page and functionality.
- users can access the **Register** page and functionality.
- can access **Shared Trips** page (Listed all trips).
- can access the **Details** page without functionality.

### Users (logged in):
- can access **Home** page page.
- can access **Shared Trips** page (Listed all trips).
- can access **Details** page and functionality.
- can access **Create** Offer Trip page and functionality.
- can **Edit** and **Delete** trip functionality. (logged in and creator of the current trip)
- can **Join** trip functionality.
- can access **Logout** functionality.