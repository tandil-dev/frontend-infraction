import React, { useEffect, useState } from 'react';
import { useSubspace } from '@embarklabs/subspace-react';
import DashBoardCard from '../DashBoardCard';
import { rewardsAbi, rewardsAddress } from '../../web3/rewards';

function Rewards({ mocked }) {
  const subspace = useSubspace();
  const [rewardsContract, setRewardsContract] = useState(null);
  const [rewardsObservable, setRewardsObservable] = useState(null);

  useEffect(() => {
    if (rewardsContract) return;
    setRewardsContract(subspace.contract(
      { abi: rewardsAbi, address: rewardsAddress },
    ));
  }, [subspace, rewardsContract]);

  useEffect(() => {
    if (!rewardsContract) return;

    subspace.web3.eth.getAccounts()
      .then(([account]) => {
        const observable = rewardsContract.methods.balanceOf(account).track();
        setRewardsObservable(observable);
      });
  }, [subspace, rewardsContract]);

  return (
    <DashBoardCard
      mainText="Rewards Tandil"
      secondaryText={mocked ? (Math.floor(Math.random() * 20) * 10) : rewardsObservable}
      isReward
    />
  );
}

export default Rewards;
