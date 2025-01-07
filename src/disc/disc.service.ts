import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateDiscDto } from './dto/create-disc.dto';
import { UpdateDiscDto } from './dto/update-disc.dto';
import { Disc } from './entities/disc.entity';
import { Repository } from 'typeorm';

//Klass med metoder för att kontakta databasen och returnera svar.
//Felkoder och kontroller av inmatade fälld görs här genom .dto.ts-classerna. Felkoderna skapas delvis automatiskt av import modulen NotFoundException.
@Injectable()
export class DiscService {

  constructor(
    @Inject('DISC_REPOSITORY')
    private discRepository: Repository<Disc>,
  ) { }

  //Metod för att skapa ett nytt discinlägg
  create(disc: CreateDiscDto): Promise<Disc> {
    //Skapar ett objekt med alla variabler och sparar in objeket i databasen
    const response = this.discRepository.save(this.discRepository.create(disc));
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('POST: Create new disc failed..'); }
    return response;
  }

  //Metod för att hämta alla discar
  async findAll(): Promise<Disc[]> {
    //Hämtar object från databasen
    let response = await this.discRepository.find();
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('GET: Find all failed.'); }
    return response;
  }

  //Metod för att hitta och returnera en disc med dess id
  async findOne(id: number): Promise<Disc> {
    //Hämtar object från databasen
    let response = await this.discRepository.findOne({ where: { id } });
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('GET: Find one failed.'); }
    return response;
  }

  //Metod för att hitta och uppdatera en disc med dess id
  async update(id: number, message: UpdateDiscDto): Promise<Disc> {
    //Uppdaterar ett objekt 
    const response = await this.discRepository.findOne({ where: { id } });
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('PUT: Update failed.'); }
    return await this.discRepository.save(Object.assign(response, message));
  }

  //Metod för att hitta och ta bort en disc med dess id
  async remove(id: number): Promise<string> {
    // skickar felmeddelande om objekt inte finns
    if (!await this.discRepository.findOne({ where: { id } })) {
      throw new NotFoundException('DELETE: delete failed.');
    }
    //Tar bort valt id
    this.discRepository.delete(id);
    return `Delete ${id} completed`;
  }
}
