import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts :any[] =  [{
    body: "Meeting heading. <a href='https://meetinglink.truenorth.co.in'>Meeting Title</a>",
  },{
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
  },{
    body: "Loremsa. Cum sociis natoque penatibus et magnis di"
  },{
    body: "Lorem ipsum dolor sit amet, consectetuer https://app.zeplin.io. "
  }];

  parseBody(body:string) {
    // you will need to improve this regex. incase up want to convert a hyper link in text 
    return body.replace(/(http.*?\s)/, "<a href=\"$1\">$1</a>")
  }
}
