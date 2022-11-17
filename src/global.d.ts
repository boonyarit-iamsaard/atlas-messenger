export {};

declare global {
  type UserCredentials = {
    username: string;
    password: string;
  };

  type UserData = {
    id: string;
    displayName: string;
  } & UserCredentials;

  type User = Pick<UserData, 'id' | 'displayName' | 'username'>;
}
