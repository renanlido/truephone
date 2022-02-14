export type PostFile = {
  name: string;
  date: string;
  contactsList: {
    message: string;
    phone: string;
    status: boolean;
  }[];
};
