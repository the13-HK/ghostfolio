import { publicRoutes, routes } from '@ghostfolio/common/routes';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-hacktoberfest-2023-page',
  templateUrl: './hacktoberfest-2023-page.html'
})
export class Hacktoberfest2023PageComponent {
  public routerLinkAbout = ['/' + routes.about];
  public routerLinkBlog = ['/' + routes.blog];
  public routerLinkOpenStartup = ['/' + publicRoutes.openStartup.path];
}
