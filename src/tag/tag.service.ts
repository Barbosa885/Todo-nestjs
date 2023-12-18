import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

 async create(createTagDto: CreateTagDto) {
   try { 
    return await this.prisma.tags.create({
      data: createTagDto
      })
     }
     catch (e) {
       console.error(e)
       throw new BadRequestException("Já existe isso ai meu fi")
     }
    }

    async findAll() {
      return await this.prisma.tags.findMany()
    }

    async findOne(id: number) {
      return await this.prisma.tags.findUnique({
        where: {
          id: id
        }
      });
    }

    async update(id: number, updateTagDto: UpdateTagDto) {
    return await this.prisma.tags.update({
      where: {
        id: id
      },
      data: updateTagDto
    })
  }

  async remove(id: number) {
    return await this.prisma.tags.delete({
      where: {
        id: id
      }
    }) 
  }
}
