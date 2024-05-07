import { argv } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server.app";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: show, n: fileName, d: fileDestination } = argv;

  ServerApp.run({ base, limit, show, fileName, fileDestination });
}
