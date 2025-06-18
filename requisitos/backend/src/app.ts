import { envs } from "./config";
import { Server } from "./server/Server";

(() => {
  main();
})();
async function main() {
  new Server({
    port: envs.PORT,
  }).start();
}
