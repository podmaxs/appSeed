import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public text:string = '';
	public list:any    = [];
	
	constructor(public navCtrl: NavController) {
		this.text = 'Hola';
	}


	add(data:any = {}){
		if(data['text'] != undefined)
			this.list.push(data['text']);
	}

}