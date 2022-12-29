import React, { useState, useEffect } from "react";
import SecondaryButton from "../../../common/crunches/secondaryButton/secondaryButton.js";
import PrimaryButton from "../../../common/crunches/primaryButton/primaryButton.js";
import PrimaryCountButton from "../../../common/crunches/primaryCountButton/primaryCountButton.js";
import Container from "react-bootstrap/Container";
import ProductTable from "../components/productTable/ui/productTable.js";
// import Card from "../../components/cards/defaultCard";
// import "./style.css";
// import SearchIcon from "remixicon-react/SearchLineIcon";
// import BuildingLineIcon from "remixicon-react/Building3LineIcon";
// import MoreIcon from "remixicon-react/More2LineIcon";
// import CustomButton from "../../components/button";
import ServerLineIcon from "remixicon-react/ServerLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
// import AddNewModal from "../../components/modals/AddNewModal";
// import SearchInput from "../../components/inputs/searchInput";
// import { getAssetDetails, getAssets } from "./api";
export default function Products({ type }) {
  return (
    <Container fluid={true} style={{ padding: "40px" }}>
      <SecondaryButton
        value={{
          child: (
            <>
              <ServerLineIcon
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  color: "#7D7676",
                }}
              />
              Assets
            </>
          ),
          onClick: () => {},
        }}
      />
      <div
        style={{
          marginTop: "30px",
          marginBottom: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PrimaryCountButton
          value={{
            child: <>Total Products</>,
            count: "01",
          }}
        />
        <PrimaryButton
          value={{
            child: (
              <>
                <AddLineIcon
                  style={{
                    marginRight: "10px",
                    marginBottom: "3px",
                  }}
                />
                New Product
              </>
            ),
            onClick: () => {},
          }}
        />
      </div>
      <ProductTable />
    </Container>
  );
}
