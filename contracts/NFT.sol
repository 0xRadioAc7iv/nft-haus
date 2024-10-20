// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    string private baseURI;
    string private description;

    constructor(address initialOwner, string memory tokenName, string memory tokenTicker, string memory _nftBaseURI, string memory _description)
        ERC721(tokenName, tokenTicker)
        Ownable(initialOwner)
    {
        baseURI = _nftBaseURI;
        description = _description;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function getDescription() public view returns (string memory) {
        return description;
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}
