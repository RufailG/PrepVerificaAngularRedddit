import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-spammer',
  templateUrl: './spammer.component.html',
  styleUrls: ['./spammer.component.css']
})
export class SpammerComponent implements OnInit {

  @Input() txt : string;

  constructor() { }

  ngOnInit() {
  }

}
