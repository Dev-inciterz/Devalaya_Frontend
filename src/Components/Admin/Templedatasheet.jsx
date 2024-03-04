import React, { useEffect, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import "./Templedatasheet.css";
import { Link } from "react-router-dom";

const Templedatasheet = () => {
  const [temples, setTemples] = useState([]);

  const handleDeletetemple = async (id) => {
    console.log("qwertyuiopoiuytrew", id);
  };

  const TempleColumns = [
    {
      accessorKey: "_id", //access nested data with dot notation
      header: "ID",
      size: 150,
    },

    {
      accessorKey: "name",
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "pictures", // give a unique key for the first custom column
      header: "Images",
      size: 50,
      Cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/${row.original.pictures[0]}`}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
    },
    {
      accessorKey: "category.name",
      header: "Category",
      size: 150,
    },
    {
      accessorKey: "city.title", //normal accessorKey
      header: "City",
      size: 200,
    },
  ];

  const actionColumn = [
    {
      accessorKey: "action",
      header: "Action",
      width: 200,
      Cell: ({ row }) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin-portfolio/${row.original._id}`}
              style={{ textDecoration: "none" }}
              state={row.original}
            >
              <div className="viewButton">View</div>
            </Link>

            <Link
              to={`/admin-portfolio/edit/${row.original._id}`}
              style={{ textDecoration: "none" }}
              state={row.original}
            >
              <div className="editButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDeletetemple(row.original._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const table = useMaterialReactTable({
    columns: TempleColumns.concat(actionColumn),
    data: temples,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: false,
    muiTableContainerProps: { sx: { maxHeight: "80vh" } },
  });

  const fetchAllTemples = async () => {
    const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/getall`;
    const response = await axios.get(webURL);
    setTemples(response.data.result);
  };

  useEffect(() => {
    fetchAllTemples();
  }, []);

  console.log("dfghjkl", temples);

  return (
    <div className="temple_datatable">
      {temples.length && <MaterialReactTable table={table} />}
    </div>
  );
};

export default Templedatasheet;
