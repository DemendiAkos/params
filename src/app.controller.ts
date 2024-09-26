import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
  @Get('hatterszin')
  @Render('hatter')
  hatterszin (@Query('bgColor')bgColor: string = '#000fff') {
    return {
      bgColor 
    } 
  }

  #jegkremek = [
    {id: '1', nev: 'eperfagylalt', ar: 550},
    {id: '2', nev: 'vanilia', ar: 600},
    {id: '3', nev: 'csokolade', ar: 650},
  ]


  @Get('jegkrem')
  @Render('jegkremlista')
  jegkremlista() {
    return {
      jegkremek: this.#jegkremek
    }
  }


  @Get('jegkrem/:id')
  @Render('jegkrem')
  jegkrem(@Param('id') id: string) {
    return {
      jegkrem: this.#jegkremek[parseInt(id)-1]
    }
  }
}
