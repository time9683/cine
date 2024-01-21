import CardEs from '../components/CardEs.tsx'
import dbEs from '../db/estrenos.json' with {type:"json"}


export default function Estrenos() {

return(

<>
<main class=" p-4  m-auto">

    <h1 class="uppercase font-semibold text-xl text-white bg-red-700 p-2 w-full">Proximos Estrenos</h1>
    <p class="bg-white text-zinc-500 p-2 text-center text-sm">Las fechas de estreno publicadas son suministradas por los distribuidores de las películas en el país. Los cambios no dependen de Cines Unidos.</p>

    <section  class="mt-5 grid w-full grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-4">

    {dbEs.map((item) => (

        <CardEs
        key={item.title}
        title={item.title}
        image={item.image}
        description={item.description}
        day={item.day}
        country={item.country}
        duration={item.duration}
        gender={item.gender}
        format={item.format}
        month={item.month}
        />

        ))}






    </section>


</main>

</>

)


}