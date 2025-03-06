import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  address: string;
  password: string;
  profileImg: string;
  following: any[];
  followers: any[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TPost = {
  _id: string;
  userId: TUser;
  title: string;
  images: string[];
  category: string;
  tags: string;
  comments: string[];
  upVotes: string[];
  downVotes: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
