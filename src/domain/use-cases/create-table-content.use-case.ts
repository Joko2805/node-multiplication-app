export interface TableContentUseCases {
  execute: (options: Options) => string;
}

export interface Options {
  base: number;
  limit: number;
}

export class TableContent implements TableContentUseCases {
  execute({ base, limit }: Options) {
    let tableContent = "";
    // Creando la tabla
    for (let i = 1; i <= limit; i++) {
      tableContent += `\n${base} + ${i} = ${base * i}`;
    }
    return tableContent;
  }
}
