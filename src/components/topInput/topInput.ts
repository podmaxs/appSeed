import { Component, Output, EventEmitter, Input }     from '@angular/core';


@Component({
	selector:'top-input',
	templateUrl: 'topInput.html'
})

export class topInputComponent{

	//public text:string      = '';
	@Output() onAddText:any = new EventEmitter();
	@Input() text:string    = '';
	
	constructor() {
		
	}

	add(){
		this.onAddText.emit({text:this.text});
		this.text = '';
	}
}