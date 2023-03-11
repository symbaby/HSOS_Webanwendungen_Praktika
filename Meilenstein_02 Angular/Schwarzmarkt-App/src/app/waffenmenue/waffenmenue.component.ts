import { Component, OnInit } from '@angular/core';
import { Waffe } from '../waffe';
import { WAFFEN } from '../mock-waffen';


@Component({
  selector: 'app-waffenmenue',
  templateUrl: './waffenmenue.component.html',
  styleUrls: ['./waffenmenue.component.css']
})

export class WaffenmenueComponent implements OnInit {


  waffen: Waffe[] = WAFFEN;
  selectedWaffe?: Waffe;

  // waffe: Waffe = new Waffe("asd","asd",0,0,0 ,"asd");
  waffe: Waffe = {iconUri: "URI", name: "NAME", schaden: 110, gewicht: 3.0, kosten: 1200, tier: "TIER" };

  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(waffe: Waffe): void {
    this.selectedWaffe = waffe;
  }


  onSubmit(): void {
    this.submitted = true;
  }

  newWaffe() {
    this.waffen.push(this.waffe);
  }

}





