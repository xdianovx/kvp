/// <reference types="multer" />
import { FileResponce } from './file.interface';
export declare class FileService {
    saveFales(files: Express.Multer.File[], folder?: string): Promise<FileResponce[]>;
}
