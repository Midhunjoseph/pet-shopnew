import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>()
  name: any;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.fetchPosts();
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['home'];
    //   console.log(this.name);
    // });

console.log('j');
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onCreatePost(postData: { username: string; password: string }) {
    console.log('submitted');
    console.log(postData.username);
    if (postData.username !== '' && postData.password !== '') {
      this.http.get('https://petstore.swagger.io/v2/user/login?username=' + postData.username + '&password=' + postData.password)
        .subscribe(responseData => {
          console.log(responseData);
          this.featureSelected.emit('home');
          this.router.navigate(['/home']);


        })

      // this.featureSelected.emit('home');
    }
  }
  // private fetchPosts() {
  //   this.http.get('https://petstore.swagger.io/v2/user/login?username=string&password=string')
  //     .subscribe(posts => {
  //       console.log(posts);
  //     })
  // }
}
