import { Component } from '@angular/core';

@Component({
  selector: 'app-walteann-qualidades',
  templateUrl: './walteann-qualidades.component.html',
  styleUrls: ['./walteann-qualidades.component.css']
})
export class WalteannQualidadesComponent {
    qualidades: any[] = [
        {
            img: 'assets/imagem/perfil/284219.png',
            alt: 'Trabalho em equipe',
            Title: 'Trabalho em Equipe',
            subTitle: 'Essencial para Desenvolvimento dos Projetos'
        },
        {
            img: 'assets/imagem/perfil/296393.png',
            alt: 'Pro ativo',
            Title: 'Pro-Ativo',
            subTitle: 'Dar iniciativa, assumir responsabilidade e riscos'
        },
        {
            img: 'assets/imagem/perfil/285167.png',
            alt: 'logica',
            Title: 'Raciocínio',
            subTitle: 'Bom em Logica de Programação'
        },
        {
            img: 'assets/imagem/perfil/295963.png',
            alt: 'desafios',
            Title: 'Challenge Accepted',
            subTitle: 'Buscar novos Desafios'
        },
        {
            img: 'assets/imagem/perfil/295355.png',
            alt: 'buscar conhecimento',
            Title: 'Conhecimento',
            subTitle: 'Crucial é: nunca deixar de Aprender'
        },
        {
            img: 'assets/imagem/perfil/297407.png',
            alt: 'programador',
            Title: 'Desenvolvedor',
            subTitle: 'Minha maior arte é programar'
        },
    ];
}
