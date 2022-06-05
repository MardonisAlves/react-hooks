import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { posts } from '../../api/requestApi'
import { getposts } from '../../api/requestApi'


const UseEffect2 = (props) => {
    const [data, setData] = useState([])
    const [postsaray, setPosts]= useState([])
    console.log(postsaray)
    const setResponseData = (d) => {
        setData([d])
    }
    const setPostsarray = (p) => {
        setPosts(p)
    }
    const createpost = () => {
        const data = posts().then(response => {
        setResponseData(response.data)
        }).catch(error => {
        console.log(error)
        });
        return data;

    }

     useEffect(() => {
        setPostsarray([])
       const postsaray =  getposts()
        .then(res => { 
            setPostsarray(res.data)
        }).catch(error => {
       console.log(error)
        })
       
     },[data])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    {postsaray.length > 0 ?
                    
                    postsaray.map(item => {
                        return <p key={item.id}>{item.title}</p>   
                        }) : 'Não tem itens'
                    }
                </div>
                <button onClick={createpost}>POST</button>
            </div>

        </div>
    )
}

export default UseEffect2
