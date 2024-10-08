class Usuario {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public ativo: boolean,
        public senha: string | null = null,
    ) {}
}

const usuario: Usuario = new Usuario(1, 'João', 'joao@empresa.com.br', true);
usuario.nome = 'João da Silva';
console.log(usuario.nome);
