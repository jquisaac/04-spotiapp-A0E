import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  cargando: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar( termino: string) {
    this.cargando = true;
    this.spotify.getArtistas(termino).subscribe( (data: any) => {
      this.artistas = data;
      this.cargando = false;
    } );
  }

}
