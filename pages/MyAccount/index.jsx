import Layout from '../../components/Layout'

function MyAccount() {

  return (
    <>
      <Layout>
        <h1 className='font-medium text-xl mt-5'>My Account</h1>
        <form className='mb-4' action="index.html" method="post"/>
        <div className='flex flex-col justify-start'>
        <label for="name" className='font-normal mt-6'>Name</label>
          <p className='font-light'>Ginette Carrizo</p>

          <label for="email" className='font-normal mt-6'>Email</label>
          <p className='font-light'>ginettecarrizo@gmail.com</p>

          <label for="password" className='font-normal mt-6'>Password</label>
          <p className='font-light'>*********</p>
        </div>
          
          <button type="button" name="Edit my account" className='bg-white text-black w-80 rounded-lg m-0 mt-4 py-3 border border-black'>Edit my account</button>
      </Layout>  
    </>
  )
}

export default MyAccount;