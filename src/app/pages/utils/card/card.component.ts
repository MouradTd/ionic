import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  {

  constructor() { }
  @Input() title: string | undefined;
  @Input() count: string | undefined;
  @Input() color: string | undefined;
  @Input() icon: string | undefined;
  @Input() cardColor: string | undefined;



}
