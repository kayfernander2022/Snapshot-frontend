# Snapshot App 

Snapshot is a React + Typescript frontend application where the user can upload, edit, and share photos with friends.

### [Link to Snapshot]() ON NETLIFY

### Technologies Used

- React
- Typescript
- HTML
- CSS
- ImageKit CDN


### Component Architecture

[![](https://mermaid.ink/img/pako:eNp9UsluwjAQ_ZXIp1QCRS1tDzlUAsK-HaAnwsGKBxKVxJHjiFaIf689E4Fpq-aUeYve89hnlkgBLGT7ozwlKVfa20Rx4Zmvu-2W5c5rt996_qrWR9APRPQs5vX9ugLVQH2Eom3MgpjtHGxgoTKVWgZhJu45b2jJRAHX8MPmjSxVl8JSv41jywowle7ZCNlJIeCTgAEC61SeaB7ijH36mNtNdCYLIkc38h2TXXJ8IyMMdklqNfH3KoNCVM1SJohOTVe7qSATAReCJIFFnOJTlFKqa545Zjrv3_4Z7R8V7iXN_SznB2gKzRFb-GtzzyA2soEXCC9NFIrtRoMKJebWKMg2v4aRfvWvnspeLUu0PD51OjSvcH5-eWUtloPKeSbMGzxbMmY6hdxYQ_MruPqIWVxcjI7XWq6_ioSFWtXQYvQ6oowfFM9ZuOfHCi7fukDTwg?type=png)](https://mermaid.live/edit#pako:eNp9UsluwjAQ_ZXIp1QCRS1tDzlUAsK-HaAnwsGKBxKVxJHjiFaIf689E4Fpq-aUeYve89hnlkgBLGT7ozwlKVfa20Rx4Zmvu-2W5c5rt996_qrWR9APRPQs5vX9ugLVQH2Eom3MgpjtHGxgoTKVWgZhJu45b2jJRAHX8MPmjSxVl8JSv41jywowle7ZCNlJIeCTgAEC61SeaB7ijH36mNtNdCYLIkc38h2TXXJ8IyMMdklqNfH3KoNCVM1SJohOTVe7qSATAReCJIFFnOJTlFKqa545Zjrv3_4Z7R8V7iXN_SznB2gKzRFb-GtzzyA2soEXCC9NFIrtRoMKJebWKMg2v4aRfvWvnspeLUu0PD51OjSvcH5-eWUtloPKeSbMGzxbMmY6hdxYQ_MruPqIWVxcjI7XWq6_ioSFWtXQYvQ6oowfFM9ZuOfHCi7fukDTwg)

### Frontend Route Table

| Route    | Element    | Loader |Action| Description|
| :---    | :----: | :----:    | :----   |:----   |
|/        |Index  | photosLoader|         |Display a list of photos|
|/user/:id | Show | userLoader | | Display user profile info |
|/user/create | Create | | userCreateAction  | Handles creation form for new user |
|/user/:id/update | Update | | userUpdateAction | Handles creation form for update user | 
|/user/:id/delete| Delete | | userDeleteAction| Handles deletion of specific user |
|/photo/:id |Show   | photoLoader  |          |Display a specific photo|
|/photo/create  |Create |         | photoCreateAction|Handles submission of create form for photo|
|/photo/:id/update  |Update |      |photoUpdateAction|Handles submission of update form for photo|
|/photo/:id/delete |Delete |       |photoDeleteAction|Handles submission of delete form for photo|
|/sharedphotos        |Index  | sharedPhotosLoader|         |Display a list of friends photos|
|/sharedphotos/:photoid/user/:userid        |Update  | |     sharedPhotoUpdateAction    |Share photo to the user|
|/sharedphotos/:photoid/user/:userid/delete        |Delete  | |  sharedPhotoDeleteAction       |Delete a shared photo from the user|


### Mockups
![mockups here](./public/capstone-wireframe.png)


#### Trello Workspace
[TRELLO BOARD](https://trello.com/b/eR1U7DMT/capstone)

###### 2023 Karen Fernander |
