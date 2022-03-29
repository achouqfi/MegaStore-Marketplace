import React from 'react'
import Img from '../../Assets/hero-img.svg'
import ProductsList from '../../Components/Client/Products'
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div class="md:flex md:flex-row mt-20 md:w-3/5 lg:w-4/5 ml-24 mr-24">
        <div class="md:w-2/5 flex flex-col justify-center items-center">
          <h2 class="font-serif text-4xl text-gray-600 mb-4 text-center md:self-start md:text-left">{t('welcome.1')}</h2>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">{t('welcome.2')}</p>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">{t('welcome.3')}</p>
          <a href="#" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">{t('welcome.4')}</a>
        </div>
        <div class="md:w-3/5">
          <img src={Img} class="w-full" />
        </div>
      </div>
      <ProductsList />
    </div>

  )
}
