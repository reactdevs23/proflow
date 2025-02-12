import { useState, useMemo } from "react";
import clsx from "clsx";
import classes from "./OrdersTable.module.css";
import { isAfter, isEqual, parse } from "date-fns";
import SingleRow from "./SingleRow";
import { mint1, mint2 } from "images";
import { Dropdown, DatePicker, Pagination, Text } from "components/common";
import { TbCaretUpDownFilled } from "react-icons/tb";

const allTypes = ["All", "Local", "Cloud"];
const allStatus = ["All", "Completed"];

const OrdersTable = ({ searchValue, setSearchValue }) => {
  const originalData = useMemo(
    () => [
      {
        minersId: "#1234567815",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567814",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567813",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567812",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567811",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567810",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567899",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567898",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567897",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567896",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567895",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567894",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567893",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
      {
        minersId: "#1234567892",
        price: "20 USD",
        status: "Pending",
        createdOn: "11/12/2023",
      },
      {
        minersId: "#1234567891",
        price: "10 USD",
        status: "Paused",
        createdOn: "10/12/2024",
      },
    ],
    []
  );

  // Dropdown States

  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("All");

  const [createdOn, setCreatedOn] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Inside your filteredData useMemo
  const filteredData = useMemo(() => {
    return originalData.filter((miner) => {
      const minerDate = parse(miner.createdOn, "MM/dd/yyyy", new Date());

      const filterDate = createdOn ? new Date(createdOn) : null;

      return (
        (currentStatus === "All" ||
          miner.status.toLowerCase() === currentStatus.toLowerCase()) &&
        (!filterDate ||
          isAfter(minerDate, filterDate) ||
          isEqual(minerDate, filterDate)) && // Show dates on or after the selected day
        (!searchValue ||
          miner.minersId.toLowerCase().includes(searchValue.toLowerCase()))
      );
    });
  }, [originalData, currentStatus, createdOn, searchValue]);

  // ✅ **Apply Pagination After Filtering**
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <section className={clsx(classes.wrapper, "container overflow")}>
      <div className={clsx(classes.tableContainer)}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>
                <div className={classes.heading}>
                  Miner ID <TbCaretUpDownFilled />
                </div>
              </th>
              <th>
                <div className={classes.heading}>
                  Price <TbCaretUpDownFilled />
                </div>
              </th>
              <th>
                <Dropdown
                  label="Status"
                  className={classes.filterDropdown}
                  items={allStatus}
                  isActive={showStatusDropdown}
                  setIsActive={setShowStatusDropdown} // ✅ Controls visibility
                  selectedValue={currentStatus}
                  onSelect={(val) => {
                    setCurrentStatus(val);
                    setShowStatusDropdown(false); // Close after selection
                  }}
                />
              </th>
              <th>
                <DatePicker
                  label="Created On"
                  value={createdOn}
                  setValue={setCreatedOn}
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.length > 0 ? (
              currentTableData.map((miner, id) => (
                <SingleRow key={id} {...miner} />
              ))
            ) : (
              <tr className={classes.noItemContainer}>
                <td colSpan="5">
                  <Text primitive0 textCenter className={classes.noItem}>
                    {" "}
                    No Orders found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={classes.pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={filteredData.length}
          pageSize={itemsPerPage}
          currentItemsCount={currentTableData}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default OrdersTable;
