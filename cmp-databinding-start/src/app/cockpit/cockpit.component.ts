import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('refServername') refViewChildServername: ElementRef;
  @ViewChild('refServerContent') refViewChildServerContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddServerByRef(refServername: HTMLInputElement) {
    console.log(refServername.value);
    this.serverCreated.emit({serverName: refServername.value, serverContent: this.newServerContent});
  }

  onAddServerByRefViewChild() {
    console.log(this.refViewChildServername.nativeElement.value);
    console.log(this.refViewChildServerContent.nativeElement.value);
   this.serverCreated.emit({serverName: this.refViewChildServername.nativeElement.value
    , serverContent: this.refViewChildServerContent.nativeElement.value });
  }

}
