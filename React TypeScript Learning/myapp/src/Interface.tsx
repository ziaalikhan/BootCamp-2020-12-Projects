export interface IPost {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    zipcode: string;
    geo: {
      lng: string;
    };
  };
  company: {
    bs: string;
  };
}
