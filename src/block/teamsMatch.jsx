import { useParams } from "react-router-dom";
import useApi from "../api/"
import Pagination from "../element/pagination";
import { useEffect, useState } from "react";
export default function TeamsMatches(params) {
    const id = useParams().id;
    const [loaded, error, items, ajax] = useApi({ url: `teams/${id}/matches` });
    const [_, __, its] = useApi({ url: `teams/${id}` });

    const [to, setto] = useState("");
    const [from, setfrom] = useState("");

    function filterDate({ to, from }) {
        if (to && from) {
            ajax({ url: `teams/${id}/matches?dateFrom=${to}&dateTo=${from}` })
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
                        <h1><span>"{its.name}"</span></h1>
                    </div>
                    <div className="ligi_date flex-1">
                        <div className="flex-1">
                            <input className="data-form" type="date" onChange={(event) => setto(event.target.value)} />
                        </div>
                        <div className="flex-1">
                            <h4>--</h4>{" "}
                            <input className="data-form" type="date" onChange={(event) => setfrom(event.target.value)} />
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




