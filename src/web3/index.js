/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import Web3 from 'web3';
import { network } from '../config';

export const web3 = new Web3(window.ethereum ? ethereum : network);
