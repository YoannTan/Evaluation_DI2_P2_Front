import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component'
import { EventListPageComponent } from './page/event-list-page/event-list-page.component'

export const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: EventListPageComponent}
    ]
  }
];
