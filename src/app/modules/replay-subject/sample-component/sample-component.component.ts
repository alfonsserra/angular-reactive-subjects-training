import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-replay-subject-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls:   ['./sample-component.component.scss']
})
export class ReplaySubjectSampleComponentComponent implements OnInit {

  public cards: Array<string> = [];
  private lastComponentId = 1;

  constructor() {
  }

  private getComponentId(): string {
    return '' + this.lastComponentId++;
  }

  public ngOnInit(): void {
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
  }

  public doAddCard(): void {
    this.cards.push(this.getComponentId());
  }

  public doRemoveCard(id: string): void {
    const index = this.cards.indexOf(id, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
}
