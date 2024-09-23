import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import List from "./list";

function convertDate(date) {
    var day = date.getDate();
    day = day < 10 ? "0" + day : day;
    var month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var year = date.getFullYear();
    return day + "." + month + "." + year;
}

function ItemsLigi({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((element, index) => (
                    <List
                        key={index}
                        img={element.homeTeam.crest}
                        name={element.homeTeam.shortName}
                        block={
                            <div className="flex-1 flex-center" >
                                <div className="element-location flex-1 mm1">
                                    <div className="fight flex-1">
                                        <div className="command flex-1 leftCommand">
                                        <p>{element.awayTeam.name}</p>
                                            <img src={element.awayTeam.crest} alt="" />

                                        </div>
                                        
                                        <div className="itog flex-1">
                                            <p>{element.score.fullTime.away + element.score.halfTime.away}</p>
                                            :
                                            <p>{element.score.fullTime.home + element.score.halfTime.home}</p>
                                        </div>
                                        <div className="command flex-1  rightCommand">
                                            <img src={element.homeTeam.crest} alt="" />
                                            <p>{element.homeTeam.name}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="date">{convertDate(new Date(element.utcDate))}</div>
                            </div>
                        }
                        id={element.id}
                    />
                ))}
        </>
    );
}
export default function Pagination({
    itemsPerPage,
    items,
    mass,
}) {
    useEffect(() => {}, [items])
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
     
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(
        items.length / itemsPerPage
    );

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ItemsLigi currentItems={currentItems} />

            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>

    );
}