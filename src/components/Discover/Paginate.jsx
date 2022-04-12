import ReactPaginate from "react-paginate";
const Paginate = ({ setCurrentPage, pages }) => {
  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel={". . ."}
      pageCount={pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"paginate-list"}
      previousClassName={"edge-left"}
      nextClassName={"edge-right"}
      activeClassName={"active"}
      activeLinkClassName={"active"}
    />
  );
};
export default Paginate;
