
const  getGifs =async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=12&api_key=fj8I403ZG7bUWeI72Kd9fgRvsYls7Pmb`;
    const resul = await fetch(url);
    const {data} = await resul.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}

export default getGifs;