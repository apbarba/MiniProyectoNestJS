import { Module } from "@nestjs/common";
import { MonumentsService } from "./monuments.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import { MonumentsController } from "./monuments.controller";
import { Monumentos } from "./entities/monuments.entity";

@Module({
    imports: [

        TypeOrmModule.forFeature([Monumentos])
    ],

    controllers: [MonumentsController],
    providers: [MonumentsService],
})

export class MonumentsModule {}