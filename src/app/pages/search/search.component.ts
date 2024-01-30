import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";
import {MovieApiServiceService} from "../../service/movie-api-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  placeholderText: string = 'Enter Movie Name...';

  constructor(private service : MovieApiServiceService) {
  }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(): void {
    console.log(this.searchForm.value, 'searchForm#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result, 'searchMovie#');
      this.searchResult = result.results;

    });
  }

}
