
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Asset
 * @dev Store & retrieve value of a property
 */

contract Asset {

    address public creatorAdmin;
	enum Status { NotExist, Pending, Approved, Rejected }
    enum Role {Visitor, User, Admin, SuperAdmin}

    // Struct to store all property related details
	struct PropertyDetail {
		Status status;
		uint value;
		address currOwner;
	}


    
	mapping(uint => PropertyDetail) public properties; // Stores all properties propId -> property Detail
	mapping(uint => address) public propOwnerChange; // Keeps track of property owner propId -> Owner Address
    mapping(address => int) public userRoles; // Keeps track of user roles
    mapping(address => bool) public verifiedUsers;// Keeps track of verified user, userId -> verified (true / false)


    // Modifier to ensure only the property owner access
    // a specific property
	modifier onlyOwner(uint _propId) {
		require(properties[_propId].currOwner == msg.sender);
		_;
	}

    // Modifier to ensure only the verified user access
    // a specific property
	modifier verifiedUser(address _user) {
	    require(verifiedUsers[_user]);
	    _;
	}

    // Modifier to ensure only the verified admin access a function
	modifier verifiedAdmin() {
		require(userRoles[msg.sender] >= Role.Admin && verifiedUsers[msg.sender]);
		_;
	}

     // Modifier to ensure only the verified super admin admin access a function
	modifier verifiedSuperAdmin() {
	    require(userRoles[msg.sender] == Role.SuperAdmin && verifiedUsers[msg.sender]);
	    _;
	}

	// Initializing the Contract.
	constructor asset() public {
		creatorAdmin = msg.sender;
		userRoles[creatorAdmin] = Role.SuperAdmin;
		verifiedUsers[creatorAdmin] = true;
	}

	// Create a new Property.
	function createProperty(uint _propId, uint _value, address _owner) verifiedAdmin verifiedUser(_owner) returns (bool) {
		properties[_propId] = PropertyDetail(Status.Pending, _value, _owner);
		return true;
	}

	// Approve the new Property.
	function approveProperty(uint _propId) verifiedSuperAdmin returns (bool){
		require(properties[_propId].currOwner != msg.sender);
		properties[_propId].status = Status.Approved;
		return true;
	}

	// Reject the new Property.
	function rejectProperty(uint _propId) verifiedSuperAdmin returns (bool){
		require(properties[_propId].currOwner != msg.sender);
		properties[_propId].status = Status.Rejected;
		return true;
	}

	// Request Change of Ownership.
	function changeOwnership(uint _propId, address _newOwner) onlyOwner(_propId) verifiedUser(_newOwner) returns (bool) {
		require(properties[_propId].currOwner != _newOwner);
		require(propOwnerChange[_propId] == address(0));
		propOwnerChange[_propId] = _newOwner;
		return true;
	}

	// Approve chage in Onwership.
	function approveChangeOwnership(uint _propId) verifiedSuperAdmin returns (bool) {
	    require(propOwnerChange[_propId] != address(0));
	    properties[_propId].currOwner = propOwnerChange[_propId];
	    propOwnerChange[_propId] = address(0);
	    return true;
	}

	// Change the price of the property.
    function changeValue(uint _propId, uint _newValue) onlyOwner(_propId) returns (bool) {
        require(propOwnerChange[_propId] == address(0));
        properties[_propId].value = _newValue;
        return true;
    }

	// Get the property details.
	function getPropertyDetails(uint _propId) constant returns (Status, uint, address) {
		return (properties[_propId].status, properties[_propId].value, properties[_propId].currOwner);
	}

	// Add new user.
	function addNewUser(address _newUser) verifiedAdmin returns (bool) {
	    require(userRoles[_newUser] == Role.Visitor);
	    require(verifiedUsers[_newUser] == false);
	    userRoles[_newUser] = Role.User;
	    return true;
	}

	// Add new Admin.
	function addNewAdmin(address _newAdmin) verifiedSuperAdmin returns (bool) {
	    require(userRoles[_newAdmin] == Role.Visitor);
	    require(verifiedUsers[_newAdmin] == false);
	    userRoles[_newAdmin] = Role.Admin;
	    return true;
	}

	// Add new SuperAdmin.
	function addNewSuperAdmin(address _newSuperAdmin) verifiedSuperAdmin returns (bool) {
	    require(userRoles[_newSuperAdmin] == Role.Visitor);
	    require(verifiedUsers[_newSuperAdmin] == false);
	    userRoles[_newSuperAdmin] = Role.SuperAdmin;
	    return true;
	}

	// Approve User.
	function approveUsers(address _newUser) verifiedSuperAdmin returns (bool) {
	    require(userRoles[_newUser] != Role.Visitor);
	    verifiedUsers[_newUser] = true;
	    return true;
	}
}
