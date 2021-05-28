/* eslint-env node, mocha */
/* eslint-disable camelcase */

import hre from 'hardhat';
import '@nomiclabs/hardhat-ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

import {
  Foo,
  Foo__factory,
} from '../typechain';

import expect from './expect';

describe('Foo', () => {
  let deployer: SignerWithAddress;
  let foo: Foo;

  beforeEach(async () => {
    const accounts = await hre.ethers.getSigners();
    [deployer] = accounts;

    foo = await new Foo__factory(deployer).deploy(42);
  });

  it('checks something', async () => {
    expect(
      await foo.bar(),
    ).to.equal(42);
  });

  it('checks another thing', async () => {
    await foo.setBar(1337);

    expect(
      await foo.bar(),
    ).to.equal(1337);
  });
});
