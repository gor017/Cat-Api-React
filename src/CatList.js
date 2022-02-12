import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryList, setCatImgArr, setTempId} from './Redux/Slice.js'


function CatList () {

    const catImgArr = useSelector((state) => state.cat.catImgArr)
    const categoryList = useSelector((state) => state.cat.categoryList)
    const tempId = useSelector((state) => state.cat.tempId)

    const dispatch = useDispatch()

    const getCategories = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/categories`)
        const data = await response.json()
        dispatch(setCategoryList(data))        
      }
    useEffect(()=>{
    getCategories()
    }, [])

    const getCatImg = async () => {
        const newArr = []
        dispatch(setCatImgArr([]))
        for (let i = 0; i < 10; i++) {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${tempId}`)
            const data = await response.json()
            const catImg = data[0].url
            newArr.push(catImg)
        }
        dispatch(setCatImgArr(newArr))
      }
    return(
        <div style={{display: "flex"}}>
            <div>
                <button style={{cursor: "pointer", width: "300px", height: "50px"}} onClick={() => getCatImg()}>Get Images</button>
                <ul>
                {categoryList.map((category) => {
                    return(
                    <ul style={{cursor: "pointer"}} onClick={() => dispatch(setTempId(category.id))}>
                        {category.name}
                    </ul>
                )
                    })}
                </ul>
            </div>
            <div>
                {catImgArr.map((imgUrl) => {
                    return(<img alt='' style={{width: "200px", height: "200px", padding: "10px"}} src={imgUrl}>
                    </img>)
                })}
            </div>            
        </div>
    )
}

export default CatList