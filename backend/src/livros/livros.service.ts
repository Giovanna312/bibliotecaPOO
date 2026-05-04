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
    
    // Gera um ID baseado no tamanho atual + 1
    novoLivro.id = this.livros.length + 1;
    novoLivro.titulo = createLivroDto.titulo;
    novoLivro.autor = createLivroDto.autor;
    novoLivro.nome = createLivroDto.nome;
    novoLivro.qtd_paginas = createLivroDto.qtd_paginas;
    
    this.livros.push(novoLivro);
    return novoLivro;
  }

  // AQUI ESTAVA O ERRO: Agora ele retorna a lista real!
  findAll() {
    return this.livros;
  }

  findOne(id: number) {
    return this.livros.find(livro => livro.id === id);
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    
    if (livroIndex >= 0) {
      // Mescla os dados antigos com os novos
      this.livros[livroIndex] = { 
        ...this.livros[livroIndex], 
        ...updateLivroDto 
      };
      return this.livros[livroIndex];
    }
    return `Livro com ID ${id} não encontrado`;
  }

  remove(id: number) {
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    if (livroIndex >= 0) {
      const removido = this.livros.splice(livroIndex, 1);
      return removido[0];
    }
    return `Livro com ID ${id} não encontrado`;
  }
}