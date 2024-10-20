// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {NFT} from "./NFT.sol";

contract NFTFactory {
    event NFTCreated(
        address indexed nftAddress,
        address indexed owner,
        string tokenName
    );

    function createNewNFT(
        string memory tokenName,
        string memory tokenTicker,
        string memory _nftBaseURI,
        string memory _description
    ) public {
        NFT newNFT = new NFT(
            msg.sender,
            tokenName,
            tokenTicker,
            _nftBaseURI,
            _description
        );

        emit NFTCreated(address(newNFT), msg.sender, tokenName);
    }
}
