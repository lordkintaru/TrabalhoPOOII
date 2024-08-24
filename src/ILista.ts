
interface ILista {
    adicionar(item: any): void;
    remover(item: any): void;
    buscarPorId(id: any): any | undefined;
}

export default ILista;