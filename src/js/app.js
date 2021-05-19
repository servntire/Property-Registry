var web3;
var accounts;
var network;
var accounts;
App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    network = await web3.eth.net.getNetworkType();
    accounts = await web3.eth.getAccounts();
    await window.ethereum.enable();
    return App.initContract();
  },

  initContract: function () {
    var abi = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "creatorAdmin",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "propOwnerChange",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "properties",
        outputs: [
          {
            internalType: "enum Asset.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currOwner",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userRoles",
        outputs: [
          {
            internalType: "enum Asset.Role",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "verifiedUsers",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "createProperty",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
        ],
        name: "approveProperty",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
        ],
        name: "rejectProperty",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_newOwner",
            type: "address",
          },
        ],
        name: "changeOwnership",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
        ],
        name: "approveChangeOwnership",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_newValue",
            type: "uint256",
          },
        ],
        name: "changeValue",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_propId",
            type: "uint256",
          },
        ],
        name: "getPropertyDetails",
        outputs: [
          {
            internalType: "enum Asset.Status",
            name: "",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_newUser",
            type: "address",
          },
        ],
        name: "addNewUser",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_newAdmin",
            type: "address",
          },
        ],
        name: "addNewAdmin",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_newSuperAdmin",
            type: "address",
          },
        ],
        name: "addNewSuperAdmin",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_newUser",
            type: "address",
          },
        ],
        name: "approveUsers",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

    App.contracts.asset = new web3.eth.Contract(
      abi,
      "<paste your deployed contact address here>"
    );

    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on("click", "#btn-PropAdd", App.createProperty);
    $(document).on("click", "#btn-PropApprove", App.approveProperty);
    $(document).on("click", "#btn-PropReject", App.rejectProperty);
    $(document).on("click", "#btn-PropReqChange", App.reqchangeOwnership);
    $(document).on("click", "#btn-PropAcptChange", App.approveChangeOwnership);
    $(document).on("click", "#btn-PropValChange", App.changeValue);
    $(document).on("click", "#btn-PropSearch", App.getPropertyDetails);
    $(document).on("click", "#btn-PropAddUser", App.adduser);
    $(document).on("click", "#btn-PropApproveUser", App.approveUsers);
  },

  createProperty: function (event) {
    event.preventDefault();

    var PropId = $("#PropAdd #PropId").val();
    var PropVal = $("#PropAdd #PropVal").val();
    var PropOwner = $("#PropAdd #PropOwner").val();
    console.log(PropId, PropVal, PropOwner);

    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }

      App.contracts.asset.methods
        .createProperty(PropId, PropVal, PropOwner)
        .send(
          {
            from: accounts[0],
            gas: 1000000,
            gasPrice: web3.utils.toWei("20", "gwei"),
          },
          function (error, result) {
            if (!error) console.log(JSON.stringify(result));
            else {
              alert(error);
              console.error(error);
            }
          }
        );
    });
  },

  approveProperty: function (event) {
    event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.approveProperty(PropId).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
  rejectProperty: function (event) {
    event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.rejectProperty(PropId).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
  reqchangeOwnership: function (event) {
    event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    var NewOwner = $("#PropReqChangeform #PropReqChange").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.changeOwnership(PropId, NewOwner).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
  approveChangeOwnership: function (event) {
    event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.approveChangeOwnership(PropId).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
  changeValue: function (event) {
    event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    var NewVal = $("#PropValChangeform #PropValChange").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.changeValue(PropId, NewVal).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
  getPropertyDetails: function () {
    //  event.preventDefault();
    var PropId = $("#PropSearchform #PropSearch").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }

      App.contracts.asset.methods.getPropertyDetails(PropId).call(
        {
          from: accounts[0],
        },
        function (error, result) {
          if (!error) {
            console.log(JSON.stringify(result));

            var state = result[0];

            $("#resultPropID").text(PropId);

            if (state == 0) {
              $("#resultPropStatus").text("NotExist");
              $("#resultPropFunc1 #btn-PropApprove").attr("disabled", true);
              $("#resultPropFunc2 #btn-PropReject").attr("disabled", true);
              $(".sec1").html("");
              $(".sec2").html("");
              $(".sec3").html("");
            } else if (state == 1) {
              $("#resultPropStatus").text("Pending");
              $("#resultPropFunc1").html(
                '<a href="#" id="btn-PropApprove" class="btn btn-primary">Approve</a>'
              );
              $("#resultPropFunc2").html(
                '<a href="#" id="btn-PropReject" class="btn btn-primary">Reject</a>'
              );
              $(".sec1").html("");
              $(".sec2").html("");
              $(".sec3").html("");
            } else if (state == 2) {
              $("#resultPropStatus").text("Approved");

              $("#resultPropFunc1 #btn-PropApprove").attr("disabled", true);
              $("#resultPropFunc2 #btn-PropReject").attr("disabled", true);
              $(".sec1").html("");
              $(".sec2").html("");
              $(".sec3").html("");

              App.contracts.asset.methods.propOwnerChange(PropId).send(
                {
                  from: accounts[0],
                  gas: 1000000,
                  gasPrice: web3.utils.toWei("20", "gwei"),
                },
                function (error, result) {
                  if (!error) {
                    if (
                      result == "0x0000000000000000000000000000000000000000"
                    ) {
                      $(".sec1").html(
                        '<form action="#" id ="PropReqChangeform"><div class="form-group"><label>Request Change of Ownership</label><input type="text" class="form-control" id="PropReqChange" name="PropReqChange" placeholder="Enter New Owner Address"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropReqChange"  form="form1" value="Submit">Request</button>'
                      );
                      $(".sec3").html(
                        '<form action="#" id="PropValChangeform"><div class="form-group"><label>Change Property Value/Price</label><input type="text" class="form-control" id="PropValChange" name="PropValChange" placeholder="Enter New Value/Price"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropValChange"  form="form1" value="Submit">Change</button>'
                      );
                    } else {
                      $(".sec2").html(
                        '<label>Accept Change of Ownership</label><button type="submit"  class="btn btn-primary" id="btn-PropAcptChange" value="Submit">Accept</button>'
                      );
                    }
                  } else console.error(error);
                }
              );
            } else if (state == 3) {
              $("#resultPropStatus").text("Rejected");
              $("#resultPropFunc1 #btn-PropApprove").attr("disabled", true);
              $("#resultPropFunc2 #btn-PropReject").attr("disabled", true);
              $(".sec1").html("");
              $(".sec2").html("");
              $(".sec3").html("");
            }

            $("#resultPropValue").text(result[1]);
            $("#resultPropOwner").text(result[2]);
          } else console.error(error);
        }
      );
    });
  },
  adduser: function (event) {
    event.preventDefault();
    var useraddress = $("#adduser #PropAddUser").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      if ($("#adduser #PropAddUserrole").val() == "User") {
        App.contracts.asset.methods.addNewUser(useraddress).send(
          {
            from: accounts[0],
            gas: 1000000,
            gasPrice: web3.utils.toWei("20", "gwei"),
          },
          function (error, result) {
            if (!error) console.log(result);
            else console.error(error);
          }
        );
      } else if ($("#adduser #PropAddUserrole").val() == "Admin") {
        App.contracts.asset.methods.addNewAdmin(useraddress).send(
          {
            from: accounts[0],
            gas: 1000000,
            gasPrice: web3.utils.toWei("20", "gwei"),
          },
          function (error, result) {
            if (!error) console.log(JSON.stringify(result));
            else console.error(error);
          }
        );
      } else if ($("#adduser #PropAddUserrole").val() == "SuperAdmin") {
        App.contracts.asset.methods.addNewSuperAdmin(useraddress).send(
          {
            from: accounts[0],
            gas: 1000000,
            gasPrice: web3.utils.toWei("20", "gwei"),
          },
          function (error, result) {
            if (!error) console.log(JSON.stringify(result));
            else console.error(error);
          }
        );
      }
    });
  },
  approveUsers: function (event) {
    event.preventDefault();
    var useraddress = $("#adduser #PropAddUser").val();
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      App.contracts.asset.methods.approveUsers(useraddress).send(
        {
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("20", "gwei"),
        },
        function (error, result) {
          if (!error) console.log(JSON.stringify(result));
          else console.error(error);
        }
      );
    });
  },
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
