import React from 'react';

export default function Footer() {
    return (
        <div className="w-full rounded-3xl bg-black">
            <br></br>
            <div className='flex justify-evenly' >
                <div>
                    <a href="https://linktr.ee/ISA_VIT" className="flex mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="GenHack Logo" />
                        <span className="s text-2xl font-semibold whitespace-nowrap dark:text-white">ISA-VIT</span>
                    </a>
                </div>
                <div>
                    <a href="https://gravitas.vit.ac.in/" className="flex mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src='https://flowbite.com/docs/images/logo.svg' className="h-8" alt="GraVITas Logo"/>
                        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">GraVITas</span>
                    </a>
                </div>
            </div>
            <br></br>
            <div className="items-center">
                <ul className="flex flex-wrap justify-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://www.linkedin.com/company/international-society-of-automation-isa-vit/" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/isa_vit_/?hl=en" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/isavitchapter" className="hover:underline">Facebook</a>
                    </li>
                </ul>
            </div>
            <br></br>
        </div>
    );
}
