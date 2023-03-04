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

[![](https://mermaid.ink/img/pako:eNqFU8luo0AQ_RXUJ0byig0GDiM5Jomy2gn2ZUIOLbo9RmPTiEVZLP_7dFc5rIrCwbjfe1X1qro4klAwTlyy3Yu3cEfTXFt7QazJZ_4yT5JXrd__faEvi3zP819IXChMW-hFxtMztADIewnIUKFDN2IBea1xlyUVppzmvMlqV_XIYZGwruS6IWFc-qkkHkj8nXjD8yWclXoB5eZhHokYuauS20CdOnddch4UqHNo40bfphGPWXbu_AbQW2mu9EYZQ83QxXdtGLcgR7hbHpPd1ZNho9_mu6vl61rGm7rXk53IxdnwPWAPui8vm7P1F_wA8KMacgYMxGRlIeSXbR7vC8yq35ozDNj8GNC-ykccc8z4OwJLADDHSuXozm3TlnRHgW2vlJ2yFGBPCgJvja1F_XNFtvYWeb8R3F5c1Kybmla7K9BEVbtP516-VvkZzhDf3WW_IrtTWVdkfR6kRw48PdCIyc_-qKQByXf8ID258i-j6b-ABPFJ6miRC_8jDombpwXvEezPi-jflB6Iu6X7TKIJjYl7JO_E7ZsjazAbGZZtzhzLMWejaY98ENcwpgPLssb2dGwY9mTinHrkUwiZwhiMpxPTdgzTHjsTGTODfH-AVEVP_wGPE2Ro?type=png)](https://mermaid.live/edit#pako:eNqFU8luo0AQ_RXUJ0byig0GDiM5Jomy2gn2ZUIOLbo9RmPTiEVZLP_7dFc5rIrCwbjfe1X1qro4klAwTlyy3Yu3cEfTXFt7QazJZ_4yT5JXrd__faEvi3zP819IXChMW-hFxtMztADIewnIUKFDN2IBea1xlyUVppzmvMlqV_XIYZGwruS6IWFc-qkkHkj8nXjD8yWclXoB5eZhHokYuauS20CdOnddch4UqHNo40bfphGPWXbu_AbQW2mu9EYZQ83QxXdtGLcgR7hbHpPd1ZNho9_mu6vl61rGm7rXk53IxdnwPWAPui8vm7P1F_wA8KMacgYMxGRlIeSXbR7vC8yq35ozDNj8GNC-ykccc8z4OwJLADDHSuXozm3TlnRHgW2vlJ2yFGBPCgJvja1F_XNFtvYWeb8R3F5c1Kybmla7K9BEVbtP516-VvkZzhDf3WW_IrtTWVdkfR6kRw48PdCIyc_-qKQByXf8ID258i-j6b-ABPFJ6miRC_8jDombpwXvEezPi-jflB6Iu6X7TKIJjYl7JO_E7ZsjazAbGZZtzhzLMWejaY98ENcwpgPLssb2dGwY9mTinHrkUwiZwhiMpxPTdgzTHjsTGTODfH-AVEVP_wGPE2Ro)

### Frontend Route Table

| Route    | Element    | Loader |Action| Description|
| :---    | :----: | :----:    | :----   |:----   |
|/        |Index  | photosLoader|         |Display a list of photos|
|/user/:id | Show | userLoader | | Display user profile info |
|/user/create | Create | | userCreateAction  | Handles creation form for new user |
|/user/:id/update | Update | | userUpdateAction | Handles creation form for update user | 
|/user/:id/delete| Delete | | userDeleteAction| Handles deletion of specific user |
|/user/:id/addfriend/:friendid| Update | | friendUpdateAction | Action to add friend to friends list |
|/user/:id/deletefriend/:friendid | Delete | | friendDeleteAction | Action to delete from from friends list
|/photo/:id |Show   | photoLoader  |          |Display a specific photo|
|/photo/create  |Create |         | photoCreateAction|Handles submission of create form for photo|
|/photo/:id/update  |Update |      |photoUpdateAction|Handles submission of update form for photo|
|/photo/:id/delete |Delete |       |photoDeleteAction|Handles submission of delete form for photo|
|/sharedphotos        |Index  | sharedPhotosLoader|         |Display a list of friends photos|
|/sharedphotos/:id/user/:userid        |Update  | |     sharedPhotoUpdateAction    |Share photo to the user|
|/sharedphotos/:id/user/:userid/delete        |Delete  | |  sharedPhotoDeleteAction       |Delete a shared photo from the user|



### Mockups
![mockups here](./public/capstone-wireframe.png)


#### Trello Workspace
[TRELLO BOARD](https://trello.com/b/eR1U7DMT/capstone)

###### 2023 Karen Fernander |
