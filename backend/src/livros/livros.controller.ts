import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(
    @Body()
    dados: {
      titulo: string;
      autor: string;
      nome: string;
      qtd_paginas: number;
    },
  ) {
    return this.livrosService.create(
      dados.titulo,
      dados.autor,
      dados.nome,
      dados.qtd_paginas,
    );
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    return this.livrosService.update(+id, updateLivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livrosService.remove(+id);
  }
}