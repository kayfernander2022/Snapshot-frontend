import UserView from "../models/userView";

export const usersLoader = async (url: string):Promise<UserView[]> => {
  
  const response = await fetch(`${url}/api/users`);

  const users: UserView[] = await response.json();

  console.log(JSON.stringify(users));

  return users;
}