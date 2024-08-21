import Item from "./Item";
interface ICatalogo {
    adicionar(item: Item): void;
    remover(item: Item): void;
    buscarPorId(id: Number): Item | undefined;
}

export default ICatalogo;