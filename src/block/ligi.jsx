import { useState } from "react";
import useApi from "../api/"
import List from "../element/list";
import { filterInfo } from "../element/filter";
export default function Lagues(params) {
    const [loaded, error, items] = useApi({ url: 'competitions/' });
    const [find, setFind] = useState("")
    return (
        <div className="container">
            <div className="ligi-list">
                <h1>Лиги</h1>
                <input type="text" onChange={(e) => setFind(e.target.value)} className="search" placeholder="Начните вводить для поиска..." />
            </div>
            <div className="spisok_elementov">
                {error ? (
                    <p>{String(error)}</p>
                ) : !loaded ? (
                    <p>Загрузка</p>
                ) : (

                    filterInfo({ mass: items.competitions, value: find }).map((element, index) => (
                        <List
                            key={index}
                            img={element.emblem}
                            name={element.name}
                            block={<div className="element-location flex-end">
                                <div className="flex-1">
                                    <p>{element.area.name}</p>
                                    <img className="region" src={element.area.flag} alt="" />
                                </div>
                            </div>}
                            link={"/ligi/" + element.id}
                        />
                    ))

                )}

            </div>
        </div>
    )
}


