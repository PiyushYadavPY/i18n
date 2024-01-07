import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n';
  roles = 'admin'
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr','ar',"hi","de"]);
    translate.setDefaultLang('en');

    let browserLang : any;
    browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ar|hi|de/) ? browserLang : 'en');
  }
}
