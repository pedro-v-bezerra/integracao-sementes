"use client"

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

// Configura o ícone manualmente para evitar o problema de carregamento
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

export default function Contato() {
  useEffect(() => {
    // Inicializa o mapa
    const map = L.map('map').setView([-20.466622194133883, -54.54438922698792], 16); // Coordenadas para Campo Grande-MS

    // Adiciona o layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Cria o marcador
    const marker = L.marker([-20.466622194133883, -54.54438922698792]).addTo(map)
      .bindPopup('Rua Lagoa Rica, 28 - Panorama, Campo Grande-MS')
      .openPopup();

    // Adiciona o evento de clique ao mapa
    map.on('click', () => {
      window.location.href = 'https://www.google.com/maps/place/R.+Lagoa+Rica,+28+-+Panorama/@-20.4668182,-54.5444536,17z/data=!4m7!3m6!1s0x9486e93570b26a25:0x6d1be82aea66f029!4b1!8m2!3d-20.4668182!4d-54.5444536!16s%2Fg%2F11sbkxzftw?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'; // Altere para o link desejado
    });

    // Limpeza para evitar múltiplas inicializações do mapa
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="px-12 py-8 xl:px-44 grid grid-cols-1 md:grid-cols-3 gap-12 xl:py-16 justify-between">
      <div className="lg:col-start-1 flex flex-col  md:text-start mt-4">
        <h2 className="font-openSans font-bold text-xl md:text-4xl text-[#354D4D]">Onde <br className='hidden lg:block'/>estamos</h2>
        <p className="font-openSans tracking-wider text-[#354D4D] pt-2 lg:pt-6"> Rua Lagoa Rica, 28 - Panorama</p>
        <p className="font-openSans tracking-wider text-[#354D4D] pb-2 lg:pb-6">Campo Grande - MS</p>
        <p className="font-openSans tracking-wider font-bold text-[#354D4D]">Telefones:</p>
        <div className='flex gap-2 md:justify-start'>
          <Image
            src="/imgs/integracao/phone-icon.svg"
            width={15}
            height={15}
          />
          <p className="font-openSans tracking-wider text-[#354D4D]">+55 (67) 3025-9398</p>
        </div>
      </div>

      <div id="map" className="rounded-xl md:ml-32 h-[300px] md:col-span-2 lg:col-start-2"></div>
    </div>
  );
}
