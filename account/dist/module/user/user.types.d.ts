export type FindUserParams = {
    userIds: string[];
    phones: string[];
    take: number;
    skip: number;
};
export type CheckExsistUserParams = {
    phone: string;
    login: string;
};
