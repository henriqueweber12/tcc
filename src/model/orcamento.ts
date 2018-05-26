import { Veiculo } from "./veiculo";
import { Usuario } from "./usuario";

export class Orcamento{

    codigo: number;
    usuario: Usuario;
    veiculo : Veiculo;
    valor: number;
    formapagamento : number;
}