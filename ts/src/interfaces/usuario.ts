interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'nome da silva',
    email: 'nome@empresa.com.br',
    ativo: true,
    senha: null,
};

console.log(usuario.nome);
console.log(usuario);
