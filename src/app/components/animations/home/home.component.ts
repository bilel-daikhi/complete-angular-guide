import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';
import { ProjectsService } from './projects.service';
import { SBSAProject } from './project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides: SlideInterface[] = [];
  constructor(public projectsService: ProjectsService) {}
  ngOnInit(): void {
    this.projectsService.getProjetsLandingPage().subscribe({
      next: (result: any) => {
        result.map((item: any) => {
          let newProject: SBSAProject;
          newProject = item;
          if (item.images) {
            let imageLanding = item.images?.filter(
              (landing) => landing.landing === 1
            )[0];
            this.slides = [
              ...this.slides,
              {
                url: imageLanding.url,
                title: item.name,
                description: imageLanding.description_en,
              },
            ];
          }
        });
      },
    });
  }
}
