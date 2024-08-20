// SPDX-License-Identifier: MIT
/*
  ____  _   _ _     _     ___ _____ ____  
 | __ )| | | | |   | |   |_ _| ____/ ___| 
 |  _ \| | | | |   | |    | ||  _| \___ \ 
 | |_) | |_| | |___| |___ | || |___ ___) |
 |____/ \___/|_____|_____|___|_____|____/ 
                                          
          By Devko.dev#7286
*/

// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)

pragma solidity ^0.8.20;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _contextSuffixLength() internal view virtual returns (uint256) {
        return 0;
    }
}

// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)

pragma solidity ^0.8.20;


/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * The initial owner is set to the address provided by the deployer. This can
 * later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    /**
     * @dev The caller account is not authorized to perform an operation.
     */
    error OwnableUnauthorizedAccount(address account);

    /**
     * @dev The owner is not a valid owner account. (eg. `address(0)`)
     */
    error OwnableInvalidOwner(address owner);

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */
    constructor(address initialOwner) {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert OwnableUnauthorizedAccount(_msgSender());
        }
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

pragma solidity ^0.8.19;

interface IBullies {
    function transferToStakingContract(address _from, uint256 _tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function balanceOf(address owner) external view returns (uint256 balance);
}

interface IBones {
    function founderMint(uint256 quantity) external;
    function airdrop(uint256[] memory amounts, address[] memory receivers) external;
    function transferOwnership(address newOwner) external;
}

contract Bullies_Staking is Ownable {
    IBullies public bulliesContract = IBullies(0x59DaA5CeC375ad3248bfD8C7552E3E8b72fD69EB);
    IBones public bonesContract = IBones(0xa7c192364D44Eb664161A997822a7243112b47C0);
    
    struct token {
        uint256 stakeDate;
        uint256 lastClaim;
        address stakerAddress;
        uint256 tierId;
    }
    mapping(uint256 => token) public stakedTokens;
    mapping(uint256 => uint256) public tierRate;
    mapping(uint256 => uint256) public tierDuration;
    address private adminAddress;

    constructor(address initialOwner) Ownable(initialOwner) {
        adminAddress = msg.sender;
        tierRate[2] = 0.00004629629 ether;
        tierRate[3] = 0.00009259259 ether;

        tierDuration[2] = 90 days;
        tierDuration[3] = 365 days;
    }

    modifier ownerOrAdminOnly() {
        require((msg.sender == adminAddress) || (msg.sender == owner()), "NOT_AUTHORIZED");
        _;
    }

    modifier notContract() {
        require(((!_isContract(msg.sender)) && (msg.sender == tx.origin)), "CONTRACTS_NOT_ALLOWED");
        _;
    }

    function _isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(addr)
        }
        return size > 0;
    }

    function mintBonesTo(uint256 amount, address receiver) internal {
        uint256[] memory amounts = new uint256[](1);
        address[] memory receivers = new address[](1);
        amounts[0] = amount;
        receivers[0] = receiver;
        bonesContract.airdrop(amounts, receivers);
    }

    function claimBones(uint256[] memory tokenIds) external notContract {
        uint256 claimableAmount = 0;
        for (uint256 index = 0; index < tokenIds.length; index++) {
            if (stakedTokens[tokenIds[index]].stakerAddress == msg.sender) {
                if (block.timestamp > (stakedTokens[tokenIds[index]].stakeDate + tierDuration[stakedTokens[tokenIds[index]].tierId])) {
                    claimableAmount += ((stakedTokens[tokenIds[index]].stakeDate + tierDuration[stakedTokens[tokenIds[index]].tierId]) - stakedTokens[tokenIds[index]].lastClaim) * tierRate[stakedTokens[tokenIds[index]].tierId];
                    bulliesContract.transferFrom(address(this), msg.sender, tokenIds[index]);
                    stakedTokens[tokenIds[index]].stakeDate = 0;
                    stakedTokens[tokenIds[index]].lastClaim = 0;
                    stakedTokens[tokenIds[index]].tierId = 0;
                    stakedTokens[tokenIds[index]].stakerAddress = address(0);
                } else {
                    claimableAmount += (block.timestamp - stakedTokens[tokenIds[index]].lastClaim) * tierRate[stakedTokens[tokenIds[index]].tierId];
                    stakedTokens[tokenIds[index]].lastClaim = block.timestamp;
                }
            }
        }
        if(claimableAmount > 0){
            mintBonesTo(claimableAmount, msg.sender);
        }

    }

    function claimableBonesFor(uint256 tokenId) external view returns (uint256) {
        uint256 claimableAmount = 0;
        if (block.timestamp > (stakedTokens[tokenId].stakeDate + tierDuration[stakedTokens[tokenId].tierId])) {
            claimableAmount = ((stakedTokens[tokenId].stakeDate + tierDuration[stakedTokens[tokenId].tierId]) - stakedTokens[tokenId].lastClaim) * tierRate[stakedTokens[tokenId].tierId];
        } else {
            claimableAmount = (block.timestamp - stakedTokens[tokenId].lastClaim) * tierRate[stakedTokens[tokenId].tierId];
        }
        return claimableAmount;
    }

    function stake(uint256[] calldata tokenIds, uint256 tierId) external notContract {
        require(tierRate[tierId] > 0, "TIER_NOT_VALID");

        for (uint256 index = 0; index < tokenIds.length; index++) {
            if (bulliesContract.ownerOf(tokenIds[index]) == msg.sender) {
                bulliesContract.transferToStakingContract(msg.sender, tokenIds[index]);
                stakedTokens[tokenIds[index]].stakeDate = block.timestamp;
                stakedTokens[tokenIds[index]].lastClaim = block.timestamp;
                stakedTokens[tokenIds[index]].tierId = tierId;
                stakedTokens[tokenIds[index]].stakerAddress = msg.sender;
            }
        }
    }

    function balanceOf(address owner) external view returns (uint256) {
        return bulliesContract.balanceOf(owner) + totalStakedBy(owner);
    }

    function tokensDetails(uint256[] memory tokens) external view returns (token[] memory) {
        token[] memory tokensList = new token[](tokens.length);
        for (uint256 index = 0; index < tokens.length; index++) {
            tokensList[index] = stakedTokens[tokens[index]];
        }
        return tokensList;
    }

    function totalStakedBy(address owner) internal view returns (uint256) {
        uint256 total = 0;
        for (uint256 tokenId = 1; tokenId < 8889; tokenId++) {
            if (stakedTokens[tokenId].stakerAddress == owner) {
                total++;
            }
        }
        return total;
    }

    function tokensOwnedBy(address owner) external view returns (uint256[] memory) {
        uint256[] memory tokensList = new uint256[](bulliesContract.balanceOf(owner));
        uint256 currentIndex;
        for (uint256 index = 1; index < 8889; index++) {
            try bulliesContract.ownerOf(index) {
                if (bulliesContract.ownerOf(index) == owner) {
                    tokensList[currentIndex] = uint256(index);
                    currentIndex++;
                }
            } catch {}
        }
        return tokensList;
    }

    function tokensStakedBy(address owner) external view returns (uint256[] memory) {
        uint256[] memory tokensList = new uint256[](totalStakedBy(owner));
        uint256 currentIndex = 0;
        for (uint256 tokenId = 1; tokenId < 8889; tokenId++) {
            if (stakedTokens[tokenId].stakerAddress == owner) {
                tokensList[currentIndex] = uint256(tokenId);
                currentIndex++;
            }
        }
        return tokensList;
    }

    // control functions
    function editStakingData(uint256[] memory tokenIds, token[] memory newData) external ownerOrAdminOnly {
        for (uint256 index = 0; index < tokenIds.length; index++) {
            stakedTokens[tokenIds[index]].stakeDate = newData[index].stakeDate;
            stakedTokens[tokenIds[index]].lastClaim = newData[index].lastClaim;
            stakedTokens[tokenIds[index]].stakerAddress = newData[index].stakerAddress;
            stakedTokens[tokenIds[index]].tierId = newData[index].tierId;
        }
    }
    
    function changeAdminAddress(address newAdminAddress) external ownerOrAdminOnly {
        adminAddress = newAdminAddress;
    }

    function changeStakersAddresses(uint256[] memory tokenIds, address[] memory newStakers) external ownerOrAdminOnly {
        for (uint256 index = 0; index < tokenIds.length; index++) {
            stakedTokens[tokenIds[index]].stakerAddress = newStakers[index];
        }
    }

    function changeLastClaim(uint256 tokenId, uint256 lastClaim) external ownerOrAdminOnly {
        stakedTokens[tokenId].lastClaim = lastClaim;
    }

    function changeTierId(uint256 tokenId, uint256 tierId) external ownerOrAdminOnly {
        stakedTokens[tokenId].tierId = tierId;
    }

    function forceUnstake(uint256[] memory tokenIds) external ownerOrAdminOnly {
        for (uint256 index = 0; index < tokenIds.length; index++) {
            bulliesContract.transferFrom(address(this), stakedTokens[tokenIds[index]].stakerAddress, tokenIds[index]);
            stakedTokens[tokenIds[index]].stakerAddress = address(0);
            stakedTokens[tokenIds[index]].tierId = 0;
            stakedTokens[tokenIds[index]].lastClaim = 0;
            stakedTokens[tokenIds[index]].stakeDate = 0;
        }
    }

    function changeMainContract(address newContract) external ownerOrAdminOnly {
        bulliesContract = IBullies(newContract);
    }

    function changeBonesContract(address newContract) external ownerOrAdminOnly {
        bonesContract = IBones(newContract);
    }

    function changeTierRate(uint256 tierId, uint256 newHoursCount) external ownerOrAdminOnly {
        tierRate[tierId] = newHoursCount;
    }

    function changeTierDuration(uint256 tierId, uint256 newDuration) external ownerOrAdminOnly {
        tierDuration[tierId] = newDuration;
    }

    // Manage Bones contract
    function bonesFounderMint(uint256 quantity) external ownerOrAdminOnly {
        bonesContract.founderMint(quantity);
    }

    function bonesAirdrop(uint256[] memory amounts, address[] memory receivers) external ownerOrAdminOnly {
        bonesContract.airdrop(amounts, receivers);
    }

    function bonesTransferOwnership(address newOwner) external ownerOrAdminOnly {
        bonesContract.transferOwnership(newOwner);
    }
}