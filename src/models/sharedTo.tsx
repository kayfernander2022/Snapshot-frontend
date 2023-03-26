import UserView from "./userView";

export default interface SharedTo{
  photoId?: string | undefined;
  user: UserView | undefined;
  isShared: boolean;
}