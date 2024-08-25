
interface ILista {
    adicionar(...item: Array<any> ): void;
    remover(...idItem: Array<any>): void;
    buscarPorId(id: any): any | undefined;
}

export default ILista;