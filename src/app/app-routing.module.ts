import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {
  canActivate,
  canActivateChild,
} from './components/routing/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { ChildRouteComponent } from './components/routing/child-route/child-route.component';
import { ChildRouteParamsComponent } from './components/routing/child-route-params/child-route-params.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HttpRequestsComponent } from './components/http-requests/http-requests.component';
import { DynamicComponentsComponent } from './components/dynamic-components/dynamic-components.component';
import { DeclarativeApproachComponent } from './components/dynamic-components/declarative-approach/declarative-approach.component';
import { ImperativeApproachComponent } from './components/dynamic-components/imperative-approach/imperative-approach.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { BasicsComponent } from './components/animations/basics/basics.component';
import { HomeComponent } from './components/animations/home/home.component';
import { AboutComponent } from './components/animations/about/about.component';
import { OpenCloseComponent } from './components/animations/open-close/open-close.component';
import { SliderComponent } from './components/animations/slider/slider.component';
import { HerosGroupComponent } from './components/animations/filter/heros-groups.component';
import { HeroGroupComponent } from './components/animations/filter/hero-group/hero-group.component';
import { GamesComponent } from './components/games/games.component';
import { TictactoeComponent } from './components/games/tictactoe/tictactoe.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'observables',
    component: ObservablesComponent,
    canActivate: [canActivate],
  },
  { path: 'directives', component: DirectivesComponent },
  {
    path: 'routing',
    component: RoutingComponent,
    canActivate: [canActivate],
    children: [
      { path: ':id', component: ChildRouteComponent },
      {
        path: ':id/edit',
        component: ChildRouteParamsComponent,
        canActivateChild: [canActivateChild],
      },
    ],
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      { path: 'template', component: TemplateComponent },
      { path: 'reactive', component: ReactiveFormsComponent },
    ],
  },
  {
    path: 'dynamic-component',
    component: DynamicComponentsComponent,
    children: [
      { path: 'declarative', component: DeclarativeApproachComponent },
      { path: 'imperative', component: ImperativeApproachComponent },
    ],
  },
  {
    path: 'games',
    component: GamesComponent,
    children: [
      { path: '', redirectTo: '/games/tictactoe', pathMatch: 'full' },
      { path: 'tictactoe', component: TictactoeComponent },
    ],
  },

  {
    path: 'animations',
    component: AnimationsComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'AboutPage' },
      },
      { path: 'open-close', component: OpenCloseComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'heros-group', component: HerosGroupComponent },
      { path: 'filter', component: HeroGroupComponent },
    ],
  },
  { path: 'http', component: HttpRequestsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
