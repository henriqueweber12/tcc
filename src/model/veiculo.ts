import { VeiculoImagem } from './veiculoimagem';
export class Veiculo{

    codigo: number;
    modelo: string;
    marca: string;
    ano: number;
    cor: string;
    chassi: number;
    renavam: number;
    valor: number;
    valorinicial : number;
    valorfinal: number;
    imagens : Array<VeiculoImagem>;
}