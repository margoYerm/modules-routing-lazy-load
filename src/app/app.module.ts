import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsAndSyntaxModule } from './modules/basics-and-syntax/basics-and-syntax.module';
import { MainNavComponent } from './main-nav/main-nav.component';





@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicsAndSyntaxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
