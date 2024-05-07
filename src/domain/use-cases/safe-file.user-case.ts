import fs from "fs";

interface SaveFileUseCases {
  execute: (options: Options) => boolean;
}

interface Options {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}

export class SaveFile implements SaveFileUseCases {
  constructor() {}
  public execute({
    fileContent,
    fileDestination,
    fileName,
  }: Options) {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
