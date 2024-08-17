const BASE_URL ="https://api.currencyapi.com/v3/latest?apikey=cur_live_OHXecqPJdhHjb7f45Kj2375zMLZtEmd3j5xgJ31i";


const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let select of dropdowns){const BASE_URL = "https://api.currencyapi.com/v3/latest";
    const API_KEY = "cur_live_OHXecqPJdhHjb7f45Kj2375zMLZtEmd3j5xgJ31i";  // Ensure this key is correct

    const dropdowns = document.querySelectorAll(".dropdown select");
    const btn = document.querySelector("form button");
    const fromCurr = document.querySelector(".from select");
    const toCurr = document.querySelector(".to select");
    const msg = document.querySelector(".msg");

    const countryList = {
        AED: "AE",
        AFN: "AF",
        XCD: "AG",
        ALL: "AL",
        AMD: "AM",
        ANG: "AN",
        AOA: "AO",
        AQD: "AQ",
        ARS: "AR",
        AUD: "AU",
        AZN: "AZ",
        BAM: "BA",
        BBD: "BB",
        BDT: "BD",
        XOF: "BE",
        BGN: "BG",
        BHD: "BH",
        BIF: "BI",
        BMD: "BM",
        BND: "BN",
        BOB: "BO",
        BRL: "BR",
        BSD: "BS",
        NOK: "BV",
        BWP: "BW",
        BYR: "BY",
        BZD: "BZ",
        CAD: "CA",
        CDF: "CD",
        XAF: "CF",
        CHF: "CH",
        CLP: "CL",
        CNY: "CN",
        COP: "CO",
        CRC: "CR",
        CUP: "CU",
        CVE: "CV",
        CYP: "CY",
        CZK: "CZ",
        DJF: "DJ",
        DKK: "DK",
        DOP: "DO",
        DZD: "DZ",
        ECS: "EC",
        EEK: "EE",
        EGP: "EG",
        ETB: "ET",
        EUR: "FR",
        FJD: "FJ",
        FKP: "FK",
        GBP: "GB",
        GEL: "GE",
        GGP: "GG",
        GHS: "GH",
        GIP: "GI",
        GMD: "GM",
        GNF: "GN",
        GTQ: "GT",
        GYD: "GY",
        HKD: "HK",
        HNL: "HN",
        HRK: "HR",
        HTG: "HT",
        HUF: "HU",
        IDR: "ID",
        ILS: "IL",
        INR: "IN",
        IQD: "IQ",
        IRR: "IR",
        ISK: "IS",
        JMD: "JM",
        JOD: "JO",
        JPY: "JP",
        KES: "KE",
        KGS: "KG",
        KHR: "KH",
        KMF: "KM",
        KPW: "KP",
        KRW: "KR",
        KWD: "KW",
        KYD: "KY",
        KZT: "KZ",
        LAK: "LA",
        LBP: "LB",
        LKR: "LK",
        LRD: "LR",
        LSL: "LS",
        LTL: "LT",
        LVL: "LV",
        LYD: "LY",
        MAD: "MA",
        MDL: "MD",
        MGA: "MG",
        MKD: "MK",
        MMK: "MM",
        MNT: "MN",
        MOP: "MO",
        MRO: "MR",
        MTL: "MT",
        MUR: "MU",
        MVR: "MV",
        MWK: "MW",
        MXN: "MX",
        MYR: "MY",
        MZN: "MZ",
        NAD: "NA",
        XPF: "NC",
        NGN: "NG",
        NIO: "NI",
        NPR: "NP",
        NZD: "NZ",
        OMR: "OM",
        PAB: "PA",
        PEN: "PE",
        PGK: "PG",
        PHP: "PH",
        PKR: "PK",
        PLN: "PL",
        PYG: "PY",
        QAR: "QA",
        RON: "RO",
        RSD: "RS",
        RUB: "RU",
        RWF: "RW",
        SAR: "SA",
        SBD: "SB",
        SCR: "SC",
        SDG: "SD",
        SEK: "SE",
        SGD: "SG",
        SKK: "SK",
        SLL: "SL",
        SOS: "SO",
        SRD: "SR",
        STD: "ST",
        SVC: "SV",
        SYP: "SY",
        SZL: "SZ",
        THB: "TH",
        TJS: "TJ",
        TMT: "TM",
        TND: "TN",
        TOP: "TO",
        TRY: "TR",
        TTD: "TT",
        TWD: "TW",
        TZS: "TZ",
        UAH: "UA",
        UGX: "UG",
        USD: "US",
        UYU: "UY",
        UZS: "UZ",
        VEF: "VE",
        VND: "VN",
        VUV: "VU",
        YER: "YE",
        ZAR: "ZA",
        ZMK: "ZM",
        ZWD: "ZW",
      };

      for (let select of dropdowns) {
        for (let currcode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currcode;
            newOption.value = currcode;
            if (select.name === 'From' && currcode === "USD") {
                newOption.selected = "selected";
            } else if (select.name === 'To' && currcode === "INR") {
                newOption.selected = "selected";
            }
            select.append(newOption);
        }

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }

    const updateFlag = (element) => {
        let currcode = element.value;
        let countrycode = countryList[currcode];
        let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newsrc;
    }
    updateFlag(fromCurr);
    updateFlag(toCurr);

    btn.addEventListener("click", async (evt) => {
        evt.preventDefault();
        let amount = document.querySelector(".amount input");
        let amountval = amount.value;
        if (amountval === "" || amount.val < 1) {
            amountval = 1;
            amount.value = "1";
        }

        let URL = `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurr.value}&currencies=${toCurr.value}`;
        try {
            let response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            let data = await response.json();
            let rate = data.data[toCurr.value].value;

            let finalAmount = amountval * rate;
            msg.innerText = `${amountval} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
        } catch (error) {
            msg.innerText = `Error: ${error.message}`;
        }
    });
    for( currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name==='from' && currcode==="USD"){
            newOption.selected="selected";
        }else if(select.name==='to' && currcode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}


btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  let amount=document.querySelector(".amount input");
  let amountval=amount.value;
  if(amountval===""||amount.val<1){
    amountval=1;
    amount.value="1";
  }


  let URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(URL);
  let data =await response.json();
  let rate=data [toCurr.value.toLowerCase()];
 
  let finalAmount=amountval*rate;
  msg.innerText=`${amountval} ${fromCurr.value}=${finalAmount} ${toCurr.value}`
})
