import { useParams } from "react-router-dom";
import useApi from "../api/"
import Pagination from "../element/pagination";
import { useEffect, useState } from "react";
export default function LaguesMatches(params) {
    const id = useParams().id;
    const [loaded, error, items, ajax] = useApi({ url: `competitions/${id}/matches` });

    const [to, setto] = useState("");
    const [from, setfrom] = useState("");

    function filterDate({ to, from }) {
        if (to && from) {
            ajax({ url: `competitions/${id}/matches?dateFrom=${to}&dateTo=${from}` })
        }
    }

    useEffect(() => {
        filterDate({ to: to, from: from })
    }, [to, from])

    return (
        <div className="container">
            {error ? (
                <p>{String(error)}</p>
            ) : !loaded ? (
                <p>Загрузка</p>
            ) : (

                <>
                    <div className="ligi-list">
                        <h1>Матчи: <span>"{items.competition.name}"</span></h1>
                    <div className="ligi_date flex-1">
                        <div className="flex-1">
                            <input className="data-form" type="date" onChange={(event) => setto(event.target.value)} />
                        </div>
                        <div className="flex-1">
                            <h4>-</h4>{" "}
                            <input className="data-form" type="date" onChange={(event) => setfrom(event.target.value)} />
                        </div>
                    </div>
                    </div>

                    <div className="spisok_elementov">
                        <Pagination
                            items={items.matches}
                            itemsPerPage={24}
                        />

                    </div>
                </>
            )}

        </div>
    )
}


