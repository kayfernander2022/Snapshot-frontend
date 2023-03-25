import React from "react";
import { Friends } from "../components/friends";
import { Users } from "../components/user";
import Friend from "../models/friend";
import UserView from "../models/userView";

export interface IFriendsPageProps {
  
}
 
const FriendsPage: React.FunctionComponent<IFriendsPageProps> = () => {
  const friends:Friend[] = [{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },{
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },
  {
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  },
  {
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Karen'
  }]

  const users: UserView[] = [{
    id:'test',
    name:'Greg'
  }]

  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
        <Friends friends={friends}/>
        <Users users={users}/>
    </div>);
}
 
export default FriendsPage;