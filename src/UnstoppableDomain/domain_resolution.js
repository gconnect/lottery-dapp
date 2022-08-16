import axios from 'axios'
import {Resolution}  from '@unstoppabledomains/resolution';
const resolution = new Resolution();

//To get the records attached to a domain, you must send a GET request to the domains endpoint 
//and provide the domain name parameter in your request. The endpoint will return all configured
//resolution records and domain metadata in a single response.

// Resolve a Crypto Address From a Domain using the library
export async function domainResolutionWithLibrary(){
  try{
    const response =  await resolution.addr('gloryagat.nft', 'ETH')
    console.log(response)
  }catch(err){
    console.log(err)
  }
}

export async function resolveDomainUsingAPI(domain){
  const url = 'https://unstoppabledomains.g.alchemy.com/domains/'
  try{
    const response =  await  axios.get(`${url}${domain}`, {
      headers: {
        Authorization: process.env.REACT_APP_ALCHEMY_API_KEY
      }
    })
    console.log(response.data.meta.domain)
    return response
  }catch(err){
    console.log(err)
  }
}


