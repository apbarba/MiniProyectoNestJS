import { Injectable } from '@nestjs/common';
import { monument } from './monuments.model';

@Injectable()
export class MonumentsService {

    getAllMonuments() {
       
        return 'Este método retorna todos los monumentos';
    }

    getMonumentsFilterByName(name:string) {
       
            return `Este método retorna todos los monumentos filtrados por nombre según la query: ${name}`;
    }

    getMonumentById(id: string){

        return `Este método retorna el monumento con id: ${id}`;
    }

    createMonuments(monuments: monument){

        console.log(monuments);

        return 'Este método crea un monumento nuevo';
    }

    replaceMonument(id: string, monuments: monument){

        console.log(monuments);

        return `Este método reemplaza un monumento con el id: ${id}`;
    }

    updateMonument(id: string,  monuments: monument){

        console.log(monuments);

        return `Este métdo reemplaza parcialmente un monumento con el id: ${id}`
    }

    deleteMonument(id: string, monuments: monument){

        return `Este método elimina un monumento con el id: ${id}`;
    }
}
