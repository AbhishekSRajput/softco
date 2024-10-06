import Login from '@/features/auth/LoginForm'

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/public/mainBackground.svg')]">
        <div className='px-2'>
          <Login/>
        </div>
    </div>
  )
}

export default LoginPage