import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  // Pilar POO: Encapsulamento (private)
  private livros: Livro[] = []; 

  create(createLivroDto: CreateLivroDto) {
    const novoLivro = new Livro();
    
    novoLivro.id = this.livros.length + 1;
    novoLivro.titulo = createLivroDto.titulo;
    novoLivro.autor = createLivroDto.autor;
    novoLivro.nome = createLivroDto.nome;
    novoLivro.qtd_paginas = createLivroDto.qtd_paginas;
    
    this.livros.push(novoLivro);
    return novoLivro;
  }

  findAll() {
    return this.livros;
  }

  findOne(id: number) {
    return this.livros.find(livro => livro.id === id);
  }

  update(id: number, dados:Partial<Livro>) {
    const Index = this.livros.findIndex(livro => livro.id === id);
    
    if (Index >= 0) {
      
      this.livros[Index] = { 
        ...this.livros[Index], 
        ...dados
      };
      return this.livros[Index];
    }
    return `Livro com ID ${id} não encontrado`;
  }

  remove(id: number) {
    const Index = this.livros.findIndex(livro => livro.id === id);
    if (Index >= 0) {
      const removido = this.livros.splice(Index, 1);
      return `Livro com ID ${id} foi removido.`;
    }
    return `Livro com ID ${id} não encontrado.`;
  }
}