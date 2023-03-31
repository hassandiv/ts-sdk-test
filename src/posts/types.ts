//to define types we need to export declare type POST{}, we cannot use module.exports = Post
//because types don't have a value it is just a type
//We can export as many types as we want

export declare type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export declare type NewPost = {
  title: string;
  body: string;
  userId: number;
};
