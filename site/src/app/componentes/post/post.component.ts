
import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import Quill from 'quill';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  form: FormGroup;
  public editpr
  textFormat = 'Hello World!';
  wysiwygContent = '<ul><li>I am example content</li><li><u>Yo</u></li></ul>';
  @ViewChild('editor') editor: QuillEditorComponent
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['test']
    })

  }


  ngOnInit() {
    console.log(this.editor)
    this.form
      .controls
      .editor
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {

       // console.log('native fromControl value changes with debounce', data)
      });

    this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {

        this.editpr = data.html
        console.log('view child + directly subscription', this.editpr)
      });

  }

}
