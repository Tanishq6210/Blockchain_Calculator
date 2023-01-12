let contractAddress = "0x2984Cbc6C63B2DF7C8E6190966C93E4225A086B8";
let abi = [
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_num1",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_num2",
          "type": "int256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "op",
          "type": "string"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

//   const accounts = await ethereum.request({
//     method: 'eth_requestAccounts',
//   });
const web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(abi, contractAddress)

function onSet() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    contract.methods.set(num1, num2)
    .send({
        from: "0x4A138A23Da130753F65749cE0dF75DD717b25179",
    })
    .then((result) => {
        console.log(result);
    });

    console.log("Number's Saved!")
}

function onAdd() {
    console.log("Adding...");
    contract.methods.get("+").call()
    .then((result) => {
        document.getElementById("output").innerHTML = result;
        console.log(result);
    });
}

function onSub() {
    console.log("Subtracting...");
    contract.methods.get("-").call()
    .then((result) => {
        document.getElementById("output").innerHTML = result;
        console.log(result);
    });
}

function onMul() {
    console.log("Multiplying...");
    contract.methods.get("*").call()
    .then((result) => {
        document.getElementById("output").innerHTML = result;
        console.log(result);
    });
}

function onDiv() {
    console.log("Dividing...");
    contract.methods.get("/").call()
    .then((result) => {
        document.getElementById("output").innerHTML = result;
        console.log(result);
    });
}