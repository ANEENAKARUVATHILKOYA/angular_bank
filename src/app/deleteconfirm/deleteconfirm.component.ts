import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent  implements OnInit {
  

   @Input()  item:string|undefined

  //event creation
   @Output()  oncancel=new EventEmitter()



  constructor (){}


  ngOnInit(): void {
    
  }

  onCancel(){
    this.oncancel.emit()    //event start from this method

  }

}
