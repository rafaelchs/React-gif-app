import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExperApp = ()=>{ 

    const [categories,setCategories] =  useState(['Shaman King']);

    //const handleAdd = () =>{
        
      //  setCategories([...categories,'Naruto']);
    //}*/

    return(
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category=>(
                        <GifGrid key={category} 
                        category={category} />
                    ))
                }
            </ol>


           
        </>
    )


}

export default GifExperApp;