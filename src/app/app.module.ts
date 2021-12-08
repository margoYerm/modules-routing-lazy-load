import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsAndSyntaxModule } from './modules/basics-and-syntax/basics-and-syntax.module';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { DirectivesModule } from './modules/directives/directives.module';
import { ComponentsInDetailModule } from './modules/components-in-detail/components-in-detail.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicsAndSyntaxModule,
    DirectivesModule,
    ComponentsInDetailModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
