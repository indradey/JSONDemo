import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  competencyArray: Competency[] = new Array<Competency>();
  _competencyList: Competency[] = new Array<Competency>();
  _CompetencyDropDown: any;
  jsonData: any;
  ngOnInit(): void {
    this._competencyList.push({ id: 123, name: 'Competency A', bands: [] });
    this._competencyList.push({ id: 234, name: 'Competency B', bands: [] });
    this._competencyList.push({ id: 456, name: 'Competency C', bands: [] });
    this._competencyList.push({ id: 678, name: 'Competency D', bands: [] });
  }

  fnAddCompetency() {
    this._competencyList.filter(x => x.id === this._CompetencyDropDown).forEach(comp =>
      this.competencyArray.push(comp));
  }

  AddBandToCompetency(comp: Competency) {
    if (!comp.bands) {
      comp.bands = new Array<Band>();
    }
    comp.bands.push({id: '', name: '', value: ''});
  }
  fnSaveData() {
    this.jsonData = JSON.stringify(this.competencyArray);
  }

}

export class Competency {
  id: number;
  name: string;
  bands: Band[];
}

export class Band {
  id: string;
  name: string;
  value: string;
}
