import Container from '@/components/container'
const AboutPage = () => {
  return (
    <Container className='flex-col mt-16'>
      <div className='w-full flex flex-col justify-start align-middle mb-8'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>zkLinker</h2>
          <p className='text-muted-foreground'>
            is a lightweight tool that seamlessly connects API data to blockchain networks using{' '}
            <a href='https://www.reclaimprotocol.org/' target='_blank'>
              <img className='inline-block h-6 mb-1' src='/assets/reclaim.png' />
            </a>{' '}
            as zero-knowledge proofs. It ensures secure and private data transfer, allowing developers to fetch, verify, and store API
            responses on-chain with minimal setup.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
