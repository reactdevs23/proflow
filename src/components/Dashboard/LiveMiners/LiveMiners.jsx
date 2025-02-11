import { useState, useMemo } from "react";
import clsx from "clsx";
import classes from "./LiveMiners.module.css";

import SingleRow from "./SingleRow";

import { mint1, mint2 } from "images";
import Pagination from "components/common/Pagination/Pagination";
import Dropdown from "components/common/Dropdown/Dropdown";
const allTypes = ["All", "Local", "Cloud"];
const allStatus = ["All", "Active", "Completed"];
const LiveMiners = () => {
  const data = useMemo(
    () => [
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
      {
        img: mint1,
        type: "Local",
        coinsPerMin: "200",
        status: "active",
        createdOn: "11/12/2023",
      },
      {
        img: mint2,
        type: "Cloud",
        coinsPerMin: "240",
        status: "completed",
        createdOn: "11/12/2023",
      },
    ],
    []
  );

  // const filter dropdown
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [currentType, setCureentType] = useState("All");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("All");

  const [showCratedOnDropdown, setShowCreatedOnDropdown] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, itemsPerPage]);

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={clsx(classes.tableContainer)}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>
                <Dropdown
                  label="Miner Type"
                  className={classes.filterDropdown}
                  items={allTypes}
                  isActive={showTypeDropdown}
                  setIsActive={setShowTypeDropdown}
                  selectedValue={currentType}
                  onSelect={(val) => setCureentType(val)}
                />
              </th>
              <th>Coins per min.</th>
              <th>
                <Dropdown
                  label="Status"
                  className={classes.filterDropdown}
                  items={allStatus}
                  isActive={showStatusDropdown}
                  setIsActive={setShowStatusDropdown}
                  selectedValue={currentStatus}
                  onSelect={(val) => setCurrentStatus(val)}
                />
              </th>
              <th>Created on</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((student) => (
              <SingleRow key={student.id} {...student} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={classes.pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </section>
  );
};

export default LiveMiners;
