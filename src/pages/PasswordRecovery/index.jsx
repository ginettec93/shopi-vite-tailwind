import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'

function PasswordRecovery () {
    return (
        <Layout>
				<h1 className='font-medium text-xl text-center mt-5'>Password recovery</h1>
				<p className='font-light mt-4'>Inform the email address used to create your account</p>
				<form className='flex flex-col' action="/">
					<label htmlFor="email"></label>
					<input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3'type="text" id="email" placeholder="Email"/>
					<NavLink to='/email-sent'>
					<button className='bg-black text-white w-80 rounded-lg m-0 mt-4 py-3 border border-black' type="submit" value="Submit">Send</button>
					</NavLink>
					
				</form>
        </Layout>
    )
}

export default PasswordRecovery 