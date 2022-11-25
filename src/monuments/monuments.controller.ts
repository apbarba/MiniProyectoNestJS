import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monumentos } from './entities/monuments.entity';
import { monument } from './monuments.model';
import { MonumentsService } from './monuments.service';

@Controller('monuments')
export class MonumentsController {

    constructor(private readonly monumentsService: MonumentsService,
        @InjectRepository(Monumentos)
        private monumentosRepository: Repository<Monumentos>){
        
    }

    @Get()
    getAllMonuments(@Query('name') name:string) {

        if(name){
       
            return this.monumentsService.getMonumentsFilterByName(name);
       
        }

        return this.monumentsService.getAllMonuments();
    }

    
    //@Get()
    //getMonumentFilterByName(@Query('name') name:string) {

   //     return `Este método retorna todos los monumentos filtrados por nombre según la query: ${name}`;
   // }

    @Get(':id')
    getMonumentById(@Param('id') id: string){

        return this.monumentsService.getMonumentById(id);
    }

    @Post()
    createMonuments(@Body() monuments: monument){a

        console.log(monuments);

        return this.monumentsService.createMonuments(monuments);
    }

    @Put(':id')
    replaceMonument(@Param('id') id: string, @Body() monuments: monument){

        console.log(monuments);

        return this.monumentsService.replaceMonument(id, monuments);
    }

    @Patch(':id')
    updateMonument(@Param('id') id: string, @Body() monuments: monument){

        console.log(monuments);

        return this.monumentsService.updateMonument(id,monuments);
    }

    @Delete(':id')
    deleteMonument(@Param('id') id: string, @Body() monuments: monument){

        return this.monumentsService.deleteMonument(id, monuments);
    }
}

