import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  welcomeMessageFromService: string
  name = ''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {

    this.welcomeMessageFromService = error.error.message
  }

}
