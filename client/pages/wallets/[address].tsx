import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';

const walletItem: FC = () => {
  const { address } = useRouter().query;

  console.log(address);

  return (
    <div>
      <h2>
        {address}
      </h2>
    </div>
  )
}

export default walletItem;
