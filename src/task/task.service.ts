import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto)  {
    return await this.prisma.task.create({
      data: createTaskDto
    })
  }

  async findAll() {
    return await this.prisma.task.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.task.update({
      where: {
        id: id
      },
      data: updateTaskDto
    })
  }

  async remove(id: number) {
    return await this.prisma.task.delete({
      where: {
        id: id
      }
    })
  }

  async deleteAll() {
    return await this.prisma.task.deleteMany()
  }
}
