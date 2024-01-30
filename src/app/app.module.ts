import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighLightDirective } from './components/directives/highLihgtDirective';
import { BetterHiliterDirectiveDirective } from './components/directives/better-hiliter-directive.directive';
import { ObservablesComponent } from './components/observables/observables.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HeaderComponent } from './components/header/header.component';
import { RoutingComponent } from './components/routing/routing.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthService } from './components/routing/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ChildRouteComponent } from './components/routing/child-route/child-route.component';
import { ChildRouteParamsComponent } from './components/routing/child-route-params/child-route-params.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ShortenPipe } from './components/pipes/shorten.pipe';
import { FilterPipe } from './components/pipes/filter.pipe';
import { HttpRequestsComponent } from './components/http-requests/http-requests.component';
import { AuthInterceptorService } from './components/http-requests/auth-interceptor.service';
import { LoggingInterceptorService } from './components/http-requests/logging-interceptor.service';
import { DynamicComponentsComponent } from './components/dynamic-components/dynamic-components.component';
import { DeclarativeApproachComponent } from './components/dynamic-components/declarative-approach/declarative-approach.component';
import { ImperativeApproachComponent } from './components/dynamic-components/imperative-approach/imperative-approach.component';
import { AlertComponent } from './components/dynamic-components/alert/alert.component';
import { DynamicChildLoaderDirective } from './components/dynamic-components/dynamic-child-loader.directive';
import { AnimationsComponent } from './components/animations/animations.component';
import { BasicsComponent } from './components/animations/basics/basics.component';
import { HomeComponent } from './components/animations/home/home.component';
import { AboutComponent } from './components/animations/about/about.component';
import { OpenCloseComponent } from './components/animations/open-close/open-close.component';
import { SliderComponent } from './components/animations/slider/slider.component';
import { HerosGroupComponent } from './components/animations/filter/heros-groups.component';
import { HeroListGroupComponent } from './components/animations/filter/hero-list-group/hero-list-group.component';
import { HeroGroupComponent } from './components/animations/filter/hero-group/hero-group.component';
import { TictactoeComponent } from './components/games/tictactoe/tictactoe.component';
import { GamesComponent } from './components/games/games.component';
import { BoardComponent } from './components/games/tictactoe/board/board.component';
import { SquareComponent } from './components/games/tictactoe/square/square.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    BetterHiliterDirectiveDirective,
    ObservablesComponent,
    DirectivesComponent,
    HeaderComponent,
    RoutingComponent,
    FooterComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    LoginComponent,
    ChildRouteComponent,
    ChildRouteParamsComponent,
    FormsComponent,
    ReactiveFormsComponent,
    TemplateComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpRequestsComponent,
    DynamicComponentsComponent,
    DeclarativeApproachComponent,
    ImperativeApproachComponent,
    AlertComponent,
    DynamicChildLoaderDirective,
    AnimationsComponent,
    BasicsComponent,
    HomeComponent,
    AboutComponent,
    OpenCloseComponent,
    SliderComponent,
    HerosGroupComponent,
    HeroListGroupComponent,
    HeroGroupComponent,
    TictactoeComponent,
    GamesComponent,
    BoardComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageSliderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
