import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  thrillerMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionData();
    this.adventureData();
    this.animationData();
    this.comedyData();
    this.thrillerData();
    this.documentaryData()
    this.scienceFictionData()
  }

  // Banner Data
  bannerData(): void {
    this.service.bannerApiData().subscribe((result): void => {
      console.log(result, 'bannerResult#');
      this.bannerResult = result.results;
    });
  }

  // Trending Data
  trendingData(): void {
    this.service.trendingMovieApiData().subscribe((result): void => {
      console.log(result, 'trendingMovieResult#');
      this.trendingMovieResult = result.results;
    });
  }

  actionData(): void {
    this.service.fetchActionMovies().subscribe((result): void => {
      console.log(result, 'actionMovieResult#');
      this.actionMovieResult = result.results;
    });
  }

  adventureData(): void {
    this.service.fetchAdventureMovies().subscribe((result): void => {
      console.log(result, 'adventureMovieResult#');
      this.adventureMovieResult = result.results;
    });
  }

  animationData(): void {
    this.service.fetchAnimationMovies().subscribe((result): void => {
      console.log(result, 'animationMovieResult#');
      this.animationMovieResult = result.results;
    });
  }

  comedyData(): void {
    this.service.fetchComedyMovies().subscribe((result): void => {
      console.log(result, 'comedyMovieResult#');
      this.comedyMovieResult = result.results;
    });
  }

  documentaryData(): void {
    this.service.fetchDocumentaryVideos().subscribe((result): void => {
      console.log(result, 'documentaryMovieResult#');
      this.documentaryMovieResult = result.results;
    });
  }

  scienceFictionData(): void {
    this.service.fetchScienceFictionMovies().subscribe((result): void => {
      console.log(result, 'scienceFictionMovieResult#');
      this.scienceFictionMovieResult = result.results;
    });
  }

  thrillerData(): void {
    this.service.fetchThrillerMovies().subscribe((result): void => {
      console.log(result, 'thrillerMovieResult#');
      this.thrillerMovieResult = result.results;
    });
  }
}
