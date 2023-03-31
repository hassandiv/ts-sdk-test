import fetch from "isomorphic-unfetch";

type Config = {
  apikey: string;
  baseUrl?: string;
};

//abstract class cannot be initialized in a new var as an object
export abstract class Base {
  private apikey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apikey = config.apikey;
    this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
  }
  //our class is finished here after the constructor

  //create an invoke() method like a normal js function .find() .map() ...etc
  //<T> means generic type
  //protected make the invoke() method only accissble within the Base class
  //Property 'invoke' is protected and only accessible within class 'Base' and its subclasses.
  protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      "api-key": this.apikey,
    };

    //config usually is {method: "POST", body: {}, headers: {"Content-Type": "application/json" ..etc} }
    //...options or
    //const {method, body} = options;
    //better to use ...options because we dont know how many object is destructured from options
    const config = {
      //method,
      //body,
      ...options,
      headers,
    };

    //fetch on frontend is await fetch("urls", config);
    return fetch(url, config).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    });
  }
}
