import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as Feather from 'feather-icons';
import * as go from 'gojs';

@Component({
  selector: 'app-element-editor',
  templateUrl: './element-editor.component.html',
  styleUrls: ['./element-editor.component.scss']
})
export class ElementEditorComponent implements OnInit {

  public _selectedNode: go.Node;
  public _selectedLink: go.Link;
  public data = {
    key: null,
    elem: null,
    elemName: null,
  };
  public ldata = {
    key: null,
    text: null
  }
  hideElemForm : boolean = false;
  elemDetailsFormGroup;

  @Input() projectId : number 

  @Input()
  public model: go.Model;

  @Output()
  public onFormChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  get selectedNode() { return this._selectedNode; }
  set selectedNode(node: go.Node){
    if(node){
      this._selectedNode = node;
      this.data.key = this._selectedNode.data.key;
      this.data.elem = this._selectedNode.data.elem;
      this.data.elemName = this._selectedNode.data.elemName;
    } else {
      this._selectedNode = null;
      this.data.key = null;
      this.data.elem = null;
      this.data.elemName = null;
    }
  }

  @Input()
  get selectedLink(){ return this._selectedLink; }
  set selectedLink(link: go.Link){
    if(link){
      this._selectedLink = link;
      this._selectedLink = this._selectedLink.data.text
    } else{
      this._selectedLink = null;
    }
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) 
  { 
    this.elemDetailsFormGroup = this.formBuilder.group({
      elemBudget: 0,
      elemTargetAge: '--All--',
      elemIsMale: 'true',
      elemIsFemale: 'true'
    })
  }

  ngOnInit(): void { }

  ngAfterViewInit() { Feather.replace();}
  
  public onCommitForm() { this.onFormChange.emit(this.data);}

  sendDetails(elemDetailsFormGroup){
    var confirmation=confirm('Please Double Check Entered Values Before Submitting.');
    if(confirmation){
        if(elemDetailsFormGroup['elemIsMale'] && elemDetailsFormGroup['elemIsFemale']){
          var gender = 'all'
        }
        else if( elemDetailsFormGroup['elemIsMale'] ){
          var gender = "M"
        }
        else{
          var gender = "F"
        }
    
        var elemDetails = {
          name: this._selectedNode.data.elemName,
          proj_id: this.projectId,
          budget: elemDetailsFormGroup['elemBudget'],
          age_group: elemDetailsFormGroup['elemTargetAge'],
          gender: gender
        }
    
        this.http.post("http://127.0.0.1:8000/saveprocessingdata",elemDetails).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        )
        alert("Data has been saved");
      }
  }   
}
