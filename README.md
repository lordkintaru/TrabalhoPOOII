Exercício: Sistema de Gerenciamento de Biblioteca (POO2 + Arquitetura de Software)

Você deverá implementar um sistema simples de gerenciamento de uma biblioteca, utilizando TypeScript. O sistema deverá permitir o gerenciamento de livros, membros, e empréstimos de livros. O objetivo da atividade será explorar o uso de herança, polimorfismo e interfaces, além de aplicar os princípios SOLID e o padrão GRASP.
Funcionalidades que deverão ser implementadas:

Cadastro de Livros: O sistema deve permitir o cadastro de livros com informações como título, autor, ISBN, e categoria (por exemplo, ficção, não-ficção, etc.).
Cadastro de Membros: Deve ser possível cadastrar membros da biblioteca com nome, ID, e status de associação (por exemplo, ativo, inativo).
Empréstimo de Livros: O sistema deve permitir que um membro ative faça o empréstimo de um ou mais livros disponíveis.
Devolução de Livros: O sistema deve permitir que um membro devolva os livros emprestados.
Notificação de Atraso: Caso um livro não seja devolvido em tempo, o sistema deve notificar o membro sobre o atraso.
Após a criação das funcionalidades destacadas acima, crie em seguida:

Cadastro de Revistas: O sistema deve permitir o cadastro de revistas com informações como título, autor, ISBN e data de lançamento.
Cadastro de titulares e dependentes: O sistema deverá dividir os membros em 2 subcategorias. A diferença é que o titular tem sempre uma lista de dependentes.
Empréstimo, devolução e notificação de atraso em revistas: O sistema deverá permitir que um membro ativo o empréstimo de um ou mais itens disponíveis (livros e/ou revistas). O sistema também deverá permitir a devolução dos Itens, assim como notificar caso haja itens em atraso.
Requisitos Técnicos importantes para avaliação:

Uso de Herança e Polimorfismo: Faça uso de herança para criar uma hierarquia de classes, como uma classe base Item com subclasses Livro, Revista,assim como Membros, Titulares e Dependentes. Utilize polimorfismo para que diferentes tipos de itens possam ser tratados de forma semelhante no sistema, observando e garantindo os princípios SOLID estudados em arquitetura.
Interfaces: Crie interfaces que definam contratos para funcionalidades que podem ser implementadas por várias classes, como ICatalogo, que pode ser implementada por classes como CatalogoDeLivros, CatalogoDeRevistas, etc… A Interface Catalogo deverá trazer as funcionalidades adicionarItem, removerItem e buscarItemPorId.
Princípios SOLID: 
Open-Closed Principle (OCP): As classes devem ser abertas para extensão, mas fechadas para modificação. Por exemplo, ao adicionar novas categorias de itens (como Revista), o sistema deve permitir isso sem modificar o código existente.
Liskov Substitution Principle (LSP): As subclasses devem ser substituíveis por suas classes base sem quebrar a funcionalidade do sistema. Por exemplo, um Livro deve poder ser tratado como um Item em todas as partes do sistema. O mesmo vale para Revista.
Dependency Inversion Principle (DIP): Dependa de abstrações e não de implementações. Use interfaces para definir contratos que diferentes classes podem implementar.
Controller: Implemente um controlador (BibliotecaController) que seja responsável por orquestrar a lógica de negócios do sistema. Esta classe deverá ter um atributo catalogo: ICatalogo que implemente as funcionalidades de cadastrar item, que recebe um item e adiciona ao catalogo, assim como as outras funcionalidades. Crie instancias diferentes de ICatalogo para Livros e Revistas e teste as funcionalidades de inclusão e remoção.
Instruções gerais:

Crie a hierarquia de classes e interfaces necessárias para o sistema, utilizando os conceitos de POO.
Aplique os princípios SOLID conforme descrito acima.
Implemente a lógica de negócios no controlador da biblioteca.
Teste o sistema com diferentes cenários de uso, como cadastrar itens, realizar empréstimos e verificar a substituição de classes conforme o princípio LSP.
Critérios de Avaliação:

Correta implementação das funcionalidades usando os recursos do TypeScript.
Correta aplicação dos conceitos de herança, polimorfismo e interface.
Aplicação correta dos princípios SOLID (especialmente OCP, LSP e DIP).
Qualidade do código, incluindo clareza, organização, e uso de boas práticas de programação.
Testes realizados para garantir o funcionamento do sistema em diferentes cenários.
