import React, { useEffect, useState } from 'react';
import { useSubspace } from '@embarklabs/subspace-react';
import DashBoardCard from '../DashBoardCard';
import { infractionFactoryAbi, infractionFactoryAddress } from '../../web3/infractionFactory';

function TotalReportedInfractions() {
  const subspace = useSubspace();
  const [infractionFactory, setInfractionFactory] = useState(null);
  const [totalInfractionsObservable, setTotalInfractionsObservable] = useState(null);

  useEffect(() => {
    if (infractionFactory) return;
    setInfractionFactory(subspace.contract(
      { abi: infractionFactoryAbi, address: infractionFactoryAddress },
    ));
  }, [subspace, infractionFactory]);

  useEffect(() => {
    if (!infractionFactory) return;

    subspace.web3.eth.getAccounts()
      .then(([account]) => {
        const observable = infractionFactory.methods.getAmountOfInfractionByUser(account).track();
        setTotalInfractionsObservable(observable);
      });
  }, [subspace, infractionFactory]);


  return (
    <DashBoardCard
      mainText="Infracciones reportadas"
      secondaryText={totalInfractionsObservable}
    />
  );
}

export default TotalReportedInfractions;
