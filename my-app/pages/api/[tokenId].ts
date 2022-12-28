// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'blugin' })
// }

export default function handler(req : any , res : any) {
  const tokenId = req.query.tokenId;

  // res.status(200).json({
  //   tokenId: tokenId,
  // });

  const name = `crypto Dev #${tokenId}`;
  const description = "CryptoDevs is an NFT Collection for Web3 Developers";
  const image = `https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/
  ${Number(tokenId) - 1}.svg`;

  return res.json({
    name: name,
    description: description,
    image: image,
  });
}