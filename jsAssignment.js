const nftcollec = [];

function mintNFT(_name, _age, _height, _hobby) {
    const nft = {
        "name": _name,
        "age": _age,
        "height": _height,
        "hobby": _hobby
    };
    
    nftcollec.push(nft);
    console.log("Minted:" + _name)
}

function listNFTs() {
    for(i=0; i<nftcollec.length; i++) {
        console.log("\n\nID:" + (i+1));
        console.log("Name:" + nftcollec[i].name);
        console.log("Age:" + nftcollec[i].age);
        console.log("Height:" + nftcollec[i].height);
        console.log("Attributes:" + nftcollec[i].hobby);
        console.log('------------------------');
    };
}

function getTotalSupply() {
    return nftcollec.length;
}


mintNFT("Sangam", 20,  "Average height", "video games" );
mintNFT("Nandan", 22,  "tall height", "Diary writing" );
mintNFT("Bob", 21,  "Average height", "Cricket" );

listNFTs();

console.log("Total Supply: " + getTotalSupply());
