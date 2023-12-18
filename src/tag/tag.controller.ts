import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Cria uma nova categoria' })
  @ApiResponse({ status: 200, description: 'Categoria criada com sucesso' })
  @ApiBody({ 
    schema: {
      example: {
        name: 'Categoria 1'
      }
    }
  })
  async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagService.create(createTagDto)
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as categorias' })
  @ApiResponse({ status: 200, description: 'Lista de categorias' })
  async findAll() {
    return await this.tagService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista uma categoria específica' })
  @ApiResponse({ status: 200, description: 'Categoria encontrada' })
  async findOne(@Param('id') id: string) {
    return await this.tagService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma categoria específica' })
  @ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso' })
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return await this.tagService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma categoria específica' })
  @ApiResponse({ status: 200, description: 'Categoria removida com sucesso' })
  async remove(@Param('id') id: string) {
    return await this.tagService.remove(+id);
  }
}
