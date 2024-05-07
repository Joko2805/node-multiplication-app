import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argv = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero base para la multiplicación",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Mostrar la tabla de multiplicación",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "Limite para la multiplicación",
  }).option("n",{
    alias: "name",
    type: "string",
    default: "table",
    describe: "Nombre del archivo"
  }).option("d",{
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "Destino del archivo"
  }).check((args, options)=>{
    if(args.b < 1) throw new Error("Base no permitida");
    return true;
  })
  .parseSync();
