import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossosTitulosComponent } from './nossos-titulos/nossos-titulos.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    QuemSomosComponent,
    NossosTitulosComponent,
    CardComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eee';
  people=[
    {
      photo: 'assets/EEE_Beelzebruno.jpg',
      name: 'Bruno Luvizotto Carli',
      nickname: 'Beelzebruno',
      description: 'Nascido em 1990 e apaixonado por Pokémon desde 1998 quando começou sua jornado por Kanto no GameBoy color e um cartucho do Pokémon Red, escolhendo Charmander como inicial, mas apaixonado e fanático pelo Dragonite até os dias atuais. Iniciei o multiplayer da franquia no N3DS com lançamento de Pokémon XY sendo incluído na comunidade de jogadores e partindo oficialmente para o VGC em 2023 com Pokémon Scarlet e Violet no Nintendo Switch, correndo campeonatos regionais, locais e internacionais na corrida em busca de conquistar o Worlds. Atualmente joga junto ao Extreme Evolution eSports com muito prazer e disponibilidade pra crescer com a equipe e a na busca do título de Mestre Pokémon.'
    },
    {
      photo: 'assets/EEE_Popplio.jpg',
      name: 'Gian Pierre',
      nickname: 'Popplio',
      description: 'Olá. Meu nome é Gian Pierre, sou peruano, comecei no VGC no final de 2018. Me classifiquei para a Copa do Mundo anterior em Honolulu e meu Pokémon favorito é Popplio.'
    },
    {
      photo: 'assets/EEE_Cadaval.jpeg',
      name: 'Pedro Cadaval',
      nickname: 'Cadaval',
      description: 'Olá, sou Pedro Cadaval alguns me chamam de Pedro, mas a maioria me chama da Cadaval. Eu tenho 21 anos e me defino como um entusiasta, gosto de me dedicar ao máximo a várias atividade e VGC é uma delas. Apesar de de já conhecer Pokemon, comecei a jogar VGC no lançamento de Scarlet e Violet. Desde então venho cada vez mais gostando do jogo, tanto no aspecto de gameplay tanto quanto no teambuilding e busco sempre melhorar em ambos. Espero conseguir sempre me superar e quem sabe ser ter bons resultados no futuro pelo meu trabalho duro.'
    },
    {
      photo: 'assets/EEE_Falafel.jpg',
      name: 'Rafael Cavalcanti',
      nickname: 'Falafel',
      description: 'Desde meus 3 anos jogando Pokemon, sempre fui apaixonado pelo jogo e estratégias possíveis para montar um time com pecas pouco visadas. Desde Maio de 2023, jogo Pokemon competitivamente, com o sonho de competir em um Mundial'
    },
    {
      photo: 'assets/EEE_Falcon.jpeg',
      name: 'Francisco',
      nickname: 'Falcon',
      description: 'Jogo Pokémon desde 2000 que experimentei Pokémon Blue pela primeira vez. No final do 2013, começou  minha aventura competitiva com as versões X e Y,  porque pude conhecer muitos jogadores de VG na minha cidade. No Fevereiro 2014, participei no meu primer torneio (não oficial) na cidade de Lima com 120 pessoas aproximadamente e pude ficar em segundo, usando Mega Heracross e um equipo com Tailwind e TrickRoom ao mesmo tempo, Heracross desde esse momento converteu-se no meu favorito.'
    },
    {
      photo: 'assets/EEE_Lucas.jpeg',
      name: 'Lucas Malta',
      nickname: 'Big Malta',
      description: 'É galera, esse é o Malta, nascido em 1995, sempre foi fã do anime até a 6° geração, mas tendo a 3° geração como a sua favorita. Devido a sua paixão pelo tipo planta, ele tem Sceptile como seu pokémon favorito (Apesar da sua alta semelhança com Snorlax). Sempre gostou da franquia de Pokémon, mas só agora teve a oportunidade de entrar na comunidade competitiva, e com isso pronto para ser um treinador pokémon de sucesso, buscando melhorar a cada dia'
    },
    {
      photo: 'assets/EEE_PaiBraz.jpg',
      name: 'Gustavo Braz (C)',
      nickname: 'Pai Braz',
      description: ''
    },
    {
      photo: 'assets/EEE_Palmarim.jpeg',
      name: 'Thalles Palmarim (C)',
      nickname: 'Palmarim',
      description: 'Player de Pokémon desde 99, nascido em 1992. Sempre apaixonado pelos jogos e os desafios, jogo singles desde BW, parei em USUM, e iniciei VGC em janeiro de 24. Estar no time já é um sonho, então que o título de mestre Pokémon seja alcançado junto do time, sempre evoluindo e aprendendo. Meu pokémon preferido é o Dragonite, mas amo todos os Dragon do jogo.'
    },
    {
      photo: 'assets/EEE_Shaggy.jpg',
      name: 'Pedro Soares',
      nickname: 'Shaggy',
      description: 'Meu nome é Pedro Rodrigues Soares, tenho 27 anos, jogo VGC desde 2018 e sou de Campinas. Minha primeira experiência com Pokémon foi quando joguei Pokemon Emerald no GBA em 2004. Já ganhei um PC e um MSS em Brasília. Tive bons resultados em torneios grandes. Meu objetivo nessa temporada é chegar o mais longe possível ou finalmente poder jogar o mundial.Meu pokémon favorito é o Mimikyu. Meu objetivo com o time é evoluir a cada dia, seja nas vitórias como nas derrotas'
    },
    {
      photo: 'assets/EEE_Vivian.jpg',
      name: 'Vivian',
      nickname: 'Vivian',
      description: 'Eu sempre gostei de pokemon desde criança,  meu sonho era ter um game boy e poder ir aos torneios.  Fui ao mundial de 2016 e 2017, mas agora  só vou denovo se eu estiver muito bem no meta e se  o dólar estiver mais baixo. Além de jogar pokemon competitivo,  tenho muitas pelúcias,  jogo pokemon go , pokemon masters,  pokemon shuffle,  e até  pokemon café remix.  Gosto de colecionar pokemons shinies.'
    },
    {
      photo: 'assets/EEE_Brendu.jpeg',
      name: 'Breno',
      nickname: 'Brendu',
      description: 'Sou o Breno (a.k.a Brendu), jogador dos EEE a mais ou menos um ano, amante de Hyper Offense (clicar botões) e adora fazer jogadas nada a ver. Pokémon(s) favorito(s): Steelix, Sandy Shocks e Raging Bolt'
    },
    {
      photo: 'assets/EEE_MeninoScizor.jpeg',
      name: 'Luis Felipe',
      nickname: 'Scizor',
      description: ''
    },
    {
      photo: 'assets/EEE_.jpg',
      name: 'Diego',
      nickname: 'ogeid',
      description: ''
    },
    {
      photo: 'assets/EEE_Juan.jpeg',
      name: 'Juan José',
      nickname: 'Juan',
      description: 'Meu nome é Juan Jose, meu apelido é Yuanyo :) Tenho 29 anos e jogo Pokémon competitivo há 2 anos, mas jogo Pokémon desde criança. Meu Pokémon favorito é o Umbreon.'
    },
    {
      photo: 'assets/EEE_hunterpain.jpeg',
      name: 'Neto (C)',
      nickname: 'Hunter Pain',
      description: 'Me chamo Neto Oliveira, meu nickname de jogo é HunTerPaiN, comecei a jogar pokémon competitivo singles em 2016 em sun e moon, me interessei no vgc após ver o LATAM de 2017, e comecei a jogar campeonatos de VGC em 2020 com a chegada de sword e Shield, desde então participarei de alguns torneios presenciais e o mais icônico foi o que fui campeão usando Charizard na chuva'
    },
  ]
}
