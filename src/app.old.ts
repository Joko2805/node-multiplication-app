import fs from "fs";
import { argv } from "./config/plugins/yargs.plugin";

// Número base para la multiplicacion
const numberBase: number = argv.b;
// Limite de la multiplicacion
const limit: number = argv.l;
// Cabecera de la tabla
const tableHeader: string = `------------------------------------------
        TABLA DEL ${numberBase}
------------------------------------------`;
// Contenedor del contenido de la tabla
let tableContent = "";
// Nombre del directorio de salida
const outputPath = "./output";

// Creando la tabla
for (let i = 1; i <= limit; i++) {
  tableContent += `\n${numberBase} + ${i} = ${numberBase * i}`;
}

// Uniendo header + content
const table = tableHeader + tableContent;
if (argv.s) console.log(table);

// Creando el directorio de ./output
fs.mkdirSync(outputPath, { recursive: true });

// Creando el archivo txt
fs.writeFileSync(`${outputPath}/table-${numberBase}.txt`, table);

console.log("Archivo creado");
