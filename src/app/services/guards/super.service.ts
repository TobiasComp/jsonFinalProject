import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  isLoggedIn=false

  constructor(public router:Router) {
    this.router.events.subscribe( data => {
      if (data instanceof NavigationEnd){
        if (this.router.url.includes('login')== false)
          if (this.isLoggedIn ==false)
            this.router.navigateByUrl('login');
        
      }
  });
}
}
