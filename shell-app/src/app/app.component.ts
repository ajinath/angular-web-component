import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild('addonEle') addonRef: ElementRef<HTMLElement>;


  title = 'shell app';
  selectedApp = '';

  items = [
    { title: 'Micro App - Page 1', link: '/page-one', pod: 'micro-app' },
    { title: 'Micro App - Page 2', link: '/page-two', pod: 'micro-app' }
  ];

  pods = { 
    'micro-app': { 
      host: 'http://localhost:5000', 
      js: "main-F5V6OZ3S.js",
      name: 'micro-ui'
    }
  }

  loadedAddon = [];

  private readonly routingPrefix = 'prefix';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log("version = 1.0")

    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd) {
        const item = this.items.find(ev => `/${this.routingPrefix}${ev.link}` === e.url)
        if(item && item.pod && this.loadedAddon.includes(item.pod)) {
          this.postMessage({ type: 'route-change', value: e.url });
        } else if (item && item.pod){
          this.loadedAddon.push(item.pod);
          console.log("loadedAddon = ", this.loadedAddon)
          this.appendScript(item.pod, e.url);
        } else {
          console.log("no addon found = ", this.loadedAddon)
        }
      }
    })
  }

  postMessage(data) {
    window.postMessage(data, '*');
  }

  appenAddon(podName) {
    const { name } = this.pods[podName];
    const element = document.createElement(name);
    this.addonRef.nativeElement.appendChild(element);
  }

  removeLoadedAddon() {
    const addonNodes = this.addonRef.nativeElement.childNodes;
    addonNodes.forEach((node: ChildNode) => {
      if(node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
  }

  appendScript(podName: string, url: string) { 
    const scriptTag = document.createElement('script');
    const { host, js } = this.pods[podName];
    scriptTag.src = `${host}/${js}`;
    scriptTag.type = 'module';
    scriptTag.onerror = () => {
      console.log("script tag")
    }

    scriptTag.onload = () => {
      console.log("script tag loaded");
      this.appenAddon(podName);
      this.resetRouting();
      this.postMessage({ type: 'route-change', value: url });
    }

    document.body.append(scriptTag)
  }

  resetRouting() {
    this.postMessage({ type: 'route-prefix', value: 'prefix' });
  }


  onClick(item: any) {
    console.log("item = ", item)
    const prefix = this.routingPrefix;
    this.router.navigateByUrl(`/${prefix}${item.link}`);
  }
}
