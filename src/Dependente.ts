import Membro from "./Membro";

class Dependente extends Membro{

    constructor(nome: string, status: string ){
        super(nome,status);
    }

    public toString(): string {
        return super.toString();
    }

}

export default Dependente; 