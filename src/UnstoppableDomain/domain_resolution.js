import axios from 'axios'
import {Resolution}  from '@unstoppabledomains/resolution';
const resolution = new Resolution();

//To get the records attached to a domain, you must send a GET request to the domains endpoint 
//and provide the domain name parameter in your request. The endpoint will return all configured
//resolution records and domain metadata in a single response.

// Resolve a Crypto Address From a Domain using the library
export async function domainResolutionWithLibrary(){
  // resolution
  // .addr('gloryagat.nft', 'ETH')
  // .then((receiverETHAddress) => {
  //   // receiverETHAddress consists receiver ethereum address
  //   // use this address as recipient of the payment
  //   console.log(receiverETHAddress)
  // })
  // .catch(console.error);

  try{
    const response =  await resolution.addr('gloryagat.nft', 'ETH')
    console.log(response)
  }catch(err){
    console.log(err)
  }
}

export async function resolveDomainUsingAPI(domain){
  const url = 'https://unstoppabledomains.g.alchemy.com/domains/'
  const response =  await  axios.get(`${url}${domain}`, {
    headers: {
      Authorization: "Bearer m3aWDA1Tkmnz4lbSiVv4Kit9NCcBGvPf"
    }
  })
  console.log(response.data.meta.domain)
  localStorage.setItem("domain_name", response.data.meta.domain )
  localStorage.setItem("domain_address", response.data.meta.owner)
  return response
}


