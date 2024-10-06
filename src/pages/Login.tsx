import Login from '@/features/auth/Login'

const LoginPage = () => {
  return (
    <div className="bg-red-500 h-screen w-screen flex justify-center items-center bg-[url('/public/mainBackground.svg')]">
        <div className='py-2 px-11'>
          <Login/>
        </div>
    </div>
  )
}

export default LoginPage