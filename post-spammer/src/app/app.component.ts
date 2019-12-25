import { Component } from '@angular/core';
import { SpammerComponent } from './spammer/spammer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-spammer';
  articles = new Array<string>();

  spam(text: HTMLInputElement, times: HTMLInputElement): boolean
  {
    console.log(`spamText: ${text.value} and spamNum: ${times.value}`);
    let cont = Number(times.value);


    for(let i:number =0; i< cont; i++)
    {
      this.articles.push(i+1 + " " + text.value);
    }

    return false;
  }
}
