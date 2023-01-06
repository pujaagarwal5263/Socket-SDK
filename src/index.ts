import { Base } from "./base";
import { Sockets } from "./sockets";
import { applyMixins } from "./utils";

class mySDK extends Base{}
interface mySDK extends Sockets{}

applyMixins(mySDK,[Sockets]);

export default mySDK;