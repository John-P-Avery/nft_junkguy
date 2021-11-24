import React, { useState, useEffect } from "react";
import JunkGuyNFTImage from "../JunkGuyNFTImage/JunkGuyNFTImage";
import MyJunkGuyNFTDetails from "../MyJunkGuyNFTDetails/MyJunkGuyNFTDetails";
import Loading from "../Loading/Loading";

const MyJunkGuys = ({
  accountAddress,
  junkGuys,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myJunkGuys, setMyJunkGuys] = useState([]);

  useEffect(() => {
    if (junkGuys.length !== 0) {
      if (junkGuys[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_boys = junkGuys.filter(
      (junkguy) => junkguy.currentOwner === accountAddress
    );
    setMyJunkGuys(my_crypto_boys);
  }, [junkGuys]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of JunkGuy's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myJunkGuys.map((junkguy) => {
          return (
            <div
              key={junkguy.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6 text-center">
                  <MyJunkGuyNFTDetails
                    junkguy={junkguy}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyJunkGuys;
