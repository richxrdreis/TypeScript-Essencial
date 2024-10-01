interface Especificacoes {
    marca: string;
    modelo: string;
    placaDeVideo: string;
    memoria: string;
    processador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
}

let computador: Especificacoes = {
    marca: 'Dell',
    modelo: 'XPS 13',
    placaDeVideo: 'RTX 3090',
    memoria: '16GB',
    processador: 'Intel® Core i7',
    armazenamento: '256 GB SSD',
    hd: '1TB',
    bluetooth: true,
    hdmi: true,
};

console.log(computador);
