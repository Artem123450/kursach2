import { useState } from "react";
import useApi from "../api/"
import List from "../element/list";
import { filterInfo } from "../element/filter";
export default function Teams(params) {
    const [loaded, error, items] = useApi({ url: 'teams/' });
    const [find, setFind] = useState("")
    return (
        <div className="container">
            <div className="ligi-list">
                <h1>Команды</h1>
                <input type="text" onChange={(e)=>setFind(e.target.value)} className="search" placeholder="Начните поиск..." />
            </div>
            <div className="spisok_elementov">
                {error ? (
                    <p>{String(error)}</p>
                ) : !loaded ? (
                    <p>Загрузка</p>
                ) : (

                    filterInfo({mass:items.teams, value:find}).map((element, index) => (
                        <List
                            key={index}
                            img={element.crest}
                            name={element.name}
                            block={<div className="element-location">{element.venue}</div>}
                            link={"/teams/" + element.id}
                        />
                    ))

                )}

            </div>
        </div>
    )
}