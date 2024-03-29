import React from "react";
import { Friends } from "../components/friends";
import { Users } from "../components/user";
import Friend from "../models/friend";
import UserView from "../models/userView";

export interface IFriendsPageProps {
  
}

//testing 
const FriendsPage: React.FunctionComponent<IFriendsPageProps> = () => {
  const friends:Friend[] = [
  {
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Natasha'
  },
  {
    id:'test',
    userId:'test',
    friendId:'test',
    name:'Liam'
  }]

  const users: UserView[] = [{
    id:'test',
    name:'Karen'
  },{
    id:'test',
    name:'Lisa'
  },{
    id:'test',
    name:'Stacy'
  },{
    id:'test',
    name:'Nya'
  },{
    id:'test',
    name:'Leah'
  },{
    id:'test',
    name:'Jillian'
  },{
    id:'test',
    name:'Nathaniel'
  }]

  return (<div style={{justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'}}>
        <Friends friends={friends}/>
        <Users users={users}/>
    </div>);
}
 
export default FriendsPage;