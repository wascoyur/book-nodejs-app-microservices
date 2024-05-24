export type VerificationParams = {
  login: string;
  password: string;
};

export type GetUsersByFilterParams = {
  userIds?: string[];
  phones?: string[];
  login?: string;
};
export type GetUsersResponse = {
  userIds: Account[];
  total: number;
};

export interface Account {
  userIds: string;
  phone: string;
  login: string;
  firstName: string;
  laastName: string;
  middleName: string;
  password: string;
}
