// app/register/[role]/page.jsx
import { SignupForm } from '../_components/signup-form';

const RegisterPage = async ({ params }) => {
    // Wrap params in a Promise.resolve to satisfy Next.js
    const { role } = await Promise.resolve(params);

    return (
        <div className='w-full flex-col h-screen flex items-center justify-center'>
            <div className='container'>
                <SignupForm role={role} />
            </div>
        </div>
    );
};

export default RegisterPage;