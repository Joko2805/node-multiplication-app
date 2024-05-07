import { TableContent } from "../domain/use-cases/create-table-content.use-case";
import { SaveFile } from "../domain/use-cases/safe-file.user-case";

interface runOptions {
  base: number;
  limit: number;
  show: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  public static run({
    base,
    limit,
    show,
    fileName,
    fileDestination,
  }: runOptions): void {
    // Creando el contenido de la tabla
    const tableContent = new TableContent().execute({ base, limit });
    if (show) console.log(tableContent);

    // Guardando el contenido de la tabla
    const wasSafed = new SaveFile().execute({
      fileContent: tableContent,
      fileDestination,
      fileName,
    });

    wasSafed ? console.log("creado") : console.log("no creado");
  }
}
