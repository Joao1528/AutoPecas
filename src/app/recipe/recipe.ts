export class Recipe{

    _id:string;
    codigo:string;
    descricao:string;
    qtdeDisponivel: string;
    capacitadeMaxima : string
    qtdeMinima : string

    constructor(_id:string, codigo:string,description:string,qtdeDisponivel:string,capacitadeMaxima:string,qtdeMinima:string){
        this._id = _id;
        this.codigo = codigo;
        this.descricao = description;
        this.qtdeDisponivel = qtdeDisponivel;
        this.capacitadeMaxima = capacitadeMaxima
        this.qtdeMinima = qtdeMinima
    }

}