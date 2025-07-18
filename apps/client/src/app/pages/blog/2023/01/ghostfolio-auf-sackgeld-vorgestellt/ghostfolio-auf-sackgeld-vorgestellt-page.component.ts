import { routes } from '@ghostfolio/common/routes';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-ghostfolio-auf-sackgeld-vorgestellt-page',
  templateUrl: './ghostfolio-auf-sackgeld-vorgestellt-page.html'
})
export class GhostfolioAufSackgeldVorgestelltPageComponent {
  public routerLinkBlog = ['/' + routes.blog];
}
