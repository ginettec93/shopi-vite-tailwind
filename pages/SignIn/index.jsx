import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'

function SignIn() {

  return (
    <>
      <Layout>
        <h1 className='font-medium text-xl mt-4 mb-4'>Sign In with your Email</h1>
        <form className='flex flex-col' action="index.html" method="post"/>
          <label for="email" ></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="text" id="email" placeholder="Email" />

          <label for="password" ></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="password" id="password" placeholder="Password" />
          <NavLink to='/'>
          <button type="button" name="Sign In" className='bg-black text-white w-80 rounded-lg m-0 mt-4 py-3 border border-black'>Sign in</button>
          </NavLink>         
          <NavLink to='/password-recovery'>
          <h2 className='font-medium mt-3'><a href="/">Forgot my password</a></h2>
          </NavLink>
          <h2 className='mt-12'>Don't you have an account yet?</h2>
          <NavLink to='/sign-up'>
          <button type="button" name="Sign In" className='bg-white text-black w-80 rounded-lg m-0 mt-4 py-3 border border-black'>Sign up</button>
          </NavLink>       
      </Layout>
    </>
  )
}

export default SignIn;