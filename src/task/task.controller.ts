import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tarefas')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Cria uma nova tarefa' })
  @ApiResponse({ status: 200, description: 'Tarefa criada com sucesso' })
  @ApiBody({
    schema: {
      example: {
        title: 'Tarefa 1',
        description: 'Descrição da tarefa 1',
        completed: false,
        tagId: 1
      }
    }
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto)
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as tarefas' })
  @ApiResponse({ status: 200, description: 'Lista de tarefas' })
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista uma tarefa específica' })
  @ApiResponse({ status: 200, description: 'Tarefa encontrada' })
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Atualiza uma tarefa específica' })
  @ApiResponse({ status: 200, description: 'Tarefa atualizada com sucesso' })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma tarefa específica' })
  @ApiResponse({ status: 200, description: 'Tarefa removida com sucesso' })
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(+id);
  }

  @Delete()
  @ApiOperation({ summary: 'Remove todas as tarefas completas' })
  @ApiResponse({ status: 200, description: 'Tarefas completas removidas com sucesso' })
  async removeAll()
  {
    return await this.taskService.deleteAll();
  }
}
