import { Injectable, BadRequestException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import * as awsConfig from '../../aws.config'
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  private s3: S3;

  constructor() {
    this.s3 = new S3(awsConfig)
  }

  async uploadFile(file: Express.Multer.File) {
    const uploadParams: S3.PutObjectRequest = {
      Bucket: process.env.BUCKET || 'reporte-monitoreo',
      Key: file.originalname,
      Body: file.buffer
    }

    const result = await this.s3.upload(uploadParams).promise()
    console.log(result)
    return result.Location
  }

  getStaticProductImage(imageName: string) {

    const path = join(__dirname, '../../static/products', imageName)
    if (!existsSync(path))
      throw new BadRequestException(`No product found with image ${imageName}`)

    return path
  }
}
