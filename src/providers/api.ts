import { Injectable }                         from '@angular/core';
import { Observable }                         from 'rxjs/Rx';
import { Http, Headers, RequestOptions}       from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.

  users/mralexgray/repos
*/
@Injectable()
export class Api {

	public url:string = "https://api.github.com/";

  	constructor(public http:Http) {
   	 
 	}
  	get3(path:string = "", h:any = {}){

	  	return new Promise((resolve, reject) =>{
	  			let headers = new Headers(h);
	  		    let options = new RequestOptions({ headers: headers });
	  			this.http.get(this.url+path,options)
	  			.map(res => {let json = res.json(); return typeof json.data != typeof undefined?json.data:{};})
	  			.subscribe(
	  				data => {
	  					if(typeof data == typeof {})
	  						resolve(data);
	  					else
	  						reject('Response data error');
	  				},
	  				error => {
	  					reject(error);
	  				}
	  			);
	  		});
  	}
  	
  	get(path:string = "", h:any = {}){
	  	return new Promise((resolve, reject) =>{
			if(path != ''){
				resolve(
					[
						{
							"avatar": "https://avatars0.githubusercontent.com/u/262517?v=3",
							"user"  : "mralexgray/2200087-Serial-Protocol"
						},
						{
							"avatar": "https://avatars0.githubusercontent.com/u/262517?v=3",
							"user"  : "mralexgray/2200087-Serial-Protocol2"
						}
					]	
				);
				console.log('promise')
			}else{
				reject('Error');
			}
		});
  	}

  	get2(path:string = ""){
  		return new Observable((observer)=>{
  			observer.next(1);

  			setTimeout(()=>{
  				observer.next(2);
  			},1000);

  			setTimeout(()=>{
  				observer.next(3);
  			},2000);

  			setTimeout(()=>{
  				observer.complete();
  			},2100);

  		});
  	}



}
