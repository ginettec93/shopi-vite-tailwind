import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

function EmailSent () {
    return (
      <Layout>       
        <h1 className='font-medium text-xl mt-5'>Email has been sent!</h1>
        <p className='font-light mt-4'>Please check your inbox for instructions on how to reset the password</p>
        <EnvelopeIcon className='w-20 h-15 text-black' />
        <NavLink to='/sign-in'>
          <button className=' bg-black text-white w-80 rounded-lg mt-4 py-3' type="submit" name="Sign in">Sign in</button>
        </NavLink>
      <p className='mt-4'>
      <span className='font-light'>Didn't receive the email?</span> <a className='font-medium' href="/">Resend</a>
      </p>     
      </Layout>      
    )
}
export default EmailSent 