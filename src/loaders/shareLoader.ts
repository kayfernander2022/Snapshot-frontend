export const sharedToLoader = async (url: string, photoId: string):Promise<string[]> => {
  
  const response = await fetch(`${url}/api/sharedTos/${photoId}`);

  const jsonResponse = await response.json() as {friendId: string}[];

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse.map((friend) => friend.friendId);
}