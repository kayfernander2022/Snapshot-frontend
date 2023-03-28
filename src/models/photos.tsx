export default interface Photos{
  id?:string,
  imageUrl: string;
  imageName?:string;
  caption: string;
  userId: string | undefined;
  isSharedPhoto?: boolean;
  sharedFrom?: string;
}