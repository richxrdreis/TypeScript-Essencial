interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const produto1: Produto = {
    id: 1,
    nome: 'Camiseta',
    descricao: 'Camiseta preta',
    preco: 29.9,
    imagem: 'https://via.placeholder.com/300x200',
};

const produto2: Partial<Produto> = {
    id: 2,
    nome: 'Notebook',
    preco: 2999.9,
};

console.log(produto1);
console.log(produto2);
