import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'micro-app';
  routingPrefix = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log("here in code");
    window.addEventListener("message", (message:any) => {
      this.handleMessage(message);
    });
  }

  handleMessage(message:any) {
    const msgType = this.getType(message);
    const msgValue = this.getValue(message);
    switch(msgType) {
      case 'route-prefix': {
        console.log('reseting router config...');
        this.routingPrefix = msgValue;
        this.resetRouting(msgValue);
        break;
      }
      case 'route-change': {
        console.log('navigating to url....');
        this.router.navigateByUrl(msgValue);
        break;
      }
      default: {
        console.log('invalid data receive', message);
        break;
      }
    }
  }

  resetRouting(msgValue: string) {

    const config = this.router.config.map((conf) => {
      const root = conf.data && conf.data['root'];
      if(root) {
        conf.path = msgValue;
      }
      return conf;
    })

    this.router.resetConfig(config);
    this.router.initialNavigation();
  
  }

  getType(message: any) {
    return message && message.data && message.data.type;
  }

  getValue(message:any) {
    return message && message.data && message.data.value;
  }

  goTo(route:string) {
    const url = `${this.routingPrefix}/${route}`
    this.router.navigateByUrl(url);
  }

}
