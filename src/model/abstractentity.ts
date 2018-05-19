
export abstract class AbstractEntity {

	protected _id: number;
	protected _deletado: boolean = false;
	protected _versao: number = 0;

	public get versao(): number {
		return this._versao;
	}

	public set versao(value: number) {
		this._versao = value;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get deletado(): boolean {
		return this._deletado;
	}

	public set deletado(value: boolean) {
		this._deletado = value;
	}


}
