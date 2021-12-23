import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output()  serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();

@Output()  bluePrintCreated= new EventEmitter<{serverName:string,serverContent:string}>();

  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverElementInput:HTMLInputElement) {
    this.serverCreated.emit(
      {serverName: serverElementInput.value,
        serverContent:this.newServerContent});
  }

  onAddBlueprint(serverElementInput) {
    this.bluePrintCreated.emit({serverName:serverElementInput.value,
      serverContent:this.newServerContent})
  }

}
