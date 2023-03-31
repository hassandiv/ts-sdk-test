import { Base } from "./base";
import { Posts } from "./posts"; //this is posts/index.ts
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends Posts {}
//our SDK name Typicode

applyMixins(Typicode, [Posts]); //[posts] are coming from Posts class that contains 3 HTTP requests methods

export default Typicode;
