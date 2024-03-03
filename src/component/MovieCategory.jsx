import { useParams } from 'react-router-dom';

export default function Category(){
    const { category } = useParams();
    console.log("I AM CAT", category)
    return(
        <section className="bg-[#171717] h-screen p-4">
            <div className="text-white"> I AM CATEGORY </div>
        </section>
    )
}