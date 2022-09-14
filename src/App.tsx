import { MagnifyingGlassPlus} from 'phosphor-react'

import logoImage from './assets/logo.svg';

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="NLW esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./image.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634] flex justify-between items-center rounded-lg mt-8 overflow-hidden relative max-w-[1200px] mx-auto w-full px-8 pt-7 pb-6 before:absolute before:h-2 before:w-full before:top-0 before:left-0 before:right-0 before:bg-nlw-gradient">
        <div>
          <strong className="block font-black text-2xl text-white">Não encontrou seu duo?</strong>
          <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="flex items-center gap-3 text-white px-4 py-3 bg-violet-500 rounded transition-colors duration-200 ease-in-out hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} />
          <span>Publicar anúncio</span>
        </button>
      </div>
    </div>
  )
}

export default App
