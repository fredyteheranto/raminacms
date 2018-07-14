import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    AlertModule.forRoot(),

    
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
