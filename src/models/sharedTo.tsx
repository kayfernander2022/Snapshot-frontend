import UserView from "./userView";

export default interface SharedTo{
  photoId: string;
  user: UserView;
  isShared: boolean;
}