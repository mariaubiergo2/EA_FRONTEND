import { Component, Type } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormchallengeComponent } from '../formchallenge/formchallenge.component';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})

export class ChallengesComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Añadir Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent},
          { title: 'Listado Challenges', cols: 1, rows: 1 , html: '', component: FormchallengeComponent},
          { title: 'Modificar Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent},
          { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
        ];
      }

      return [
        { title: 'Añadir Challenge', cols: 2, rows: 1 , html: '', component: FormchallengeComponent},
        { title: 'Listado Challenges', cols: 1, rows: 1 , html: '', component: FormchallengeComponent},
        { title: 'Modificar Challenge', cols: 1, rows: 2 , html: '', component: FormchallengeComponent},
        { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
