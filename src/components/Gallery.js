import React, { useState,useEffect} from 'react';

import './Gallery.css'


function Gallery() {
const [images, setImages] = useState([])

useEffect(() => {

const fetchImages=()=>{
    const data = [
        {
            id:1,
            url: 'https://picsum.photos/id/1/300/200',
            title:'Image 1'
        },
        {
            id:2,
            url: 'https://picsum.photos/id/2/300/200',
            title:'Image 2'
        },
        {
            id:3,
            url: 'https://picsum.photos/id/3/300/200',
            title:'Image 3'
        },
        {
            id:4,
            url: 'https://picsum.photos/id/4/300/200',
            title:'Image 4'
        },
        {
            id:5,
            url: 'https://picsum.photos/id/5/300/200',
            title:'Image 5'
        }






    ]
    setImages(data)

}

 fetchImages()  

}, [])

const handleDeleteTmage=(id)=>{
    setImages(images.filter((image)=>image.id !== id))

}



  return (
    <div>
        <h1 className='title'>Image Gallery App</h1>
        {
            images.length >0?
            (
                <div className='image-grid'>


            {
                images.map((image)=>(
                    <div className='img-card' key={image.id}>
                     <img src={image.url} />

              

                    <div className='img-details'>
                        <h3>{image.title}</h3>
                        <button onClick={()=>handleDeleteTmage(image.id)}>delete</button>
    
                    </div>
    
                </div>
 


                ))
                
            }



         





        </div>




            ):
            <p className='no-img'>no images</p>
        }
        
        
    </div>
  )
}

export default Gallery