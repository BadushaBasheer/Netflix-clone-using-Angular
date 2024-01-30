import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {
  }

  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId#')
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any): void {
    this.service.getMovieDetails(id).subscribe((result): void => {
      console.log(result, 'getMovieDetails#');
      this.getMovieDetailResult = result;
    })
  }

  getVideo(id: any): void {
    this.service.getMovieVideo(id).subscribe((result): void => {
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element: any): void => {
        if (element.type == "Trailer"){
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any): void {
    this.service.getMovieCast(id).subscribe((result): void => {
      console.log(result, 'getMovieCast#');
      this.getMovieCastResult = result.cast;
    })
  }

  // protected readonly MovieApiServiceService = MovieApiServiceService;
}
