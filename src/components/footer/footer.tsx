import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gravitasLogo from '@/Assets/gravitasLogo.svg';
import isaLogo from '@/Assets/ISALogo.png';

export default function Footer() {
    return (
        <div className="w-full rounded-3xl bg-black">
            <br></br>
            <br></br>
            <div className='flex flex-wrap justify-evenly' >
                <div>
                    <Link href="https://linktr.ee/ISA_VIT" className="flex mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={isaLogo} className="w-32 h-22" alt="ISA Logo" />
                    </Link>
                </div>
                <div>
                    <Link href="https://gravitas.vit.ac.in/" className="flex mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={gravitasLogo} className="w-96 h-24" alt="GraVITas Logo"/>
                    </Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="items-center">
                <ul className="flex flex-wrap justify-evenly mb-6 text-base font-medium text-white sm:mb-0">
                    <li>
                        <Link href="https://www.linkedin.com/company/international-society-of-automation-isa-vit/" className="tracking-[1.0em] hover:text-violet-400 me-4 md:me-6">LINKEDIN</Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/isa_vit_/?hl=en" className="tracking-[1.0em] hover:text-violet-400 me-4 md:me-6">INSTAGRAM</Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/isavitchapter" className="tracking-[1.0em] hover:text-violet-400">FACEBOOK</Link>
                    </li>
                </ul>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}
