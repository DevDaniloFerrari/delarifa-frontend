import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurriculumComponent } from '@shared/components';
import { Curriculum } from '@shared/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public daniloCurriculum: Curriculum;
  public lucasCurriculum: Curriculum;
  public manoelCurriculum: Curriculum;
  public kimCurriculum: Curriculum;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.createCurriculums();
  }

  public openCurriculum(curriculum: Curriculum) {
    const modalRef = this.modalService.open(CurriculumComponent);
    modalRef.componentInstance.curriculum = curriculum;
  }

  private createCurriculums() {
    this.daniloCurriculum = new Curriculum(
      'Danilo Ferrari',
      'Sou desenvolvedor Fullstack em uma empresa de compras colaborativas.',
      'https://www.linkedin.com/in/danilo-ferrari-5830a4161',
      'https://www.github.com/DevDaniloFerrari',
      ['C#', '.NET Core', 'Angular', 'Azure', 'AWS', 'SQL Server']);


    this.lucasCurriculum = new Curriculum(
      'Lucas Oliveira',
      'Desenvolvedor Fullstack',
      'https://www.linkedin.com/in/lucas-oliveira-91a27716a',
      'https://github.com/DevLucasOliveira',
      ['C#', '.NET Core', 'Angular', 'SQL Server']);

      //ToDo-Manoel
      //Preencher o curriculo

    this.manoelCurriculum = new Curriculum(
      'Manoel Merlin',
      'Desenvolvedor Web Fullstack',
      'https://www.linkedin.com/in/manoel-merlin-neto-596904184/',
      'https://github.com/manoelmerlin',
      ['PHP', 'Angular', 'Jquery', 'MySql']);

    this.kimCurriculum = new Curriculum(
      'Kim Kokubun',
      'Sou desenvolvedor FullStack em uma empresa que presta serviços Financeiros',
      'https://www.linkedin.com/in/kim-silveira-882296161/',
      'https://github.com/kimkokubun',
      ['Java', 'Angular', 'PostgreSQl', 'NodeJs']);

  }
}
