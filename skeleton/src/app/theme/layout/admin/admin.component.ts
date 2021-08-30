import { Component, NgZone, OnInit, AfterViewInit } from '@angular/core';
import { NextConfig } from '../../../app-config';
import { Location } from '@angular/common';
import { ChangeDetectorRef, ViewChild, ViewEncapsulation } from '@angular/core'
import * as Feather from 'feather-icons';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';
import * as _ from 'lodash';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-admin ngbd-tooltip-basic ngbd-carousel-basic',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdminComponent implements OnInit {
  public nextConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;
  @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent;
  @ViewChild('myPalette', { static: true }) public myPaletteComponent: PaletteComponent;
  mainModalMax : boolean = false;
  newElemFormGroup;
  newTempFormGroup;
  newProjFormGroup;
  renameProjFormGroup;
  exportCanvasFormGroup;
  exportAsPdfFormGroup;
  hidePalette : boolean = false;
  hideElemForm : boolean = false;
  showGrid : boolean = false;
  enableAlign : boolean = false;
  overviewPos : number = 1;
  pdfPreview : number = 1;

  paletteData: JSON;
  canvasData : JSON ;
  templateData : JSON;
  choosenTemplate : JSON;

  temp : JSON;
  templates = [];
  chartData;
  
  icons =[
    {key: 1, name: 'clock'},
    {key: 2, name: 'edit'},
    {key: 3, name: 'grid'},
    {key: 4, name: 'align-justify'},
    {key: 5, name: 'zoom-in'},
    {key: 6, name: 'zoom-out'},
    {key: 7, name: 'rotate-ccw'},
    {key: 8, name: 'rotate-cw'},
    {key: 9, name: 'copy'},
    {key: 10, name: 'clipboard'},
    {key: 11, name: 'trash'},
    {key: 12, name: 'clock'},
    {key: 13, name: 'square'},
    {key: 14, name: 'download'},
    {key: 15, name: 'archive'},
    {key: 16, name: 'plus'}
  ] ;

  // ********* DIAGRAM **********
  // initialize diagram / templates
  ProjectList: JSON;
  projects = [];

  test= [50,50,25]
  ResultList: JSON;
  results = [];
  resultLoading: boolean = true;

  PROJECT_ID;
  RENAME_PROJECT_ID;

  PROJECT_NAME;
  PROJECT_OLD_NAME;

  public clicksImpressionsAnalytics: any;
  public conversions;

  getProjects(){
    // console.log("getProjects Function Call Successful");
    this.http.get("http://127.0.0.1:8000/sendprojects").subscribe(data => {
    this.ProjectList = data as JSON;
    this.projects = this.ProjectList['data'];
    // console.log('List of Projects: ')
    // console.log(this.projects);
    })
  }

  getPaletteData(id){
    this.http.get("http://127.0.0.1:8000/send/"+id).subscribe(data => {
    this.paletteData = data as JSON;
    // console.log(this.paletteData['data']);
    this.paletteNodeData = this.paletteData['data'];  
  })
  }

  loadProject(id,name){
    this.PROJECT_ID = id;
    this.PROJECT_NAME = name;
    this.getPaletteData(id);
    this.http.get("http://127.0.0.1:8000/sendcanvas/"+id).subscribe(data => {
    this.canvasData = data as JSON;
    // console.log(this.canvasData['nodes']);
    // console.log(this.canvasData['links']);
    this.myDiagramComponent.diagram.model.nodeDataArray = this.canvasData['nodes'];
    (this.myDiagramComponent.diagram.model as go.GraphLinksModel).linkDataArray =  this.canvasData['links'];    
  })

    setTimeout(() => this.myDiagramComponent.diagram.requestUpdate(), 500);
    // setInterval(()=> this.sendCanvas(), 10000)
  }

  setRenameId(id,name){
    this.RENAME_PROJECT_ID = id;
    this.PROJECT_OLD_NAME = name;
}

