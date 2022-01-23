import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BottonComponent } from './components/botton/botton.component';
import { TaskComponent } from './components/tasks/task.component';
import { TaskItemComponent } from './components/tasks-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottonComponent,
    TaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
