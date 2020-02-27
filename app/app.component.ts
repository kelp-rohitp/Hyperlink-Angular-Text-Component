import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts :any[] =  [{
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
  },{
    body: "Loremsa. Cum sociis natoque penatibus et magnis di"
  },{
    body: "Meeting heading Lorem  elit. ",
    img: "https://scontent.fcnq1-1.fna.fbcdn.net/v/t1.0-9/22491481_680661882130471_2500422036645997028_n.jpg?oh=2e5001e92d201e446e3120204869a434&oe=5A68A19D"
  }];

  parseBody(body:string) {
    // you will need to improve this regex.
    return body.replace(/(http.*?\s)/, "<a href=\"$1\">$1</a>")
  }
}
