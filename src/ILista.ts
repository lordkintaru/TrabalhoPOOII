
interface ILista {
    adicionar(...item: Array<any> ): void;
    remover(...idItem: Array<number>): void;
    buscarPorId(id: number): any | undefined;
}

export default ILista;