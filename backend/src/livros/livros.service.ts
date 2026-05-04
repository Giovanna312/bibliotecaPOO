import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  //encapsulamento EHP
  //Pilar POO: encapsulamento, herança e polimorfismo
  private livros:Livro[] = []; 



  create(titulo: string, autor: string, nome: string, qtd_paginas: number) {
    const novolivro = new Livro();
    novolivro.id = this.livros.length++;
    novolivro.titulo = titulo;
    novolivro.autor = autor;
    novolivro.nome = nome;
    novolivro.qtd_paginas = qtd_paginas;
    this.livros.push(novolivro);
    return novolivro;
  }

  findAll() {
    return `This action returns all livros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
