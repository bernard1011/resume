import { ArrowRight } from 'lucide-react';

const ProjBtn = () => {
    return (<>
            <button className='flex bg-indigo-900 px-3 py-2 text-gray-50 rounded-xl'>
                <span>View Project</span> <ArrowRight className='w-5'/>
            </button>
    </>)
}

export default ProjBtn;
