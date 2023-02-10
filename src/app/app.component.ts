import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`<div><h1>welcome {{pageTitle}}</h1>
   <pm-products></pm-products>
</div>
`
})

export class AppComponent{
  [x: string]: any;
  pageTitle: string = 'Acme Product Management';
}