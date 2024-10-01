interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Toby',
    tipo: 'terrestre',
    domestico: true,
    dono: 'João',
};

console.log(cachorro);
