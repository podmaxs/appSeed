export class repo {
	
	private name:string   = "";
	public  avatar:string = "";

	constructor(data:any = {}) {
		this.name   = data['user'] != undefined?data['user']:"";
		this.avatar = data['avatar'] != undefined?data['avatar']:"";
	}

	public get_name(){
		return this.name;
	}
	
}