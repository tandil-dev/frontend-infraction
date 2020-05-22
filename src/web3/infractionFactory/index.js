/* eslint-disable import/prefer-default-export */

export const infractionFactorydeployBlock = process.env.REACT_APP_INFRACTION_FACTORY_BLOCK;
export const infractionFactoryAddress = process.env.REACT_APP_INFRACTION_FACTORY_ADDRESS;
export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rewardsContract',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'infractionAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'createdBy',
        type: 'address',
      },
    ],
    name: 'infractionCreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'infractionData',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'infractionVideoUrl',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'infractionDomainUrl',
        type: 'string',
      },
    ],
    name: 'createInfraction',
    outputs: [
      {
        internalType: 'address',
        name: 'newInfractionAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddress',
        type: 'address',
      },
    ],
    name: 'getAmountOfInfractionByUser',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getAddressByUserAndIndex',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rewardsContract',
        type: 'address',
      },
    ],
    name: 'setRewardsTokenContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
