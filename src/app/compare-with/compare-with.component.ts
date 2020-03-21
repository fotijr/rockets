import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UnitReference } from '../models';

@Component({
  selector: 'rkt-compare-with',
  templateUrl: './compare-with.component.html',
  styleUrls: ['./compare-with.component.scss']
})
export class CompareWithComponent implements OnInit {
  @Input() unit: string = 'kg';
  @Input() references: UnitReference[] = [];
  @Output() referenceSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  referenceClicked(value: number): void {
    this.referenceSelected.emit(value);
  }
}
