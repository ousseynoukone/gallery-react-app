export default function Hero({children}) {
   return (
       <section className="hero">
           <h1 className="text-4xl font-bold">Bienvenue dans notre galerie</h1>
           <p className="mt-2 text-lg">Découvrez des œuvres d'art inspirantes</p>
           {children}
       </section>
   );
}
