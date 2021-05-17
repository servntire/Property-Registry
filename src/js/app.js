App = {
  web3Provider: null,
  contracts: {},





  init: function() {
  if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
  } else {
    // If no injected web3 instance is detected, fall back to Ganache
    // App.web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/yGEHQFbey55ozzDha3hf');
  //  Web3j web3 = Web3j.build(new HttpService("https://rinkeby.infura.io/<your-token>"));

  }
  web3 = new Web3(App.web3Provider);


    return App.initContract();
  },





  initContract: function() {

    var abi = [
		{
		  "inputs": [],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		},
		{
		  "inputs": [],
		  "name": "creatorAdmin",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "propOwnerChange",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "properties",
		  "outputs": [
			{
			  "internalType": "enum Asset.Status",
			  "name": "status",
			  "type": "uint8"
			},
			{
			  "internalType": "uint256",
			  "name": "value",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "currOwner",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "userRoles",
		  "outputs": [
			{
			  "internalType": "enum Asset.Role",
			  "name": "",
			  "type": "uint8"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "verifiedUsers",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_value",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "_owner",
			  "type": "address"
			}
		  ],
		  "name": "createProperty",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			}
		  ],
		  "name": "approveProperty",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			}
		  ],
		  "name": "rejectProperty",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "_newOwner",
			  "type": "address"
			}
		  ],
		  "name": "changeOwnership",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			}
		  ],
		  "name": "approveChangeOwnership",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_newValue",
			  "type": "uint256"
			}
		  ],
		  "name": "changeValue",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_propId",
			  "type": "uint256"
			}
		  ],
		  "name": "getPropertyDetails",
		  "outputs": [
			{
			  "internalType": "enum Asset.Status",
			  "name": "",
			  "type": "uint8"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_newUser",
			  "type": "address"
			}
		  ],
		  "name": "addNewUser",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_newAdmin",
			  "type": "address"
			}
		  ],
		  "name": "addNewAdmin",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_newSuperAdmin",
			  "type": "address"
			}
		  ],
		  "name": "addNewSuperAdmin",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_newUser",
			  "type": "address"
			}
		  ],
		  "name": "approveUsers",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		}
	  ];

App.contracts.asset =  web3.eth.contract(abi).at('0x39c2439cf483D5bbbE9aBDfb3E12ac9666281f8b');

    return App.bindEvents();

  },




bindEvents: function() {
    $(document).on('click', '#btn-PropAdd', App.createProperty);
    $(document).on('click', '#btn-PropApprove', App.approveProperty);
    $(document).on('click', '#btn-PropReject', App.rejectProperty);
    $(document).on('click', '#btn-PropReqChange', App.reqchangeOwnership);
    $(document).on('click', '#btn-PropAcptChange', App.approveChangeOwnership);
    $(document).on('click', '#btn-PropValChange', App.changeValue);
    $(document).on('click', '#btn-PropSearch', App.getPropertyDetails);
    $(document).on('click', '#btn-PropAddUser', App.adduser);
    $(document).on('click', '#btn-PropApproveUser', App.approveUsers);
    },






  createProperty: function(event) {
    event.preventDefault();


    var PropId = $('#PropAdd #PropId').val();
    var PropVal = $('#PropAdd #PropVal').val();
    var PropOwner = $('#PropAdd #PropOwner').val();


    web3.eth.getAccounts(function(error, accounts) {
									      if (error) {
										console.log(error);
									      }

      App.contracts.asset.createProperty(PropId, PropVal, PropOwner, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
      });



    });

  },



  approveProperty: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveProperty(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  },
  rejectProperty: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.rejectProperty(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  },
  reqchangeOwnership: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    var NewOwner = $('#PropReqChangeform #PropReqChange').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.changeOwnership(PropId, NewOwner, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  },
  approveChangeOwnership: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveChangeOwnership(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  },
  changeValue: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    var NewVal = $('#PropValChangeform #PropValChange').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.changeValue(PropId, NewVal, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  },
  getPropertyDetails: function() {
  //  event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }


                                            App.contracts.asset.getPropertyDetails(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                                              if(!error)
                                          {        console.log(JSON.stringify(result));

                                                  var state = result[0];

                                          $('#resultPropID').text(PropId);


                                          if(state == 0)
                                          {$('#resultPropStatus').text('NotExist');
                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}
                                          else if (state == 1)
                                          {
                                          $('#resultPropStatus').text('Pending');
                                          $('#resultPropFunc1').html('<a href="#" id="btn-PropApprove" class="btn btn-primary">Approve</a>');
                                          $('#resultPropFunc2').html('<a href="#" id="btn-PropReject" class="btn btn-primary">Reject</a>');
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}
                                          else if(state == 2)
                                          {$('#resultPropStatus').text('Approved');

                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');

                                          App.contracts.asset.propOwnerChange(PropId, function(error, result){
                                            if(!error)
                                            {
                                                if(result == "0x0000000000000000000000000000000000000000")
                                                {
                                                  $('.sec1').html('<form action="#" id ="PropReqChangeform"><div class="form-group"><label>Request Change of Ownership</label><input type="text" class="form-control" id="PropReqChange" name="PropReqChange" placeholder="Enter New Owner Address"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropReqChange"  form="form1" value="Submit">Request</button>');
                                                  $('.sec3').html('<form action="#" id="PropValChangeform"><div class="form-group"><label>Change Property Value/Price</label><input type="text" class="form-control" id="PropValChange" name="PropValChange" placeholder="Enter New Value/Price"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropValChange"  form="form1" value="Submit">Change</button>');

                                                }
                                                else
                                                {
                                                  $('.sec2').html('<label>Accept Change of Ownership</label><button type="submit"  class="btn btn-primary" id="btn-PropAcptChange" value="Submit">Accept</button>');
                                                }
                                            }
                                            else
                                                console.error(error);
                                          });



                                        }
                                          else if(state == 3)
                                          {$('#resultPropStatus').text('Rejected');
                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}


                                          $('#resultPropValue').text(result[1]);
                                          $('#resultPropOwner').text(result[2]);

                                        }
                                              else
                                                  console.error(error);
                                            });  });
  },
  adduser: function(event) {
    event.preventDefault();
    var useraddress = $('#adduser #PropAddUser').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        if($('#adduser #PropAddUserrole').val() == "User")
                        {App.contracts.asset.addNewUser(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(result);
                          else
                              console.error(error);
                        });
                        }
                        else if ($('#adduser #PropAddUserrole').val() == "Admin")
                        {App.contracts.asset.addNewAdmin(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });
                        }
                        else if ($('#adduser #PropAddUserrole').val() == "SuperAdmin")
                        {App.contracts.asset.addNewSuperAdmin(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });
                        }


                      });

  },
  approveUsers: function(event) {
    event.preventDefault();
    var useraddress = $('#adduser #PropAddUser').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveUsers(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                          if(!error)
                              console.log(JSON.stringify(result));
                          else
                              console.error(error);
                        });});

  }





};







$(function() {
  $(window).load(function() {

    App.init();
  });
});
