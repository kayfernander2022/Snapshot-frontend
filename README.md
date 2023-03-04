# Snapshot App 

Snapshot is a React frontend application using typescript where the user can upload and edit photos and add or delete from a friends list.

### [Link to Image App]() ON NETLIFY

### Technologies Used

- React
- react-router-dom
- TypeScript
- CSS
- imageKit


### Component Architecture

[![](https://mermaid.ink/img/pako:eNp9UsluwjAQ_ZXIp1QCRS1tDzlUAsK-HaAnwsGKBxKVxJHjiFaIf689E4Fpq-aUeYve89hnlkgBLGT7ozwlKVfa20Rx4Zmvu-2W5c5rt996_qrWR9APRPQs5vX9ugLVQH2Eom3MgpjtHGxgoTKVWgZhJu45b2jJRAHX8MPmjSxVl8JSv41jywowle7ZCNlJIeCTgAEC61SeaB7ijH36mNtNdCYLIkc38h2TXXJ8IyMMdklqNfH3KoNCVM1SJohOTVe7qSATAReCJIFFnOJTlFKqa545Zjrv3_4Z7R8V7iXN_SznB2gKzRFb-GtzzyA2soEXCC9NFIrtRoMKJebWKMg2v4aRfvWvnspeLUu0PD51OjSvcH5-eWUtloPKeSbMGzxbMmY6hdxYQ_MruPqIWVxcjI7XWq6_ioSFWtXQYvQ6oowfFM9ZuOfHCi7fukDTwg?type=png)](https://mermaid.live/edit#pako:eNp9UsluwjAQ_ZXIp1QCRS1tDzlUAsK-HaAnwsGKBxKVxJHjiFaIf689E4Fpq-aUeYve89hnlkgBLGT7ozwlKVfa20Rx4Zmvu-2W5c5rt996_qrWR9APRPQs5vX9ugLVQH2Eom3MgpjtHGxgoTKVWgZhJu45b2jJRAHX8MPmjSxVl8JSv41jywowle7ZCNlJIeCTgAEC61SeaB7ijH36mNtNdCYLIkc38h2TXXJ8IyMMdklqNfH3KoNCVM1SJohOTVe7qSATAReCJIFFnOJTlFKqa545Zjrv3_4Z7R8V7iXN_SznB2gKzRFb-GtzzyA2soEXCC9NFIrtRoMKJebWKMg2v4aRfvWvnspeLUu0PD51OjSvcH5-eWUtloPKeSbMGzxbMmY6hdxYQ_MruPqIWVxcjI7XWq6_ioSFWtXQYvQ6oowfFM9ZuOfHCi7fukDTwg)

### Frontend Route Table

| Route    | Element    | Loader |Action| Description|
| :---    | :----: | :----:    | :----   |:----   |
|/        |Index  | indexLoader|         |Display a list of photos|
|/photo/:id |Show   | artLoader  |          |Display a specific photo|
|/create  |Create |         | photoCreateAction|Handles submission of create form for photo|
|/update/:id  |Update |      |photoUpdateAction|Handles submission of update form for photo|
|/delete/:id |Delete |       |photoDeleteAction|Handles submission of delete form for photo|
|/sharedphotos        |Index  | sharedIndexLoader|         |Display a list of friends photos|
|/sharedphotos/photoid/user/:userid        |Update  | |     sharedPhotoUpdateAction    |Share photo to the user|
|/sharedphotos/photoid/user/:userid        |Delete  | |  sharedPhotoDeleteAction       |Delete a shared photo from the user|


### Mockups
![mockups here](./public/capstone-wireframe.png)


#### Trello Workspace
[TRELLO BOARD](https://trello.com/b/eR1U7DMT/capstone)

###### 2023 Karen Fernander |
