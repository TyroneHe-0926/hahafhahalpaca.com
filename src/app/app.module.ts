import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { Navigator } from './navigator/navigator.component';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.component';
import { IntroPage } from './intro/intro.component';
import { MiraPage } from './related-exp/mira/mira.component';
import { MiraVideoPage } from './related-exp/miravideo/miravideo.component';
import { ElginRoboticsPage } from './related-exp/elgin-robotics/elgin-robotics.component';
import { PoobearPage } from './projects/poobear/poobear.component';
import { RamonePage } from './projects/ramone/ramone.component';
import { TurtlePage } from './projects/turtle/turtle.component'
import { SearchEngPage } from './projects/searcheng/searcheng.component';
import { ContactPage } from './contact/contact.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    Navigator,
    HomePage,
    IntroPage,
    MiraPage,
    MiraVideoPage,
    ElginRoboticsPage,
    PoobearPage,
    RamonePage,
    TurtlePage,
    SearchEngPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomePage },
      { path: 'intro', component: IntroPage },
      { path: 'related-exp/mira', component: MiraPage },
      { path: 'related-exp/miravideo', component: MiraVideoPage},
      { path: 'related-exp/elgin-robotics', component: ElginRoboticsPage },
      { path: 'projects/poobear', component: PoobearPage },
      { path: 'projects/ramone', component: RamonePage },
      { path: 'projects/turtle', component: TurtlePage },
      { path: 'projects/searcheng', component:SearchEngPage},
      { path: 'contact', component: ContactPage },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
