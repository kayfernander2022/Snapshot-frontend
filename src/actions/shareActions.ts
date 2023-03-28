export interface ISharedTo{
  url: string | undefined,
  photoId: string,
  friendIds: string[]
}


//Create Action ??
export const shareAction = async ({ url, photoId, friendIds}:ISharedTo):Promise<void> => {
  if(!url) return undefined;

  const request = { photoId, friendIds };

  await fetch(`${url}/api/sharedTos`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
  });
}


//Delete Action??
export const unshareAction = async ({ url, photoId, friendIds}:ISharedTo):Promise<void> => {
  if(!url) return undefined;

  friendIds.forEach(async (friendId) => {
      await fetch(`${url}/api/sharedTos/${photoId}/friend/${friendId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
  })
}