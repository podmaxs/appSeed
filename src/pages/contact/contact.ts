import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api }           from '../../providers/api';
import { repo }          from "../../implements/repo";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	public list:any = [];
  constructor(public navCtrl: NavController, public api:Api) {
  	
  	this.api.get('users/mralexgray/repos')
  	.then(
  		(data) =>{
  			//console.log(data,'GET LIST');
  			for(let i in data)
  				this.list.push(new repo(data[i]));
  			console.log(this.list);
  		},
  		(error) => {
  			console.log(error);
  		}
	);


  }

}
