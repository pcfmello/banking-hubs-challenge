import { Component } from '@angular/core';

@Component({
  selector: 'bhc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = 'https://plataformafasttrade.com.br/wp-content/uploads/2019/09/itau-bba.png';
  language = 'PT';
  user = { avatar: '', fullname: 'John Doe', role: 'Diretor Itaú BBA' };
}
