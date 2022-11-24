import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monumentos } from './monuments/entities/monuments.entity';
import { MonumentsController } from './monuments/monuments.controller';
import { MonumentsService } from './monuments/monuments.service';
import { Monuments } from './monuments/monuments/monuments';

@Module({
  imports: [TypeOrmModule.forRoot( {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username 'admin',
    password: 'admin',
    database: 'NEST_DB',
    entities: [Monumentos],
    synchronize: true
  }),
],
  controllers: [MonumentsController],
  providers: [Monuments, MonumentsService],
})
export class AppModule {}
