import React from 'react'
import FormField from '@/components/FormField';
import Button from '@/components/Button';

const page = () => {
  return (
    <div className='min-h-screen gradient-bg-hero'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Contact Us</h2>
            <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>Got a technical issue? Want to send feedback about our feature Need details about our Business plan? Let us know.</p>
            <form action="" className='space-y-4'>
                <FormField
                    labelName='Email'
                    placeholder='name@gmail.com'
                    inputType='text'
                />

                <FormField
                    labelName='Subject'
                    placeholder='Let us know how we can help you'
                    inputType='text'
                />

                <FormField
                    labelName='Your message'
                    placeholder='Leave a comment...'
                    isTextArea
                />
                <Button
                   btnType='button'
                   title='send message'
                   handleClick='/'
                />
            </form>
        </div>
    </div>
  )
}

export default page