import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto)  {
    const { title, description, completed, tagId } = createTaskDto

    const tag = await this.prisma.tags.findUnique({
      where: { id: tagId }
    })

    if (!tag) {
      throw new BadRequestException(`Categoria não existe`)
    }

    const tagName = tag.name;
    console.log(`Nome da categoria associada à tarefa: ${tagName}`);

    return await this.prisma.task.create({
      data: {
        title,
        description,
        completed,
        tag: {
          connect: {
            id: tagId
          }
        }
      }
    })
  }

  async findAll() {
    return await this.prisma.task.findMany({
      include: {
        tag: true
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: {
        id: id
      },
      include: {
        tag: true
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
