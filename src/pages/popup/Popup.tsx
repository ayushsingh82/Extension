import React, { useState } from 'react';
import logo from '@assets/img/logo.svg';
import Wallet from './Wallet';

const formatWalletAddress = (address:String) => {
  if (address.length <= 8) return address; // If address is 8 characters or less, return it as is
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

export default function Popup(): JSX.Element {
  const [creatorName, setCreatorName] = useState('Ayush');
  const [walletAddress, setWalletAddress] = useState('0xc38fcC4d9C20a85391c39DDA1093EbB315191496');
  const [videoLink, setVideoLink] = useState('https://youtube.com');

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-white">
      <h1 className='text-blue-500 font-bold'>Users onboarding </h1>
      <Wallet/>
      <div className='flex flex-col mt-[10px]'>
        <input type="text" placeholder="Creator name" value={creatorName} 
        className="border rounded-xl border-blue-500 px-[10px] flex justify-center text-semibold" onChange={(e) => setCreatorName(e.target.value)} />
        <br/>
        <input type="text" placeholder="Creator's wallet address" value={formatWalletAddress(walletAddress)}
                className="border rounded-xl border-blue-500 px-[10px] flex justify-center text-semibold" onChange={(e) => setWalletAddress(e.target.value)} />
        <br/>
        <input type="text" placeholder="Creator's video link" value={videoLink} 
                className="border rounded-xl border-blue-500 px-[10px] flex justify-center text-semibold" onChange={(e) => setVideoLink(e.target.value)} />
      </div>
    </div>
  );
}
