import {
  ethers,
} from 'hardhat';
import '@nomiclabs/hardhat-ethers';

async function main() {
  const Foo = await ethers.getContractFactory('Foo');
  const foo = await Foo.deploy(42);
  await foo.deployed();
  console.log('Foo deployed to:', foo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
