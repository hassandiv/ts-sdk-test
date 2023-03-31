import { Base } from "src/base";
import { NewPost, Post } from "./types";

const resource = "posts";
export class Posts extends Base {
  getPostById(id: number): Promise<Post> {
    return this.invoke(`/${resource}/${id}`);
  }

  getPosts(): Promise<Post[]> {
    return this.invoke(`/${resource}`);
  }

  createPost(newPost: NewPost): Promise<Post> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  }
}

//Sample object for the below
// const config = {
//   apikey: "632786478264723648",
//   baseUrl: "https://jsonplaceholder.typicode.com",
// };

/* Why below dont work
Cannot create an instance of an abstract class.*/
//const test = new Base(config);
/* Property 'invoke' is protected and only accessible within class 'Base' and its subclasses. */
//test.invoke(`/${resource}`);

//abstract class summary: if the class is abstract class, we cannot initialize a new object of the class in a variable
//protected invoke method summary: if the method/function is protected it cannot be used outside of the class
