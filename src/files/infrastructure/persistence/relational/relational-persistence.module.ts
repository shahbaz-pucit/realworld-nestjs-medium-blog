import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileAbstractRepository } from '@src/files/infrastructure/persistence/file.abstract.repository';

import { FileEntity } from './entities/file.entity';
import { FileRelationalRepository } from './repositories/file.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [
    {
      provide: FileAbstractRepository,
      useClass: FileRelationalRepository,
    },
  ],
  exports: [FileAbstractRepository],
})
export class RelationalFilePersistenceModule {}
