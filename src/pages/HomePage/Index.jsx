import Container from '@/components/container'
import { Separator } from '@/components/ui/separator'

import FormApi from './components/FormApi'

import './styles.css'

// dynamic import scene
import React, { Suspense } from 'react'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  // console.log(useLocation())
  const location = useLocation();
  const params = new URLSearchParams(location?.search)?.get('url') || 'https://dogapi.dog/api/v2/breeds';
  console.log(params)

  return (
    <Container className='flex-col mt-16'>

      <div className='w-full flex flex-col justify-start align-middle mb-8'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>zkLinker</h2>
          <p className='text-muted-foreground'>ZKLinker is a lightweight tool that seamlessly connects API data to blockchain networks using zero-knowledge proofs. It ensures secure and private data transfer, allowing developers to fetch, verify, and store API responses on-chain with minimal setup.</p>
        </div>
      </div>


      <div className='rounded-[0.5rem] border bg-background shadow  w-full h-auto'>
        <div className='space-y-6 p-10 pb-16'>
          <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
            <FormApi defaultUrl={params}/>
          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default HomePage
