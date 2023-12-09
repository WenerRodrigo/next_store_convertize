import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

// descont_percentage
// : 
// -80
// get_absolute_url
// : 
// "/bolinha-colorida/p"
// get_seals
// : 
// null
// id
// : 
// "420"
// image
// : 
// "shop/products/images/211/small/bolinha-colorida_100.jpg"
// name
// : 
// "Bolinha Colorida"
// sale_price
// : 
// 1
// unit_price
// : 
// 4.9

const manequim = require('../../assets/manequim.avif');

interface IProduct {
    id: number;
    name: string;
    image: string;
    sale_price: number;
    unit_price: number;
    descont_percentage: number;
    get_absolute_url: string;
}


export const Products = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchApi = async () => {
        setIsLoading(true);
        api.get('/keyword').then(response => {
            const data = response.data.results;
            console.log('resultado...', data);
            setData(data)
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchApi();
    }, [])

    if (isLoading) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <h1>Mais comprados do mês</h1>

            <div>
                {data?.map((item ) => {
                    return (
                        <div key={item.id}>
                            <img src={manequim}  width={100}/>
                            {/* <p>{item.name}</p> */}
                            <p>{item.sale_price}</p>
                            <p>{item.unit_price}</p>
                            <p>{item.descont_percentage}</p>
                            {/* <p>{item.get_absolute_url}</p> */}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}