
// Initializing the Contract.
Property
Output
msg.sender is made as creatorAdmin
msg.sender is made as superAdmin
msg.sender is made as verified user

// Create a new Property.
CreateProperty- property Id, propoerty value, property owner address
msg.sender should be admin
property owner should be verified user
Output – mark property Id, Satus as Pending, propoerty value, property owner address

// Approve the new Property.
approveProperty- property Id
msg.sender should be superadmin
current owner should not be msg.sender
Output – mark property Satus as Approved

// Reject the new Property.
rejectProperty- property Id
msg.sender should be superadmin
current owner should not be msg.sender
Output – mark property Satus as Rejected

// Request Change of Ownership.
changeOwnership- property Id, new owner address
msg.sender should be the current owner
new owner should be verified user
current owner is not the new owner
No pending ownership change request should exist.
Output – mark property Ownership change request

// Approve change in Onwership.
ApproveChangeOwnership- property Id
msg.sender should be superadmin
ownership change request must exist
Output – mark new owner address as current owner

// Change the price of the property.
changeValue- propoerty Id, new property value
msg.sender should be the current owner
No pending ownership change request should exist.
Output – change property value

// Get the property details.
GetPropertyDetails- propoerty Id
Returns- property Status, propoerty value, propoerty owner address
Output – Satus, propoerty value, property owner address


// Add new user.
addNewUser- address
msg.sender should be admin
No pending request for the address should exist.(user or admin or superadmin)
address should not be a verified user.(user or admin or superadmin)
Output – mark address as user

// Add new admin.
AddNewAdmin- address
msg.sender should be superadmin
No pending request for the address should exist.(user or admin or superadmin)
ddress should not be a verified user.(user or admin or superadmin)
Output – mark address as Admin

// Add new SuperAdmin
addNewSuperAdmin- address
msg.sender should be superadmin
No pending request for the address should exist.(user or admin or superadmin)
address should not be a verified user.(user or admin or superadmin)
Output – mark address as SuperAdmin


// Approve Pending User.
approveUsers- address
msg.sender should be superadmin
Pending request should exist for address
Output – mark address as Verified user


