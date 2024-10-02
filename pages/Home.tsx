import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
    return (
        <div className='relative h-full w-full'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/40'></div>
            <div className='relative z-50 w-full md:w-3/5 text-textClr h-full mx-auto text-center space-y-6 flex flex-col justify-center items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-8xl font-bold'>Secure Vote</h1>
                <p className='text-3xl'>
                    A voting system is a method used to collect and count votes in elections or decision-making processes. It involves voter registration, ballot design, casting votes, and counting the votes to determine the outcome.
                </p>
                <Button className='text-2xl text-black' variant='outline' size='lg'>Register</Button>
                <p className='text-3xl text-stone-300'>Note: Registration will closed after 11 PM</p>
            </div>
        </div>
    )
}

export default Home