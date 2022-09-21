import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { TodoparentComponent } from './todoparent/todoparent.component';
import { TodochildComponent } from './todochild/todochild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListparentComponent } from './listparent/listparent.component';
import { ListchildComponent } from './listchild/listchild.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainareaComponent,
    SidebarComponent,
    FooterComponent,
    ChildComponent,
    ParentComponent,
    UserlistComponent,
    UserComponent,
    TodoparentComponent,
    TodochildComponent,
    ListparentComponent,
    ListchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
