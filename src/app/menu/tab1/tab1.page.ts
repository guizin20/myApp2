import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { covid } from 'src/app/interfaces/covid';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  providers: [CovidService]
})
export class Tab1Page implements OnInit {

  est: covid;
  public estado = "";

  public lista_covid = new Array<any>();
  
    constructor(public covidService: CovidService) { 
      
    }
  
    ngOnInit() {
    }
  
    OnChange(event){
      this.covidService.getCovidApi(this.estado).subscribe(
        data => {
          const response = (data as any);
          this.lista_covid = this.lista_covid.concat(response);
         
          console.log(this.lista_covid);
        },
        error => {
          console.log(error);
        }
      )
    }
  
    
  

}
