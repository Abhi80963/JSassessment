const NFTS=[];

function mintNFT(_id,_name,_age,_eye_color){
    const NFT={
        idno:_id,
        name:_name,
        age:_age,
        eyeColor:_eye_color
    }
    NFTS.push(NFT);
}

function listNFTs(){
    for(let i=0; i<NFTS.length; i++){
        console.log("Id. no:"+NFTS[i].idno);
        console.log("Name:"+NFTS[i].name);
        console.log("Age:"+NFTS[i].age);
        console.log("Eye color:"+NFTS[i].eyeColor);
        console.log("\n");
    }
}

function getTotalSupply(){
    console.log("The total no. of NFTs:"+NFTS.length);
}

mintNFT(101,"Abhi",21,"black");
mintNFT(102,"Shivam",20,"blue");
mintNFT(103,"Rahul",18,"brown");

listNFTs();
getTotalSupply();
