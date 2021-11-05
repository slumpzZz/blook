const name = (prompt(`What do you want the blook name to be?`))
const url = (prompt(`What do you want your blook to look like(URL only)`))
const quantity = (prompt(`What quanity(number) of the blook do you want?`));
const sellprice = (prompt(`What Number do you want the sell price to be?`));
const rarity = (prompt(`What Rarity do you want the blook to be?`));
const color = (prompt(`What color do you want the rarity to be(Dont include the hashtag)`));

var blookFunction = () => {

    
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = url;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = `Sell Price: ${sellprice}`;
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = `Quantity: ${quantity}`;
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = rarity;
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = `color:` + `#${color}`;
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = name;
    document.getElementsByClassName('styles__blookContainer___GKC0D-camelCase')[0].src = url;
    
}


    blookFunction();
