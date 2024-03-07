// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Strings.sol";

contract FakeProductIdentificationSystem{
    mapping(string => Product) public Productlist;
    struct Product{
        string producthash;
        string brand;
        uint  productid;
        string dom;
        uint price;
        string producttype;
    }
    function addproduct(string memory _producthash, string memory _brand, uint _productid, string memory _dom, uint _price, string memory _producttype) public{
        Productlist[_producthash] = Product({
            producthash : _producthash,
            brand : _brand,
            productid : _productid,
            dom: _dom,
            price: _price,
            producttype : _producttype
        });
    }
    
    function getproduct(string memory producthash) public view returns(string memory){
     if (bytes(Productlist[producthash].producthash).length != 0){
        return "Valid Product";        
     }   
     else{
        return "Fake Product";
     }
    }
}
