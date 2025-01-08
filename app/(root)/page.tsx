import Image from "next/image";
import SearchForm from "../../components/SearchForm";



export default async function Home({searchParams}:{
  SearchParams: Promise<{query?:string}>
}) {

  const query = (await searchParams).query;
  return (
    <>


    <section className="pink_container">
    <h1 className="heading">Pitch Your Startup, <br />
    Connect with Entreprenuers</h1>
    <p className="sub-heading !max-w-3xl">
      Submit ideas, Vote on Pitches, and Get Noticed in 
      Virtual Competitions.

    </p>
    <SearchForm query={query}/>

    </section>
    
    
    </>
  );
}
