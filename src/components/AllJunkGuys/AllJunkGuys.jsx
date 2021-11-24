import React, { useState, useEffect } from "react";
import JunkGuyNFTImage from "../JunkGuyNFTImage/JunkGuyNFTImage";
import JunkGuyNFTDetails from "../JunkGuyNFTDetails/JunkGuyNFTDetails";
import Loading from "../Loading/Loading";

const AllJunkGuys = ({
  junkGuys,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyJunkGuy,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (junkGuys.length !== 0) {
      if (junkGuys[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [junkGuys]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of JunkGuy's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {junkGuys.map((junkguy) => {
          return (
            <div
              key={junkguy.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <JunkGuyNFTImage
                  colors={
                    junkguy.metaData !== undefined
                      ? junkguy.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <JunkGuyNFTDetails
                junkguy={junkguy}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyJunkGuy={buyJunkGuy}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllJunkGuys;
