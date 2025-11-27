export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type CreateUserReq = {
  email: string;
  fullName: string;
  phone: string;
  gender: string;
};