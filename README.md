# 5 Star Genshin Character Guide 2025!

## Webpage/Pop-up 1: Log-in page (Form page):
### Purpose:
This will only serve as the main page in which they will log in their credentials, specifically: the user's nickname, UID, and server.

### How the Form Works:
When the user submits the form, the entered credentials will be stored in the browser's localStorage under the key currentUser, which will be used to identify the active account on the website.

## Webpage 2: Character Tracker Page
### Purpose:
#### The Character Tracker page will serve as the webpage where users can record their progress and preferences regarding Genshin Impact characters. It allows users to indicate which characters they already own and which characters they wish to obtain. This page allows users to categorize characters through an interactive drag-and-drop interface, and saves the data locally on the user’s device for later use across the website.

#### User Pop-up Dropdown 
At the top side of the webpage, there will be an overview of the user's nickname, and uid. Beside the user's nickname, there will be a dropdown menu containing two options: Switch Accounts and Log Out.

#### Two action buttons are placed at the bottom of the page:

- “Owned Characters”: directs the user to Webpage 3, which displays the icons of characters waiting to be categorized via drag-and-drop.
- “Wanted Characters”: directs the user to Webpage 4, which displays the icons of characters waiting to be categorized via drag-and-drop.
These buttons allow smooth and organized navigation between pages.

### How and Where the Data Is Saved:
The data collected through the form is saved using the browser’s localStorage, which stores data locally on the user’s device. This method does not require an internet connection or user account, as the data is stored directly in the user’s browser on their computer.

#### The data persists even after the browser is closed and is automatically retrieved when the website is reopened on the same device.


## Webpage 3: My Current Characters Page

### Purpose of the Webpage:
The My Current Characters page displays all Genshin Impact characters that the user has marked as owned on the Character Tracker page. This webpage allows users to easily view and review the characters they currently have without manually searching through each nation page.

### How This Webpage Uses Saved Data:
This webpage retrieves the saved data from the browser’s localStorage and displays the characters that were previously categorized on the Character Tracker page. This gives the user more freedom and ease in tracking their Owned Characters. 

### Navigation:
This webpage is accessed by clicking “Owned” on the Character Tracker page. A navigation button will also be available to allow users to return to Webpage 2, and go to Webpage 4.

## Webpage 4: My Wishlist

### Purpose of the Webpage:
The My Wishlist page displays all Genshin Impact characters that the user has marked as wanted on the Character Tracker page. This webpage allows users to easily view and review the characters they want without manually searching through each nation page.

### How This Webpage Uses Saved Data:
This webpage retrieves data from the browser’s localStorage by allowing them to efficiently drag their current characters into the right container. This gives the user more freedom and ease in tracking their Wanted Characters. 

### Navigation:
This webpage is accessed by clicking “Wanted” on the Character Tracker page. A navigation button will also be available to allow users to return to Webpage 2, and go to Webpage 3.

# FINAL MODIFICATION PROPOSAL
## Adding of Data
### How it will be implemented
Another feature that will be implemented is Switch Account. When the user clicks the dropdown menu beside the nickname and UID overview, it will provide two options: Switch Accounts and Log Out. This allows users to log into a different account and access a separate set of stored character tracker data. Each account will have its own stored data in the browser's localStorage, which ensures that the Owned and Wanted characters are unique to each user. When a user switches accounts, the system will load the data associated with the selected account.

### Purpose of Adding Data
The purpose of this feature is to allow multiple users to use the tracker on the same browser while maintaining separate character lists and preferences.

## Updating of Data
### How it will be implemented
This will be implemented through the current drag-and-drop icon function of the character tracker. Every time a user drags and drops a character icon into either the Owned or Wanted container, the system will automatically update the data stored in localStorage. The stored data will then be used to display the corresponding characters in the Owned and Wanted webpages.

### Purpose of Updating Data
The purpose of updating data is to allow the user to continuously track the characters they currently own or wish to obtain. This ensures that the information displayed on the tracker remains accurate and up to date based on the user's selections.

## Deletion of Data
### How it will be implemented
This will be implemented through a “Start Over” button located at the bottom right section of the tracker interface. When this button is clicked, it will clear the character containers and remove the stored character data from localStorage, resetting the user's tracker.

Another implementation of data deletion is through the Log Out feature. When the user clicks the dropdown menu beside the nickname and UID overview, it will provide two options: Switch Accounts and Log Out. When a user logs out of the system, the website will first ask for confirmation. Once confirmed, the stored session data that identifies the current user will be removed, and the user will be redirected to Webpage 1.

### Purpose of Deletion of Data
The purpose of deleting data is to allow the user to reset their Character Wishlist and Character Tracker whenever necessary. This ensures that users can start over with a clean tracker if they wish to reorganize their characters or create a new list. Additionally, the log out feature helps maintain user privacy by ensuring that account-specific data is not accessible after the user exits their session.



## Wireframes:
### Webpage 1 (User Log In)
![User Log In wireframe](./assets/WF4.png)

### Webpage 2
![Webpage 1 wireframe](./assets/WF1.png)

### Webpage 3
![Webpage 2 wireframe](./assets/WF2.png)

### Webpage 4
![Webpage 3 wireframe](./assets/WF3.png)

