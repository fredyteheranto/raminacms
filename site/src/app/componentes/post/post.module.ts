import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuillModule } from 'ngx-quill';



@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,QuillModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
