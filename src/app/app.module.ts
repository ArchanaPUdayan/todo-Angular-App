import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { ViewalltodoComponent } from './viewalltodo/viewalltodo.component';

const myRoute:Routes=[
  {
    path:"",
    component:TodoEntryComponent
  },
  {
    path:"view",
    component:ViewalltodoComponent

  }
]


@NgModule({
  declarations: [
    AppComponent,
    TodoEntryComponent,
    ViewalltodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
