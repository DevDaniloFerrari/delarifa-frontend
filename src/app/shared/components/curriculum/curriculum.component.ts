import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Curriculum } from '@shared/models';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  @Input() curriculum: Curriculum;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  public close() {
    this.activeModal.close();
  }

}
