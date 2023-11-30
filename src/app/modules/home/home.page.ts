import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../shared/directives';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SwiperDirective
  ],
  templateUrl: './home.paget.html'
})
export class HomePage {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  public products: any[] = [
    {
      id: 1,
      brand: 'CORONA',
      name: 'Cerveza CORONA Extra',
      slug: 'cerveza-corona-extra',
      presentation: 'Pack de 6 unids. x 330 ml. c/u',
      image: 'https://files.makro.pe/product/image/BA3_PnnNhLR.png',
      rating: 5,
      prices: [
        {
          currency: 'S/',
          price: 24.90,
          description: 'A partir de 4 unids.',
          fromUnit: 1,
          salient: true
        }
      ]
    },
    {
      id: 2,
      brand: 'INKA KOLA',
      name: 'Gaseosa INKA KOLA',
      slug: 'gaseosa-inka-kola',
      presentation: 'Pack de 12 unids. x 600 ml. c/u',
      image: 'https://files.makro.pe/product/image/8_o7AdXEA.png',
      rating: 5,
      prices: [
        {
          currency: 'S/',
          price: 27.48,
          description: 'x unid.',
          fromUnit: 1,
          salient: false
        }
      ]
    },
    {
      id: 3,
      brand: 'DULFINA',
      name: 'Azúcar rubia DULFINA',
      slug: 'azucar-rubia-dulfina',
      presentation: 'Bolsa x 5 Kg.',
      image: 'https://files.makro.pe/product/image/6_lFn8tFS.png',
      rating: 5,
      prices: [
        {
          currency: 'S/',
          price: 21.90,
          description: 'x unid.',
          fromUnit: 1,
          salient: false
        },
        {
          currency: 'S/',
          price: 21.50,
          description: 'A partir de 4 unids.',
          fromUnit: 4,
          salient: true
        }
      ]
    },
    {
      id: 4,
      brand: 'SUAVE',
      name: 'Papel higiénico SUAVE Resistemax',
      slug: 'papel-higienico-suave-resistemax',
      presentation: 'Pqte. de 48 unids.',
      image: 'https://files.makro.pe/product/image/BA5_de5bpyg.png',
      rating: 5,
      prices: [
        {
          currency: 'S/',
          price: 26.90,
          description: 'x unid.',
          fromUnit: 1,
          salient: false
        },
        {
          currency: 'S/',
          price: 25.50,
          description: 'OH',
          fromUnit: 1,
          salient: false
        }
      ]
    },
    {
      id: 5,
      brand: 'FARAON',
      name: 'Arroz extra nir FARAON Añejo',
      slug: 'arroz-extra-nir-faraon-anejo',
      presentation: 'Saco x 50 Kg.',
      image: 'https://files.makro.pe/product/image/BA2_AwrQKdc.png',
      rating: 5,
      prices: [
        {
          currency: 'S/',
          price: 213.00,
          description: 'x unid.',
          fromUnit: 1,
          salient: false
        }
      ]
    }
  ];

  public banners: any[] = [
    {
      id: 1,
      name: 'Makro tu aliado del ahorro al por mayor',
      url: 'assets/images/banners/banner_web_01.jpg'
    },
    {
      id: 2,
      name: 'Navidad con los mejores precios',
      url: 'assets/images/banners/banner_web_02.jpg'
    },
    {
      id: 3,
      name: 'Ahorrando al por mayor con marcas de calidad',
      url: 'assets/images/banners/banner_web_03.jpg'
    },
    {
      id: 4,
      name: 'En Agora Shop te llevamos tus compras',
      url: 'assets/images/banners/banner_web_04.jpg'
    }
  ]

  swiperConfig: SwiperOptions = {
    navigation: true,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 6000
    },
    effect: 'fade',
    loop: true,
    injectStyles: [`
    .swiper-pagination-bullet {
      width: 0.6rem;
      height: 0.6rem;
      opacity: 1;
      background: #ffffff;
    }
    .swiper-pagination-bullet-active {
      background: var(--makro-primary);
    }
  `]
  };

  getFlatPrices(prices: any[]) {
    return prices.filter(res => !res.salient);
  }

  getSalientPrice(prices: any[]) {
    return prices.filter(res => res.salient);
  }
}