renameProj(renameProjFormGroup){
  var renamedProjData = {
    name: renameProjFormGroup['renamedProjName'],
    oldname: this.PROJECT_OLD_NAME,
    id:  this.RENAME_PROJECT_ID
  }
  this.http.post("http://127.0.0.1:8000/editproject",renamedProjData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  setTimeout(() => this.getProjects(), 1000);
}

  public initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      initialContentAlignment:go.Spot.Center,
      contentAlignment: go.Spot.Center,

      model: $(go.GraphLinksModel,
        {
          linkToPortIdProperty: 'toPort',
          linkFromPortIdProperty: 'fromPort',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      )
    });

    dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

    dia.nodeTemplate =
      $(go.Node, "Vertical",
        $(go.Picture, {width: 85, height: 85}, new go.Binding("source", "elem"),
        {portId:"", fromLinkable: true, toLinkable: true, cursor:'pointer'}),
        $(go.TextBlock, {font:'14pt Sen, sans-serif',margin:2, editable:true}, new go.Binding("text","elemName")),
        {
          selectionAdornmentTemplate:
            $(go.Adornment, "Auto",
              $(go.Shape, "RoundedRectangle",
                { fill: null, stroke: "rgba(0, 172, 240)", strokeWidth: 2.5 },
                new go.Binding("stroke", "color")),
              $(go.Placeholder)
            )  // end Adornment
        }
        
      )

    
    dia.linkTemplate =
    $(go.Link, {layerName:"Background"},
      $(go.Shape, { strokeWidth: 1 }),
      $(go.Shape, { toArrow: "Standard" }),
      {
        selectionAdornmentTemplate:
          $(go.Adornment,
            $(go.Shape,
              { isPanelMain: true, stroke: "rgb(0, 172, 240)", strokeWidth: 2 }),
            // $(go.Shape,
            //   { toArrow: "Standard", fill: "rgb(0, 172, 240)", stroke: null, scale:1.4 })
          )  // end Adornment
      }
    );
    return dia;
    // rgb(0, 172, 240)
  }

  public diagramNodeData: Array<go.ObjectData> = [];
  public diagramLinkData: Array<go.ObjectData> = [
    { "from": -1, "to": 0, "text": "Label" },
  ];
  public diagramDivClassName: string = 'myDiagramDiv';
  public diagramModelData = { prop: 'value' };
  public skipsDiagramUpdate = false;
  
  // When the diagram model changes, update app data to reflect those changes
  public diagramModelChange = function(changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Diagram's undoManager history
    this.skipsDiagramUpdate = true;

    this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
    this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
    this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
  };

  // ******** PALETTE **********
  public initPalette(): go.Palette {
    const $ = go.GraphObject.make;
    const palette = $(go.Palette);

    // define the Node template
    palette.nodeTemplate =
      $(go.Node, "Vertical",
        $(go.Picture, {width: 55, height:55, margin: 5}, new go.Binding("source", "elem")),
        $(go.TextBlock, {font:'10pt Sen, sans-serif', margin: 2}, new go.Binding("text", "elemName")),
        {
          selectionAdornmentTemplate:
            $(go.Adornment, "Auto",
              $(go.Shape, "RoundedRectangle",
                { fill: null, stroke: "rgba(0, 172, 240)", strokeWidth: 2.5 },
                new go.Binding("stroke", "color")),
              $(go.Placeholder)
            )  // end Adornment
        }
      );

    palette.model = $(go.GraphLinksModel,
      {
        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      });

    return palette;
  }

  public paletteNodeData: Array<go.ObjectData> = [];
  public paletteLinkData: Array<go.ObjectData> = [];
  public paletteModelData = { prop: 'val' };
  public paletteDivClassName = 'myPaletteDiv';
  public paletteModelChange = function(changes: go.IncrementalData) {
    this.paletteNodeData = DataSyncService.syncNodeData(changes, this.paletteNodeData);
    this.paletteLinkData = DataSyncService.syncLinkData(changes, this.paletteLinkData);
    this.paletteModelData = DataSyncService.syncModelData(changes, this.paletteModelData);
  };

  constructor( private zone: NgZone, private location: Location, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private http: HttpClient) {
    this.nextConfig = NextConfig.config;
    let currentURL = this.location.path();
    const baseHerf = this.location['_baseHref'];
    if (baseHerf) {
      currentURL = baseHerf + this.location.path();
    }
    this.windowWidth = window.innerWidth;

    if (currentURL === baseHerf + '/layout/collapse-menu'
      || currentURL === baseHerf + '/layout/box'
      || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
      this.nextConfig.collapseMenu = true;
    }

    this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
    this.navCollapsedMob = false;

    this.newElemFormGroup = this.formBuilder.group({
      newElemTitle: '',
      newElemImage: '',
    });
    this.newTempFormGroup = this.formBuilder.group({
      newTempName: ''
    })
    this.newProjFormGroup = this.formBuilder.group({
      newProjName: '',
      newProjDomain: '--Select--',
    })
    this.renameProjFormGroup = this.formBuilder.group({
      renamedProjName: ''
    })
    this.exportCanvasFormGroup = this.formBuilder.group({
      format : ''
    })
    this.exportAsPdfFormGroup = this.formBuilder.group({
      orientation:'portrait',
      titleText: 'Title Goes Here',
      titleAlignment: 'left',
      titleFont: 'Helvetica',
      titleBold: 'false',
      titleItalic: 'false',
      cnvWidth: 500,
      cnvHeight: 250,
      cnvBackgroundcolor: '#ffffff',
      cnvLeftOffset: 50
    })
    this.getProjects();
    // this.loadProject();
    // this.getPaletteData();
    this.getTemplates();
    // this.clicksImpressionsAnalytics = ClicksImpressionsAnalytics.chartData;
  }

  // ********** OVERVIEW ***********
  public oDivClassName = 'myOverviewDiv';
  public initOverview(): go.Overview {
    const $ = go.GraphObject.make;
    const overview = $(go.Overview);
    return overview;
  }
  public observedDiagram = null;

  // currently selected node; for inspector
  public selectedNode: go.Node | null = null;
  public selectedLink: go.Link | null = null;

  // ********* INSPECTOR **********
  public handleInspectorChange(newNodeData) {
    if(newNodeData instanceof go.Node){
      // console.log('Node Selected');
    }
    if(newNodeData instanceof go.Link){
      // console.log('Link Selected');
    }
    const key = newNodeData.key;

    // find the entry in nodeDataArray with this key, replace it with newNodeData
    let index = null;
    for (let i = 0; i < this.diagramNodeData.length; i++) {
      const entry = this.diagramNodeData[i];
      if (entry.key && entry.key === key) {
        index = i;
      }
    }

    if (index >= 0) {
      // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
      this.skipsDiagramUpdate = false;
      this.diagramNodeData[index] = _.cloneDeep(newNodeData);
    }
    
  }

  // ******* TOOLBAR *********
  update() {
    this.myDiagramComponent.diagram.requestUpdate();
    this.myPaletteComponent.updateFromAppData();
  }

  maximize(){
    // console.log(this.mainModalMax)
    this.mainModalMax = !this.mainModalMax;
    this.update();
  }

  paletteToggle() {
    this.hidePalette = !this.hidePalette;
  }

  elemFormToggle() {
    this.hideElemForm = !this.hideElemForm;
  }

  gridToggle() {
    this.showGrid = !this.showGrid;
    if (this.myDiagramComponent && this.myDiagramComponent.diagram instanceof go.Diagram) {
      this.myDiagramComponent.diagram.grid.visible = this.showGrid;
    }
  }

  alignToggle(){
    this.enableAlign = !this.enableAlign;
    if (this.myDiagramComponent && this.myDiagramComponent.diagram instanceof go.Diagram) {
      this.myDiagramComponent.diagram.grid.visible = this.enableAlign;
      this.myDiagramComponent.diagram.toolManager.draggingTool.isGridSnapEnabled = this.enableAlign;
    }
  }

  zoomIn(){
    this.myDiagramComponent.diagram.commandHandler.increaseZoom();
  }

  zoomOut(){
    this.myDiagramComponent.diagram.commandHandler.decreaseZoom();
  }

  undoChanges(){
    this.myDiagramComponent.diagram.commandHandler.undo();
  }

  redoChanges(){
    this.myDiagramComponent.diagram.commandHandler.redo();
  }

  copySelect(){
    this.myDiagramComponent.diagram.commandHandler.copySelection();
  }
  
  pasteSelect(){
    this.myDiagramComponent.diagram.commandHandler.pasteSelection();
  }
  
  deleteSelect(){
    this.myDiagramComponent.diagram.commandHandler.deleteSelection();
  }
  
  clearCanvas(){
    var confirmation=confirm('Are you sure you want to Clear the Canvas?');
    if(confirmation){
      this.myDiagramComponent.diagram.clear();
    }
  }

  overviewPositionChange(){
    if( this.overviewPos == 4){
      this.overviewPos = 1;
    }
    else{
      this.overviewPos++;
      
    }
  }
  
  myCallbackPng(blob) {
    var url = window.URL.createObjectURL(blob);
    var filename = "mySimulation.png";
  
    var a = document.createElement("a");
    // a.style = "display: none";
    a.href = url;
    a.download = filename;
  
    // IE 11
    if (window.navigator.msSaveBlob !== undefined) {
      window.navigator.msSaveBlob(blob, filename);
      return;
    }
  
    document.body.appendChild(a);
    requestAnimationFrame(function() {
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }
  
  myCallbackJpeg(blob) {
    var url = window.URL.createObjectURL(blob);
    var filename = "mySimulation.jpeg";
  
    var a = document.createElement("a");
    // a.style = "display: none";
    a.href = url;
    a.download = filename;
  
    // IE 11
    if (window.navigator.msSaveBlob !== undefined) {
      window.navigator.msSaveBlob(blob, filename);
      return;
    }
  
    document.body.appendChild(a);
    requestAnimationFrame(function() {
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }

  myPdfCallback(orn,ttext,tfont,talign,tbold,titalic,b64,cnvwidth,cnvheight,cnvlo){
    var docDefinition = {
      pageOrientation: orn,
      content:[
        {
          text: ttext,
          alignment: talign,
          // font: tfont,
          fontSize: 25,
          bold: tbold,
          italics: titalic
        },
        {
          image: b64,
          width: cnvwidth,
          height: cnvheight,
          absolutePosition: {x:cnvlo,y:100}
        }
      ]
    }

    var fonts = {
      Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
      },
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
      },
      Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
      },
      Symbol: {
        normal: 'Symbol'
      },
      ZapfDingbats: {
        normal: 'ZapfDingbats'
      }
    };
    // pdfMake.createPdf(docDefinition).open();
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
    const targetElement = document.querySelector('#iframeContainer');
      const iframe = <HTMLIFrameElement>document.getElementById('pdfPreviewIframe');
      iframe.src = dataUrl;
    
});
  }

  exportAsJpg(){
    var base64=this.myDiagramComponent.diagram.makeImageData({ returnType: "blob", callback: this.myCallbackJpeg, type:'image/jpeg',background:'white' });
  }

  exportAsPng(){
    var base64=this.myDiagramComponent.diagram.makeImageData({ background: "white", returnType: "blob", callback: this.myCallbackPng });
  }
  
  exportAsPdf(exportingOptions){
    // console.log(exportingOptions);
    this.myDiagramComponent.diagram.zoomToRect(this.myDiagramComponent.diagram.documentBounds);
    var b64=this.myDiagramComponent.diagram.makeImageData({type:'image/jpeg', background: exportingOptions['cnvBackgroundcolor']});

    this.myPdfCallback(
        exportingOptions['orientation'],
        exportingOptions['titleText'],
        exportingOptions['titleFont'],
        exportingOptions['titleAlignment'],
        exportingOptions['titleBold'],
        exportingOptions['titleItalic'],
        b64,
        exportingOptions['cnvWidth'],
        exportingOptions['cnvHeight'],
        exportingOptions['cnvLeftOffset']);
  }

  // exportCanvas(exportCanvasFormat){
  //   console.log(exportCanvasFormat['format']);
  //   if(exportCanvasFormat['format']=='jpg'){
  //     base64=this.myDiagramComponent.diagram.makeImageData({ returnType: "blob", callback: this.myCallbackJpeg, type:'image/jpeg',background:'white' });
  //   }
  //   else if(exportCanvasFormat['format'] == 'png'){
  //     this.myDiagramComponent.diagram.zoomToRect(this.myDiagramComponent.diagram.documentBounds);
  //     var base64=this.myDiagramComponent.diagram.makeImageData({ background: "white", returnType: "blob", callback: this.myCallbackPng });
  //   }
  //   else if(exportCanvasFormat['format'] == 'pdf'){
  //   }
  // }

  getTemplates(){
    this.http.get("http://127.0.0.1:8000/sendtemplates").subscribe(data => {
    this.temp = data as JSON;
    this.templates = this.temp['data'];
  })
  }

  useTemplate(tempId){
    // this.http.post("http://127.0.0.1:8000/sendtemplatedata",datat).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
    this.http.get("http://127.0.0.1:8000/sendtemplatedata/"+tempId).subscribe(data => {
      this.choosenTemplate = data as JSON;
      this.myDiagramComponent.diagram.model.nodeDataArray = this.choosenTemplate["nodes"];
      (this.myDiagramComponent.diagram.model as go.GraphLinksModel).linkDataArray = this.choosenTemplate["links"];
      // console.log('Template Data Chalra kya Uska Check');
      // console.log(this.choosenTemplate['nodes']);
      // console.log(this.choosenTemplate['links']);
      // console.log(this.diagramNodeData);
      // console.log(this.diagramLinkData);
    })
  }

  addNewProj(newProjFormGroup){
    var newProjData = {
      name: newProjFormGroup['newProjName'],
      domain: newProjFormGroup['newProjDomain'],
      // ageGroup: newProjFormGroup['newProjTargetAge'],
      // isMale: newProjFormGroup['isMale'],
      // isFemale: newProjFormGroup['isFemale']
    }
    this.http.post("http://127.0.0.1:8000/addnewproject",newProjData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    setTimeout(() => this.getProjects(), 1000);
    // this.getProjects();
    // window.location.reload();
  }

  deleteProject(id){
    var projDetails = {
      id : id
    }
    this.http.post("http://127.0.0.1:8000/deleteproject",projDetails).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    setTimeout(() => this.getProjects(), 1000);
  
  }

  addNewTemp(newTempFormGroup){
    this.myDiagramComponent.diagram.zoomToRect(this.myDiagramComponent.diagram.documentBounds);
    var b64=this.myDiagramComponent.diagram.makeImageData({type:'image/jpeg', background: "white"});
    var newTempData = {
      name: newTempFormGroup['newTempName'],
      url: b64,
      type: 1,
      nodes: this.myDiagramComponent.diagram.model.nodeDataArray,
      links: (this.myDiagramComponent.diagram.model as go.GraphLinksModel).linkDataArray
    }
    this.http.post("http://127.0.0.1:8000/savetemplate",newTempData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    setTimeout(() => this.getTemplates(), 500);
    setTimeout(() => this.getTemplates(), 500);
    setTimeout(() => this.getTemplates(), 500);
  }

  loadResult(){
    this.resultLoading = true;
  }

  loadedResult(){
    this.resultLoading = false;
  }

  getResult(){
    this.http.get("http://127.0.0.1:8000/sendprocesseddata/"+ this.PROJECT_ID).subscribe(data => {
    this.ResultList = data as JSON;
    this.results=[];
    this.results.push(this.ResultList['data'][0]['impressions']);
    this.results.push(this.ResultList['data'][0]['clicks']);
    console.log(this.ResultList['data'][0]['conversion']);
    this.conversions = this.ResultList['data'][0]['conversion'];
    // this.chartService.clicksImpressions = this.results;
    this.chartData = {
      chart: {
        height: 350,
        type: 'radialBar',
        },
        dataLabels: {
        enabled: false
        },
        plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
            },
            dataLabels: {
            name: {
                show: false,
    
            },
            value: {
                show: false,
            }
            }
        }
        },
        colors: ['#00acf0', '#0e9e4a'],
        series: this.results,
        labels: ['Impressions', 'Clicks'],
        legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        position: 'left',
        offsetX: 0,
        offsetY: 0,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: (seriesName, opts) => seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex],
        itemMargin: {
            horizontal: 1,
        }
        },
        responsive: [{
        breakpoint: 480,
        options: {
            legend: {
            show: false
            }
        }
        }]
    }
  })
    setTimeout(() => this.loadedResult(), 1000)
  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.nextConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-pangong') as HTMLElement).style.maxHeight = '100%'; // 100% amit
      }, 500);
    }
  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }
  
  ngAfterViewInit() {
    Feather.replace();
    if (this.observedDiagram) return;
    this.observedDiagram = this.myDiagramComponent.diagram;
    this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

    const appComp: AdminComponent = this;
    // listener for inspector
    this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', function(e) {
      if (e.diagram.selection.count === 0) {
        appComp.selectedNode = null;
      }
      const node = e.diagram.selection.first();
      if (node instanceof go.Node) {
        appComp.selectedNode = node;
      } 
      else if( node instanceof go.Link){
        appComp.selectedLink = node;
        // console.log('Link toh detect horeli')
      }
      else {
        appComp.selectedNode = null;
        appComp.selectedLink = null;
      }
    });
  }

  addNew(newElemFormData){
    var t: string = newElemFormData['newElemTitle'];
    var u: string = newElemFormData['newElemImage'];
    
    var newElem = {
      elemName: t,
      elem: u,
      proj_id: this.PROJECT_ID,
    }
    this.http.post('http://127.0.0.1:8000/savedetails',newElem).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.paletteNodeData.push(newElem)
  }

  sendCanvas(){
    // console.log("Send canvas working")
    var state = {
      nodes: this.myDiagramComponent.diagram.model.nodeDataArray,
      links: (this.myDiagramComponent.diagram.model as go.GraphLinksModel).linkDataArray,
      proj_id: this.PROJECT_ID,
    }

    this.http.post('http://127.0.0.1:8000/savecanvas',state).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

  }


}