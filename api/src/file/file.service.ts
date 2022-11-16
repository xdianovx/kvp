import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { extname } from 'path';
import { FileResponce } from './file.interface';

@Injectable()
export class FileService {
  async saveFales(
    files: Express.Multer.File[],
    folder = 'default',
  ): Promise<FileResponce[]> {
    const uploadFolder = `${path}/uploads/${folder}`;
    ensureDir(uploadFolder);

    const res: FileResponce[] = await Promise.all(
      files.map(async (file) => {
        const name = file.originalname.split('.')[0];
        const fileExtName = extname(file.originalname);
        console.log(fileExtName);

        const randomName = Array(4)
          .fill(null)
          .map(() => Math.round(Math.random() * 10).toString(10))
          .join('');
        await writeFile(
          `${uploadFolder}/${randomName}${fileExtName}`,
          file.buffer,
        );
        return {
          url: `/uploads/${folder}/${randomName}${fileExtName}`,
          name: randomName,
        };
      }),
    );

    return res;
  }
}
