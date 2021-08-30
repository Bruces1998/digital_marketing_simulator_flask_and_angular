import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { ChangeDetectorRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as Feather from 'feather-icons';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  serverData: JSON;
 	employeeData: JSON;
  // @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent;
  // @ViewChild('myPalette', { static: true }) public myPaletteComponent: PaletteComponent;

  // // ***DIAGRAM***
  // public initDiagram(): go.Diagram {
  //   const $ = go.GraphObject.make;
  //   const dia = $(go.Diagram, {
  //     'undoManager.isEnabled': true,
  //     model: $(go.GraphLinksModel,
  //       {
  //         linkToPortIdProperty: 'toPort',
  //         linkFromPortIdProperty: 'fromPort',
  //         linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
  //       }
  //     )
  //   });

  //   dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

  //   dia.nodeTemplate =
  //     $(go.Node, "Vertical",
  //       $(go.Picture, {width: 125, height: 125}, new go.Binding("source", "elem"),
  //       {portId:"", fromLinkable: true, toLinkable: true, cursor:'pointer'}),
  //       $(go.TextBlock, {font:'14pt Sen, sans-serif',margin:2, editable:true}, new go.Binding("text","elemName"))
        
  //     )
  //   return dia;

  // }

  // public diagramNodeData: Array<go.ObjectData> = [];
  // public diagramLinkData: Array<go.ObjectData> = [];
  // public diagramDivClassName: string = 'myDiagramDiv';
  // public diagramModelData = { prop: 'value' };
  // public skipsDiagramUpdate = false;
  
  // // When the diagram model changes, update app data to reflect those changes
  // public diagramModelChange = function(changes: go.IncrementalData) {
  //   // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
  //   // (since this is a GoJS model changed listener event function)
  //   // this way, we don't log an unneeded transaction in the Diagram's undoManager history
  //   this.skipsDiagramUpdate = true;

  //   this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
  //   this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
  //   this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
  // };

  // // ***PALETTE***
  // public initPalette(): go.Palette {
  //   const $ = go.GraphObject.make;
  //   const palette = $(go.Palette);

  //   // define the Node template
  //   palette.nodeTemplate =
  //     $(go.Node, "Vertical",
  //       $(go.Picture, {width: 75, height:75, margin: 5}, new go.Binding("source", "elem")),
  //       $(go.TextBlock, {font:'12pt Sen, sans-serif', margin: 2}, new go.Binding("text", "elemName"))
  //     );

  //   palette.model = $(go.GraphLinksModel,
  //     {
  //       linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
  //     });

  //   return palette;
  // }

  // public paletteNodeData: Array<go.ObjectData> = [
  //   { key: '1', elem: '../../assets/imgs/start.png', elemName: 'Start' },
  //   { key: '2', elem: '../../assets/imgs/facebook.png', elemName: 'Facebook' },
  //   { key: '3', elem: '../../assets/imgs/twitter.png', elemName: 'Twitter' },
  //   { key: '4', elem: '../../assets/imgs/instagram2.png', elemName: 'Instagram' },
  //   { key: '5', elem: '../../assets/imgs/snapchat.jpg', elemName: 'Snapchat' },
  //   { key: '6', elem: '../../assets/imgs/youtube.png', elemName: 'YouTube' },
  //   { key: '7', elem: '../../assets/imgs/tv.png', elemName: 'TV Ads' },
  //   { key: '8', elem: '../../assets/imgs/pinterest.png', elemName: 'Pinterest' },
  //   { key: '9', elem: '../../assets/imgs/linkedin2.png', elemName: 'LinkedIn' },
  //   { key: '10', elem: '../../assets/imgs/gmail.png', elemName: 'Gmail' },
  //   { key: '11', elem: '../../assets/imgs/googleads.jpg', elemName: 'Google Ads' },
  //   { key: '12', elem: '../../assets/imgs/end.png', elemName: 'Stop' }
  // ];

  // public paletteLinkData: Array<go.ObjectData> = [];

  // public paletteModelData = { prop: 'val' };
  // public paletteDivClassName = 'myPaletteDiv';
  // public paletteModelChange = function(changes: go.IncrementalData) {
  //   this.paletteNodeData = DataSyncService.syncNodeData(changes, this.paletteNodeData);
  //   this.paletteLinkData = DataSyncService.syncLinkData(changes, this.paletteLinkData);
  //   this.paletteModelData = DataSyncService.syncModelData(changes, this.paletteModelData);
  // };

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  // ***OVERVIEW***
  // Overview Component testing
  // public oDivClassName = 'myOverviewDiv';
  // public initOverview(): go.Overview {
  //   const $ = go.GraphObject.make;
  //   const overview = $(go.Overview);
  //   return overview;
  // }
  // public observedDiagram = null;

  // // currently selected node; for inspector
  // public selectedNode: go.Node | null = null;

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    Feather.replace();
  }
  // public ngAfterViewInit() {

  //   if (this.observedDiagram) return;
  //   this.observedDiagram = this.myDiagramComponent.diagram;
  //   this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

  //   const appComp: AppComponent = this;
  //   // listener for inspector
  //   this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', function(e) {
  //     if (e.diagram.selection.count === 0) {
  //       appComp.selectedNode = null;
  //     }
  //     const node = e.diagram.selection.first();
  //     if (node instanceof go.Node) {
  //       appComp.selectedNode = node;
  //     } else {
  //       appComp.selectedNode = null;
  //     }
  //   });
  // } // end ngAfterViewInit

  // public handleInspectorChange(newNodeData) {
  //   const key = newNodeData.key;
  //   // find the entry in nodeDataArray with this key, replace it with newNodeData
  //   let index = null;
  //   for (let i = 0; i < this.diagramNodeData.length; i++) {
  //     const entry = this.diagramNodeData[i];
  //     if (entry.key && entry.key === key) {
  //       index = i;
  //     }
  //   }

  //   if (index >= 0) {
  //     // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
  //     this.skipsDiagramUpdate = false;
  //     this.diagramNodeData[index] = _.cloneDeep(newNodeData);
  //   }
  // }
}
